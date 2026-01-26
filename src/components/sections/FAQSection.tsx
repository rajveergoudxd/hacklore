'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ScrollReveal from '../animations/ScrollReveal';

const faqs = [
    {
        question: 'Who can participate in Hacklore?',
        answer: 'Hacklore is open to developers, designers, and innovators of all skill levels. Whether you\'re a student, professional, or hobbyist, you\'re welcome to join. Teams can have 2-4 members.'
    },
    {
        question: 'What are the prizes?',
        answer: 'We have over $50,000 in cash and prizes! Grand prize is $20,000, with track-specific prizes of $5,000 each. Additional prizes include cloud credits, mentorship sessions, and premium tool subscriptions.'
    },
    {
        question: 'Is there a participation fee?',
        answer: 'No! Hacklore is completely free to participate. We provide meals, swag, and an amazing experience at no cost to hackers.'
    },
    {
        question: 'Can I participate remotely?',
        answer: 'Yes! Hacklore is a hybrid event. You can join us in San Francisco or participate virtually from anywhere in the world.'
    },
    {
        question: 'What should I bring?',
        answer: 'Bring your laptop, chargers, and enthusiasm! We\'ll provide the rest including power strips, Wi-Fi, food, drinks, and sleeping areas for those who need them.'
    },
    {
        question: 'Do I need a team?',
        answer: 'You can apply with a pre-formed team or as an individual. We\'ll have team formation activities at the start of the event to help solo hackers find teammates.'
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
