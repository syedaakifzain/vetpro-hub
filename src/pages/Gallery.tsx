import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import PageHero from '@/components/ui/page-hero';
import { cn } from '@/lib/utils';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Placeholder gallery images
  const galleryImages = [
    {
      id: 1,
      src: '/placeholder.svg',
      alt: 'Manufacturing Facility',
      category: 'Facility',
    },
    {
      id: 2,
      src: '/placeholder.svg',
      alt: 'Quality Control Lab',
      category: 'Laboratory',
    },
    {
      id: 3,
      src: '/placeholder.svg',
      alt: 'Product Range',
      category: 'Products',
    },
    {
      id: 4,
      src: '/placeholder.svg',
      alt: 'Packaging Unit',
      category: 'Facility',
    },
    {
      id: 5,
      src: '/placeholder.svg',
      alt: 'Research Team',
      category: 'Team',
    },
    {
      id: 6,
      src: '/placeholder.svg',
      alt: 'Distribution Center',
      category: 'Facility',
    },
    {
      id: 7,
      src: '/placeholder.svg',
      alt: 'Veterinary Conference',
      category: 'Events',
    },
    {
      id: 8,
      src: '/placeholder.svg',
      alt: 'Farm Visit',
      category: 'Field',
    },
    {
      id: 9,
      src: '/placeholder.svg',
      alt: 'Product Launch',
      category: 'Events',
    },
    {
      id: 10,
      src: '/placeholder.svg',
      alt: 'Training Program',
      category: 'Events',
    },
    {
      id: 11,
      src: '/placeholder.svg',
      alt: 'Office Building',
      category: 'Facility',
    },
    {
      id: 12,
      src: '/placeholder.svg',
      alt: 'Team Meeting',
      category: 'Team',
    },
  ];

  const categories = ['All', ...new Set(galleryImages.map(img => img.category))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <Layout>
      <PageHero
        title="Gallery"
        description="Explore our manufacturing facility, team, events, and more through our photo gallery."
      />

      <section className="py-16 md:py-24">
        <div className="container">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={cn(
                  'transition-all',
                  activeCategory === category && 'bg-gradient-primary'
                )}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setSelectedImage(index)}
                className="group relative aspect-square overflow-hidden rounded-lg bg-muted animate-fade-in-up focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-end">
                  <div className="p-4 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-primary-foreground font-medium text-sm">{image.alt}</p>
                    <p className="text-primary-foreground/80 text-xs">{image.category}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-foreground"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-6 w-6" />
          </Button>
          
          <div 
            className="max-w-4xl max-h-[80vh] w-full animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].alt}
              className="w-full h-full object-contain rounded-lg"
            />
            <div className="mt-4 text-center">
              <p className="text-foreground font-medium">{filteredImages[selectedImage].alt}</p>
              <p className="text-muted-foreground text-sm">{filteredImages[selectedImage].category}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(prev => prev !== null && prev > 0 ? prev - 1 : filteredImages.length - 1);
              }}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(prev => prev !== null && prev < filteredImages.length - 1 ? prev + 1 : 0);
              }}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;