'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import ScrollReveal from '../animations/ScrollReveal';

const tracks = [
    {
        id: 'ai-ml',
        icon: '🤖',
        title: 'AI & Machine Learning',
        tagline: 'Build intelligent solutions',
        description: 'Develop AI-powered applications that solve real-world problems in healthcare, education, or sustainability.',
        color: 'from-purple-500 to-violet-600',
        glowColor: 'rgba(139,92,246,0.4)'
    },
    {
        id: 'fintech',
        icon: '💰',
        title: 'FinTech Innovation',
        tagline: 'Reimagine finance',
        description: 'Create solutions for digital payments, financial inclusion, or blockchain-based applications.',
        color: 'from-emerald-400 to-teal-600',
        glowColor: 'rgba(52,211,153,0.4)'
    },
    {
        id: 'healthtech',
        icon: '🏥',
        title: 'HealthTech',
        tagline: 'Transform healthcare',
        description: 'Build telemedicine platforms, health monitoring systems, or mental wellness applications.',
        color: 'from-red-400 to-pink-600',
        glowColor: 'rgba(248,113,113,0.4)'
    },
    {
        id: 'edtech',
        icon: '📚',
        title: 'EdTech Revolution',
        tagline: 'Democratize learning',
        description: 'Develop innovative e-learning platforms, skill development tools, or accessibility solutions.',
        color: 'from-blue-400 to-cyan-600',
        glowColor: 'rgba(96,165,250,0.4)'
    },
    {
        id: 'sustainability',
        icon: '🌱',
        title: 'Sustainability & GreenTech',
        tagline: 'Save the planet',
        description: 'Create solutions for climate change, waste management, or sustainable living.',
        color: 'from-green-400 to-lime-600',
        glowColor: 'rgba(74,222,128,0.4)'
    },
    {
        id: 'openinnovation',
        icon: '🚀',
        title: 'Open Innovation',
        tagline: 'Limitless possibilities',
        description: 'Got a unique idea? This track is for groundbreaking solutions that don\'t fit traditional categories.',
        color: 'from-yellow-400 to-orange-600',
        glowColor: 'rgba(251,191,36,0.4)'
    }
];

export default function VerticalFlowTracks() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    // Central element effects
    const centerScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.15, 0.95]);

    return (
        <section
            id="tracks"
            ref={containerRef}
            className="relative"
        >
            {/* Section Header */}
            <div className="py-16 px-6 md:px-20">
                <div className="max-w-[1400px] mx-auto text-center">
                    <ScrollReveal>
                        <span className="text-xs uppercase tracking-[0.3em] text-[var(--primary)] mb-4 block">
                            ⚔️ Battle Arenas ⚔️
                        </span>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <h2 className="text-4xl md:text-6xl font-bold mb-4">
                            Choose Your <span className="gradient-text">Arena</span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <p className="text-white/50 max-w-xl mx-auto">
                            Select your domain of innovation and conquer the challenge
                        </p>
                    </ScrollReveal>
                </div>
            </div>

            {/* Main Flow Container - Tighter height */}
            <div className="relative min-h-[180vh]">

                {/* STICKY CENTER ELEMENT */}
                <div className="sticky top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                    <div className="flex justify-center">
                        <motion.div
                            style={{ scale: centerScale }}
                            className="relative"
                        >
                            {/* Animated glow backdrop */}
                            <motion.div
                                className="absolute inset-0 w-56 h-56 md:w-72 md:h-72 rounded-full"
                                style={{
                                    background: 'radial-gradient(circle, rgba(242,162,13,0.25) 0%, transparent 60%)',
                                    filter: 'blur(30px)'
                                }}
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.4, 0.7, 0.4]
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />

                            {/* Rotating decorative rings */}
                            <motion.div
                                className="absolute inset-0 w-56 h-56 md:w-72 md:h-72 rounded-full border border-[var(--primary)]/20"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                            />
                            <motion.div
                                className="absolute inset-3 w-50 h-50 md:w-66 md:h-66 rounded-full border border-white/5"
                                animate={{ rotate: -360 }}
                                transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
                            />

                            {/* Core Element */}
                            <motion.div
                                className="w-56 h-56 md:w-72 md:h-72 rounded-full flex flex-col items-center justify-center"
                                style={{
                                    background: 'radial-gradient(circle, rgba(242,162,13,0.15) 0%, rgba(0,0,0,0.9) 70%)',
                                    backdropFilter: 'blur(30px)'
                                }}
                                animate={{
                                    boxShadow: [
                                        '0 0 50px 15px rgba(242,162,13,0.1)',
                                        '0 0 100px 40px rgba(242,162,13,0.25)',
                                        '0 0 50px 15px rgba(242,162,13,0.1)'
                                    ]
                                }}
                                transition={{ duration: 4, repeat: Infinity }}
                            >
                                <motion.span
                                    className="text-6xl md:text-7xl mb-3"
                                    animate={{ rotate: [0, 8, -8, 0] }}
                                    transition={{ duration: 5, repeat: Infinity }}
                                >
                                    ⚔️
                                </motion.span>
                                <span className="text-[var(--primary)] text-sm uppercase tracking-[0.25em] font-bold">
                                    Choose
                                </span>
                                <span className="text-white text-xl md:text-2xl font-bold">
                                    Your Arena
                                </span>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* VERTICAL FLOWING TRACK CONTENT - No boxes, just floating content */}
                <div className="relative z-10 px-6 md:px-20 -mt-[30vh]">
                    <div className="max-w-[1400px] mx-auto">
                        {tracks.map((track, index) => (
                            <FloatingTrackContent
                                key={track.id}
                                track={track}
                                index={index}
                                isLeft={index % 2 === 0}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function FloatingTrackContent({
    track,
    index,
    isLeft
}: {
    track: typeof tracks[0];
    index: number;
    isLeft: boolean;
}) {
    const itemRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: itemRef,
        offset: ['start end', 'end start']
    });

    // Smooth parallax movement
    const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
    const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);
    const x = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        isLeft ? [-30, 0, 30] : [30, 0, -30]
    );
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.85]);

    return (
        <motion.div
            ref={itemRef}
            style={{ y, x, opacity, scale }}
            className={`
                flex mb-16 md:mb-20
                ${isLeft ? 'justify-start' : 'justify-end'}
            `}
        >
            <motion.div
                whileHover={{ scale: 1.08, x: isLeft ? 20 : -20 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`
                    relative max-w-lg cursor-pointer group
                    ${isLeft ? 'text-left pr-8' : 'text-right pl-8'}
                `}
            >
                {/* Floating glow behind icon on hover */}
                <motion.div
                    className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                        width: '150px',
                        height: '150px',
                        background: `radial-gradient(circle, ${track.glowColor} 0%, transparent 70%)`,
                        filter: 'blur(30px)',
                        top: '-20px',
                        left: isLeft ? '-20px' : 'auto',
                        right: isLeft ? 'auto' : '-20px'
                    }}
                />

                {/* Track Number - subtle floating */}
                <motion.span
                    className="text-[120px] md:text-[180px] font-black text-white/[0.03] absolute -top-16 leading-none pointer-events-none select-none"
                    style={{
                        left: isLeft ? '-20px' : 'auto',
                        right: isLeft ? 'auto' : '-20px'
                    }}
                >
                    {String(index + 1).padStart(2, '0')}
                </motion.span>

                {/* Icon - Large and prominent */}
                <motion.div
                    className={`text-7xl md:text-8xl mb-4 relative z-10 ${isLeft ? '' : 'inline-block'}`}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, delay: index * 0.3 }}
                >
                    {track.icon}
                </motion.div>

                {/* Title - Big and bold */}
                <h3 className={`text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r ${track.color} bg-clip-text text-transparent mb-2 relative z-10 leading-tight`}>
                    {track.title}
                </h3>

                {/* Tagline */}
                <p className="text-white/40 text-sm md:text-base uppercase tracking-[0.2em] mb-4 relative z-10">
                    {track.tagline}
                </p>

                {/* Description */}
                <p className="text-white/60 text-base md:text-lg leading-relaxed relative z-10 max-w-md">
                    {track.description}
                </p>

                {/* Animated underline on hover */}
                <motion.div
                    className={`h-0.5 bg-gradient-to-r ${track.color} mt-6 origin-left group-hover:scale-x-100 scale-x-0 transition-transform duration-500`}
                    style={{
                        transformOrigin: isLeft ? 'left' : 'right'
                    }}
                />
            </motion.div>
        </motion.div>
    );
}
