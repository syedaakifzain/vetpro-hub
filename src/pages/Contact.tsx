import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Layout from '@/components/layout/Layout';
import PageHero from '@/components/ui/page-hero';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: 'Message Sent!',
      description: 'Thank you for contacting us. We will get back to you soon.',
    });

    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: [
        '123, Industrial Area,',
        'Gokul Road, Hubballi - 580030,',
        'Karnataka, India',
      ],
    },
    {
      icon: Phone,
      title: 'Phone',
      content: ['+91 98765 43210', '+91 836 234 5678'],
      links: ['tel:+919876543210', 'tel:+918362345678'],
    },
    {
      icon: Mail,
      title: 'Email',
      content: ['info@vetpro.in', 'sales@vetpro.in'],
      links: ['mailto:info@vetpro.in', 'mailto:sales@vetpro.in'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: ['Monday - Saturday', '9:00 AM - 6:00 PM'],
    },
  ];

  return (
    <Layout>
      <PageHero
        title="Contact Us"
        description="Have questions about our products or services? We'd love to hear from you. Get in touch with us today."
      />

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <Card className="animate-fade-in">
              <CardContent className="p-6 md:p-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-primary gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="font-display text-2xl font-bold text-foreground">
                Get in Touch
              </h2>
              <p className="text-muted-foreground">
                Whether you have a question about our products, need technical support, or want to explore partnership opportunities, our team is here to help.
              </p>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={info.title} style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-4 flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{info.title}</h3>
                        <div className="mt-1 space-y-0.5">
                          {info.content.map((line, i) => (
                            info.links?.[i] ? (
                              <a
                                key={i}
                                href={info.links[i]}
                                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                              >
                                {line}
                              </a>
                            ) : (
                              <p key={i} className="text-sm text-muted-foreground">
                                {line}
                              </p>
                            )
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
                  <div className="flex gap-3">
                    {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                      <a
                        key={social}
                        href="#"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label={social}
                      >
                        <span className="text-xs font-medium">{social[0]}</span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Our Location
            </h2>
            <p className="mt-4 text-muted-foreground">
              Visit our office in Hubballi, Karnataka
            </p>
          </div>
          <Card className="overflow-hidden">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 mx-auto text-muted-foreground/50 mb-2" />
                <p className="text-muted-foreground">Map integration placeholder</p>
                <p className="text-sm text-muted-foreground">123, Industrial Area, Gokul Road, Hubballi - 580030</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;