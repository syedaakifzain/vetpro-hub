import { Briefcase, MapPin, Clock, Building2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/layout/Layout';
import PageHero from '@/components/ui/page-hero';
import { Link } from 'react-router-dom';

interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
  experience: string;
  description: string;
  requirements: string[];
}

const Career = () => {
  // Placeholder job listings - in production these would come from a CMS/database
  const jobListings: JobListing[] = [
    // Uncomment to show job listings
    // {
    //   id: '1',
    //   title: 'Sales Executive',
    //   department: 'Sales',
    //   location: 'Hubballi, Karnataka',
    //   type: 'Full-time',
    //   experience: '2-4 years',
    //   description: 'We are looking for an experienced Sales Executive to promote our veterinary products to veterinary clinics, pharmacies, and farmers.',
    //   requirements: [
    //     'Bachelor\'s degree in Pharmacy, Veterinary Science, or related field',
    //     '2-4 years of experience in pharmaceutical sales',
    //     'Strong communication and negotiation skills',
    //     'Valid driving license and willingness to travel',
    //   ],
    // },
  ];

  const benefits = [
    {
      icon: '💰',
      title: 'Competitive Salary',
      description: 'Industry-leading compensation packages with performance bonuses',
    },
    {
      icon: '🏥',
      title: 'Health Insurance',
      description: 'Comprehensive health coverage for you and your family',
    },
    {
      icon: '📚',
      title: 'Learning & Development',
      description: 'Regular training programs and skill development opportunities',
    },
    {
      icon: '🏖️',
      title: 'Work-Life Balance',
      description: 'Generous leave policy and flexible working arrangements',
    },
    {
      icon: '🚀',
      title: 'Career Growth',
      description: 'Clear career progression paths and promotion opportunities',
    },
    {
      icon: '🤝',
      title: 'Great Culture',
      description: 'Collaborative and supportive work environment',
    },
  ];

  return (
    <Layout>
      <PageHero
        title="Career at VetPro"
        description="Join our team and be part of a company that's making a difference in animal healthcare. We're always looking for talented individuals who share our passion."
      />

      {/* Why Join Us */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Why Join VetPro?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe in investing in our people. Here's what you can expect when you join our team.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <Card
                key={benefit.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-6 text-center space-y-3">
                  <span className="text-4xl">{benefit.icon}</span>
                  <h3 className="font-display font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Current Openings
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Explore our available positions and find your perfect role
            </p>
          </div>

          {jobListings.length > 0 ? (
            <div className="grid gap-6 lg:grid-cols-2">
              {jobListings.map((job, index) => (
                <Card
                  key={job.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-display text-xl font-semibold text-foreground">
                          {job.title}
                        </h3>
                        <p className="text-muted-foreground">{job.department}</p>
                      </div>
                      <Badge>{job.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {job.experience}
                      </div>
                      <div className="flex items-center gap-1">
                        <Building2 className="h-4 w-4" />
                        {job.department}
                      </div>
                    </div>
                    <p className="text-muted-foreground">{job.description}</p>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">Requirements:</p>
                      <ul className="space-y-1">
                        {job.requirements.map((req, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link to="/contact" className="w-full">
                      <Button className="w-full bg-gradient-primary">Apply Now</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="max-w-2xl mx-auto">
              <CardContent className="py-16 text-center">
                <Briefcase className="h-16 w-16 mx-auto text-muted-foreground/50 mb-4" />
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  No Current Openings
                </h3>
                <p className="text-muted-foreground mb-6">
                  We don't have any open positions at the moment, but we're always interested in hearing from talented individuals. Feel free to send us your resume.
                </p>
                <Link to="/contact">
                  <Button variant="outline">Send Your Resume</Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Don't See a Fit?
            </h2>
            <p className="text-muted-foreground">
              Even if there are no current openings that match your profile, we'd love to hear from you. Send us your resume and we'll keep it on file for future opportunities.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-primary">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Career;