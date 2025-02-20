import { MessageSquare, Database, Users, Bot, Phone, Calendar, Quote, BarChart, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

export function Services() {
  const services = [
    {
      id: 'lead-gen',
      header: 'Capture More Leads, Automatically.',
      description: 'Our AI-driven lead generation systems help businesses identify, capture, and organize potential clients.',
      icon: Users,
      color: '#FF6F00',
      features: [
        'Advanced targeting algorithms',
        'Seamless integration with your CRM',
        'Automated follow-ups'
      ],
      benefits: [
        'Increase sales pipeline',
        'Save time on closing'
      ]
    },
    {
      id: 'outreach',
      header: 'Reach More People, Effortlessly.',
      description: 'Scale your outreach campaigns with personalized, data-driven messages that land in the inbox at the perfect time.',
      icon: Bot,
      color: '#FF3B30',
      features: [
        'Email and SMS automation',
        'Smart personalization',
        'Campaign analytics'
      ],
      benefits: [
        'Higher response rates',
        'Reduced manual work'
      ]
    },
    {
      id: 'scheduling',
      header: 'Simplify Your Scheduling.',
      description: 'AI-powered appointment setting systems streamline your bookings, ensuring your calendar is always optimized.',
      icon: Calendar,
      color: '#8C1AFF',
      features: [
        'Calendar automation',
        'Real-time syncing',
        'Smart reminders'
      ],
      benefits: [
        'Reduce no-shows',
        'Optimize scheduling'
      ]
    },
    {
      id: 'crm',
      header: 'Seamless CRM Integration.',
      description: 'Connect your CRM with our AI systems for seamless data flow and enhanced productivity.',
      icon: Database,
      color: '#FF6F00',
      features: [
        'Major CRM support',
        'Real-time updates',
        'Easy setup'
      ],
      benefits: [
        'Central management',
        'Better collaboration'
      ]
    },
    {
      id: 'calling',
      header: 'AI-Powered Cold Calling.',
      description: 'Our AI caller system conducts engaging conversations with prospects to qualify and transfer leads.',
      icon: Phone,
      color: '#FF3B30',
      features: [
        'Natural AI voice',
        'Smart transfers',
        'Call analytics'
      ],
      benefits: [
        'Save time',
        'Better conversion'
      ]
    },
    {
      id: 'chatbot',
      header: 'Always Available Support.',
      description: 'From answering FAQs to booking appointments, our chatbots work 24/7 to support your clients.',
      icon: MessageSquare,
      color: '#8C1AFF',
      features: [
        'Custom responses',
        'Multi-platform',
        'NLP powered'
      ],
      benefits: [
        'Better support',
        'Lower costs'
      ]
    }
  ];

  const stats = [
    {
      value: '100+',
      label: 'Businesses Served',
      icon: Users,
      color: '#FF6F00'
    },
    {
      value: '40%',
      label: 'Average Lead Conversion',
      icon: BarChart,
      color: '#FF3B30'
    },
    {
      value: '24/7',
      label: 'Support Availability',
      icon: Clock,
      color: '#8C1AFF'
    }
  ];

  const testimonials = [
    {
      quote: "The AI-powered systems implemented by Irby AI Solutions revolutionized our member acquisition process. Our lead conversion rate increased by 45% in just two months!",
      name: "Hannah Ruth",
      role: "Founder of Dark Horse Weightlifting",
      metrics: [
        { label: 'Lead Conversion', value: '+45%' },
        { label: 'Time Saved', value: '20hrs/week' }
      ],
      color: '#FF6F00'
    },
    {
      quote: "Their AI chatbot and automated scheduling system have transformed how we handle customer inquiries. We've seen a dramatic improvement in customer satisfaction and efficiency.",
      name: "Matthew Alvarez",
      role: "Marketing Director, El Arroyo",
      metrics: [
        { label: 'Response Time', value: '-85%' },
        { label: 'Customer Satisfaction', value: '98%' }
      ],
      color: '#FF3B30'
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Hero Section with matching home page background */}
      <div className="relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF6F00]/5 via-[#FF3B30]/5 to-[#8C1AFF]/5" />
          
          <div className="absolute inset-0" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 48 L6 48 L6 12' stroke='%23FF6F00' stroke-opacity='0.1' fill='none' stroke-width='0.5'/%3E%3Cpath d='M18 48 L18 36 L42 36 L42 12' stroke='%23FF3B30' stroke-opacity='0.1' fill='none' stroke-width='0.5'/%3E%3Cpath d='M30 48 L30 24 L54 24' stroke='%238C1AFF' stroke-opacity='0.1' fill='none' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />

          <div className="absolute inset-0 opacity-10">
            <div className="h-full w-full" style={{
              backgroundImage: 'radial-gradient(circle, #FF6F00 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }} />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block">Innovative AI Services</span>
              <span className="block mt-2 bg-gradient-to-r from-[#FF6F00] via-[#FF3B30] to-[#8C1AFF] text-transparent bg-clip-text animate-gradient">
                Transform Your Business
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Empowering businesses with cutting-edge AI solutions for outreach, lead generation, and operational excellence.
            </p>
            <Link to="/contact">
              <Button 
                variant="primary"
                className="text-lg px-8 py-4 bg-gradient-to-r from-[#FF6F00] via-[#FF3B30] to-[#FF6F00]"
              >
                <span className="flex items-center justify-center gap-2">
                  Get Started with AI Today
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="relative py-24 bg-white/50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full" style={{
              backgroundImage: 'radial-gradient(circle, #8C1AFF 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }} />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {services.map((service) => (
              <div 
                key={service.id}
                className="group relative bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 p-[1px] rounded-xl bg-gradient-to-r from-[#FF6F00]/30 via-[#FF3B30]/30 to-[#8C1AFF]/30" />
                  </div>
                </div>

                <div className="relative">
                  {/* Icon with glow effect */}
                  <div className="mb-4 relative">
                    <service.icon 
                      className="w-12 h-12 transition-transform duration-300 group-hover:scale-110 relative z-10" 
                      style={{ color: service.color }}
                    />
                    <div 
                      className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                      style={{ backgroundColor: service.color }}
                    />
                  </div>

                  {/* Content */}
                  <h2 
                    className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
                    style={{ 
                      backgroundImage: `linear-gradient(to right, ${service.color}, ${service.color})` 
                    }}
                  >
                    {service.header}
                  </h2>
                  
                  <p className="text-gray-700 mb-4 text-sm">{service.description}</p>
                  
                  <div className="space-y-4 text-sm">
                    <div>
                      <h3 className="font-bold mb-1 text-gray-900">Features:</h3>
                      <ul className="list-disc list-inside space-y-0.5">
                        {service.features.map((feature, i) => (
                          <li key={i} className="text-gray-700">{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1 text-gray-900">Benefits:</h3>
                      <ul className="list-disc list-inside space-y-0.5">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="text-gray-700">{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 p-[1px] rounded-xl bg-gradient-to-r from-[#FF6F00]/30 via-[#FF3B30]/30 to-[#8C1AFF]/30" />
                  </div>
                </div>
                
                <div className="relative flex items-center space-x-4">
                  <stat.icon 
                    className="w-12 h-12 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: stat.color }}
                  />
                  <div>
                    <div className="text-3xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
                    <div className="text-gray-700">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials Section */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Discover how AI solutions are transforming businesses across industries.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group relative bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  {/* Gradient border effect */}
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 p-[1px] rounded-xl bg-gradient-to-r from-[#FF6F00]/30 via-[#FF3B30]/30 to-[#8C1AFF]/30" />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <Quote 
                      className="w-12 h-12 mb-4"
                      style={{ color: testimonial.color }}
                    />
                    
                    <blockquote className="text-lg mb-6">{testimonial.quote}</blockquote>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {testimonial.metrics.map((metric, i) => (
                        <div key={i} className="bg-gray-50 rounded-lg p-4">
                          <div className="text-2xl font-bold" style={{ color: testimonial.color }}>
                            {metric.value}
                          </div>
                          <div className="text-sm text-gray-700">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div>
                      <div className="font-bold text-lg">{testimonial.name}</div>
                      <div className="text-gray-700">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTAs */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF6F00]/5 via-[#FF3B30]/5 to-[#8C1AFF]/5 rounded-3xl blur-xl" />
            <div className="relative backdrop-blur-md bg-white/30 rounded-3xl p-8 border border-white/20">
              <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-[#FF6F00] via-[#FF3B30] to-[#8C1AFF] text-transparent bg-clip-text animate-gradient">
                Ready to Automate, Elevate, and Dominate?
              </h2>
              <div className="flex flex-col sm:flex-row gap-8 items-stretch max-w-4xl mx-auto">
                <div className="flex-1 flex flex-col items-center">
                  <span className="text-gray-600 mb-2">Ready to Automate?</span>
                  <Link to="/contact" className="w-full">
                    <Button 
                      variant="primary"
                      className="w-full h-[60px] group relative overflow-hidden bg-gradient-to-r from-[#FF6F00] via-[#FF3B30] to-[#FF6F00]"
                    >
                      <span className="flex items-center justify-center gap-2 px-6">
                        <span className="whitespace-nowrap">Start Here</span>
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 flex-shrink-0" />
                      </span>
                    </Button>
                  </Link>
                </div>

                <div className="flex-1 flex flex-col items-center">
                  <span className="text-gray-600 mb-2">Not Sure Where to Start?</span>
                  <a href="https://form.typeform.com/to/xhYsGnhQ" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button 
                      variant="secondary"
                      className="w-full h-[60px] group relative overflow-hidden bg-white border-2 border-[#8C1AFF] text-[#8C1AFF] hover:bg-[#8C1AFF] hover:text-white"
                    >
                      <span className="flex items-center justify-center gap-2 px-6">
                        <span className="whitespace-nowrap">Get an AI Exploration Audit</span>
                        <span className="whitespace-nowrap text-sm">($99)</span>
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 flex-shrink-0" />
                      </span>
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}