import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Lightbulb, Heart, Award, Users, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/layout/Layout';
import ModelViewer from '@/components/3d/ModelViewer';
import SectionHeader from '@/components/ui/section-header';

const Index = () => {
  const services = [
    {
      icon: '🐄',
      title: 'Livestock Care',
      description: 'Comprehensive pharmaceutical solutions for cattle, buffalo, sheep, goats, and other farm animals.',
      link: '/products/livestock',
    },
    {
      icon: '🐕',
      title: 'Pet Care',
      description: 'Premium healthcare products specially formulated for dogs, cats, and other companion animals.',
      link: '/products/pet',
    },
    {
      icon: '🐔',
      title: 'Poultry Care',
      description: 'Complete range of medicines and supplements for healthy and productive poultry farms.',
      link: '/products/poultry',
    },
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'All products manufactured under strict GMP guidelines with rigorous quality control.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Driven',
      description: 'Continuous R&D to develop advanced formulations for better animal health outcomes.',
    },
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We believe every animal deserves the best healthcare possible.',
    },
    {
      icon: Award,
      title: 'Industry Expertise',
      description: 'Over a decade of experience in veterinary pharmaceuticals.',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Dedicated support team to assist veterinarians and farmers.',
    },
    {
      icon: Leaf,
      title: 'Sustainable Practice',
      description: 'Environmentally conscious manufacturing and packaging.',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
        </div>

        <div className="container relative py-16 md:py-24 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <span className="inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground animate-fade-in">
                  Your Trusted Partner in Animal Health
                </span>
                <h1 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  Premium Veterinary
                  <span className="text-gradient"> Pharmaceutical</span> Solutions
                </h1>
                <p className="text-lg text-muted-foreground md:text-xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  Delivering high-quality medicines and healthcare products for livestock, pets, and poultry. Committed to improving animal welfare across India.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <Link to="/products">
                  <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity gap-2">
                    View Products
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline">
                    Contact Us
                  </Button>
                </Link>
              </div>

              {/* Value props around 3D model area */}
              <div className="hidden lg:flex gap-6 pt-4">
                {services.map((service, index) => (
                  <div
                    key={service.title}
                    className="flex items-center gap-2 text-sm text-muted-foreground animate-fade-in"
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <span className="text-2xl">{service.icon}</span>
                    <span className="font-medium">{service.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right content - 3D Model */}
            <div className="flex justify-center lg:justify-end animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                {/* Glow effect behind model */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-64 w-64 rounded-full bg-primary/20 blur-3xl animate-pulse-slow" />
                </div>
                <ModelViewer size="large" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <SectionHeader
                badge="About Us"
                title="Pioneering Animal Healthcare Since 2010"
                align="left"
              />
              <p className="text-muted-foreground leading-relaxed">
                VetPro Associates Pvt. Ltd. is a leading veterinary pharmaceutical company based in Hubballi, Karnataka. We specialize in manufacturing and distributing high-quality medicines, supplements, and healthcare products for livestock, companion animals, and poultry.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our state-of-the-art manufacturing facility follows stringent GMP guidelines to ensure every product meets the highest standards of quality and efficacy.
              </p>
              <Link to="/about">
                <Button variant="outline" className="gap-2">
                  Learn More About Us
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Card className="bg-card">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Products</div>
                  </CardContent>
                </Card>
                <Card className="bg-card">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold text-primary">50+</div>
                    <div className="text-sm text-muted-foreground">Distributors</div>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-4 pt-8">
                <Card className="bg-card">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold text-primary">14+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </CardContent>
                </Card>
                <Card className="bg-card">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold text-primary">10K+</div>
                    <div className="text-sm text-muted-foreground">Happy Customers</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <SectionHeader
            badge="Our Services"
            title="Comprehensive Animal Healthcare"
            description="We provide specialized pharmaceutical solutions tailored to the unique needs of different animal categories."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service, index) => (
              <Link
                key={service.title}
                to={service.link}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/50">
                  <CardContent className="p-8 space-y-4">
                    <span className="text-5xl">{service.icon}</span>
                    <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">{service.description}</p>
                    <div className="flex items-center gap-2 text-primary font-medium">
                      <span>Explore Products</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <SectionHeader
            badge="Why Choose Us"
            title="Committed to Excellence"
            description="We stand apart through our unwavering commitment to quality, innovation, and customer satisfaction."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, index) => (
              <Card
                key={item.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-6 flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Card className="overflow-hidden bg-gradient-primary">
            <CardContent className="p-8 md:p-12 lg:p-16">
              <div className="flex flex-col items-center gap-6 text-center text-primary-foreground">
                <h2 className="font-display text-3xl font-bold md:text-4xl lg:text-5xl">
                  Providing Compassionate Veterinary Care
                </h2>
                <p className="max-w-2xl text-lg opacity-90">
                  Partner with VetPro Associates for reliable, high-quality veterinary pharmaceutical solutions. Contact us today to learn how we can support your animal healthcare needs.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link to="/contact">
                    <Button size="lg" variant="secondary" className="gap-2">
                      Get In Touch
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link to="/products">
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                      Browse Products
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Index;