'use client';

import ScrollReveal from '../animations/ScrollReveal';
import StaggerContainer, { StaggerItem } from '../animations/StaggerContainer';
import Tilt3D from '../animations/Tilt3D';

const tracks = [
    {
        id: 'ai-ml',
        title: 'AI & Machine Learning',
        description: 'Build intelligent systems that learn, adapt, and transform industries.',
        icon: '🧠',
        gradient: 'from-purple-500/20 to-pink-500/20',
        borderColor: 'border-purple-500/30'
    },
    {
        id: 'web3',
        title: 'Web3 & Blockchain',
        description: 'Create decentralized apps and protocols for the next generation of the internet.',
        icon: '⛓️',
        gradient: 'from-blue-500/20 to-cyan-500/20',
        borderColor: 'border-blue-500/30'
    },
    {
        id: 'sustainability',
        title: 'Climate & Sustainability',
        description: 'Develop solutions that address environmental challenges and promote sustainability.',
        icon: '🌍',
        gradient: 'from-green-500/20 to-emerald-500/20',
        borderColor: 'border-green-500/30'
    },
    {
        id: 'health',
        title: 'Health & Wellness',
        description: 'Innovate healthcare technologies that improve lives and accessibility.',
        icon: '❤️',
        gradient: 'from-red-500/20 to-orange-500/20',
        borderColor: 'border-red-500/30'
    },
    {
        id: 'fintech',
        title: 'FinTech',
        description: 'Reimagine financial services with cutting-edge technology solutions.',
        icon: '💰',
        gradient: 'from-yellow-500/20 to-amber-500/20',
        borderColor: 'border-yellow-500/30'
    },
    {
        id: 'open',
        title: 'Open Innovation',
        description: 'Bring your wildest ideas to life. No boundaries, just pure innovation.',
        icon: '✨',
        gradient: 'from-indigo-500/20 to-violet-500/20',
        borderColor: 'border-indigo-500/30'
    }
];

export default function TracksSection() {
    return (
        <section id="tracks" className="py-24 px-6 md:px-20 relative">
            {/* Section Header */}
            <div className="max-w-[1400px] mx-auto mb-16">
                <ScrollReveal>
                    <span className="text-xs uppercase tracking-[0.3em] text-[var(--primary)]">
                        Explore
                    </span>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                    <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
                        Hackathon <span className="gradient-text">Tracks</span>
                    </h2>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                    <p className="text-white/60 text-lg max-w-2xl">
                        Choose your arena. Each track offers unique challenges and prizes.
                        Build something that matters.
                    </p>
                </ScrollReveal>
            </div>

            {/* Tracks Grid */}
            <StaggerContainer className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tracks.map((track, index) => (
                    <StaggerItem key={track.id}>
                        <Tilt3D className="h-full">
                            <div
                                className={`
                  h-full p-6 rounded-2xl border ${track.borderColor}
                  bg-gradient-to-br ${track.gradient}
                  backdrop-blur-sm cursor-pointer
                  transition-all duration-300
                  hover:border-[var(--primary)]/50
                  group
                `}
                            >
                                <div className="text-4xl mb-4">{track.icon}</div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--primary)] transition-colors">
                                    {track.title}
                                </h3>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    {track.description}
                                </p>
                                <div className="mt-4 flex items-center gap-2 text-sm text-white/40 group-hover:text-[var(--primary)] transition-colors">
                                    <span>Learn more</span>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </Tilt3D>
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </section>
    );
}
