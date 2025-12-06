import { Target, Eye, Flag, Award, Heart, Users, Sparkles, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/layout/Layout';
import PageHero from '@/components/ui/page-hero';
import ModelViewer from '@/components/3d/ModelViewer';

const About = () => {
  const sections = [
    {
      icon: Target,
      title: 'About the Company',
      content: 'VetPro Associates Pvt. Ltd. is a premier veterinary pharmaceutical company headquartered in Hubballi, Karnataka, India. Established in 2010, we have grown to become a trusted name in animal healthcare, serving veterinarians, farmers, and pet owners across the country. Our comprehensive product portfolio includes antibiotics, anti-inflammatory drugs, dewormers, feed supplements, and specialized care products for livestock, companion animals, and poultry.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      content: 'To be the most trusted and preferred partner in animal healthcare across India and beyond. We envision a future where every animal has access to quality pharmaceutical care, contributing to healthier livestock, happier pets, and more productive farms. Our vision drives us to constantly innovate and expand our reach to serve the growing needs of the veterinary community.',
    },
    {
      icon: Flag,
      title: 'Our Mission',
      content: 'To develop, manufacture, and deliver high-quality veterinary pharmaceutical products that improve animal health and welfare. We are committed to supporting veterinarians and farmers with effective, safe, and affordable healthcare solutions. Our mission extends to educating the community about proper animal care and promoting responsible use of veterinary medicines.',
    },
    {
      icon: Sparkles,
      title: 'Our Goal',
      content: 'To establish VetPro as the leading veterinary pharmaceutical company in South India by 2030, expanding our product range to over 1000 formulations while maintaining the highest standards of quality. We aim to build a robust distribution network reaching every district, ensuring timely availability of essential animal healthcare products.',
    },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Quality First',
      description: 'Every product undergoes rigorous quality testing before reaching our customers.',
    },
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We genuinely care about animal welfare and work towards better health outcomes.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We build lasting relationships with veterinarians, farmers, and distributors.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from R&D to customer service.',
    },
  ];

  return (
    <Layout>
      <PageHero
        title="About VetPro Associates"
        description="Pioneering animal healthcare solutions with quality, innovation, and compassion since 2010."
      />

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">
              {sections.map((section, index) => (
                <div
                  key={section.title}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent">
                      <section.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-3">
                      <h2 className="font-display text-2xl font-bold text-foreground">
                        {section.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Quality Section */}
              <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <h2 className="font-display text-2xl font-bold text-foreground">
                      Quality Assurance
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      At VetPro, quality is not just a standard—it's our promise. Our state-of-the-art manufacturing facility is equipped with the latest technology and follows strict Good Manufacturing Practice (GMP) guidelines. Every batch of product undergoes comprehensive testing in our in-house quality control laboratory before release.
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>WHO-GMP certified manufacturing facility</li>
                      <li>ISO 9001:2015 quality management system</li>
                      <li>Rigorous raw material testing and supplier qualification</li>
                      <li>In-process and finished product quality checks</li>
                      <li>Stability testing as per ICH guidelines</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar with 3D model */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <Card className="overflow-hidden">
                  <CardContent className="p-6 flex flex-col items-center">
                    <ModelViewer size="medium" />
                    <p className="mt-4 text-sm text-muted-foreground text-center">
                      Committed to Animal Health Excellence
                    </p>
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="font-display font-semibold text-foreground">Quick Facts</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Founded</span>
                        <span className="font-medium">2010</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Headquarters</span>
                        <span className="font-medium">Hubballi, Karnataka</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Products</span>
                        <span className="font-medium">500+</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Team Size</span>
                        <span className="font-medium">100+</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Distribution</span>
                        <span className="font-medium">Pan India</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Our Core Values
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;