'use client';

import { useState, useRef, ReactNode, MouseEvent } from 'react';
import { motion } from 'motion/react';

interface Tilt3DProps {
    children: ReactNode;
    className?: string;
    maxTilt?: number;
    scale?: number;
    perspective?: number;
}

export default function Tilt3D({
    children,
    className = '',
    maxTilt = 15,
    scale = 1.02,
    perspective = 1000
}: Tilt3DProps) {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        const rotateXValue = (mouseY / (rect.height / 2)) * -maxTilt;
        const rotateYValue = (mouseX / (rect.width / 2)) * maxTilt;

        setRotateX(rotateXValue);
        setRotateY(rotateYValue);
    };

    const handleMouseEnter = () => setIsHovered(true);

    const handleMouseLeave = () => {
        setIsHovered(false);
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            animate={{
                rotateX: isHovered ? rotateX : 0,
                rotateY: isHovered ? rotateY : 0,
                scale: isHovered ? scale : 1
            }}
            transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20
            }}
            style={{
                transformStyle: 'preserve-3d',
                perspective
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
