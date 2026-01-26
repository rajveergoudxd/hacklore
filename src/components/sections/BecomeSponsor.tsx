'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import ScrollReveal from '../animations/ScrollReveal';

const sponsorBenefits = [
    {
        icon: '👁️',
        title: 'Brand Visibility',
        description: 'Get your brand in front of 300-400 innovative minds and future tech leaders.'
    },
    {
        icon: '🎯',
        title: 'Talent Access',
        description: 'Connect with top student developers and designers for recruitment opportunities.'
    },
    {
        icon: '🚀',
        title: 'Innovation Showcase',
        description: 'Demo your products and APIs to engaged participants who will build with them.'
    },
    {
        icon: '🤝',
        title: 'Community Impact',
        description: 'Support the startup ecosystem in Madhya Pradesh and shape future entrepreneurs.'
    }
];

export default function BecomeSponsor() {
    const [formData, setFormData] = useState({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        website: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset after showing success
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                companyName: '',
                contactName: '',
                email: '',
                phone: '',
                website: '',
                message: ''
            });
        }, 3000);
    };

    return (
        <section className="py-24 px-6 md:px-20 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-[var(--primary)]/10 blur-3xl"
                    animate={{ x: [-20, 20, -20] }}
                    transition={{ duration: 10, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl"
                    animate={{ x: [20, -20, 20] }}
                    transition={{ duration: 12, repeat: Infinity }}
                />

                {/* Floating emojis */}
                <motion.span
                    className="absolute top-[15%] right-[15%] text-5xl opacity-20"
                    animate={{ y: [-10, 10, -10], rotate: [-5, 5, -5] }}
                    transition={{ duration: 5, repeat: Infinity }}
                >
                    💎
                </motion.span>
                <motion.span
                    className="absolute bottom-[20%] left-[10%] text-4xl opacity-20"
                    animate={{ y: [10, -10, 10], rotate: [5, -5, 5] }}
                    transition={{ duration: 6, repeat: Infinity }}
                >
                    🌟
                </motion.span>
            </div>

            <div className="max-w-[1400px] mx-auto relative">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <ScrollReveal>
                        <div className="inline-flex items-center gap-3 mb-4">
                            <motion.span
                                className="text-3xl"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                🤝
                            </motion.span>
                            <span className="text-xs uppercase tracking-[0.3em] text-[var(--primary)]">
                                Partner With Us
                            </span>
                            <motion.span
                                className="text-3xl"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                            >
                                💼
                            </motion.span>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <h2 className="text-4xl md:text-6xl font-bold mb-4">
                            Want to be a <span className="gradient-text">Sponsor</span>?
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto">
                            Join us in fostering the next generation of innovators and entrepreneurs in Madhya Pradesh! 🚀
                        </p>
                    </ScrollReveal>
                </div>

                {/* Why Sponsor - Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {sponsorBenefits.map((benefit, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <motion.div
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-[var(--primary)]/50 transition-all h-full group"
                            >
                                <motion.div
                                    className="text-5xl mb-4"
                                    animate={{ rotate: [0, 5, -5, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                                >
                                    {benefit.icon}
                                </motion.div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--primary)] transition-colors">
                                    {benefit.title}
                                </h3>
                                <p className="text-white/60 text-sm">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Sponsorship Inquiry Form */}
                <ScrollReveal>
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-10">
                            <motion.span
                                className="text-5xl inline-block mb-4"
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            >
                                📝
                            </motion.span>
                            <h3 className="text-2xl md:text-3xl font-bold mb-2">
                                Get in <span className="gradient-text">Touch</span>
                            </h3>
                            <p className="text-white/50">
                                Fill out the form below and we&apos;ll get back to you within 24 hours
                            </p>
                        </div>

                        <motion.form
                            onSubmit={handleSubmit}
                            className="relative p-8 md:p-10 rounded-3xl glass-panel border border-white/10"
                            whileHover={{ borderColor: 'rgba(242, 162, 13, 0.3)' }}
                        >
                            {/* Success Overlay */}
                            {isSubmitted && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[var(--background)]/95 rounded-3xl"
                                >
                                    <motion.span
                                        className="text-7xl mb-4"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: [0, 1.2, 1] }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        ✅
                                    </motion.span>
                                    <h4 className="text-2xl font-bold mb-2">Thank You!</h4>
                                    <p className="text-white/60">We&apos;ll be in touch soon.</p>
                                </motion.div>
                            )}

                            {/* Background decoration */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-purple-500/5 rounded-3xl pointer-events-none" />

                            <div className="relative z-10 space-y-6">
                                {/* Row 1: Company & Contact Name */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="companyName" className="text-sm text-white/60 block">
                                            Company Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="companyName"
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleChange}
                                            required
                                            placeholder="Acme Inc."
                                            className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="contactName" className="text-sm text-white/60 block">
                                            Contact Person *
                                        </label>
                                        <input
                                            type="text"
                                            id="contactName"
                                            name="contactName"
                                            value={formData.contactName}
                                            onChange={handleChange}
                                            required
                                            placeholder="John Doe"
                                            className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Row 2: Email & Phone */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm text-white/60 block">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="john@company.com"
                                            className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm text-white/60 block">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+91 9876543210"
                                            className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Row 3: Website */}
                                <div className="space-y-2">
                                    <label htmlFor="website" className="text-sm text-white/60 block">
                                        Company Website
                                    </label>
                                    <input
                                        type="url"
                                        id="website"
                                        name="website"
                                        value={formData.website}
                                        onChange={handleChange}
                                        placeholder="https://company.com"
                                        className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 transition-all"
                                    />
                                </div>

                                {/* Row 4: Message */}
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm text-white/60 block">
                                        How would you like to partner with us? *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        placeholder="Tell us about your sponsorship interests, partnership ideas, or any questions you have..."
                                        className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 transition-all resize-none"
                                    />
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                    className={`
                                        w-full py-4 rounded-full font-bold text-lg transition-all
                                        ${isSubmitting
                                            ? 'bg-white/20 text-white/50 cursor-not-allowed'
                                            : 'bg-[var(--primary)] text-[var(--background)] cartoon-shadow hover:shadow-[0_0_30px_rgba(242,162,13,0.4)]'
                                        }
                                    `}
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <motion.span
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                                className="inline-block"
                                            >
                                                ⏳
                                            </motion.span>
                                            Submitting...
                                        </span>
                                    ) : (
                                        <span className="flex items-center justify-center gap-2">
                                            Submit Inquiry
                                            <motion.span
                                                animate={{ x: [0, 5, 0] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                            >
                                                →
                                            </motion.span>
                                        </span>
                                    )}
                                </motion.button>

                                {/* Alternative Contact */}
                                <p className="text-center text-white/40 text-sm">
                                    Or email us directly at{' '}
                                    <a
                                        href="mailto:sponsors@hacklore.com"
                                        className="text-[var(--primary)] hover:underline"
                                    >
                                        sponsors@hacklore.com
                                    </a>
                                </p>
                            </div>
                        </motion.form>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
