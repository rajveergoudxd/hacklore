'use client';

import { ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface ParallaxSectionProps {
    children: ReactNode;
    className?: string;
    speed?: number;
    direction?: 'up' | 'down';
}

export default function ParallaxSection({
    children,
    className = '',
    speed = 0.5,
    direction = 'up'
}: ParallaxSectionProps) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start']
    });

    const multiplier = direction === 'up' ? -1 : 1;
    const y = useTransform(scrollYProgress, [0, 1], [100 * speed * multiplier, -100 * speed * multiplier]);

    return (
        <div ref={ref} className={`relative overflow-hidden ${className}`}>
            <motion.div style={{ y }}>
                {children}
            </motion.div>
        </div>
    );
}

export function ParallaxBackground({
    className = '',
    speed = 0.3
}: {
    className?: string;
    speed?: number;
}) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start']
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

    return (
        <motion.div
            ref={ref}
            style={{ y, opacity }}
            className={`absolute inset-0 pointer-events-none ${className}`}
        />
    );
}
