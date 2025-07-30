// src/components/sections/ImageGallerySection.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import type { SectionProps } from '@/types';

interface GalleryImage {
    id: string;
    src: string;
    alt: string;
    title: string;
    category: string;
    description?: string;
}

// Sample images data - replace with your actual images
const galleryImages: GalleryImage[] = [
    {
        id: '1',
        src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
        alt: 'Mountain landscape',
        title: 'Mountain Peak',
        category: 'Landscape',
        description: 'Captured during a hiking expedition in the Rocky Mountains'
    },
    {
        id: '2',
        src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
        alt: 'Technology workspace',
        title: 'Tech Setup',
        category: 'Tech',
        description: 'Modern developer workspace with dual monitors'
    },
    {
        id: '3',
        src: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&q=80',
        alt: 'Abstract architecture',
        title: 'Urban Lines',
        category: 'Architecture',
        description: 'Geometric patterns in modern architecture'
    },
    {
        id: '4',
        src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
        alt: 'Web development',
        title: 'Code Screen',
        category: 'Tech',
        description: 'Lines of code on a developer\'s screen'
    },
    {
        id: '5',
        src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80',
        alt: 'Nature scene',
        title: 'Starry Night',
        category: 'Landscape',
        description: 'Long exposure shot of the night sky'
    },
    {
        id: '6',
        src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80',
        alt: 'Minimalist workspace',
        title: 'Clean Desk',
        category: 'Lifestyle',
        description: 'Minimalist workspace setup'
    }
];

export const ImageGallerySection: React.FC<SectionProps> = ({ id, className }) => {
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    const categories = ['All', ...Array.from(new Set(galleryImages.map(img => img.category)))];

    const filteredImages = selectedCategory === 'All'
        ? galleryImages
        : galleryImages.filter(img => img.category === selectedCategory);

    const openLightbox = (image: GalleryImage) => {
        setSelectedImage(image);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'unset';
    };

    const navigateImage = (direction: 'prev' | 'next') => {
        if (!selectedImage) return;

        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
        let nextIndex;

        if (direction === 'prev') {
            nextIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
        } else {
            nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
        }

        setSelectedImage(filteredImages[nextIndex]);
    };

    return (
        <>
            <section
                id={id}
                aria-label="Image gallery"
                className={`mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 ${className}`}
            >
                <SectionHeader title="Gallery" />

                <div>
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-slate-200 mb-4">
                            Some things I&apos;ve captured
                        </h3>
                        <p className="text-lg leading-relaxed mb-6">
                            A collection of moments, projects, and experiences captured through my lens.
                            Each image tells a story of creativity, exploration, and the beauty found in both
                            technology and nature.
                        </p>
                    </div>

                    {/* Category Filter */}
                    <div className="mb-8">
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={cn(
                                        "px-4 py-2 text-sm font-mono transition-all duration-200 rounded border",
                                        selectedCategory === category
                                            ? "border-[#64ffda] text-[#64ffda] bg-[#64ffda]/10"
                                            : "border-slate-600 text-slate-400 hover:border-[#64ffda] hover:text-[#64ffda]"
                                    )}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Image Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredImages.map((image, index) => (
                            <div
                                key={image.id}
                                className="group relative aspect-square bg-slate-800 rounded overflow-hidden cursor-pointer"
                                onClick={() => openLightbox(image)}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover transition-all duration-300 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="text-center">
                                        <h4 className="text-white font-semibold mb-1">{image.title}</h4>
                                        <p className="text-[#64ffda] text-sm font-mono">{image.category}</p>
                                        <ArrowUpRight className="mx-auto mt-2 w-5 h-5 text-[#64ffda]" />
                                    </div>
                                </div>

                                {/* Number indicator */}
                                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-[#64ffda] text-xs font-mono px-2 py-1 rounded">
                                    {String(index + 1).padStart(2, '0')}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* View More */}
                    <div className="mt-12 text-center">
                        <Button
                            variant="secondary"
                            size="lg"
                            onClick={() => window.open('https://your-photography-site.com', '_blank')}
                        >
                            View Full Portfolio
                            <ArrowUpRight className="ml-2 w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={closeLightbox}
                >
                    <div className="relative max-w-4xl max-h-[90vh] w-full">
                        {/* Close button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 z-10 p-2 bg-slate-800/80 backdrop-blur-sm rounded-full text-slate-400 hover:text-[#64ffda] transition-colors"
                            aria-label="Close image"
                        >
                            <X size={20} />
                        </button>

                        {/* Navigation buttons */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                navigateImage('prev');
                            }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-slate-800/80 backdrop-blur-sm rounded-full text-slate-400 hover:text-[#64ffda] transition-colors"
                            aria-label="Previous image"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                navigateImage('next');
                            }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-slate-800/80 backdrop-blur-sm rounded-full text-slate-400 hover:text-[#64ffda] transition-colors"
                            aria-label="Next image"
                        >
                            <ChevronRight size={20} />
                        </button>

                        {/* Main image */}
                        <div className="relative w-full h-[70vh] rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                fill
                                className="object-contain"
                                sizes="90vw"
                                priority
                            />
                        </div>

                        {/* Image info */}
                        <div className="mt-4 text-center" onClick={(e) => e.stopPropagation()}>
                            <h3 className="text-xl font-semibold text-slate-200 mb-2">
                                {selectedImage.title}
                            </h3>
                            <p className="text-[#64ffda] font-mono text-sm mb-2">
                                {selectedImage.category}
                            </p>
                            {selectedImage.description && (
                                <p className="text-slate-400 max-w-2xl mx-auto">
                                    {selectedImage.description}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};