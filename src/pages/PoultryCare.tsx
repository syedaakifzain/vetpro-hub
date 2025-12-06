import { Egg, Droplets, Shield, TrendingUp, Thermometer, Pill } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/layout/Layout';
import PageHero from '@/components/ui/page-hero';
import ProductGrid from '@/components/products/ProductGrid';
import { getProductsByCategory } from '@/data/products';

const PoultryCare = () => {
  const poultryProducts = getProductsByCategory('poultry');

  const features = [
    {
      icon: Shield,
      title: 'Disease Prevention',
      description: 'Effective antimicrobials and vaccines to prevent common poultry diseases.',
    },
    {
      icon: Egg,
      title: 'Egg Production',
      description: 'Supplements to boost egg production and improve shell quality.',
    },
    {
      icon: TrendingUp,
      title: 'Growth Promotion',
      description: 'Feed additives for optimal growth performance and FCR.',
    },
    {
      icon: Droplets,
      title: 'Electrolytes',
      description: 'Rehydration solutions for stress and heat management.',
    },
    {
      icon: Thermometer,
      title: 'Respiratory Care',
      description: 'Treatments for CRD, infectious coryza, and other respiratory issues.',
    },
    {
      icon: Pill,
      title: 'Coccidiosis Control',
      description: 'Proven coccidiostats for treatment and prevention.',
    },
  ];

  return (
    <Layout>
      <PageHero
        title="Poultry Care"
        description="Complete range of medicines and supplements for healthy and productive poultry farms. From day-old chicks to layers and broilers."
      />

      {/* Features */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Complete Poultry Solutions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our poultry care products are designed to address the specific health challenges of commercial poultry farming, ensuring healthy birds and optimal productivity.
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
              Our Poultry Products
            </h2>
            <p className="mt-4 text-muted-foreground">
              Showing {poultryProducts.length} products
            </p>
          </div>

          <ProductGrid products={poultryProducts} />
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
                Trusted by Poultry Farmers
              </h2>
              <p className="mt-4 text-muted-foreground">
                Our poultry products are used in farms across India
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary">🐔</div>
                  <div className="mt-2 text-2xl font-bold text-foreground">Broilers</div>
                  <div className="text-sm text-muted-foreground">Growth & Health</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary">🐓</div>
                  <div className="mt-2 text-2xl font-bold text-foreground">Layers</div>
                  <div className="text-sm text-muted-foreground">Egg Production</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary">🐥</div>
                  <div className="mt-2 text-2xl font-bold text-foreground">Chicks</div>
                  <div className="text-sm text-muted-foreground">Starter Care</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary">🦆</div>
                  <div className="mt-2 text-2xl font-bold text-foreground">Ducks</div>
                  <div className="text-sm text-muted-foreground">Waterfowl Care</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PoultryCare;