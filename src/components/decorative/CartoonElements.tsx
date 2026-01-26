'use client';

import { motion } from 'motion/react';

// Cartoon-style floating illustrations
const illustrations = [
    { emoji: '💡', size: 'text-4xl', position: 'top-[15%] left-[5%]', delay: 0, duration: 6 },
    { emoji: '🚀', size: 'text-5xl', position: 'top-[25%] right-[8%]', delay: 1, duration: 5 },
    { emoji: '⚡', size: 'text-3xl', position: 'top-[45%] left-[3%]', delay: 2, duration: 7 },
    { emoji: '🎯', size: 'text-4xl', position: 'top-[55%] right-[5%]', delay: 0.5, duration: 6.5 },
    { emoji: '🔧', size: 'text-3xl', position: 'top-[70%] left-[7%]', delay: 1.5, duration: 5.5 },
    { emoji: '💻', size: 'text-4xl', position: 'top-[80%] right-[10%]', delay: 2.5, duration: 6 },
    { emoji: '🌟', size: 'text-3xl', position: 'top-[35%] left-[10%]', delay: 3, duration: 8 },
    { emoji: '🎨', size: 'text-3xl', position: 'top-[65%] right-[3%]', delay: 1.2, duration: 7 },
];

// Doodle-style decorative lines
const DoodleLine = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
            d="M0 10 Q20 0, 40 10 T80 10 T100 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
        />
    </svg>
);

// Floating illustrated element
const FloatingIllustration = ({
    emoji,
    size,
    position,
    delay,
    duration
}: {
    emoji: string;
    size: string;
    position: string;
    delay: number;
    duration: number
}) => (
    <motion.div
        className={`fixed ${position} ${size} pointer-events-none z-20 opacity-20`}
        initial={{ y: 0, rotate: 0 }}
        animate={{
            y: [-15, 15, -15],
            rotate: [-5, 5, -5],
        }}
        transition={{
            duration,
            repeat: Infinity,
            delay,
            ease: "easeInOut"
        }}
    >
        {emoji}
    </motion.div>
);

// Cartoon-style blob shapes
const CartoonBlob = ({ className, color = 'var(--primary)' }: { className?: string; color?: string }) => (
    <motion.svg
        className={className}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ scale: 0.9 }}
        animate={{ scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    >
        <path
            fill={color}
            d="M45.7,-51.4C59.5,-38.8,71.1,-23.5,73.8,-6.5C76.6,10.5,70.4,29.2,58.4,41.8C46.4,54.4,28.6,60.9,10.9,64.4C-6.7,67.9,-24.3,68.5,-39.9,61.5C-55.6,54.5,-69.3,40,-74.7,22.6C-80.1,5.3,-77.2,-14.9,-67.3,-30.4C-57.3,-45.9,-40.4,-56.7,-23.5,-67.7C-6.5,-78.7,10.4,-89.9,26.1,-87.3C41.8,-84.7,56.2,-68.3,45.7,-51.4Z"
            transform="translate(100 100)"
        />
    </motion.svg>
);

// Sparkle animation component
const Sparkle = ({ className }: { className?: string }) => (
    <motion.svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        initial={{ scale: 0, rotate: 0 }}
        animate={{
            scale: [0, 1, 0],
            rotate: [0, 180, 360]
        }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
    >
        <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
    </motion.svg>
);

export default function CartoonElements() {
    return (
        <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
            {/* Floating Illustrations */}
            {illustrations.map((item, index) => (
                <FloatingIllustration key={index} {...item} />
            ))}

            {/* Cartoon Blobs */}
            <CartoonBlob
                className="absolute -top-20 -left-20 w-96 h-96 opacity-10 blur-3xl"
                color="rgba(242, 162, 13, 0.3)"
            />
            <CartoonBlob
                className="absolute top-1/2 -right-32 w-80 h-80 opacity-10 blur-3xl"
                color="rgba(147, 51, 234, 0.3)"
            />
            <CartoonBlob
                className="absolute -bottom-20 left-1/4 w-72 h-72 opacity-10 blur-3xl"
                color="rgba(59, 130, 246, 0.3)"
            />

            {/* Sparkles */}
            <Sparkle className="absolute top-[20%] right-[15%] w-4 h-4 text-yellow-400 opacity-60" />
            <Sparkle className="absolute top-[60%] left-[12%] w-3 h-3 text-purple-400 opacity-50" />
            <Sparkle className="absolute top-[40%] right-[25%] w-5 h-5 text-blue-400 opacity-40" />
        </div>
    );
}

// Export individual components for use in sections
export { DoodleLine, FloatingIllustration, CartoonBlob, Sparkle };
