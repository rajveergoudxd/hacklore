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
        <footer className="relative z-10 w-full px-6 md:px-20 py-16 border-t border-white/5 bg-[var(--background)]/80 backdrop-blur-md">
            <div className="max-w-[1400px] mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <Link href="/" className="inline-block mb-4">
                            <span className="text-2xl font-bold">
                                HACK<span className="text-[var(--primary)]">LORE</span>
                            </span>
                        </Link>
                        <p className="text-white/50 text-sm leading-relaxed mb-6">
                            Hacklore - The Ultimate Innovation Hackathon 2026. A 24-hour
                            continuous innovation marathon fostering the next generation of founders.
                        </p>

                        <div className="flex gap-3">
                            {footerLinks.connect.map((link) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-lg hover:border-[var(--primary)]/50 transition-colors"
                                    title={link.label}
                                >
                                    {link.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Event Links */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
                            Event
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.event.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-white/60 hover:text-white transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
                            Resources
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-white/60 hover:text-white transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
                            Stay Updated
                        </h4>
                        <p className="text-white/50 text-sm mb-4">
                            Get the latest updates on Hacklore 2026.
                        </p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="you@email.com"
                                className="flex-1 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[var(--primary)]/50 transition-colors"
                            />
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-4 py-2 rounded-full bg-[var(--primary)] text-[var(--background)] text-sm font-bold"
                            >
                                →
                            </motion.button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2 text-white/40 text-sm">
                        <span>©</span>
                        <span>2026 Hacklore. Madhya Pradesh, India.</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-white/40">
                        <span>Made with</span>
                        <span className="text-red-400">❤</span>
                        <span>by the community</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
