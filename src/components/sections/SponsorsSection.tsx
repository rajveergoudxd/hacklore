'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import ScrollReveal from '../animations/ScrollReveal';
import StaggerContainer, { StaggerItem } from '../animations/StaggerContainer';

const sponsors = [
    { name: 'Google', tier: 'platinum', logo: '🔷' },
    { name: 'Microsoft', tier: 'platinum', logo: '🟦' },
    { name: 'AWS', tier: 'gold', logo: '🟧' },
    { name: 'Vercel', tier: 'gold', logo: '▲' },
    { name: 'Stripe', tier: 'gold', logo: '💳' },
    { name: 'MongoDB', tier: 'silver', logo: '🍃' },
    { name: 'Figma', tier: 'silver', logo: '🎨' },
    { name: 'GitHub', tier: 'silver', logo: '🐙' }
];

const tierConfig = {
    platinum: { size: 'text-5xl', bg: 'from-gray-200/20 to-gray-100/10', border: 'border-gray-200/40' },
    gold: { size: 'text-4xl', bg: 'from-yellow-500/20 to-orange-500/10', border: 'border-yellow-500/30' },
    silver: { size: 'text-3xl', bg: 'from-gray-400/20 to-gray-300/10', border: 'border-gray-400/30' }
};

export default function SponsorsSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    });

    const x = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

    return (
        <section id="sponsors" ref={containerRef} className="py-24 px-6 md:px-20 relative overflow-hidden">
            {/* Floating Background Elements */}
            <motion.div
                style={{ x }}
                className="absolute top-20 -left-20 w-96 h-96 bg-[var(--primary)]/10 rounded-full blur-3xl pointer-events-none"
            />
            <motion.div
                style={{ x: useTransform(scrollYProgress, [0, 1], ['10%', '-10%']) }}
                className="absolute bottom-20 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"
            />

            <div className="max-w-[1400px] mx-auto relative">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <ScrollReveal>
                        <span className="text-xs uppercase tracking-[0.3em] text-[var(--primary)]">
                            Partners
                        </span>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
                            Our <span className="gradient-text">Sponsors</span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto">
                            Backed by industry leaders who believe in the power of innovation.
                        </p>
                    </ScrollReveal>
                </div>

                {/* Sponsors Grid */}
                <div className="space-y-12">
                    {/* Platinum Sponsors */}
                    <div>
                        <ScrollReveal>
                            <h3 className="text-sm uppercase tracking-widest text-gray-200/60 mb-6 text-center">
                                Platinum Partners
                            </h3>
                        </ScrollReveal>
                        <StaggerContainer className="flex justify-center gap-8 flex-wrap">
                            {sponsors
                                .filter((s) => s.tier === 'platinum')
                                .map((sponsor) => (
                                    <StaggerItem key={sponsor.name}>
                                        <SponsorCard sponsor={sponsor} tier="platinum" />
                                    </StaggerItem>
                                ))}
                        </StaggerContainer>
                    </div>

                    {/* Gold Sponsors */}
                    <div>
                        <ScrollReveal>
                            <h3 className="text-sm uppercase tracking-widest text-yellow-500/60 mb-6 text-center">
                                Gold Partners
                            </h3>
                        </ScrollReveal>
                        <StaggerContainer className="flex justify-center gap-6 flex-wrap">
                            {sponsors
                                .filter((s) => s.tier === 'gold')
                                .map((sponsor) => (
                                    <StaggerItem key={sponsor.name}>
                                        <SponsorCard sponsor={sponsor} tier="gold" />
                                    </StaggerItem>
                                ))}
                        </StaggerContainer>
                    </div>

                    {/* Silver Sponsors */}
                    <div>
                        <ScrollReveal>
                            <h3 className="text-sm uppercase tracking-widest text-gray-400/60 mb-6 text-center">
                                Silver Partners
                            </h3>
                        </ScrollReveal>
                        <StaggerContainer className="flex justify-center gap-4 flex-wrap">
                            {sponsors
                                .filter((s) => s.tier === 'silver')
                                .map((sponsor) => (
                                    <StaggerItem key={sponsor.name}>
                                        <SponsorCard sponsor={sponsor} tier="silver" />
                                    </StaggerItem>
                                ))}
                        </StaggerContainer>
                    </div>
                </div>

                {/* Become a Sponsor CTA */}
                <ScrollReveal delay={0.4} className="mt-16 text-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 rounded-full border border-white/20 text-white hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors"
                    >
                        Become a Sponsor →
                    </motion.button>
                </ScrollReveal>
            </div>
        </section>
    );
}

function SponsorCard({
    sponsor,
    tier
}: {
    sponsor: typeof sponsors[0];
    tier: 'platinum' | 'gold' | 'silver';
}) {
    const config = tierConfig[tier];

    return (
        <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className={`
        p-8 rounded-2xl border ${config.border}
        bg-gradient-to-br ${config.bg}
        backdrop-blur-sm cursor-pointer
        transition-all duration-300
        hover:shadow-[0_0_30px_rgba(242,162,13,0.2)]
      `}
        >
            <div className={`${config.size} mb-2 text-center`}>{sponsor.logo}</div>
            <p className="text-white/80 text-sm font-medium text-center">{sponsor.name}</p>
        </motion.div>
    );
}
