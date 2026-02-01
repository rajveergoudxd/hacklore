'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

const footerLinks = {
    event: [
        { label: 'About', href: '#about' },
        { label: 'Tracks', href: '#tracks' },
        { label: 'Schedule', href: '#schedule' },
        { label: 'Sponsors', href: '#sponsors' }
    ],
    resources: [
        { label: 'FAQ', href: '#faq' },
        { label: 'Code of Conduct', href: '#' },
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms', href: '#' }
    ],
    connect: [
        { label: 'Discord', href: '#', icon: '💬' },
        { label: 'Twitter', href: '#', icon: '𝕏' },
        { label: 'LinkedIn', href: '#', icon: '💼' },
        { label: 'GitHub', href: '#', icon: '🐙' }
    ]
};

export default function Footer() {
    return (
        <footer className="relative z-10 w-full px-4 sm:px-6 md:px-12 lg:px-20 py-10 md:py-16 border-t border-white/5 bg-[var(--background)]">
            <div className="max-w-[1400px] mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-16">
                    {/* Brand - Full width on smallest mobile */}
                    <div className="col-span-2 sm:col-span-2 md:col-span-1">
                        <Link href="/" className="inline-block mb-4">
                            <span className="text-xl md:text-2xl font-bold">
                                HACK<span className="text-[var(--primary)]">LORE</span>
                            </span>
                        </Link>
                        <p className="text-white/50 text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
                            Hacklore - The Ultimate Innovation Hackathon 2026. A 24-hour
                            continuous innovation marathon fostering the next generation of founders.
                        </p>

                        <div className="flex gap-2 md:gap-3">
                            {footerLinks.connect.map((link) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    className="w-8 md:w-10 h-8 md:h-10 rounded-full glass-panel flex items-center justify-center text-sm md:text-lg hover:border-[var(--primary)]/50 transition-colors"
                                    title={link.label}
                                >
                                    {link.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Event Links */}
                    <div>
                        <h4 className="text-xs md:text-sm font-semibold uppercase tracking-wider text-white/40 mb-3 md:mb-4">
                            Event
                        </h4>
                        <ul className="space-y-2 md:space-y-3">
                            {footerLinks.event.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-white/60 hover:text-white transition-colors text-xs md:text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h4 className="text-xs md:text-sm font-semibold uppercase tracking-wider text-white/40 mb-3 md:mb-4">
                            Resources
                        </h4>
                        <ul className="space-y-2 md:space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-white/60 hover:text-white transition-colors text-xs md:text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="col-span-2 sm:col-span-1">
                        <h4 className="text-xs md:text-sm font-semibold uppercase tracking-wider text-white/40 mb-3 md:mb-4">
                            Stay Updated
                        </h4>
                        <p className="text-white/50 text-xs md:text-sm mb-3 md:mb-4">
                            Get the latest updates on Hacklore 2026.
                        </p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="you@email.com"
                                className="flex-1 min-w-0 px-3 md:px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white placeholder-white/40 text-xs md:text-sm focus:outline-none focus:border-[var(--primary)]/50 transition-colors"
                            />
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-3 md:px-4 py-2 rounded-full bg-[var(--primary)] text-[var(--background)] text-xs md:text-sm font-bold flex-shrink-0"
                            >
                                →
                            </motion.button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 md:pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
                    <div className="flex items-center gap-2 text-white/40 text-xs md:text-sm">
                        <span>©</span>
                        <span>2026 Hacklore. Madhya Pradesh, India.</span>
                    </div>
                    <div className="flex items-center gap-2 md:gap-4 text-xs md:text-sm text-white/40">
                        <span>Made with</span>
                        <span className="text-red-400">❤</span>
                        <span>by the community</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
