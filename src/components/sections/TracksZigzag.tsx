'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import ScrollReveal from '../animations/ScrollReveal';

const tracks = [
    {
        id: 'smart-cities',
        title: 'Smart Cities',
        subtitle: '& Urban Innovation',
        description: 'Build solutions for urban challenges - smart infrastructure, traffic management, and city services.',
        icon: '🏙️',
        illustration: '🌆',
        color: 'from-blue-500 to-cyan-500',
        bgPattern: 'radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)'
    },
    {
        id: 'digital-governance',
        title: 'Digital Governance',
        subtitle: '& Public Services',
        description: 'Create platforms that enhance government services, transparency, and citizen engagement.',
        icon: '🏛️',
        illustration: '📊',
        color: 'from-indigo-500 to-purple-500',
        bgPattern: 'radial-gradient(circle at 80% 80%, rgba(99, 102, 241, 0.2) 0%, transparent 50%)'
    },
    {
        id: 'ai-data',
        title: 'AI & Data',
        subtitle: 'Driven Applications',
        description: 'Leverage artificial intelligence and data analytics to solve complex problems.',
        icon: '🤖',
        illustration: '🧠',
        color: 'from-purple-500 to-pink-500',
        bgPattern: 'radial-gradient(circle at 20% 80%, rgba(168, 85, 247, 0.2) 0%, transparent 50%)'
    },
    {
        id: 'sustainability',
        title: 'Sustainability',
        subtitle: '& Clean Energy',
        description: 'Develop environmental solutions for clean energy, waste management, and conservation.',
        icon: '🌱',
        illustration: '♻️',
        color: 'from-green-500 to-emerald-500',
        bgPattern: 'radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.2) 0%, transparent 50%)'
    },
    {
        id: 'healthcare-education',
        title: 'Healthcare',
        subtitle: '& Education Tech',
        description: 'Innovate in health and education with accessible, scalable technology solutions.',
        icon: '🏥',
        illustration: '📚',
        color: 'from-red-500 to-orange-500',
        bgPattern: 'radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.2) 0%, transparent 50%)'
    },
    {
        id: 'startup-msme',
        title: 'Startup & MSME',
        subtitle: 'Enablement',
        description: 'Build tools that empower startups and small businesses to scale and succeed.',
        icon: '🚀',
        illustration: '💼',
        color: 'from-yellow-500 to-amber-500',
        bgPattern: 'radial-gradient(circle at 30% 70%, rgba(245, 158, 11, 0.2) 0%, transparent 50%)'
    }
];

export default function TracksZigzag() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    });

    const centerLineHeight = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%']);

    return (
        <section id="tracks" ref={containerRef} className="py-24 px-6 md:px-20 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    className="absolute top-1/4 left-0 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"
                    animate={{ x: [-20, 20, -20], y: [-10, 10, -10] }}
                    transition={{ duration: 10, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"
                    animate={{ x: [20, -20, 20], y: [10, -10, 10] }}
                    transition={{ duration: 12, repeat: Infinity }}
                />
            </div>

            <div className="max-w-[1200px] mx-auto relative">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <ScrollReveal>
                        <div className="inline-flex items-center gap-3 mb-4">
                            <span className="text-3xl">🎨</span>
                            <span className="text-xs uppercase tracking-[0.3em] text-[var(--primary)]">
                                Innovation Frontiers
                            </span>
                            <span className="text-3xl">🎨</span>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <h2 className="text-4xl md:text-6xl font-bold mb-4">
                            Choose Your <span className="gradient-text">Arena</span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto">
                            6 unique tracks to showcase your innovation. Pick your battlefield!
                        </p>
                    </ScrollReveal>
                </div>

                {/* Center Line */}
                <div className="absolute left-1/2 top-[200px] bottom-[100px] w-1 -translate-x-1/2 hidden lg:block">
                    <div className="w-full h-full bg-white/5 rounded-full">
                        <motion.div
                            style={{ height: centerLineHeight }}
                            className="w-full bg-gradient-to-b from-purple-500 via-yellow-500 to-red-500 rounded-full"
                        />
                    </div>
                </div>

                {/* Zigzag Track Cards */}
                <div className="relative space-y-8 lg:space-y-0">
                    {tracks.map((track, index) => {
                        const isLeft = index % 2 === 0;

                        return (
                            <ScrollReveal
                                key={track.id}
                                variant={isLeft ? 'fadeRight' : 'fadeLeft'}
                                delay={index * 0.1}
                            >
                                <div className={`
                                    lg:flex lg:items-center lg:gap-8
                                    ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}
                                    lg:mb-16
                                `}>
                                    {/* Card */}
                                    <motion.div
                                        whileHover={{ scale: 1.02, y: -5 }}
                                        className={`
                                            relative lg:w-[calc(50%-2rem)] p-6 md:p-8 rounded-3xl
                                            border border-white/10 backdrop-blur-sm
                                            transition-all duration-300 cursor-pointer
                                            hover:border-[var(--primary)]/50
                                            group overflow-hidden
                                        `}
                                        style={{ background: track.bgPattern }}
                                    >
                                        {/* Floating Illustration */}
                                        <motion.div
                                            className="absolute -top-4 -right-4 text-8xl opacity-20 pointer-events-none"
                                            animate={{ rotate: [0, 10, -10, 0] }}
                                            transition={{ duration: 5, repeat: Infinity }}
                                        >
                                            {track.illustration}
                                        </motion.div>

                                        {/* Track Number */}
                                        <div className={`
                                            inline-flex items-center gap-2 mb-4
                                            px-3 py-1 rounded-full
                                            bg-gradient-to-r ${track.color}
                                            text-white text-xs font-bold
                                        `}>
                                            <span>Track {String(index + 1).padStart(2, '0')}</span>
                                        </div>

                                        {/* Icon */}
                                        <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-transform">
                                            {track.icon}
                                        </div>

                                        {/* Content */}
                                        <h3 className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${track.color} bg-clip-text text-transparent`}>
                                            {track.title}
                                        </h3>
                                        <p className="text-white/60 text-sm uppercase tracking-wider mb-3">
                                            {track.subtitle}
                                        </p>
                                        <p className="text-white/70 leading-relaxed">
                                            {track.description}
                                        </p>

                                        {/* Explore Button */}
                                        <motion.div
                                            className="mt-4 inline-flex items-center gap-2 text-sm text-white/50 group-hover:text-[var(--primary)] transition-colors"
                                            whileHover={{ x: 5 }}
                                        >
                                            <span>Explore Track</span>
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                                                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </motion.div>
                                    </motion.div>

                                    {/* Center Connector */}
                                    <div className="hidden lg:flex items-center justify-center w-16">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 + 0.3 }}
                                            className={`
                                                w-12 h-12 rounded-2xl
                                                bg-gradient-to-br ${track.color}
                                                flex items-center justify-center
                                                text-2xl shadow-lg
                                                rotate-45
                                            `}
                                        >
                                            <span className="-rotate-45">{track.icon}</span>
                                        </motion.div>
                                    </div>

                                    {/* Spacer for opposite side */}
                                    <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
