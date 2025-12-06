import { cn } from '@/lib/utils';

interface PageHeroProps {
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}

const PageHero = ({ title, description, className, children }: PageHeroProps) => {
  return (
    <section
      className={cn(
        'relative overflow-hidden bg-gradient-hero py-16 md:py-24',
        className
      )}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl animate-fade-in">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-lg text-muted-foreground md:text-xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              {description}
            </p>
          )}
          {children && (
            <div className="mt-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;