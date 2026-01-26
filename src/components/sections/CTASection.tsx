'use client';

import { motion } from 'motion/react';
import ScrollReveal from '../animations/ScrollReveal';

export default function CTASection() {
    return (
        <section className="py-32 px-6 md:px-20 relative overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--primary)]/10 to-transparent pointer-events-none" />

            {/* Decorative Orbs */}
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[var(--primary)]/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="max-w-[900px] mx-auto relative text-center">
                <ScrollReveal>
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                        className="inline-block mb-8"
                    >
                        <div className="w-16 h-16 border border-[var(--primary)]/30 rounded-2xl flex items-center justify-center">
                            <span className="text-3xl">⚡</span>
                        </div>
                    </motion.div>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                        Ready to <span className="gradient-text">innovate</span>?
                    </h2>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    <p className="text-xl md:text-2xl text-white/60 mb-12 max-w-xl mx-auto">
                        Join 100+ teams across Madhya Pradesh. Ideate. Build. Scale.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(242, 162, 13, 0.4)' }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-full bg-[var(--primary)] text-[var(--background)] font-bold text-lg transition-all"
                        >
                            Apply Now →
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-full border border-white/20 text-white hover:border-white/40 transition-colors font-medium"
                        >
                            View Last Year&apos;s Winners
                        </motion.button>
                    </div>
                </ScrollReveal>

                {/* Stats */}
                <ScrollReveal delay={0.5} className="mt-16">
                    <div className="flex flex-wrap justify-center gap-12 text-center">
                        <div>
                            <div className="text-3xl md:text-4xl font-bold gradient-text">100+</div>
                            <div className="text-sm text-white/50 mt-1">Teams</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold gradient-text">300-400</div>
                            <div className="text-sm text-white/50 mt-1">Innovators</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold gradient-text">6</div>
                            <div className="text-sm text-white/50 mt-1">Tracks</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold gradient-text">₹60k</div>
                            <div className="text-sm text-white/50 mt-1">Prize Pool</div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
