'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import ScrollReveal from '../animations/ScrollReveal';

const journeySteps = [
    {
        phase: '01',
        title: 'Ideate',
        subtitle: 'Registration',
        description: 'Form your team & choose your track',
        icon: '💡',
        color: 'from-purple-500 to-pink-500',
        bgColor: 'bg-purple-500/20'
    },
    {
        phase: '02',
        title: 'Pitch',
        subtitle: 'Submission',
        description: 'Submit PPT or video pitch',
        icon: '🎯',
        color: 'from-blue-500 to-cyan-500',
        bgColor: 'bg-blue-500/20'
    },
    {
        phase: '03',
        title: 'Launch',
        subtitle: 'Day 1',
        description: 'Inauguration & mentor pairing',
        icon: '🚀',
        color: 'from-green-500 to-emerald-500',
        bgColor: 'bg-green-500/20'
    },
    {
        phase: '04',
        title: 'Build',
        subtitle: '24 Hours',
        description: 'Non-stop innovation marathon',
        icon: '⚡',
        color: 'from-yellow-500 to-orange-500',
        bgColor: 'bg-yellow-500/20'
    },
    {
        phase: '05',
        title: 'Scale',
        subtitle: 'Finale',
        description: 'Demo Day & prize ceremony',
        icon: '🏆',
        color: 'from-red-500 to-pink-500',
        bgColor: 'bg-red-500/20'
    }
];

export default function JourneyFlow() {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    });

    const x = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);
    const progressWidth = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%']);

    return (
        <section ref={containerRef} className="py-24 px-6 md:px-20 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Horizontal flow lines */}
                <svg className="absolute top-1/2 left-0 w-full h-40 -translate-y-1/2 opacity-10" viewBox="0 0 1200 100" preserveAspectRatio="none">
                    <motion.path
                        d="M0 50 Q300 20, 600 50 T1200 50"
                        stroke="url(#journeyGradient)"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    <defs>
                        <linearGradient id="journeyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#9333ea" />
                            <stop offset="50%" stopColor="#f2a20d" />
                            <stop offset="100%" stopColor="#ef4444" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="max-w-[1400px] mx-auto relative">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <ScrollReveal>
                        <div className="inline-flex items-center gap-2 mb-4">
                            <span className="text-2xl">🎢</span>
                            <span className="text-xs uppercase tracking-[0.3em] text-[var(--primary)]">
                                The Innovator&apos;s Journey
                            </span>
                            <span className="text-2xl">🎢</span>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <h2 className="text-4xl md:text-6xl font-bold mb-4">
                            Your Path to <span className="gradient-text">Victory</span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto">
                            A 3-day adventure from idea to impact. Follow the roadmap to success!
                        </p>
                    </ScrollReveal>
                </div>

                {/* Progress Bar */}
                <div className="relative h-2 bg-white/10 rounded-full mb-12 overflow-hidden">
                    <motion.div
                        style={{ width: progressWidth }}
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-500 via-yellow-500 to-red-500 rounded-full"
                    />
                </div>

                {/* Horizontal Journey Cards */}
                <div ref={scrollRef} className="relative">
                    <motion.div
                        className="flex gap-6 pb-8"
                        style={{ x }}
                    >
                        {journeySteps.map((step, index) => (
                            <motion.div
                                key={step.phase}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="flex-shrink-0 w-[280px] md:w-[320px]"
                            >
                                <div className={`
                                    relative p-6 rounded-3xl border border-white/10
                                    ${step.bgColor} backdrop-blur-sm
                                    transition-all duration-300
                                    hover:border-[var(--primary)]/50
                                    group cursor-pointer
                                `}>
                                    {/* Phase Number Badge */}
                                    <div className={`
                                        absolute -top-4 -left-2 w-12 h-12 rounded-2xl
                                        bg-gradient-to-br ${step.color}
                                        flex items-center justify-center
                                        text-white font-bold text-sm
                                        shadow-lg transform rotate-6
                                        group-hover:rotate-0 transition-transform
                                    `}>
                                        {step.phase}
                                    </div>

                                    {/* Icon */}
                                    <div className="text-5xl mb-4 mt-4 transform group-hover:scale-110 transition-transform">
                                        {step.icon}
                                    </div>

                                    {/* Content */}
                                    <h3 className={`text-2xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                                        {step.title}
                                    </h3>
                                    <p className="text-white/60 text-sm uppercase tracking-wider mb-2">
                                        {step.subtitle}
                                    </p>
                                    <p className="text-white/70">
                                        {step.description}
                                    </p>

                                    {/* Connector Line (except last) */}
                                    {index < journeySteps.length - 1 && (
                                        <div className="absolute top-1/2 -right-6 w-6 h-0.5 bg-gradient-to-r from-white/30 to-transparent" />
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Scroll Hint */}
                <div className="flex justify-center mt-8">
                    <motion.div
                        animate={{ x: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="flex items-center gap-2 text-white/40 text-sm"
                    >
                        <span>Scroll to explore</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
