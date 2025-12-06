import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import PageHero from '@/components/ui/page-hero';
import ProductGrid from '@/components/products/ProductGrid';
import { getProductsByCategory, getProductsBySubcategory, subcategoryLabels, LivestockSubcategory } from '@/data/products';
import { cn } from '@/lib/utils';

const LivestockCare = () => {
  const [activeFilter, setActiveFilter] = useState<LivestockSubcategory | 'all'>('all');
  
  const allLivestockProducts = getProductsByCategory('livestock');
  
  const filteredProducts = activeFilter === 'all' 
    ? allLivestockProducts 
    : getProductsBySubcategory(activeFilter);

  const filters: Array<{ key: LivestockSubcategory | 'all'; label: string }> = [
    { key: 'all', label: 'All Products' },
    ...Object.entries(subcategoryLabels).map(([key, label]) => ({
      key: key as LivestockSubcategory,
      label,
    })),
  ];

  return (
    <Layout>
      <PageHero
        title="Livestock Care"
        description="Comprehensive pharmaceutical solutions for cattle, buffalo, sheep, goats, pigs, and horses. Quality products for healthy and productive livestock."
      />

      <section className="py-16 md:py-24">
        <div className="container">
          {/* Filters */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 justify-center">
              {filters.map((filter) => (
                <Button
                  key={filter.key}
                  variant={activeFilter === filter.key ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveFilter(filter.key)}
                  className={cn(
                    'transition-all',
                    activeFilter === filter.key && 'bg-gradient-primary'
                  )}
                >
                  {filter.label}
                </Button>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Product Grid */}
          <ProductGrid products={filteredProducts} />
        </div>
      </section>

      {/* Value Statement */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Healthy Livestock, Prosperous Farms
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our livestock care products are designed to address the diverse health challenges faced by farmers. From preventing diseases to treating infections and boosting productivity, VetPro provides reliable solutions backed by scientific research and field experience.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5</div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">6+</div>
                <div className="text-sm text-muted-foreground">Species Covered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">14+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LivestockCare;