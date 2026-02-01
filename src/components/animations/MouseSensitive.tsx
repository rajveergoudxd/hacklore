'use client';

import { useEffect, useRef, createContext, useContext, useState, ReactNode } from 'react';

// Create a context to share mouse position across components
interface MouseContextType {
    mousePos: { x: number; y: number };
}

const MouseContext = createContext<MouseContextType>({ mousePos: { x: -1000, y: -1000 } });

export function MouseProvider({ children }: { children: ReactNode }) {
    const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <MouseContext.Provider value={{ mousePos }}>
            {children}
        </MouseContext.Provider>
    );
}

export function useMousePosition() {
    return useContext(MouseContext);
}

// Mouse-sensitive text component
interface MouseSensitiveTextProps {
    children: ReactNode;
    className?: string;
    sensitivity?: number; // How close the mouse needs to be (default 150px)
    maxScale?: number; // Maximum scale factor (default 1.05)
    as?: 'span' | 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'h4';
}

export function MouseSensitiveText({
    children,
    className = '',
    sensitivity = 150,
    maxScale = 1.03,
    as: Component = 'span'
}: MouseSensitiveTextProps) {
    const ref = useRef<HTMLElement>(null);
    const { mousePos } = useMousePosition();
    const [scale, setScale] = useState(1);

    useEffect(() => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distance = Math.sqrt(
            Math.pow(mousePos.x - centerX, 2) +
            Math.pow(mousePos.y - centerY, 2)
        );

        if (distance < sensitivity) {
            const factor = 1 - (distance / sensitivity);
            setScale(1 + factor * (maxScale - 1));
        } else {
            setScale(1);
        }
    }, [mousePos, sensitivity, maxScale]);

    return (
        <Component
            ref={ref as React.RefObject<HTMLSpanElement>}
            className={className}
            style={{
                transform: `scale(${scale})`,
                transition: 'transform 0.15s ease-out',
                display: 'inline-block',
                transformOrigin: 'center'
            }}
        >
            {children}
        </Component>
    );
}
