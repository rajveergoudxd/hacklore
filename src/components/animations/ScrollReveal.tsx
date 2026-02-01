'use client';

import { useRef, ReactNode } from 'react';
import { motion, useInView, Variants } from 'motion/react';

type AnimationVariant = 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'scale' | 'blur' | 'slideUp' | 'stagger';

interface ScrollRevealProps {
    children: ReactNode;
    variant?: AnimationVariant;
    delay?: number;
    duration?: number;
    className?: string;
    once?: boolean;
    threshold?: number;
}

const animations: Record<AnimationVariant, Variants> = {
    fadeUp: {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 }
    },
    fadeDown: {
        hidden: { opacity: 0, y: -40 },
        visible: { opacity: 1, y: 0 }
    },
    fadeLeft: {
        hidden: { opacity: 0, x: -40 },
        visible: { opacity: 1, x: 0 }
    },
    fadeRight: {
        hidden: { opacity: 0, x: 40 },
        visible: { opacity: 1, x: 0 }
    },
    scale: {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 }
    },
    blur: {
        hidden: { opacity: 0, filter: 'blur(8px)' },
        visible: { opacity: 1, filter: 'blur(0px)' }
    },
    slideUp: {
        hidden: { opacity: 0, y: 60, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1 }
    },
    stagger: {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    }
};

export default function ScrollReveal({
    children,
    variant = 'fadeUp',
    delay = 0,
    duration = 0.7,
    className = '',
    once = true,
    threshold = 0.15
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once, amount: threshold });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={animations[variant]}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.1, 0.25, 1] // Smooth cubic bezier
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Export a stagger container for list animations
export function StaggerReveal({
    children,
    className = '',
    staggerDelay = 0.1
}: {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: 0.1
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function StaggerRevealItem({
    children,
    className = ''
}: {
    children: ReactNode;
    className?: string;
}) {
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1]
            }
        }
    };

    return (
        <motion.div variants={itemVariants} className={className}>
            {children}
        </motion.div>
    );
}
