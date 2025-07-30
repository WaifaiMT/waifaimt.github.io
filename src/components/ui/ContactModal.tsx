// src/components/ui/ContactModal.tsx
'use client';

import { useState, useEffect } from 'react';
import { X, Send } from 'lucide-react';
import { Button } from './Button';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Handle escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            console.log('Form submitted:', formData);
            setIsSubmitting(false);
            // Reset form
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
            alert('Message sent successfully!');
            onClose();
        }, 1000);
    };

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-teal-900/10 backdrop-blur-sm"
            onClick={handleBackdropClick}
        >
            <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-lg p-4 border border-teal-500/20 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-lg relative modal-content">

                {/* Modal Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-700">
                    <h3 className="text-2xl font-bold text-slate-200">Send me a message</h3>
                    <button
                        onClick={onClose}
                        className="text-slate-400 hover:text-slate-200 transition-colors p-1"
                        aria-label="Close modal"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Modal Content */}
                <div className="p-6">
                    <p className="text-slate-400 mb-6">
                        I&apos;d love to hear about your project or just chat about technology and design.
                        Fill out the form below and I&apos;ll get back to you as soon as possible.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="modal-name" className="block text-sm font-medium text-slate-300 mb-2">
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    id="modal-name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="modal-email" className="block text-sm font-medium text-slate-300 mb-2">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    id="modal-email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="modal-subject" className="block text-sm font-medium text-slate-300 mb-2">
                                Subject *
                            </label>
                            <input
                                type="text"
                                id="modal-subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                                placeholder="What's this about?"
                            />
                        </div>

                        <div>
                            <label htmlFor="modal-message" className="block text-sm font-medium text-slate-300 mb-2">
                                Message *
                            </label>
                            <textarea
                                id="modal-message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                rows={6}
                                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors resize-vertical"
                                placeholder="Tell me about your project or just say hello!"
                            />
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 pt-4">
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                size="lg"
                                className="flex items-center justify-center gap-2 flex-1"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send size={18} />
                                        Send Message
                                    </>
                                )}
                            </Button>
                            <Button
                                type="button"
                                variant="secondary"
                                onClick={onClose}
                                size="lg"
                                className="flex-shrink-0"
                            >
                                Cancel
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};