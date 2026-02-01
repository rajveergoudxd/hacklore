'use client';

import { motion } from 'motion/react';
import ScrollReveal from '../animations/ScrollReveal';

const tracks = [
    {
        id: 'ai-social-good',
        icon: '🤖',
        title: 'AI for Social Good',
        tagline: 'Build intelligent solutions for humanity',
        description: 'Develop AI/ML applications that tackle real-world challenges—healthcare diagnostics, accessibility tools, environmental monitoring, or educational systems. Focus on ethical AI implementations with measurable social impact.',
        color: 'from-purple-500 to-violet-600',
        bgColor: 'bg-purple-500/10',
        techStack: ['TensorFlow', 'PyTorch', 'Hugging Face', 'OpenCV']
    },
    {
        id: 'cybersecurity',
        icon: '🔐',
        title: 'Cybersecurity',
        tagline: 'Defend the digital frontier',
        description: 'Build security tools, threat detection systems, or vulnerability scanners. Explore areas like network security, cryptographic protocols, secure authentication, or privacy-preserving technologies.',
        color: 'from-red-500 to-pink-600',
        bgColor: 'bg-red-500/10',
        techStack: ['Python', 'Rust', 'Wireshark', 'OWASP']
    },
    {
        id: 'web3',
        icon: '⛓️',
        title: 'Web3 & Blockchain',
        tagline: 'Decentralize the future',
        description: 'Create decentralized applications (dApps), smart contracts, or blockchain-based solutions. Focus on DeFi, NFT utilities, DAOs, or transparent governance systems that leverage distributed ledger technology.',
        color: 'from-blue-500 to-cyan-600',
        bgColor: 'bg-blue-500/10',
        techStack: ['Solidity', 'Ethereum', 'IPFS', 'Web3.js']
    },
    {
        id: 'open-innovation',
        icon: '🚀',
        title: 'Open Innovation',
        tagline: 'Limitless possibilities',
        description: 'Got a unique idea that doesn\'t fit the other tracks? This is your playground. Build anything innovative—IoT systems, developer tools, automation scripts, or entirely new concepts. Surprise us.',
        color: 'from-yellow-500 to-orange-600',
        bgColor: 'bg-yellow-500/10',
        techStack: ['Any Stack', 'Your Choice', 'Be Creative']
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
                            Pick your domain. Build something that matters. Ship it in 24 hours.
                        </p>
                    </ScrollReveal>
                </div>

                {/* Tracks Grid - 1 col on mobile, 2 on tablet/desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    {tracks.map((track, index) => (
                        <ScrollReveal key={track.id} delay={index * 0.1}>
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
            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-4">
                {track.description}
            </p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-1.5 md:gap-2">
                {track.techStack.map((tech, i) => (
                    <span
                        key={i}
                        className="px-2 md:px-3 py-0.5 md:py-1 rounded-full text-[10px] md:text-xs bg-white/10 text-white/70 border border-white/10"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}
