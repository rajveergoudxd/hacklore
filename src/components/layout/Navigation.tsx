'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';

const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#tracks', label: 'Tracks' },
    { href: '#schedule', label: 'Schedule' },
    { href: '#sponsors', label: 'Sponsors' },
    { href: '#faq', label: 'FAQ' }
];

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="w-full flex justify-center py-6 px-4 fixed top-0 z-50">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`
          glass-panel px-2 py-2 rounded-full flex items-center gap-2 max-w-fit shadow-2xl
          transition-all duration-300
          ${isScrolled ? 'bg-black/60' : ''}
        `}
            >
                {/* Logo */}
                <Link
                    href="/"
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 text-white hover:bg-[var(--primary)] hover:text-[var(--background)] transition-colors duration-300"
                >
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="w-5 h-5"
                    >
                        <path d="M4 17l6-6-6-6M12 19h8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-1 px-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/5"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Register Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="h-10 px-5 rounded-full bg-white text-[var(--background)] text-sm font-bold hover:bg-[var(--primary)] transition-colors"
                >
                    Register
                </motion.button>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden h-10 w-10 flex items-center justify-center rounded-full bg-white/5 text-white"
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                        {isMobileMenuOpen ? (
                            <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                        ) : (
                            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
                        )}
                    </svg>
                </button>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-24 left-4 right-4 md:hidden glass-panel rounded-2xl p-4 shadow-2xl"
                    >
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
