'use client';

import { motion } from 'motion/react';
import ScrollReveal from '../animations/ScrollReveal';

const tracks = [
    {
        id: 'ai-ml',
        icon: '🤖',
        title: 'AI & Machine Learning',
        tagline: 'Build intelligent solutions',
        description: 'Develop AI-powered applications that solve real-world problems in healthcare, education, or sustainability.',
        color: 'from-purple-500 to-violet-600',
        bgColor: 'bg-purple-500/10'
    },
    {
        id: 'fintech',
        icon: '💰',
        title: 'FinTech Innovation',
        tagline: 'Reimagine finance',
        description: 'Create solutions for digital payments, financial inclusion, or blockchain-based applications.',
        color: 'from-emerald-400 to-teal-600',
        bgColor: 'bg-emerald-500/10'
    },
    {
        id: 'healthtech',
        icon: '🏥',
        title: 'HealthTech',
        tagline: 'Transform healthcare',
        description: 'Build telemedicine platforms, health monitoring systems, or mental wellness applications.',
        color: 'from-red-400 to-pink-600',
        bgColor: 'bg-red-500/10'
    },
    {
        id: 'edtech',
        icon: '📚',
        title: 'EdTech Revolution',
        tagline: 'Democratize learning',
        description: 'Develop innovative e-learning platforms, skill development tools, or accessibility solutions.',
        color: 'from-blue-400 to-cyan-600',
        bgColor: 'bg-blue-500/10'
    },
    {
        id: 'sustainability',
        icon: '🌱',
        title: 'Sustainability & GreenTech',
        tagline: 'Save the planet',
        description: 'Create solutions for climate change, waste management, or sustainable living.',
        color: 'from-green-400 to-lime-600',
        bgColor: 'bg-green-500/10'
    },
    {
        id: 'openinnovation',
        icon: '🚀',
        title: 'Open Innovation',
        tagline: 'Limitless possibilities',
        description: 'Got a unique idea? This track is for groundbreaking solutions that don\'t fit traditional categories.',
        color: 'from-yellow-400 to-orange-600',
        bgColor: 'bg-yellow-500/10'
    }
];

export default function ImmersiveTracks() {
    return (
        <section id="tracks" className="py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-[var(--background)]">
            {/* Section Header */}
            <div className="max-w-[1400px] mx-auto">
                <div className="text-center mb-10 md:mb-16">
                    <ScrollReveal>
                        <span className="text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-[var(--primary)] mb-4 block">
                            Innovation Tracks
                        </span>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">
                            Choose Your <span className="gradient-text">Arena</span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <p className="text-white/60 max-w-xl mx-auto text-base md:text-lg px-4">
                            Select your domain of innovation and build solutions that matter
                        </p>
                    </ScrollReveal>
                </div>

                {/* Tracks Grid - 1 col on mobile, 2 on tablet, 3 on desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {tracks.map((track, index) => (
                        <ScrollReveal key={track.id} delay={index * 0.08}>
                            <TrackCard track={track} />
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

function TrackCard({ track }: { track: typeof tracks[0] }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className={`
                relative p-5 md:p-8 rounded-xl md:rounded-2xl border border-white/10
                ${track.bgColor}
                backdrop-blur-sm cursor-pointer
                hover:border-white/20 transition-colors
                h-full
            `}
        >
            {/* Icon */}
            <div className="text-3xl md:text-5xl mb-3 md:mb-4">
                {track.icon}
            </div>

            {/* Title */}
            <h3 className={`text-lg md:text-2xl font-bold bg-gradient-to-r ${track.color} bg-clip-text text-transparent mb-1 md:mb-2`}>
                {track.title}
            </h3>

            {/* Tagline */}
            <p className="text-white/50 text-xs md:text-sm uppercase tracking-wider mb-2 md:mb-4">
                {track.tagline}
            </p>

            {/* Description */}
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
                {track.description}
            </p>
        </motion.div>
    );
}
