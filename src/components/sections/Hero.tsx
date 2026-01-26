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
            className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 pt-28 md:pt-32 pb-12"
        >
            {/* Floating Cartoon Decorations */}
            <motion.div
                className="absolute top-[15%] right-[10%] text-6xl pointer-events-none hidden md:block"
                animate={{ y: [-10, 10, -10], rotate: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
            >
                💡
            </motion.div>
            <motion.div
                className="absolute top-[25%] left-[8%] text-5xl pointer-events-none hidden md:block"
                animate={{ y: [10, -10, 10], rotate: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            >
                🚀
            </motion.div>
            <motion.div
                className="absolute bottom-[30%] right-[15%] text-4xl pointer-events-none hidden md:block"
                animate={{ y: [-5, 15, -5], rotate: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, delay: 2 }}
            >
                ⚡
            </motion.div>
            <motion.div
                className="absolute bottom-[25%] left-[5%] text-5xl pointer-events-none hidden md:block"
                animate={{ y: [5, -15, 5], scale: [1, 1.1, 1] }}
                transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }}
            >
                🎯
            </motion.div>

            {/* Hero Content - Split Layout */}
            <motion.div
                style={{ y: textY, opacity, scale }}
                className="w-full max-w-[1400px] mx-auto relative"
            >
                {/* Decorative Lines */}
                <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />
                <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />

                {/* Main Grid Layout - Title Left (70%), CTAs Right (30%) */}
                <div className="grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-6 lg:gap-2 items-start">

                    {/* LEFT SIDE - Title & Tagline */}
                    <div className="relative z-10">
                        {/* Main Title with Cartoon Elements */}
                        <div className="relative flex flex-col items-center lg:items-start select-none">
                            {/* Decorative Sparkles around Title */}
                            <motion.span
                                className="absolute -top-8 left-[20%] text-2xl"
                                animate={{ scale: [0.8, 1.2, 0.8], rotate: [0, 180, 360] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                ✨
                            </motion.span>
                            <motion.span
                                className="absolute top-[30%] -right-8 text-xl hidden lg:block"
                                animate={{ scale: [1, 0.8, 1], rotate: [0, -180, -360] }}
                                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                            >
                                ⭐
                            </motion.span>

                            <motion.h1
                                initial={{ opacity: 0, x: -100, rotate: -5 }}
                                animate={{ opacity: 1, x: 0, rotate: 0 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                className="text-[20vw] lg:text-[12vw] leading-[0.85] font-bold tracking-tighter text-outline text-outline-hover transition-all duration-700 ease-out cursor-default glitch hover-wiggle"
                            >
                                HACK
                            </motion.h1>
                            <motion.h1
                                initial={{ opacity: 0, x: 100, rotate: 5 }}
                                animate={{ opacity: 1, x: 0, rotate: 0 }}
                                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                className="text-[20vw] lg:text-[12vw] leading-[0.85] font-bold tracking-tighter text-white ml-0 lg:ml-[4vw] transition-all duration-700 ease-out hover:translate-x-4"
                            >
                                <span className="text-[var(--primary)]">LORE</span>
                            </motion.h1>
                        </div>

                        {/* Tagline with Doodle Underline */}
                        <ScrollReveal delay={0.6} className="mt-6 lg:mt-4 lg:ml-[4vw] max-w-md">
                            <p className="text-lg md:text-xl font-light text-white/80 tracking-wide border-l-2 border-[var(--primary)] pl-4">
                                The Ultimate Innovation Hackathon 2026 <br />
                                <span className="text-white font-medium doodle-underline inline-block">Code. Create. Conquer.</span>
                            </p>
                        </ScrollReveal>

                        {/* Event Date Badge - Cartoon Style */}
                        <ScrollReveal delay={0.7} className="mt-6 lg:ml-[4vw]">
                            <motion.div
                                whileHover={{ scale: 1.05, rotate: [-1, 1, -1, 0] }}
                                transition={{ rotate: { duration: 0.3 } }}
                                className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl glass-panel cartoon-shadow hover-pop"
                            >
                                <motion.span
                                    className="text-xl"
                                    animate={{ rotate: [0, 15, -15, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    🎪
                                </motion.span>
                                <span className="text-xs text-white/70">
                                    24-Hour Innovation Marathon • <span className="text-[var(--primary)] font-bold">2026</span>
                                </span>
                                <motion.span
                                    className="text-lg"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    🎉
                                </motion.span>
                            </motion.div>
                        </ScrollReveal>
                    </div>

                    {/* RIGHT SIDE - Student CTAs */}
                    <ScrollReveal delay={0.5} className="lg:pl-2 lg:mt-4">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="relative p-8 rounded-2xl glass-panel border border-white/10 overflow-hidden"
                        >
                            {/* Background glow */}
                            <motion.div
                                className="absolute -top-20 -right-20 w-60 h-60 bg-[var(--primary)]/20 rounded-full blur-3xl pointer-events-none"
                                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            />

                            <div className="relative z-10">
                                {/* Header */}
                                <div className="flex items-center gap-4 mb-6">
                                    <motion.span
                                        className="text-4xl"
                                        animate={{ rotate: [0, 10, -10, 0] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                    >
                                        🎓
                                    </motion.span>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">For Students</h3>
                                        <p className="text-white/50 text-sm">Join the innovation revolution</p>
                                    </div>
                                </div>

                                {/* Registrations Opening Soon */}
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="relative mb-6"
                                >
                                    {/* Pulsing badge */}
                                    <motion.div
                                        className="absolute -top-2 -right-2 px-3 py-1 rounded-full bg-green-500 text-xs font-bold text-white"
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        SOON
                                    </motion.div>

                                    <motion.button
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full flex items-center justify-between gap-4 p-5 rounded-xl bg-gradient-to-r from-[var(--primary)] to-amber-500 text-[var(--background)]"
                                    >
                                        <div className="flex items-center gap-4">
                                            <motion.span
                                                className="text-3xl"
                                                animate={{ rotate: [0, 20, -20, 0] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                            >
                                                🔔
                                            </motion.span>
                                            <div className="text-left">
                                                <span className="text-sm opacity-80 block">Registrations</span>
                                                <span className="text-lg font-bold">Opening Soon!</span>
                                            </div>
                                        </div>
                                        <motion.span
                                            className="text-2xl"
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 1, repeat: Infinity }}
                                        >
                                            →
                                        </motion.span>
                                    </motion.button>
                                </motion.div>

                                {/* Divider */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="flex-1 h-px bg-white/10" />
                                    <span className="text-white/30 text-sm">OR</span>
                                    <div className="flex-1 h-px bg-white/10" />
                                </div>

                                {/* Join Mailing List */}
                                <div className="space-y-3">
                                    <label className="text-sm text-white/60 flex items-center gap-2">
                                        <span>📬</span>
                                        <span>Get notified when we launch</span>
                                    </label>
                                    <div className="flex gap-2">
                                        <input
                                            type="email"
                                            placeholder="your@email.com"
                                            className="flex-1 px-4 py-3.5 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/40 focus:border-[var(--primary)] focus:outline-none transition-all"
                                        />
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-5 py-3.5 rounded-lg border border-[var(--primary)] text-[var(--primary)] font-medium hover:bg-[var(--primary)] hover:text-[var(--background)] transition-all"
                                        >
                                            Join
                                        </motion.button>
                                    </div>
                                </div>

                                {/* Trust signals */}
                                <p className="text-white/30 text-xs mt-4 flex items-center gap-2">
                                    <span>🔒</span>
                                    <span>No spam. Unsubscribe anytime.</span>
                                </p>

                                {/* Quick stats teaser */}
                                <div className="flex items-center justify-around mt-6 pt-6 border-t border-white/10">
                                    <div className="text-center">
                                        <span className="text-2xl block">🏆</span>
                                        <span className="text-[var(--primary)] font-bold">₹60K</span>
                                        <span className="text-white/40 text-xs block">Prizes</span>
                                    </div>
                                    <div className="w-px h-12 bg-white/10" />
                                    <div className="text-center">
                                        <span className="text-2xl block">👥</span>
                                        <span className="text-[var(--primary)] font-bold">100+</span>
                                        <span className="text-white/40 text-xs block">Teams</span>
                                    </div>
                                    <div className="w-px h-12 bg-white/10" />
                                    <div className="text-center">
                                        <span className="text-2xl block">⏰</span>
                                        <span className="text-[var(--primary)] font-bold">24h</span>
                                        <span className="text-white/40 text-xs block">Hacking</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </ScrollReveal>
                </div>
            </motion.div>

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
