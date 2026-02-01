'use client';

import { motion } from 'motion/react';
import ScrollReveal from '../animations/ScrollReveal';

const journeySteps = [
    {
        phase: '01',
        title: 'Ideate',
        subtitle: 'Registration',
        description: 'Form your team of 2-4 members and choose your innovation track. Open online registration with domain selection.',
        icon: '💡',
        color: 'from-purple-500 to-pink-500',
        bgColor: 'bg-purple-500/10',
        details: ['Team Formation', 'Track Selection', 'Idea Brainstorming']
    },
    {
        phase: '02',
        title: 'Pitch',
        subtitle: 'Submission',
        description: 'Submit your idea via a 3-4 slide PPT or 4-5 minute video pitch. Expert panels review for innovation and feasibility.',
        icon: '🎯',
        color: 'from-blue-500 to-cyan-500',
        bgColor: 'bg-blue-500/10',
        details: ['PPT/Video Pitch', 'Expert Review', 'Shortlisting']
    },
    {
        phase: '03',
        title: 'Launch',
        subtitle: 'Day 1',
        description: 'Formal inauguration with mentor orientation. Get paired with industry experts and startup mentors.',
        icon: '🚀',
        color: 'from-green-500 to-emerald-500',
        bgColor: 'bg-green-500/10',
        details: ['Inauguration', 'Mentor Pairing', 'Team Prep']
    },
    {
        phase: '04',
        title: 'Build',
        subtitle: '24 Hours',
        description: 'The core 24-hour continuous development phase. No breaks - simulate a high-pressure product shipping environment.',
        icon: '⚡',
        color: 'from-yellow-500 to-orange-500',
        bgColor: 'bg-yellow-500/10',
        details: ['Non-Stop Coding', 'Mentor Support', 'Prototype Building']
    },
    {
        phase: '05',
        title: 'Scale',
        subtitle: 'Finale',
        description: 'Final presentations to jury. Teams present prototype walkthroughs, problem-solution explanations, and scalability discussions.',
        icon: '🏆',
        color: 'from-red-500 to-pink-500',
        bgColor: 'bg-red-500/10',
        details: ['Demo Day', 'Jury Evaluation', 'Winners Announced']
    }
];

export default function HorizontalJourney() {
    return (
        <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-[var(--background)]">
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <div className="text-center mb-10 md:mb-16">
                    <ScrollReveal>
                        <span className="text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-[var(--primary)] mb-4 block">
                            The Journey
                        </span>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">
                            Your Path to <span className="gradient-text">Victory</span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto px-4">
                            From idea to impact – here&apos;s your 3-day adventure
                        </p>
                    </ScrollReveal>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line - left on mobile, center on desktop */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-yellow-500 to-red-500 md:-translate-x-1/2" />

                    {/* Journey Steps */}
                    <div className="space-y-8 md:space-y-12">
                        {journeySteps.map((step, index) => (
                            <ScrollReveal key={step.phase} delay={index * 0.1}>
                                <div className={`relative flex items-start gap-4 md:gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                    {/* Timeline Node */}
                                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br flex items-center justify-center z-10 border-4 border-[var(--background)]"
                                        style={{ background: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
                                    >
                                        <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-xs font-bold`}>
                                            {step.phase}
                                        </div>
                                    </div>

                                    {/* Content Card */}
                                    <motion.div
                                        whileHover={{ y: -3 }}
                                        className={`
                                            ml-14 md:ml-0 md:w-[calc(50%-3rem)]
                                            ${index % 2 === 0 ? 'md:mr-auto md:pr-8 lg:pr-12' : 'md:ml-auto md:pl-8 lg:pl-12'}
                                            p-4 md:p-6 rounded-xl md:rounded-2xl border border-white/10 ${step.bgColor}
                                            backdrop-blur-sm hover:border-white/20 transition-colors
                                        `}
                                    >
                                        {/* Icon & Phase */}
                                        <div className="flex items-center gap-3 mb-3 md:mb-4">
                                            <span className="text-2xl md:text-4xl">{step.icon}</span>
                                            <div>
                                                <h3 className={`text-lg md:text-2xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                                                    {step.title}
                                                </h3>
                                                <p className="text-white/50 text-xs md:text-sm uppercase tracking-wider">
                                                    {step.subtitle}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-white/70 text-sm md:text-base leading-relaxed mb-3 md:mb-4">
                                            {step.description}
                                        </p>

                                        {/* Details Tags */}
                                        <div className="flex flex-wrap gap-1.5 md:gap-2">
                                            {step.details.map((detail, i) => (
                                                <span
                                                    key={i}
                                                    className={`px-2 md:px-3 py-0.5 md:py-1 rounded-full text-[10px] md:text-xs bg-gradient-to-r ${step.color} text-white/90`}
                                                >
                                                    {detail}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <ScrollReveal delay={0.5} className="mt-10 md:mt-16 text-center">
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-6 md:px-8 py-3 md:py-4 rounded-full bg-[var(--primary)] text-[var(--background)] font-bold text-base md:text-lg"
                    >
                        Start Your Journey →
                    </motion.button>
                </ScrollReveal>
            </div>
        </section>
    );
}
