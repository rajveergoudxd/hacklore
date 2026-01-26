'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ScrollReveal from '../animations/ScrollReveal';

const faqs = [
    {
        question: 'Who can participate in Innovation & Startup Hackathon 2026?',
        answer: "The hackathon is open to students and aspiring entrepreneurs from colleges across Madhya Pradesh. Teams can have 2-4 members. Whether you're a developer, designer, or domain expert, you're welcome to join."
    },
    {
        question: 'What are the prizes?',
        answer: 'We have a total prize pool of ₹60,000! Prizes will be awarded to winning teams across different tracks. Additional outcomes include skill enhancement, networking opportunities, and identification of startup-ready solutions for incubation.'
    },
    {
        question: 'How does the selection process work?',
        answer: "After registration, you'll submit a 3-4 slide PPT or 4-5 minute video pitch. Expert panels will review submissions based on innovation, feasibility, and impact. Shortlisted teams will be invited to the 24-hour hackathon."
    },
    {
        question: 'What happens during the 24-hour hackathon?',
        answer: "It's an intensive development phase where teams work continuously to build functional prototypes. You'll have active mentorship throughout the night from startup mentors and industry experts. No breaks during the 24-hour cycle to simulate a high-pressure product shipping environment."
    },
    {
        question: 'What are the judging criteria?',
        answer: 'Projects are evaluated on: 1) Innovation and technical depth, 2) Practical applicability, 3) Societal or economic impact, and 4) Startup readiness and scalability. Teams present prototype walkthroughs and problem-solution explanations.'
    },
    {
        question: 'What are the focus areas/tracks?',
        answer: 'There are 6 innovation tracks: Smart Cities & Urban Innovation, Digital Governance & Public Services, AI & Data-Driven Applications, Sustainability & Clean Energy, Healthcare & Education Technology, and Startup & MSME Enablement.'
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 px-6 md:px-20 relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-px h-40 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                <div className="absolute top-1/3 right-1/3 w-px h-60 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                <div className="absolute bottom-1/4 left-1/3 w-px h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            </div>

            <div className="max-w-[900px] mx-auto relative">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <ScrollReveal>
                        <span className="text-xs uppercase tracking-[0.3em] text-[var(--primary)]">
                            Questions
                        </span>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
                            Frequently <span className="gradient-text">Asked</span>
                        </h2>
                    </ScrollReveal>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <ScrollReveal key={index} delay={index * 0.05}>
                            <FAQItem
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === index}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            />
                        </ScrollReveal>
                    ))}
                </div>

                {/* Contact CTA */}
                <ScrollReveal delay={0.3} className="mt-12 text-center">
                    <p className="text-white/60 mb-4">Still have questions?</p>
                    <motion.a
                        href="mailto:hello@hacklore.dev"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-panel hover:border-[var(--primary)]/50 transition-colors"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Contact Us</span>
                    </motion.a>
                </ScrollReveal>
            </div>
        </section>
    );
}

function FAQItem({
    question,
    answer,
    isOpen,
    onClick
}: {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}) {
    return (
        <motion.div
            onClick={onClick}
            className={`
        rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden
        ${isOpen
                    ? 'border-[var(--primary)]/50 bg-[var(--primary)]/5'
                    : 'border-white/10 hover:border-white/20 glass-panel'
                }
      `}
        >
            <div className="p-6 flex items-center justify-between">
                <h3 className="text-lg font-medium pr-4">{question}</h3>
                <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                        <path d="M12 6v12M6 12h12" strokeLinecap="round" />
                    </svg>
                </motion.div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="px-6 pb-6 text-white/70 leading-relaxed">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
