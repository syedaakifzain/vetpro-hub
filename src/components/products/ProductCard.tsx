import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Product, subcategoryLabels } from '@/data/products';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard = ({ product, className }: ProductCardProps) => {
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

  return (
    <Card className={cn('group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1', className)}>
      <CardHeader className="p-0">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 flex flex-wrap gap-1">
            {product.subcategory && (
              <Badge variant="secondary" className="bg-secondary/90 backdrop-blur-sm">
                {subcategoryLabels[product.subcategory]}
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-primary font-medium">{product.tagline}</p>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.shortDescription}
        </p>
        <div className="flex flex-wrap gap-1">
          {product.species.slice(0, 3).map((species) => (
            <Badge key={species} variant="outline" className="text-xs">
              {speciesLabels[species]}
            </Badge>
          ))}
          {product.species.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{product.species.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link to={`/products/${product.category}/${product.id}`} className="w-full">
          <Button variant="outline" className="w-full group/btn">
            View Details
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;