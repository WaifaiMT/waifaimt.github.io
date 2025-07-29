// src/components/sections/GetInTouchSection.tsx
'use client';

import { useState } from 'react';
import { Mail, Send, MessageCircle, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ContactModal } from '@/components/ui/ContactModal';
import { personalInfo } from '@/data/personal';
import type { SectionProps } from '@/types';

export const GetInTouchSection: React.FC<SectionProps> = ({ id, className }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <section
                id={id}
                aria-label="Get in touch"
                className={`mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 ${className}`}
            >
                <SectionHeader title="Get In Touch" />

                <div>
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-slate-200 mb-4">
                            Let&apos;s work together
                        </h3>
                        <p className="text-lg leading-relaxed mb-6">
                            I&apos;m always interested in hearing about new opportunities, creative projects,
                            and interesting people to work with. Whether you have a project in mind or
                            just want to chat about technology and design, I&apos;d love to hear from you.
                        </p>
                    </div>

                    <div className="">
                        {/* Contact Actions */}
                        <div className="order-1">
                            {/* <h4 className="text-xl font-semibold text-slate-200 mb-6">Start a conversation</h4> */}

                            <div className="space-y-4 mb-8">
                                <div className="grid lg:grid-cols-2 gap-4">

                                    <div className="order-1">
                                        {/* Contact Form Button */}
                                        <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-lg p-4 border border-teal-500/20 h-48">
                                            <div className="flex items-center gap-3 mb-3">
                                                <MessageCircle className="w-6 h-6 text-teal-400" />
                                                <h5 className="font-semibold text-slate-200">Send me a message</h5>
                                            </div>
                                            <p className="text-slate-400 mb-4 text-sm">
                                                Tell me about your project, ask questions, or just say hello. I&apos;ll get back to you within 24 hours.
                                            </p>
                                            <Button
                                                onClick={openModal}
                                                size="lg"
                                                className="w-full flex items-center justify-center gap-2"
                                            >
                                                <Send size={18} />
                                                Open Contact Form
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="order-2">
                                        {/* Direct Email */}
                                        <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-lg p-4 border border-teal-500/20 h-48">
                                            <div className="flex items-center gap-3 mb-3">
                                                <Mail className="w-6 h-6 text-teal-400" />
                                                <h5 className="font-semibold text-slate-200">Email me directly</h5>
                                            </div>
                                            <p className="text-slate-400 mb-4 text-sm">
                                                Prefer to use your own email client? Send me a message directly.
                                            </p>
                                            <a
                                                href={`mailto:${personalInfo.email}?subject=Let's work together&body=Hi there! I'd like to discuss a project with you.`}
                                                className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors font-medium"
                                            >
                                                {personalInfo.email}
                                                <ArrowUpRight size={16} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="grid lg:grid-cols-2 gap-4">
                                    {/* Availability */}
                                    <div className="space-y-4 mb-8">
                                        <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 h-46">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                                <h5 className="font-medium text-slate-200">Available for work</h5>
                                            </div>
                                            <p className="text-sm text-slate-400 mb-4">
                                                I&apos;m currently available for freelance projects and full-time opportunities.
                                                Let&apos;s discuss how we can work together!
                                            </p>
                                            <div className="text-xs text-slate-500">
                                                Response time: Usually within 24 hours
                                            </div>
                                        </div>
                                    </div>

                                    {/* Quick Actions */}
                                    <div className='space-y-4 mb-8 justify-center flex items-center align-center'>
                                        <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 h-46">
                                            <div className="flex flex-wrap gap-3 justify-center align-center h-[100%] items-center">
                                                <a href="/resume.pdf" target="_blank" rel="noreferrer">
                                                    <Button variant="secondary" size="md">
                                                        Download Resume
                                                    </Button>
                                                </a>
                                                <a
                                                    href={`mailto:${personalInfo.email}?subject=Quick Question`}
                                                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-400 hover:text-teal-300 transition-colors"
                                                >
                                                    Quick Question
                                                    <ArrowUpRight size={14} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Contact Modal */}
            <ContactModal isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
};