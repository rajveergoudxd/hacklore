'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

export default function FloatingCTA() {
    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5, type: 'spring' }}
            className="fixed bottom-8 right-8 z-50"
        >
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
                <Link href="#apply">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative flex items-center justify-center w-20 h-20 md:w-28 md:h-28 bg-[var(--primary)] rounded-full shadow-[0_0_40px_rgba(242,162,13,0.4)] hover:shadow-[0_0_60px_rgba(242,162,13,0.6)] transition-all duration-300"
                    >
                        {/* Outer ring */}
                        <div className="absolute inset-0 rounded-full border border-white/20" />

                        {/* Rotating ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                            className="absolute -inset-2 rounded-full border border-dashed border-[var(--primary)]/30"
                        />

                        {/* Content */}
                        <div className="flex flex-col items-center justify-center text-[var(--background)]">
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest mb-0.5 group-hover:mb-1 transition-all">
                                Apply
                            </span>
                            <motion.span
                                animate={{ rotate: [0, 0, 45, 45, 0] }}
                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                                className="text-xl md:text-2xl"
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
