'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import ScrollReveal from '../animations/ScrollReveal';

const timelineEvents = [
    {
        date: 'Phase 1',
        title: 'Registration',
        description: 'Open online registration & domain selection. Choose your innovation track.',
        status: 'upcoming',
        icon: '📝'
    },
    {
        date: 'Phase 2',
        title: 'Submission & Shortlisting',
        description: 'Submit your idea via 3-4 slide PPT or 4-5 min video pitch for expert review.',
        status: 'upcoming',
        icon: '🎯'
    },
    {
        date: 'Day 1',
        title: 'The Launch',
        description: 'Formal inauguration, mentor orientation & team prep. Get paired with industry experts.',
        status: 'upcoming',
        icon: '🚀'
    },
    {
        date: 'Day 1-2',
        title: 'The Build',
        description: '24-hour continuous development. Build functional prototypes with mentor support.',
        status: 'upcoming',
        icon: '⚡'
    },
    {
        date: 'Day 3',
        title: 'The Finale',
        description: 'Final presentations, jury evaluation & valedictory ceremony. Winners announced!',
        status: 'upcoming',
        icon: '🏆'
    }
];

export default function ScheduleSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    });

    const lineHeight = useTransform(scrollYProgress, [0, 0.8], ['0%', '100%']);

    return (
        <section id="schedule" ref={containerRef} className="py-32 px-6 md:px-12 lg:px-20 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent pointer-events-none" />
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[var(--primary)]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <ScrollReveal>
                        <span className="inline-block text-xs uppercase tracking-[0.3em] text-[var(--primary)] font-medium mb-4 px-4 py-2 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/5">
                            Timeline
                        </span>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-5">
                            Event <span className="gradient-text">Schedule</span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                            From idea to innovation — follow our structured journey through Hacklore
                        </p>
                    </ScrollReveal>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Center Line (Desktop Only) */}
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px]">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-white/10 to-white/5" />
                        <motion.div
                            style={{ height: lineHeight }}
                            className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[var(--primary)] via-purple-500 to-[var(--primary)] shadow-[0_0_20px_var(--primary)]"
                        />
                    </div>

                    {/* Mobile Line */}
                    <div className="md:hidden absolute left-[22px] top-0 bottom-0 w-[2px]">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-white/10 to-white/5" />
                        <motion.div
                            style={{ height: lineHeight }}
                            className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[var(--primary)] via-purple-500 to-[var(--primary)]"
                        />
                    </div>

                    {/* Events */}
                    <div className="space-y-8 md:space-y-0">
                        {timelineEvents.map((event, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <ScrollReveal
                                    key={index}
                                    variant={isEven ? 'fadeLeft' : 'fadeRight'}
                                    delay={index * 0.1}
                                >
                                    <div className="relative md:py-8">
                                        {/* Desktop Layout */}
                                        <div className="hidden md:grid md:grid-cols-[1fr_80px_1fr] md:items-center md:gap-0">
                                            {/* Left Content */}
                                            <div className={`${isEven ? 'pr-8' : 'order-3 pl-8'}`}>
                                                {isEven && (
                                                    <motion.div
                                                        whileHover={{ scale: 1.02, y: -4 }}
                                                        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                                                        className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-[var(--primary)]/40 transition-all duration-500 shadow-lg hover:shadow-[0_8px_40px_rgba(var(--primary-rgb),0.15)]"
                                                    >
                                                        {/* Gradient overlay on hover */}
                                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                                        <div className="relative">
                                                            <div className="flex items-center justify-end gap-3 mb-3">
                                                                <span className="text-2xl">{event.icon}</span>
                                                                <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full ${event.status === 'completed'
                                                                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                                                        : 'bg-[var(--primary)]/15 text-[var(--primary)] border border-[var(--primary)]/30'
                                                                    }`}>
                                                                    {event.date}
                                                                </span>
                                                            </div>
                                                            <h3 className="text-xl font-bold mb-2 text-right text-white group-hover:text-white transition-colors">
                                                                {event.title}
                                                            </h3>
                                                            <p className="text-white/50 text-sm leading-relaxed text-right group-hover:text-white/60 transition-colors">
                                                                {event.description}
                                                            </p>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </div>

                                            {/* Center Node */}
                                            <div className="flex justify-center order-2">
                                                <motion.div
                                                    className="relative z-10"
                                                    whileHover={{ scale: 1.2 }}
                                                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                                                >
                                                    {/* Outer glow ring */}
                                                    <div className="absolute -inset-3 rounded-full bg-[var(--primary)]/20 blur-md animate-pulse" />
                                                    {/* Main node */}
                                                    <div className="relative w-5 h-5 rounded-full border-[3px] border-[var(--primary)] bg-[var(--background)] shadow-[0_0_15px_var(--primary)]">
                                                        {event.status === 'completed' && (
                                                            <div className="absolute inset-1 rounded-full bg-[var(--primary)]" />
                                                        )}
                                                    </div>
                                                </motion.div>
                                            </div>

                                            {/* Right Content */}
                                            <div className={`${isEven ? 'order-3 pl-8' : 'pr-8'}`}>
                                                {!isEven && (
                                                    <motion.div
                                                        whileHover={{ scale: 1.02, y: -4 }}
                                                        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                                                        className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-[var(--primary)]/40 transition-all duration-500 shadow-lg hover:shadow-[0_8px_40px_rgba(var(--primary-rgb),0.15)]"
                                                    >
                                                        {/* Gradient overlay on hover */}
                                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                                        <div className="relative">
                                                            <div className="flex items-center gap-3 mb-3">
                                                                <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full ${event.status === 'completed'
                                                                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                                                        : 'bg-[var(--primary)]/15 text-[var(--primary)] border border-[var(--primary)]/30'
                                                                    }`}>
                                                                    {event.date}
                                                                </span>
                                                                <span className="text-2xl">{event.icon}</span>
                                                            </div>
                                                            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-white transition-colors">
                                                                {event.title}
                                                            </h3>
                                                            <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/60 transition-colors">
                                                                {event.description}
                                                            </p>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Mobile Layout */}
                                        <div className="md:hidden flex items-start gap-6">
                                            {/* Node */}
                                            <div className="relative flex-shrink-0 mt-6">
                                                <div className="absolute -inset-2 rounded-full bg-[var(--primary)]/20 blur-sm animate-pulse" />
                                                <div className="relative w-4 h-4 rounded-full border-[3px] border-[var(--primary)] bg-[var(--background)] shadow-[0_0_10px_var(--primary)]">
                                                    {event.status === 'completed' && (
                                                        <div className="absolute inset-0.5 rounded-full bg-[var(--primary)]" />
                                                    )}
                                                </div>
                                            </div>

                                            {/* Content Card */}
                                            <motion.div
                                                whileHover={{ scale: 1.01 }}
                                                className="flex-1 group relative p-5 rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-[var(--primary)]/40 transition-all duration-300"
                                            >
                                                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[var(--primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                                <div className="relative">
                                                    <div className="flex items-center gap-2 mb-3">
                                                        <span className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${event.status === 'completed'
                                                                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                                                : 'bg-[var(--primary)]/15 text-[var(--primary)] border border-[var(--primary)]/30'
                                                            }`}>
                                                            {event.date}
                                                        </span>
                                                        <span className="text-xl">{event.icon}</span>
                                                    </div>
                                                    <h3 className="text-lg font-bold mb-2 text-white">{event.title}</h3>
                                                    <p className="text-white/50 text-sm leading-relaxed">{event.description}</p>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
