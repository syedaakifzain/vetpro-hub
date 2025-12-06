import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Package, Pill, FileText, Syringe, Box } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Layout from '@/components/layout/Layout';
import { getProductById, categoryLabels, subcategoryLabels } from '@/data/products';

const ProductDetail = () => {
  const { category, productId } = useParams<{ category: string; productId: string }>();
  const product = productId ? getProductById(productId) : undefined;

  const speciesLabels: Record<string, string> = {
    cattle: 'Cattle',
    buffalo: 'Buffalo',
    sheep: 'Sheep',
    goat: 'Goat',
    pig: 'Pig',
    dog: 'Dog',
    cat: 'Cat',
    poultry: 'Poultry',
    horse: 'Horse',
  };

  if (!product) {
    return (
      <Layout>
        <div className="container py-24 text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">
            Product Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/products">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const categoryPath = `/products/${product.category}`;
  const categoryLabel = categoryLabels[product.category];

  return (
    <Layout>
      <div className="container py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/products" className="hover:text-foreground transition-colors">
            Products
          </Link>
          <span>/</span>
          <Link to={categoryPath} className="hover:text-foreground transition-colors">
            {categoryLabel}
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Product Image */}
          <div className="animate-fade-in">
            <Card className="overflow-hidden">
              <div className="aspect-square bg-muted flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </Card>
          </div>

          {/* Product Info */}
          <div className="space-y-6 animate-fade-in-up">
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge className="bg-gradient-primary text-primary-foreground">
                  {categoryLabel}
                </Badge>
                {product.subcategory && (
                  <Badge variant="secondary">
                    {subcategoryLabels[product.subcategory]}
                  </Badge>
                )}
              </div>
              <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">
                {product.name}
              </h1>
              <p className="mt-2 text-xl text-primary font-medium">
                {product.tagline}
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {product.detailedDescription}
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-muted-foreground">Suitable for:</span>
              {product.species.map((species) => (
                <Badge key={species} variant="outline">
                  {speciesLabels[species]}
                </Badge>
              ))}
            </div>

            <Separator />

            {/* Product Details */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent">
                  <Pill className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Composition</h3>
                  <p className="text-sm text-muted-foreground">{product.composition}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Indications</h3>
                  <ul className="mt-1 space-y-1">
                    {product.indications.map((indication, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        {indication}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent">
                  <Syringe className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Dosage</h3>
                  <p className="text-sm text-muted-foreground">{product.dosage}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent">
                  <Box className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Packing</h3>
                  <p className="text-sm text-muted-foreground">{product.packing}</p>
                </div>
              </div>
            </div>

            <Separator />

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={categoryPath}>
                <Button variant="outline" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to {categoryLabel}
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="bg-gradient-primary gap-2">
                  <Package className="h-4 w-4" />
                  Enquire Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;