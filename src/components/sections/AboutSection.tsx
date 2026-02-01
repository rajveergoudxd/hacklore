'use client';

import ScrollReveal from '../animations/ScrollReveal';

export default function AboutSection() {
    return (
        <section id="about" className="py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 relative bg-[var(--background)]">
            <div className="max-w-[1400px] mx-auto relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                        <ScrollReveal>
                            <span className="text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-[var(--primary)]">
                                What is Hacklore?
                            </span>
                        </ScrollReveal>

                        <ScrollReveal delay={0.1}>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-4 md:mb-6 leading-tight">
                                24 Hours. <span className="gradient-text">One Codebase.</span><br className="hidden sm:block" />
                                <span className="text-white">Infinite Possibilities.</span>
                            </h2>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                                Hacklore is a high-intensity, 24-hour continuous hackathon designed for builders
                                who want to push their limits. No sleep breaks. No hand-holding. Just you, your
                                team, and the code—simulating the pressure of shipping a real product under deadline.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                                Whether you&apos;re building an AI model, securing a network, deploying smart contracts,
                                or hacking on something entirely new—this is your arena. Mentors from the industry
                                will be available for technical unblocks, but the execution is on you.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.4}>
                            <div className="flex flex-wrap gap-2 md:gap-3 justify-center lg:justify-start">
                                <div className="px-3 md:px-4 py-2 rounded-full glass-panel text-xs md:text-sm font-mono">
                                    <span className="text-[var(--primary)]">$</span> git push --force
                                </div>
                                <div className="px-3 md:px-4 py-2 rounded-full glass-panel text-xs md:text-sm font-mono">
                                    <span className="text-green-400">→</span> deployed in 24h
                                </div>
                                <div className="px-3 md:px-4 py-2 rounded-full glass-panel text-xs md:text-sm">
                                    🏆 ₹60,000 Prize Pool
                                </div>
                                <div className="px-3 md:px-4 py-2 rounded-full glass-panel text-xs md:text-sm">
                                    👥 100+ Hackers
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right Visual - Technical Focus */}
                    <ScrollReveal variant="scale" delay={0.3}>
                        <div className="glass-panel rounded-2xl md:rounded-3xl p-5 md:p-8 border border-white/10 bg-[var(--chrome-dark)]/60">
                            <div className="space-y-5 md:space-y-6">
                                {/* What You'll Build */}
                                <div className="flex items-start gap-3 md:gap-4">
                                    <div className="w-10 md:w-12 h-10 md:h-12 rounded-xl md:rounded-2xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                                        <span className="text-xl md:text-2xl">⚡</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1 text-sm md:text-base">Ship Real Products</h4>
                                        <p className="text-white/60 text-xs md:text-sm">No mockups—deploy working prototypes. Judges evaluate functional code, not pitch decks.</p>
                                    </div>
                                </div>

                                {/* Tech Stack Freedom */}
                                <div className="flex items-start gap-3 md:gap-4">
                                    <div className="w-10 md:w-12 h-10 md:h-12 rounded-xl md:rounded-2xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                                        <span className="text-xl md:text-2xl">🛠️</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1 text-sm md:text-base">Any Stack. Any Platform.</h4>
                                        <p className="text-white/60 text-xs md:text-sm">Python, Rust, Go, TypeScript—use whatever you&apos;re fastest with. Cloud, edge, or bare metal.</p>
                                    </div>
                                </div>

                                {/* Mentorship */}
                                <div className="flex items-start gap-3 md:gap-4">
                                    <div className="w-10 md:w-12 h-10 md:h-12 rounded-xl md:rounded-2xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                                        <span className="text-xl md:text-2xl">🧠</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1 text-sm md:text-base">Technical Mentors On-Call</h4>
                                        <p className="text-white/60 text-xs md:text-sm">Stuck on a bug at 3 AM? Industry engineers available for debugging sessions and architecture reviews.</p>
                                    </div>
                                </div>

                                {/* Team Size */}
                                <div className="flex items-start gap-3 md:gap-4">
                                    <div className="w-10 md:w-12 h-10 md:h-12 rounded-xl md:rounded-2xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                                        <span className="text-xl md:text-2xl">👥</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1 text-sm md:text-base">Teams of 2-4</h4>
                                        <p className="text-white/60 text-xs md:text-sm">Small squads move fast. Bring your crew or find teammates at the event.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
