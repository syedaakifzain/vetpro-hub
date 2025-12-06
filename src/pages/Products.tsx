import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import PageHero from '@/components/ui/page-hero';
import ModelViewer from '@/components/3d/ModelViewer';
import { products, categoryLabels, subcategoryLabels } from '@/data/products';

const Products = () => {
  const categories = [
    {
      id: 'livestock',
      title: 'Livestock Care',
      icon: '🐄',
      description: 'Comprehensive pharmaceutical solutions for cattle, buffalo, sheep, goats, pigs, and horses. Our livestock products include antibiotics, anti-inflammatory drugs, dewormers, feed supplements, and wound care solutions.',
      subcategories: Object.entries(subcategoryLabels),
      productCount: products.filter(p => p.category === 'livestock').length,
      link: '/products/livestock',
    },
    {
      id: 'pet',
      title: 'Pet Care',
      icon: '🐕',
      description: 'Premium healthcare products specially formulated for dogs and cats. From antibiotics and dewormers to joint supplements and dermatological care, we have everything for your companion animals.',
      subcategories: [],
      productCount: products.filter(p => p.category === 'pet').length,
      link: '/products/pet',
    },
    {
      id: 'poultry',
      title: 'Poultry Care',
      icon: '🐔',
      description: 'Complete range of medicines and supplements for healthy and productive poultry farms. Our products address respiratory diseases, parasitic infections, nutritional deficiencies, and stress management.',
      subcategories: [],
      productCount: products.filter(p => p.category === 'poultry').length,
      link: '/products/poultry',
    },
  ];

  return (
    <Layout>
      <PageHero
        title="Our Products"
        description="Discover our comprehensive range of veterinary pharmaceutical products designed to promote animal health and welfare."
      />

      <section className="py-16 md:py-24">
        <div className="container">
          {/* Category overview */}
          <div className="grid gap-8 lg:grid-cols-3">
            {categories.map((category, index) => (
              <Card
                key={category.id}
                className="group overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-5xl">{category.icon}</span>
                      <span className="text-sm font-medium text-primary bg-accent px-3 py-1 rounded-full">
                        {category.productCount} Products
                      </span>
                    </div>
                    <h2 className="font-display text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {category.description}
                    </p>
                    {category.subcategories.length > 0 && (
                      <div className="pt-2">
                        <p className="text-xs font-medium text-muted-foreground mb-2">Subcategories:</p>
                        <div className="flex flex-wrap gap-1">
                          {category.subcategories.map(([key, label]) => (
                            <span
                              key={key}
                              className="text-xs bg-muted px-2 py-1 rounded-md"
                            >
                              {label}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-4 border-t border-border bg-muted/30">
                    <Link to={category.link}>
                      <Button variant="ghost" className="w-full justify-between group/btn">
                        <span>View {category.title}</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Decorative 3D section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
                Quality You Can Trust
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                All VetPro products are manufactured in our WHO-GMP certified facility using premium quality raw materials sourced from approved vendors. Each product undergoes rigorous quality testing to ensure safety, efficacy, and consistency.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  WHO-GMP Certified Manufacturing
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  In-house Quality Control Laboratory
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Stability Testing & Batch Traceability
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Pan-India Distribution Network
                </li>
              </ul>
              <Link to="/about">
                <Button variant="outline" className="gap-2">
                  Learn More About Our Quality
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <ModelViewer size="medium" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;