'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import ScrollReveal from '../animations/ScrollReveal';

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start']
    });

    const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 pt-24 pb-12"
        >
            {/* Hero Typography */}
            <motion.div
                style={{ y: textY, opacity, scale }}
                className="flex flex-col w-full max-w-[1400px] mx-auto relative"
            >
                {/* Decorative Lines */}
                <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />
                <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />

                {/* Main Title */}
                <div className="relative z-10 flex flex-col items-center lg:items-start select-none">
                    <motion.h1
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="text-[15vw] md:text-[12vw] leading-[0.85] font-bold tracking-tighter text-outline text-outline-hover transition-all duration-700 ease-out cursor-default glitch"
                    >
                        HACK
                    </motion.h1>
                    <motion.h1
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="text-[15vw] md:text-[12vw] leading-[0.85] font-bold tracking-tighter text-white ml-0 lg:ml-[10vw] transition-all duration-700 ease-out hover:translate-x-4"
                    >
                        / LORE
                    </motion.h1>
                </div>

                {/* Tagline */}
                <ScrollReveal delay={0.6} className="mt-8 lg:mt-4 lg:ml-[12vw] max-w-xl">
                    <p className="text-xl md:text-2xl font-light text-white/80 tracking-wide border-l-2 border-[var(--primary)] pl-6">
                        The future isn&apos;t fixed. It&apos;s fluid. <br />
                        <span className="text-white font-medium">Build the kinetic web.</span>
                    </p>
                </ScrollReveal>

                {/* Event Date Badge */}
                <ScrollReveal delay={0.8} className="mt-8 lg:ml-[12vw]">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-panel"
                    >
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-sm text-white/70">
                            Applications Open • <span className="text-[var(--primary)] font-medium">Oct 12-14, 2025</span>
                        </span>
                    </motion.div>
                </ScrollReveal>
            </motion.div>

            {/* Stats Grid */}
            <div className="w-full max-w-[1400px] mx-auto mt-24 lg:mt-32">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12 border-t border-white/10 pt-8">
                    <ScrollReveal delay={0.2}>
                        <StatCard
                            icon={
                                <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[var(--primary)]">
                                    <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                                    <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            }
                            label="Timeline"
                            value="Oct 12-14"
                            subtext="2025 Edition"
                        />
                    </ScrollReveal>

                    <ScrollReveal delay={0.3}>
                        <StatCard
                            icon={
                                <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[var(--primary)]">
                                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            }
                            label="Coordinates"
                            value="SF / Virtual"
                            subtext="Hybrid Event"
                        />
                    </ScrollReveal>

                    <ScrollReveal delay={0.4}>
                        <StatCard
                            icon={
                                <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[var(--primary)]">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                                </svg>
                            }
                            label="Bounty"
                            value="$50,000+"
                            subtext="In Cash & Prizes"
                        />
                    </ScrollReveal>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs uppercase tracking-widest text-white/40">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 rounded-full border border-white/20 flex justify-center pt-2"
                >
                    <motion.div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}

function StatCard({
    icon,
    label,
    value,
    subtext
}: {
    icon: React.ReactNode;
    label: string;
    value: string;
    subtext: string;
}) {
    return (
        <motion.div
            whileHover={{ x: 10 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="flex flex-col gap-2 group cursor-default"
        >
            <span className="text-xs uppercase tracking-[0.2em] text-white/40 group-hover:text-[var(--primary)] transition-colors">
                {label}
            </span>
            <div className="flex items-center gap-3">
                {icon}
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                    {value}
                </h3>
            </div>
            <p className="text-white/50 text-sm pl-11">{subtext}</p>
        </motion.div>
    );
}
