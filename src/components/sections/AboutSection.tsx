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
                                About the Event
                            </span>
                        </ScrollReveal>

                        <ScrollReveal delay={0.1}>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-4 md:mb-6 leading-tight">
                                Fostering the <span className="gradient-text">Next Generation</span> of <br className="hidden sm:block" />
                                <span className="text-white">Founders</span>
                            </h2>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                                Innovation and entrepreneurship are critical drivers of sustainable economic development.
                                This hackathon provides a structured platform for students to ideate, build, and present
                                technology-driven solutions addressing real-world challenges.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                                Join our community of innovators, meet industry mentors and experts, and
                                compete for ₹60,000 in prizes. Whether you&apos;re a first-time hacker or a
                                seasoned developer, this is your launchpad to scale your ideas.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.4}>
                            <div className="flex flex-wrap gap-2 md:gap-4 justify-center lg:justify-start">
                                <div className="px-3 md:px-4 py-2 rounded-full glass-panel text-xs md:text-sm">
                                    💡 Promote Innovation Culture
                                </div>
                                <div className="px-3 md:px-4 py-2 rounded-full glass-panel text-xs md:text-sm">
                                    🛠️ Tech-Driven Solutions
                                </div>
                                <div className="px-3 md:px-4 py-2 rounded-full glass-panel text-xs md:text-sm">
                                    🏆 ₹60,000 Prize Pool
                                </div>
                                <div className="px-3 md:px-4 py-2 rounded-full glass-panel text-xs md:text-sm">
                                    🤝 Industry Expert Mentors
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right Visual - Simplified */}
                    <ScrollReveal variant="scale" delay={0.3}>
                        <div className="glass-panel rounded-2xl md:rounded-3xl p-5 md:p-8 border border-white/10 bg-[var(--chrome-dark)]/60">
                            <div className="space-y-5 md:space-y-8">
                                {/* Feature 1 */}
                                <div className="flex items-start gap-3 md:gap-4">
                                    <div className="w-10 md:w-12 h-10 md:h-12 rounded-xl md:rounded-2xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                                        <span className="text-xl md:text-2xl">💡</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1 text-sm md:text-base">Culture of Innovation</h4>
                                        <p className="text-white/60 text-xs md:text-sm">Promote innovation and startup culture among students across Madhya Pradesh.</p>
                                    </div>
                                </div>

                                {/* Feature 2 */}
                                <div className="flex items-start gap-3 md:gap-4">
                                    <div className="w-10 md:w-12 h-10 md:h-12 rounded-xl md:rounded-2xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                                        <span className="text-xl md:text-2xl">🛠️</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1 text-sm md:text-base">Real-World Solutions</h4>
                                        <p className="text-white/60 text-xs md:text-sm">Build tech-driven solutions for societal, industrial, and governance challenges.</p>
                                    </div>
                                </div>

                                {/* Feature 3 */}
                                <div className="flex items-start gap-3 md:gap-4">
                                    <div className="w-10 md:w-12 h-10 md:h-12 rounded-xl md:rounded-2xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                                        <span className="text-xl md:text-2xl">🤝</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1 text-sm md:text-base">Connect with Experts</h4>
                                        <p className="text-white/60 text-xs md:text-sm">Interact with mentors, industry professionals, and government initiatives.</p>
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
