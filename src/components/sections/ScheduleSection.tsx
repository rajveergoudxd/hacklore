'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import ScrollReveal from '../animations/ScrollReveal';

const timelineEvents = [
    {
        date: 'Aug 15',
        title: 'Applications Open',
        description: 'Submit your application and project idea to participate.',
        status: 'completed'
    },
    {
        date: 'Sep 30',
        title: 'Applications Close',
        description: 'Last day to submit your hackathon application.',
        status: 'completed'
    },
    {
        date: 'Oct 5',
        title: 'Team Announcements',
        description: 'Selected teams will be notified via email.',
        status: 'upcoming'
    },
    {
        date: 'Oct 12',
        title: 'Hacking Begins',
        description: 'Opening ceremony & kickoff. 48 hours of innovation.',
        status: 'upcoming'
    },
    {
        date: 'Oct 14',
        title: 'Demo Day',
        description: 'Present your projects to judges and win prizes!',
        status: 'upcoming'
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
        <section id="schedule" ref={containerRef} className="py-24 px-6 md:px-20 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent pointer-events-none" />

            <div className="max-w-[1400px] mx-auto relative">
                {/* Section Header */}
                <div className="mb-16">
                    <ScrollReveal>
                        <span className="text-xs uppercase tracking-[0.3em] text-[var(--primary)]">
                            Timeline
                        </span>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
                            Event <span className="gradient-text">Schedule</span>
                        </h2>
                    </ScrollReveal>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Animated Progress Line */}
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-white/10">
                        <motion.div
                            style={{ height: lineHeight }}
                            className="w-full bg-gradient-to-b from-[var(--primary)] to-purple-500"
                        />
                    </div>

                    {/* Events */}
                    <div className="space-y-12">
                        {timelineEvents.map((event, index) => (
                            <ScrollReveal
                                key={index}
                                variant={index % 2 === 0 ? 'fadeLeft' : 'fadeRight'}
                                delay={index * 0.1}
                            >
                                <div
                                    className={`
                    relative flex items-center gap-8
                    ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
                  `}
                                >
                                    {/* Date Marker */}
                                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-[var(--primary)] bg-[var(--background)] z-10">
                                        {event.status === 'completed' && (
                                            <div className="absolute inset-0.5 rounded-full bg-[var(--primary)]" />
                                        )}
                                    </div>

                                    {/* Content Card */}
                                    <div
                                        className={`
                      ml-12 md:ml-0 md:w-[calc(50%-2rem)]
                      ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'}
                    `}
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            className={`
                        p-6 rounded-2xl glass-panel
                        border border-white/5 hover:border-[var(--primary)]/30
                        transition-colors duration-300
                      `}
                                        >
                                            <div className={`flex items-center gap-3 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                                                <span
                                                    className={`
                            text-xs uppercase tracking-wider px-2 py-1 rounded-full
                            ${event.status === 'completed'
                                                            ? 'bg-green-500/20 text-green-400'
                                                            : 'bg-[var(--primary)]/20 text-[var(--primary)]'
                                                        }
                          `}
                                                >
                                                    {event.date}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                                            <p className="text-white/60 text-sm">{event.description}</p>
                                        </motion.div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
