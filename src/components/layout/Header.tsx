import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    {
      name: 'Products',
      path: '/products',
      children: [
        { name: 'All Products', path: '/products' },
        { name: 'Livestock Care', path: '/products/livestock' },
        { name: 'Pet Care', path: '/products/pet' },
        { name: 'Poultry Care', path: '/products/poultry' },
      ],
    },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Career', path: '/career' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      {/* Top bar */}
      <div className="hidden lg:block bg-primary text-primary-foreground">
        <div className="container flex items-center justify-between py-2 text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="h-4 w-4" />
              <span>+91 98765 43210</span>
            </a>
            <a href="mailto:info@vetpro.in" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="h-4 w-4" />
              <span>info@vetpro.in</span>
            </a>
          </div>
          <div className="text-sm opacity-90">
            Your Trusted Partner in Animal Health
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
              <span className="text-xl font-bold text-primary-foreground">V</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold text-foreground">VetPro</span>
              <span className="text-xs text-muted-foreground">Associates Pvt. Ltd.</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={cn(
                        'gap-1 font-medium',
                        isActive(link.path) && 'bg-accent text-accent-foreground'
                      )}
                    >
                      {link.name}
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="w-48">
                    {link.children.map((child) => (
                      <DropdownMenuItem key={child.path} asChild>
                        <Link
                          to={child.path}
                          className={cn(
                            'w-full cursor-pointer',
                            isActive(child.path) && 'bg-accent'
                          )}
                        >
                          {child.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link key={link.name} to={link.path}>
                  <Button
                    variant="ghost"
                    className={cn(
                      'font-medium',
                      isActive(link.path) && 'bg-accent text-accent-foreground'
                    )}
                  >
                    {link.name}
                  </Button>
                </Link>
              )
            )}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+919876543210" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="h-4 w-4" />
              <span>+91 98765 43210</span>
            </a>
            <Link to="/contact">
              <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-border py-4 animate-fade-in">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.name} className="space-y-1">
                    <div className="px-4 py-2 text-sm font-semibold text-muted-foreground">
                      {link.name}
                    </div>
                    {link.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          'block px-6 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground rounded-md',
                          isActive(child.path) && 'bg-accent text-accent-foreground'
                        )}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'block px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground rounded-md',
                      isActive(link.path) && 'bg-accent text-accent-foreground'
                    )}
                  >
                    {link.name}
                  </Link>
                )
              )}
              <div className="mt-4 px-4 space-y-3">
                <a href="tel:+919876543210" className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>+91 98765 43210</span>
                </a>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-gradient-primary">Contact Us</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;