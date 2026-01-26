'use client';

import ScrollReveal from '../animations/ScrollReveal';
import ParallaxSection from '../animations/ParallaxSection';

export default function AboutSection() {
    return (
        <section id="about" className="py-24 px-6 md:px-20 relative overflow-hidden">
            {/* Decorative Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            </div>

            <div className="max-w-[1400px] mx-auto relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        <ScrollReveal>
                            <span className="text-xs uppercase tracking-[0.3em] text-[var(--primary)]">
                                About the Event
                            </span>
                        </ScrollReveal>

                        <ScrollReveal delay={0.1}>
                            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
                                Where <span className="gradient-text">ideas</span> become <br />
                                <span className="text-outline text-outline-hover cursor-default inline-block">reality</span>
                            </h2>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <p className="text-white/70 text-lg leading-relaxed mb-6">
                                Hacklore is more than a hackathon—it&apos;s a 48-hour journey where
                                the brightest minds converge to build solutions that matter. From
                                AI to sustainability, we challenge you to push boundaries.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <p className="text-white/70 text-lg leading-relaxed mb-8">
                                Join our community of innovators, meet industry mentors, and
                                compete for over $50,000 in prizes. Whether you&apos;re a seasoned
                                developer or just starting out, there&apos;s a place for you here.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.4}>
                            <div className="flex flex-wrap gap-4">
                                <div className="px-4 py-2 rounded-full glass-panel text-sm">
                                    ✨ 48 Hours of Hacking
                                </div>
                                <div className="px-4 py-2 rounded-full glass-panel text-sm">
                                    🎯 6 Unique Tracks
                                </div>
                                <div className="px-4 py-2 rounded-full glass-panel text-sm">
                                    🏆 $50k+ in Prizes
                                </div>
                                <div className="px-4 py-2 rounded-full glass-panel text-sm">
                                    🌍 Hybrid Event
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right Visual */}
                    <ParallaxSection speed={0.3} className="relative">
                        <ScrollReveal variant="scale" delay={0.3}>
                            <div className="relative">
                                {/* Main Card */}
                                <div className="glass-panel rounded-3xl p-8 border border-white/10 relative overflow-hidden">
                                    {/* Shimmer effect */}
                                    <div className="absolute inset-0 shimmer" />

                                    <div className="relative z-10 space-y-8">
                                        {/* Feature 1 */}
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                                                <span className="text-2xl">🚀</span>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-1">Launch Your Ideas</h4>
                                                <p className="text-white/60 text-sm">Turn concepts into working prototypes in just 48 hours.</p>
                                            </div>
                                        </div>

                                        {/* Feature 2 */}
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                                                <span className="text-2xl">🤝</span>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-1">Connect & Collaborate</h4>
                                                <p className="text-white/60 text-sm">Network with like-minded innovators from around the world.</p>
                                            </div>
                                        </div>

                                        {/* Feature 3 */}
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                                                <span className="text-2xl">📚</span>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-1">Learn from Experts</h4>
                                                <p className="text-white/60 text-sm">Access workshops and mentorship from industry leaders.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating decorative elements */}
                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[var(--primary)]/20 rounded-full blur-2xl" />
                                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl" />
                            </div>
                        </ScrollReveal>
                    </ParallaxSection>
                </div>
            </div>
        </section>
    );
}
