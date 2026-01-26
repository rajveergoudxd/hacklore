'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import ScrollReveal from '../animations/ScrollReveal';

const journeySteps = [
    {
        phase: '01',
        title: 'Ideate',
        subtitle: 'Registration',
        description: 'Form your team of 2-4 members and choose your innovation track. Open online registration with domain selection.',
        icon: '💡',
        color: 'from-purple-500 to-pink-500',
        bgColor: 'bg-purple-500/20',
        details: ['Team Formation', 'Track Selection', 'Idea Brainstorming']
    },
    {
        phase: '02',
        title: 'Pitch',
        subtitle: 'Submission',
        description: 'Submit your idea via a 3-4 slide PPT or 4-5 minute video pitch. Expert panels review for innovation and feasibility.',
        icon: '🎯',
        color: 'from-blue-500 to-cyan-500',
        bgColor: 'bg-blue-500/20',
        details: ['PPT/Video Pitch', 'Expert Review', 'Shortlisting']
    },
    {
        phase: '03',
        title: 'Launch',
        subtitle: 'Day 1',
        description: 'Formal inauguration with mentor orientation. Get paired with industry experts and startup mentors.',
        icon: '🚀',
        color: 'from-green-500 to-emerald-500',
        bgColor: 'bg-green-500/20',
        details: ['Inauguration', 'Mentor Pairing', 'Team Prep']
    },
    {
        phase: '04',
        title: 'Build',
        subtitle: '24 Hours',
        description: 'The core 24-hour continuous development phase. No breaks - simulate a high-pressure product shipping environment.',
        icon: '⚡',
        color: 'from-yellow-500 to-orange-500',
        bgColor: 'bg-yellow-500/20',
        details: ['Non-Stop Coding', 'Mentor Support', 'Prototype Building']
    },
    {
        phase: '05',
        title: 'Scale',
        subtitle: 'Finale',
        description: 'Final presentations to jury. Teams present prototype walkthroughs, problem-solution explanations, and scalability discussions.',
        icon: '🏆',
        color: 'from-red-500 to-pink-500',
        bgColor: 'bg-red-500/20',
        details: ['Demo Day', 'Jury Evaluation', 'Winners Announced']
    }
];

export default function HorizontalJourney() {
    const containerRef = useRef<HTMLDivElement>(null);
    const horizontalRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    // Transform vertical scroll to horizontal movement
    const x = useTransform(scrollYProgress, [0, 1], ['5%', '-75%']);
    const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    // Opacity for entrance/exit
    const opacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

    // Scale effect
    const scale = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0.9, 1, 1, 0.9]);

    return (
        <section
            ref={containerRef}
            className="relative"
            style={{ height: '400vh' }} // Extended height for scroll-jacking
        >
            {/* Sticky Container */}
            <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
                <motion.div style={{ opacity, scale }}>
                    {/* Background Decorations */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        {/* Animated gradient orbs */}
                        <motion.div
                            className="absolute top-1/4 left-[10%] w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"
                            animate={{ x: [-20, 20, -20], y: [-10, 10, -10] }}
                            transition={{ duration: 10, repeat: Infinity }}
                        />
                        <motion.div
                            className="absolute bottom-1/4 right-[10%] w-80 h-80 rounded-full bg-yellow-500/10 blur-3xl"
                            animate={{ x: [20, -20, 20], y: [10, -10, 10] }}
                            transition={{ duration: 12, repeat: Infinity }}
                        />

                        {/* Floating emojis */}
                        <motion.span
                            className="absolute top-[20%] left-[5%] text-4xl opacity-30"
                            animate={{ y: [-10, 10, -10], rotate: [-10, 10, -10] }}
                            transition={{ duration: 5, repeat: Infinity }}
                        >
                            🎢
                        </motion.span>
                        <motion.span
                            className="absolute bottom-[20%] right-[5%] text-4xl opacity-30"
                            animate={{ y: [10, -10, 10], rotate: [10, -10, 10] }}
                            transition={{ duration: 6, repeat: Infinity }}
                        >
                            🎪
                        </motion.span>
                    </div>

                    {/* Header */}
                    <div className="px-6 md:px-20 mb-8">
                        <div className="max-w-[1400px] mx-auto">
                            <ScrollReveal>
                                <div className="inline-flex items-center gap-2 mb-4">
                                    <motion.span
                                        className="text-3xl"
                                        animate={{ rotate: [0, 10, -10, 0] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        🎢
                                    </motion.span>
                                    <span className="text-xs uppercase tracking-[0.3em] text-[var(--primary)]">
                                        The Innovator&apos;s Journey
                                    </span>
                                    <motion.span
                                        className="text-3xl"
                                        animate={{ rotate: [0, -10, 10, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                                    >
                                        🎢
                                    </motion.span>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal delay={0.1}>
                                <h2 className="text-4xl md:text-6xl font-bold mb-4">
                                    Your Path to <span className="gradient-text">Victory</span>
                                </h2>
                            </ScrollReveal>
                            <ScrollReveal delay={0.2}>
                                <p className="text-white/60 text-lg max-w-2xl">
                                    Scroll to explore your 3-day adventure from idea to impact! 🚀
                                </p>
                            </ScrollReveal>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="px-6 md:px-20 mb-8">
                        <div className="max-w-[1400px] mx-auto">
                            <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    style={{ width: progressWidth }}
                                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-500 via-yellow-500 to-red-500 rounded-full"
                                />
                                {/* Progress dots */}
                                <div className="absolute inset-0 flex justify-between items-center px-2">
                                    {journeySteps.map((step, i) => (
                                        <motion.div
                                            key={i}
                                            className="w-4 h-4 rounded-full bg-white/20 border-2 border-white/40 z-10"
                                            style={{
                                                backgroundColor: useTransform(
                                                    scrollYProgress,
                                                    [i / journeySteps.length, (i + 0.5) / journeySteps.length],
                                                    ['rgba(255,255,255,0.2)', 'rgba(242,162,13,1)']
                                                )
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                            {/* Phase labels */}
                            <div className="flex justify-between mt-2 text-xs text-white/40">
                                {journeySteps.map((step) => (
                                    <span key={step.phase}>{step.title}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Horizontal Scroll Container */}
                    <div className="overflow-hidden">
                        <motion.div
                            ref={horizontalRef}
                            style={{ x }}
                            className="flex gap-8 px-6 md:px-20"
                        >
                            {journeySteps.map((step, index) => (
                                <motion.div
                                    key={step.phase}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="flex-shrink-0 w-[85vw] md:w-[500px] lg:w-[550px]"
                                >
                                    <motion.div
                                        whileHover={{ y: -10, scale: 1.02 }}
                                        className={`
                                            relative h-[400px] md:h-[450px] p-8 rounded-3xl border border-white/10
                                            ${step.bgColor} backdrop-blur-sm
                                            transition-all duration-300
                                            hover:border-[var(--primary)]/50
                                            group cursor-pointer overflow-hidden
                                        `}
                                    >
                                        {/* Background Pattern */}
                                        <div className="absolute inset-0 opacity-10">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/20 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
                                        </div>

                                        {/* Phase Number Badge */}
                                        <motion.div
                                            className={`
                                                absolute -top-3 -left-3 w-16 h-16 rounded-2xl
                                                bg-gradient-to-br ${step.color}
                                                flex items-center justify-center
                                                text-white font-bold text-lg
                                                shadow-lg
                                            `}
                                            animate={{ rotate: [0, 5, -5, 0] }}
                                            transition={{ duration: 4, repeat: Infinity }}
                                        >
                                            {step.phase}
                                        </motion.div>

                                        {/* Icon */}
                                        <motion.div
                                            className="text-7xl mb-6 mt-8"
                                            animate={{
                                                y: [0, -10, 0],
                                                rotate: [0, 5, -5, 0]
                                            }}
                                            transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                                        >
                                            {step.icon}
                                        </motion.div>

                                        {/* Content */}
                                        <h3 className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                                            {step.title}
                                        </h3>
                                        <p className="text-white/60 text-sm uppercase tracking-wider mb-3">
                                            {step.subtitle}
                                        </p>
                                        <p className="text-white/70 leading-relaxed mb-6">
                                            {step.description}
                                        </p>

                                        {/* Details Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {step.details.map((detail, i) => (
                                                <span
                                                    key={i}
                                                    className={`px-3 py-1 rounded-full text-xs bg-gradient-to-r ${step.color} text-white/90`}
                                                >
                                                    {detail}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Connector Arrow (except last) */}
                                        {index < journeySteps.length - 1 && (
                                            <motion.div
                                                className="absolute right-4 top-1/2 -translate-y-1/2 text-4xl opacity-50"
                                                animate={{ x: [0, 10, 0] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                            >
                                                →
                                            </motion.div>
                                        )}
                                    </motion.div>
                                </motion.div>
                            ))}

                            {/* End Card */}
                            <motion.div className="flex-shrink-0 w-[85vw] md:w-[400px] flex items-center justify-center">
                                <div className="text-center p-8">
                                    <motion.div
                                        className="text-8xl mb-6"
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            rotate: [0, 10, -10, 0]
                                        }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        🎉
                                    </motion.div>
                                    <h3 className="text-3xl font-bold gradient-text mb-4">
                                        Ready to Begin?
                                    </h3>
                                    <p className="text-white/60 mb-6">
                                        Your innovation journey starts here!
                                    </p>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-8 py-4 rounded-full bg-[var(--primary)] text-[var(--background)] font-bold cartoon-shadow"
                                    >
                                        Register Now →
                                    </motion.button>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Scroll Hint */}
                    <div className="flex justify-center mt-8">
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="flex flex-col items-center gap-2 text-white/40"
                        >
                            <span className="text-sm">Keep scrolling to explore</span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                                <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
