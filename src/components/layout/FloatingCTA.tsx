'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

export default function FloatingCTA() {
    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5, type: 'spring' }}
            className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50"
        >
            <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
                <Link href="#apply">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative flex items-center justify-center w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-[var(--primary)] rounded-full shadow-[0_0_30px_rgba(242,162,13,0.3)] hover:shadow-[0_0_50px_rgba(242,162,13,0.5)] transition-all duration-300"
                    >
                        {/* Outer ring - hidden on mobile for cleaner look */}
                        <div className="absolute inset-0 rounded-full border border-white/20 hidden md:block" />

                        {/* Rotating ring - only on larger screens */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                            className="absolute -inset-1 md:-inset-2 rounded-full border border-dashed border-[var(--primary)]/30 hidden md:block"
                        />

                        {/* Content */}
                        <div className="flex flex-col items-center justify-center text-[var(--background)]">
                            <span className="text-[8px] md:text-[10px] lg:text-xs font-bold uppercase tracking-wider md:tracking-widest md:mb-0.5">
                                Apply
                            </span>
                            <motion.span
                                animate={{ rotate: [0, 0, 45, 45, 0] }}
                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                                className="text-lg md:text-xl lg:text-2xl"
                            >
                                ↗
                            </motion.span>
                        </div>
                    </motion.div>
                </Link>
            </motion.div>
        </motion.div>
    );
}
