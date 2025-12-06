import { Dog, Cat, Heart, Shield, Sparkles, Pill } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/layout/Layout';
import PageHero from '@/components/ui/page-hero';
import ProductGrid from '@/components/products/ProductGrid';
import { getProductsByCategory } from '@/data/products';

const PetCare = () => {
  const petProducts = getProductsByCategory('pet');

  const features = [
    {
      icon: Dog,
      title: 'Dog Healthcare',
      description: 'Complete range of medicines and supplements for canine health, from puppy care to senior dog wellness.',
    },
    {
      icon: Cat,
      title: 'Cat Healthcare',
      description: 'Specialized formulations designed for feline physiology, ensuring safe and effective treatment.',
    },
    {
      icon: Heart,
      title: 'Cardiac Care',
      description: 'Advanced cardiovascular support products for pets with heart conditions.',
    },
    {
      icon: Shield,
      title: 'Parasite Control',
      description: 'Effective dewormers and ectoparasite treatments to keep your pets protected.',
    },
    {
      icon: Sparkles,
      title: 'Skin & Coat',
      description: 'Dermatological solutions for healthy skin and lustrous coat.',
    },
    {
      icon: Pill,
      title: 'Joint Support',
      description: 'Supplements for mobility and joint health, especially for aging pets.',
    },
  ];

  return (
    <Layout>
      <PageHero
        title="Pet Care"
        description="Premium healthcare products specially formulated for dogs and cats. Because your furry friends deserve the best care."
      />

      {/* Features */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Complete Pet Healthcare
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our pet care range addresses all aspects of companion animal health with safe, effective, and palatable formulations.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-6 flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Our Pet Care Products
            </h2>
            <p className="mt-4 text-muted-foreground">
              Showing {petProducts.length} products
            </p>
          </div>

          <ProductGrid products={petProducts} />
        </div>
      </section>

      {/* Pet Care Tips */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Caring for Your Companions
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              At VetPro, we understand the special bond between pets and their families. Our pet care products are developed with the same rigor as human pharmaceuticals, ensuring your beloved companions receive safe and effective treatment.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 bg-card rounded-lg">
                <span className="text-4xl">🐕</span>
                <div className="mt-2 font-display font-semibold">Dogs</div>
                <div className="text-sm text-muted-foreground">All breeds & ages</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg">
                <span className="text-4xl">🐈</span>
                <div className="mt-2 font-display font-semibold">Cats</div>
                <div className="text-sm text-muted-foreground">Safe feline formulas</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PetCare;