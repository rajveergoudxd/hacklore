'use client';

import { motion } from 'motion/react';
import ScrollReveal from '../animations/ScrollReveal';
import { MouseSensitiveText } from '../animations/MouseSensitive';

export default function Hero() {
    return (
        <>
            {/* Hero Section - Responsive layout */}
            <section className="relative min-h-[90vh] lg:min-h-[85vh] flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-20 pt-16 md:pt-20 pb-6 md:pb-8">

                {/* CREATIVE LAYOUT */}
                <div className="w-full max-w-[1400px] mx-auto relative">

                    {/* Main Content Grid - Stack on mobile, side by side on lg+ */}
                    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">

                        {/* LEFT - Creative Title Block */}
                        <div className="relative w-full text-center lg:text-left">
                            {/* Floating decorative elements - hidden on small mobile */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                                className="absolute -top-4 md:-top-8 -left-2 md:-left-4 w-16 md:w-20 h-16 md:h-20 rounded-full bg-gradient-to-br from-[var(--primary)]/20 to-transparent blur-xl hidden sm:block"
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 1 }}
                                className="absolute bottom-16 md:bottom-20 -right-4 md:-right-8 w-12 md:w-16 h-12 md:h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-transparent blur-xl hidden sm:block"
                            />

                            {/* Event Badge with indicator - stacked on mobile */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="mb-4 md:mb-6"
                            >
                                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 justify-center lg:justify-start">
                                    <span className="flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-gradient-to-r from-[var(--primary)]/20 to-amber-500/10 border border-[var(--primary)]/30">
                                        <span className="w-2 h-2 bg-[var(--primary)] rounded-full animate-pulse" />
                                        <MouseSensitiveText className="text-xs md:text-sm font-semibold text-[var(--primary)]" sensitivity={100}>
                                            Coming 2026
                                        </MouseSensitiveText>
                                    </span>
                                    <span className="text-white/30 text-sm hidden sm:block">•</span>
                                    <MouseSensitiveText className="text-white/50 text-xs md:text-sm" sensitivity={100}>
                                        24-Hour Innovation Marathon
                                    </MouseSensitiveText>
                                </div>
                            </motion.div>

                            {/* HACKLORE Title - Responsive sizing */}
                            <div className="relative mb-4 md:mb-6">
                                {/* HACK - Outlined */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                    transition={{ duration: 0.7, delay: 0.2 }}
                                    className="relative"
                                >
                                    <h1 className="text-[18vw] sm:text-[16vw] md:text-[12vw] lg:text-[9vw] leading-[0.85] font-black tracking-[-0.04em]">
                                        <MouseSensitiveText
                                            className="text-transparent bg-clip-text bg-gradient-to-r from-white/15 to-white/25"
                                            style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.35)' } as React.CSSProperties}
                                            sensitivity={200}
                                            maxScale={1.02}
                                        >
                                            HACK
                                        </MouseSensitiveText>
                                    </h1>
                                </motion.div>

                                {/* LORE - Gradient filled with glow */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                    transition={{ duration: 0.7, delay: 0.35 }}
                                    className="relative -mt-1 sm:-mt-2 md:-mt-4 ml-2 sm:ml-4 md:ml-8 lg:ml-8"
                                >
                                    <h1 className="text-[18vw] sm:text-[16vw] md:text-[12vw] lg:text-[9vw] leading-[0.85] font-black tracking-[-0.04em]">
                                        <MouseSensitiveText
                                            className="bg-gradient-to-r from-[var(--primary)] via-amber-400 to-orange-500 bg-clip-text text-transparent"
                                            sensitivity={200}
                                            maxScale={1.02}
                                        >
                                            LORE
                                        </MouseSensitiveText>
                                    </h1>
                                    {/* Glow effect behind LORE */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/20 via-amber-400/15 to-orange-500/20 blur-3xl -z-10 scale-125 md:scale-150" />
                                </motion.div>
                            </div>

                            {/* Tagline with creative styling */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="mb-6 md:mb-8"
                            >
                                <p className="text-base md:text-lg lg:text-xl text-white/50 font-light mb-2">
                                    <MouseSensitiveText sensitivity={100}>The Ultimate Innovation Hackathon</MouseSensitiveText>
                                </p>
                                <div className="flex items-center gap-2 text-lg md:text-xl lg:text-2xl font-bold justify-center lg:justify-start flex-wrap">
                                    <MouseSensitiveText className="text-white" sensitivity={100}>Code</MouseSensitiveText>
                                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[var(--primary)]" />
                                    <MouseSensitiveText className="text-white" sensitivity={100}>Create</MouseSensitiveText>
                                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-amber-400" />
                                    <MouseSensitiveText className="text-white" sensitivity={100}>Conquer</MouseSensitiveText>
                                </div>
                            </motion.div>

                            {/* CTA Buttons - Full width on mobile */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.03, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group relative px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl bg-gradient-to-r from-[var(--primary)] to-amber-500 text-[var(--background)] font-bold text-base md:text-lg overflow-hidden"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        Get Notified
                                        <motion.span
                                            animate={{ x: [0, 4, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        >→</motion.span>
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.05)' }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl border border-white/20 text-white font-medium transition-colors"
                                >
                                    <MouseSensitiveText sensitivity={80}>Learn More</MouseSensitiveText>
                                </motion.button>
                            </motion.div>
                        </div>

                        {/* RIGHT - Registration Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 0, y: 30, scale: 0.95 }}
                            animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="relative w-full max-w-md lg:max-w-none mx-auto"
                        >
                            <div className="relative p-5 md:p-8 rounded-2xl md:rounded-3xl bg-[var(--chrome-dark)]/80 backdrop-blur-xl border border-white/10 overflow-hidden">
                                {/* Decorative gradients */}
                                <div className="absolute top-0 right-0 w-32 md:w-40 h-32 md:h-40 bg-gradient-to-bl from-[var(--primary)]/15 via-purple-500/5 to-transparent rounded-bl-full" />
                                <div className="absolute bottom-0 left-0 w-20 md:w-24 h-20 md:h-24 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-tr-full" />

                                <div className="relative z-10">
                                    {/* Header */}
                                    <div className="flex items-center gap-3 mb-4 md:mb-6">
                                        <div className="w-10 md:w-12 h-10 md:h-12 rounded-xl md:rounded-2xl bg-gradient-to-br from-[var(--primary)] to-amber-500 flex items-center justify-center shadow-lg shadow-[var(--primary)]/20">
                                            <span className="text-xl md:text-2xl">🎓</span>
                                        </div>
                                        <div>
                                            <h3 className="text-base md:text-lg font-bold text-white">
                                                <MouseSensitiveText sensitivity={100}>For Students</MouseSensitiveText>
                                            </h3>
                                            <p className="text-white/50 text-xs md:text-sm">Join 100+ teams across MP</p>
                                        </div>
                                    </div>

                                    {/* Registration CTA */}
                                    <div className="relative mb-4 md:mb-6">
                                        <motion.div
                                            animate={{ scale: [1, 1.1, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="absolute -top-2 -right-2 px-2 md:px-2.5 py-0.5 md:py-1 rounded-full bg-green-500 text-[8px] md:text-[10px] font-bold text-white shadow-lg shadow-green-500/30"
                                        >
                                            SOON
                                        </motion.div>
                                        <div className="p-4 md:p-5 rounded-xl md:rounded-2xl bg-white/5 border border-white/10">
                                            <div className="flex items-center gap-3 md:gap-4">
                                                <span className="text-2xl md:text-3xl">🔔</span>
                                                <div>
                                                    <p className="text-white/60 text-xs md:text-sm">Registrations</p>
                                                    <p className="text-white font-bold text-base md:text-lg">
                                                        <MouseSensitiveText sensitivity={100}>Opening Soon!</MouseSensitiveText>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Email signup */}
                                    <div className="flex flex-col sm:flex-row gap-2">
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            className="flex-1 px-4 py-3 md:py-3.5 rounded-lg md:rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/40 focus:border-[var(--primary)] focus:outline-none text-sm transition-colors"
                                        />
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="px-5 py-3 md:py-3.5 rounded-lg md:rounded-xl bg-[var(--primary)] text-[var(--background)] font-bold hover:bg-[var(--primary)]/90 transition-colors"
                                        >
                                            Join
                                        </motion.button>
                                    </div>

                                    <p className="text-white/30 text-[10px] md:text-xs mt-3 md:mt-4 flex items-center gap-1.5 justify-center sm:justify-start">
                                        <span>🔒</span> No spam. Unsubscribe anytime.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Full-Width Stats Trail - Responsive grid */}
            <section className="relative w-full py-4 md:py-6 border-y border-white/10 bg-[var(--chrome-dark)]/60 backdrop-blur-sm">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        <ScrollReveal delay={0.05}>
                            <div className="flex items-center gap-2 md:gap-3 justify-center md:justify-start">
                                <div className="w-10 md:w-12 h-10 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-[var(--primary)]/30 to-amber-500/10 flex items-center justify-center border border-[var(--primary)]/20">
                                    <span className="text-lg md:text-2xl">🏆</span>
                                </div>
                                <div>
                                    <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                                        <MouseSensitiveText sensitivity={80}>₹60K</MouseSensitiveText>
                                    </div>
                                    <div className="text-[10px] md:text-xs text-white/50">Prize Pool</div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.1}>
                            <div className="flex items-center gap-2 md:gap-3 justify-center md:justify-start">
                                <div className="w-10 md:w-12 h-10 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-blue-500/30 to-cyan-500/10 flex items-center justify-center border border-blue-500/20">
                                    <span className="text-lg md:text-2xl">👥</span>
                                </div>
                                <div>
                                    <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                                        <MouseSensitiveText sensitivity={80}>100+</MouseSensitiveText>
                                    </div>
                                    <div className="text-[10px] md:text-xs text-white/50">Teams</div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.15}>
                            <div className="flex items-center gap-2 md:gap-3 justify-center md:justify-start">
                                <div className="w-10 md:w-12 h-10 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-purple-500/30 to-pink-500/10 flex items-center justify-center border border-purple-500/20">
                                    <span className="text-lg md:text-2xl">⏰</span>
                                </div>
                                <div>
                                    <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                                        <MouseSensitiveText sensitivity={80}>24h</MouseSensitiveText>
                                    </div>
                                    <div className="text-[10px] md:text-xs text-white/50">Non-Stop</div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <div className="flex items-center gap-2 md:gap-3 justify-center md:justify-start">
                                <div className="w-10 md:w-12 h-10 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-green-500/30 to-emerald-500/10 flex items-center justify-center border border-green-500/20">
                                    <span className="text-lg md:text-2xl">🚀</span>
                                </div>
                                <div>
                                    <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                                        <MouseSensitiveText sensitivity={80}>4</MouseSensitiveText>
                                    </div>
                                    <div className="text-[10px] md:text-xs text-white/50">Tracks</div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </>
    );
}
