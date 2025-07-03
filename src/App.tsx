import { useState, useEffect } from 'react';
import { 
  Wifi, 
  Zap, 
  Shield, 
  Star, 
  ArrowRight, 
  Check, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronDown,
  ChevronUp,
  Users,
  Award,
  Play,
  Sparkles,
  Globe,
  Layers
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('privacy');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Ultra-Fast Internet",
      description: "Experience lightning-fast fiber optic speeds up to 1 Gbps with our next-generation network infrastructure.",
      features: ["99.9% uptime guarantee", "No data caps", "24/7 support"],
      gradient: "from-orange-400 to-red-500"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Smart TV Solutions",
      description: "Premium entertainment with 300+ channels, 4K streaming, and intelligent content recommendations.",
      features: ["4K/HDR channels", "Cloud DVR", "AI recommendations"],
      gradient: "from-orange-500 to-amber-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Intelligent Security",
      description: "AI-powered home security with smart monitoring, facial recognition, and automated responses.",
      features: ["AI monitoring", "Smart alerts", "Mobile control"],
      gradient: "from-amber-400 to-orange-500"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Premium Support",
      description: "Award-winning customer service powered by AI assistance and local expert technicians.",
      features: ["AI-powered help", "Local experts", "Instant support"],
      gradient: "from-red-400 to-orange-500"
    }
  ];

  const plans = [
    {
      name: "Essential",
      price: "$49.99",
      description: "Perfect for small households",
      features: [
        "100 Mbps Internet",
        "Basic TV (100+ channels)",
        "Free Installation",
        "24/7 Support"
      ],
      popular: false,
      gradient: "from-gray-600 to-gray-700"
    },
    {
      name: "Intelligence",
      price: "$79.99",
      description: "Our most popular choice",
      features: [
        "500 Mbps Internet",
        "Smart TV (200+ channels)",
        "AI-Enhanced Experience",
        "Priority Support",
        "Free Equipment"
      ],
      popular: true,
      gradient: "from-orange-500 to-red-500"
    },
    {
      name: "Ultimate",
      price: "$109.99",
      description: "Maximum performance",
      features: [
        "1 Gbps Internet",
        "Premium TV (300+ channels)",
        "Full AI Suite",
        "Smart Security Package",
        "VIP Support"
      ],
      popular: false,
      gradient: "from-red-600 to-orange-600"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Research Scientist",
      rating: 5,
      text: "The AI-powered features have transformed how we work from home. Incredible speeds and intelligent optimization.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      stat: "1.2K+ Papers Published"
    },
    {
      name: "Marcus Rodriguez",
      role: "Tech Entrepreneur",
      rating: 5,
      text: "Bundle Service's intelligent network adapts to our business needs. It's like having a smart assistant for connectivity.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      stat: "500+ Team Members"
    },
    {
      name: "Emily Watson",
      role: "Digital Creator",
      rating: 5,
      text: "The seamless integration of all services through their AI platform has streamlined our entire digital workflow.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      stat: "2M+ Followers"
    }
  ];

  const faqs = [
  {
    question: "What services does Bundle Service offer?",
    answer: "Bundle Service provides high-speed internet, cellular plans, bundled connectivity packages, and streaming services as a certified JNA dealer for top providers."
  },
  {
    question: "Which companies can I sign up with through Bundle Service?",
    answer: "As a certified JNA dealer, Bundle Service connects you to providers such as AT&T, Verizon, Spectrum, Comcast Xfinity, Frontier, HughesNet, CenturyLink, Paramount+, SHOWTIME®, and more."
  },
  {
    question: "Is Bundle Service a direct service provider?",
    answer: "No. Bundle Service is an authorized dealer and certified retailer that facilitates connections to third-party providers but does not directly deliver the internet or streaming service."
  },
  {
    question: "What are Bundle Service’s execution charges?",
    answer: "Our execution fees range from $49.99 to $199.99, depending on the request (installations, plan changes, bill payments, cancellations). These are separate from your provider’s service charges."
  },
  {
    question: "Why are these execution charges separate from my provider’s billing?",
    answer: "Bundle Service handles the administrative work—scheduling, setup, upgrades, support—independently. Your provider’s billing covers the actual service usage and subscription fees."
  },
  {
    question: "How do I contact Bundle Service for support?",
    answer: "You can reach our support team via the contact form on our website or by calling (888) 510-8078. We’re here to help with any inquiries or issues."
  }
];

  const whyUs = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Next-Gen Infrastructure",
      description: "Built on cutting-edge fiber optic technology with AI-optimized routing for maximum performance and reliability.",
      stat: "99.99%"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "AI-Powered Experience",
      description: "Intelligent systems that learn and adapt to provide personalized, optimized connectivity and entertainment.",
      stat: "50% Faster"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community-Focused",
      description: "Locally owned with deep community roots, providing personalized service that understands your unique needs.",
      stat: "150K+ Happy"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Industry Leading",
      description: "Recognized as the most innovative connectivity provider with multiple awards for customer satisfaction and technology.",
      stat: "#1 Rated"
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-orange-200/50 animate-slide-down">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3 animate-bounce-gentle">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg animate-pulse-glow">
                <Zap className="w-6 h-6 text-white animate-spin-slow" />
              </div>
              <span className="text-2xl font-bold text-gray-800 animate-fade-in">Bundle Service</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-600 hover:text-orange-600 transition-all duration-300 font-medium hover:scale-110 transform">About</a>
              <a href="#services" className="text-gray-600 hover:text-orange-600 transition-all duration-300 font-medium hover:scale-110 transform">How It Works</a>
              <a href="#plans" className="text-gray-600 hover:text-orange-600 transition-all duration-300 font-medium hover:scale-110 transform">Library</a>
              <a href="#contact" className="text-gray-600 hover:text-orange-600 transition-all duration-300 font-medium hover:scale-110 transform">Log In</a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
             <button
  onClick={() => window.location.href = 'tel:+18885108078'}
  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2.5 rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg animate-pulse-glow"
>
  Contact Us
</button>

            </div>

            <button 
              className="md:hidden text-gray-800 animate-bounce"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-orange-200/50 animate-slide-down">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-600 hover:text-orange-600 transition-colors font-medium animate-fade-in">About</a>
                <a href="#services" className="text-gray-600 hover:text-orange-600 transition-colors font-medium animate-fade-in delay-100">How It Works</a>
                <a href="#plans" className="text-gray-600 hover:text-orange-600 transition-colors font-medium animate-fade-in delay-200">Library</a>
                <a href="#contact" className="text-gray-600 hover:text-orange-600 transition-colors font-medium animate-fade-in delay-300">Log In</a>
              <button
  onClick={() => window.location.href = 'tel:+18885108078'}
  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2.5 rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg animate-pulse-glow"
>
  Contact Us
</button>

              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative pt-16 min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Waves */}
        <div className="absolute inset-0">
          <svg className="absolute inset-0 w-full h-full animate-wave" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FED7AA" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#FDBA74" stopOpacity="0.6"/>
              </linearGradient>
              <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FB923C" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="#F97316" stopOpacity="0.2"/>
              </linearGradient>
            </defs>
            <path d="M0,400 C300,300 600,500 1200,400 L1200,800 L0,800 Z" fill="url(#wave1)" className="animate-float">
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0;50,0;0,0"
                dur="20s"
                repeatCount="indefinite"
              />
            </path>
            <path d="M0,500 C400,400 800,600 1200,500 L1200,800 L0,800 Z" fill="url(#wave2)" className="animate-float-reverse">
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0;-30,0;0,0"
                dur="15s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Hero Pill Container */}
            <div className="bg-white/90 backdrop-blur-xl rounded-full px-12 py-16 shadow-2xl border border-orange-200/50 mb-12 animate-scale-in">
              <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-6 leading-tight animate-text-glow">
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent animate-gradient-shift">
                  Intelligent
                </span>
                <br />
                <span className="animate-bounce-gentle">Connectivity</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
                Experience the future of internet and entertainment with AI-powered optimization, 
                seamless integration, and intelligent performance that adapts to your needs.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up delay-300">
            <button
  onClick={() => window.location.href = 'tel:+18885108078'}
  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-4 rounded-2xl text-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center space-x-3 animate-pulse-glow"
>
  <span>Get Started</span>
  <ArrowRight className="w-5 h-5 animate-bounce-x" />
</button>

              <button className="bg-white/80 backdrop-blur-xl border-2 border-orange-300 text-gray-700 px-10 py-4 rounded-2xl text-lg font-semibold hover:bg-white hover:border-orange-400 transition-all duration-300 flex items-center space-x-3 shadow-lg animate-float">
                <Play className="w-5 h-5 animate-spin-slow" />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Badge */}
        <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-xl rounded-full px-6 py-3 shadow-lg border border-orange-200/50 animate-slide-in-right">
          <p className="text-sm font-medium text-gray-600 animate-text-glow">The world's best connectivity platform</p>
        </div>
      </section>

      {/* Feature Grid Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Illustrated Feature Card */}
            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-8 text-white shadow-2xl transform hover:scale-105 transition-all duration-300 fade-in animate-float">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 animate-spin-slow">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 animate-text-glow">AI-Powered Network</h3>
              <p className="text-orange-100 mb-6 leading-relaxed animate-fade-in-up">
                Our intelligent infrastructure automatically optimizes your connection for peak performance, 
                learning from usage patterns to deliver the perfect experience.
              </p>
              <button className="border-2 border-white/30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 animate-pulse-glow">
                Learn More
              </button>
            </div>

            {/* Statistic Block */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-orange-200/50 transform hover:scale-105 transition-all duration-300 fade-in animate-bounce-gentle">
              <div className="text-center">
                <div className="text-6xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4 animate-count-up">
                  1.5K+
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 animate-text-glow">Research Papers Published</h3>
                <p className="text-gray-600 leading-relaxed animate-fade-in-up">
                  Our customers include leading researchers and innovators who rely on our 
                  ultra-fast, reliable connectivity for groundbreaking work.
                </p>
              </div>
            </div>

            {/* User Testimonial with Play Overlay */}
            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-orange-200/50 transform hover:scale-105 transition-all duration-300 fade-in overflow-hidden animate-float-reverse">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                  alt="Customer testimonial" 
                  className="w-full h-48 object-cover rounded-2xl mb-6 animate-zoom-in"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl flex items-center justify-center">
                  <button className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse-glow">
                    <Play className="w-6 h-6 text-gray-800 ml-1 animate-bounce" />
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-4 animate-slide-in-left">
                <img 
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop" 
                  alt="Dr. Sarah Chen" 
                  className="w-12 h-12 rounded-full object-cover animate-spin-slow"
                />
                <div>
                  <div className="font-semibold text-gray-800 animate-text-glow">Dr. Sarah Chen</div>
                  <div className="text-gray-600 text-sm animate-fade-in">Research Scientist</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 animate-text-glow">Intelligent Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              Experience the next generation of connectivity with AI-powered optimization, 
              seamless integration, and intelligent performance monitoring.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 hover:bg-white transition-all duration-300 transform hover:scale-105 border border-orange-200/50 shadow-xl fade-in animate-float" style={{animationDelay: `${index * 200}ms`}}>
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg animate-spin-slow`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 animate-text-glow">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed animate-fade-in-up">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-gray-600 animate-slide-in-left" style={{animationDelay: `${idx * 100}ms`}}>
                      <Check className="w-4 h-4 text-orange-500 animate-bounce" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 animate-text-glow">Choose Your Intelligence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              Flexible plans designed to adapt and grow with your needs, 
              powered by intelligent optimization and premium support.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div key={index} className={`bg-white/80 backdrop-blur-xl rounded-3xl p-8 ${plan.popular ? 'ring-2 ring-orange-400 transform scale-105 shadow-2xl animate-pulse-glow' : 'shadow-xl'} hover:bg-white transition-all duration-300 border border-orange-200/50 fade-in animate-float`} style={{animationDelay: `${index * 200}ms`}}>
                {plan.popular && (
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold text-center mb-6 shadow-lg animate-bounce">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-800 mb-2 animate-text-glow">{plan.name}</h3>
                <p className="text-gray-600 mb-4 animate-fade-in">{plan.description}</p>
                <div className="text-4xl font-bold text-gray-800 mb-6 animate-count-up">
                  {plan.price}
                  <span className="text-lg text-gray-500">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3 text-gray-600 animate-slide-in-left" style={{animationDelay: `${idx * 100}ms`}}>
                      <Check className="w-5 h-5 text-orange-500 animate-bounce" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${plan.popular ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg animate-pulse-glow' : 'border-2 border-orange-300 text-gray-700 hover:border-orange-400 hover:text-orange-600'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 animate-text-glow">Why Choose Intelligence?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              We combine cutting-edge technology with human expertise to deliver 
              an unparalleled connectivity experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item, index) => (
              <div key={index} className="text-center fade-in animate-float" style={{animationDelay: `${index * 200}ms`}}>
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6 text-white shadow-xl animate-spin-slow">
                  {item.icon}
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2 animate-count-up">
                  {item.stat}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 animate-text-glow">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed animate-fade-in-up">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 animate-text-glow">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              Discover how our intelligent connectivity solutions are empowering 
              researchers, creators, and innovators worldwide.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-orange-200/50 shadow-xl fade-in hover:shadow-2xl transition-all duration-300 animate-float" style={{animationDelay: `${index * 200}ms`}}>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-orange-400 fill-current animate-bounce" style={{animationDelay: `${i * 100}ms`}} />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed animate-fade-in-up">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 animate-slide-in-left">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover animate-spin-slow"
                    />
                    <div>
                      <div className="text-gray-800 font-semibold animate-text-glow">{testimonial.name}</div>
                      <div className="text-gray-500 text-sm animate-fade-in">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="text-right animate-slide-in-right">
                    <div className="text-sm font-semibold text-orange-600 animate-pulse">{testimonial.stat}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 animate-text-glow">Intelligent Answers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              Get instant answers to common questions about our AI-powered connectivity solutions.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4 fade-in animate-slide-in-up" style={{animationDelay: `${index * 100}ms`}}>
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full bg-white/80 backdrop-blur-xl rounded-2xl p-6 text-left hover:bg-white transition-all duration-300 border border-orange-200/50 shadow-lg transform hover:scale-102"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-800 animate-text-glow">{faq.question}</h3>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-orange-500 animate-bounce" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-orange-500 animate-bounce" />
                    )}
                  </div>
                </button>
                {openFaq === index && (
                  <div className="bg-white/90 backdrop-blur-xl rounded-b-2xl p-6 border-x border-b border-orange-200/50 shadow-lg animate-fade-in-up">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 animate-text-glow">Connect With Intelligence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              Ready to experience the future of connectivity? Our intelligent systems are waiting to optimize your digital life.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="fade-in animate-slide-in-left">
              <form className="space-y-6">
                <div className="animate-fade-in-up">
                  <label className="block text-gray-700 font-semibold mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/80 backdrop-blur-xl border border-orange-300 rounded-2xl px-6 py-4 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-lg transition-all duration-300 hover:shadow-xl"
                    placeholder="Your full name"
                  />
                </div>
                <div className="animate-fade-in-up delay-100">
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/80 backdrop-blur-xl border border-orange-300 rounded-2xl px-6 py-4 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-lg transition-all duration-300 hover:shadow-xl"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="animate-fade-in-up delay-200">
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full bg-white/80 backdrop-blur-xl border border-orange-300 rounded-2xl px-6 py-4 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-lg transition-all duration-300 hover:shadow-xl"
                    placeholder="Tell us about your connectivity needs..."
                  ></textarea>
                </div>
               <button
  onClick={() => window.location.href = 'tel:+18885108078'}
  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-2xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-xl animate-pulse-glow"
>
  Send Message
</button>

              </form>
            </div>
            
            <div className="fade-in animate-slide-in-right">
              <div className="space-y-8">
                <div className="flex items-center space-x-4 animate-slide-in-left">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg animate-spin-slow">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-gray-800 font-semibold text-lg animate-text-glow">Intelligent Support</h3>
                   <a href="tel:+18885108078" className="text-gray-600 animate-fade-in">
  (888) 510-8078
</a>

                  </div>
                </div>
                
                <div className="flex items-center space-x-4 animate-slide-in-left delay-100">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg animate-spin-slow">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 animate-slide-in-left delay-200">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg animate-spin-slow">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-white/80 backdrop-blur-xl rounded-3xl p-6 border border-orange-200/50 shadow-xl animate-float">
                <h3 className="text-gray-800 font-semibold mb-4 text-lg animate-text-glow">AI Support Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between animate-slide-in-left">
                    <span>AI Assistant</span>
                    <span className="animate-pulse">24/7 Available</span>
                  </div>
                  <div className="flex justify-between animate-slide-in-left delay-100">
              
                  </div>
                  <div className="flex justify-between animate-slide-in-left delay-200">
                    <span>Emergency Support</span>
                    <span className="animate-pulse">Always On</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Pages Modal */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          <button
            onClick={() => setActiveTab(activeTab ? '' : 'privacy')}
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-2xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-xl font-semibold animate-pulse-glow"
          >
            Legal Info
          </button>
          
          {activeTab && (
            <div className="absolute bottom-16 right-0 w-96 max-h-96 bg-white/95 backdrop-blur-xl rounded-3xl p-6 border border-orange-200/50 overflow-y-auto shadow-2xl animate-scale-in">
              <div className="flex space-x-4 mb-4">
                <button 
                  onClick={() => setActiveTab('privacy')}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${activeTab === 'privacy' ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white animate-pulse-glow' : 'text-gray-600 hover:text-gray-800'}`}
                >
                  Privacy
                </button>
                <button 
                  onClick={() => setActiveTab('refund')}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${activeTab === 'refund' ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white animate-pulse-glow' : 'text-gray-600 hover:text-gray-800'}`}
                >
                  Refund
                </button>
                <button 
                  onClick={() => setActiveTab('terms')}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${activeTab === 'terms' ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white animate-pulse-glow' : 'text-gray-600 hover:text-gray-800'}`}
                >
                  Terms
                </button>
              </div>
              
              <div className="text-sm text-gray-600 animate-fade-in-up">
               {activeTab === 'privacy' && (
    <div>
      <h3 className="text-gray-800 font-semibold mb-3 animate-text-glow">
        Privacy Policy
      </h3>
      <p className="mb-3">
        At Bundle Service, we are committed to safeguarding your personal data
        with the utmost transparency and integrity. Our Privacy Policy is designed
        to inform you how we collect, use, and protect your personal information
        in strict accordance with our business model, Google’s business practice
        requirements, and international data protection laws.
      </p>

      <h4 className="text-gray-800 font-semibold mb-2">Information We Collect</h4>
      <p className="mb-3">
        Bundle Service collects information necessary to provide and manage our
        services effectively. We obtain:
      </p>
      <ul className="list-disc list-inside mb-3">
        <li>
          <strong>Personal Information:</strong> your name, address, phone number,
          and email when you register for services, purchase a plan, or make inquiries.
        </li>
        <li>
          <strong>Financial Information:</strong> credit card details or banking
          information when you pay for services.
        </li>
        <li>
          <strong>Usage Data:</strong> information about your interactions with our
          website (IP addresses, browser type, pages visited, time spent, device type)
          to improve your experience and monitor site performance.
        </li>
        <li>
          <strong>Service Data:</strong> data related to the service you receive
          through Bundle Service (account numbers, service type, technical support logs),
          collected via forms, cookies, and interactions with our platform or customer
          service team.
        </li>
      </ul>

      <h4 className="text-gray-800 font-semibold mb-2">Why We Collect Information</h4>
      <p className="mb-3">We collect data to:</p>
      <ul className="list-disc list-inside mb-3">
        <li>
          <strong>Provide Services:</strong> activate new services, process orders,
          plan upgrades, and execute account changes like cancellations.
        </li>
        <li>
          <strong>Customer Support:</strong> use your contact and service data to provide
          technical support and resolve issues.
        </li>
        <li>
          <strong>Billing and Payments:</strong> process payments for services, including
          our execution charges (clearly disclosed on our site, ranging from $49.99 to $199.99).
        </li>
        <li>
          <strong>Improvement and Marketing:</strong> with your consent, use non-identifying
          data to improve our services, assess site traffic, and offer promotions aligned
          with your preferences. We ensure full transparency and compliance with Google’s guidelines.
        </li>
      </ul>

      <h4 className="text-gray-800 font-semibold mb-2">Third-Party Service Providers</h4>
      <p className="mb-3">
        Bundle Service partners with third-party vendors—including payment processors and
        JNA-certified providers such as AT&T, Verizon, Spectrum, Xfinity, Dish, and others.
        While we require them to adhere to strict privacy standards, please review their
        privacy policies for details on their data-handling practices.
      </p>

      <h4 className="text-gray-800 font-semibold mb-2">Transparency in Pricing and Billing</h4>
      <p className="mb-3">
        Bundle Service prides itself on clear, up-front pricing in compliance with Google’s Ads Policy:
      </p>
      <ul className="list-disc list-inside mb-3">
        <li>
          <strong>Execution Fees:</strong> for new connections, plan changes, or cancellations,
          range from $49.99 to $199.99, displayed before you commit.
        </li>
        <li>
          <strong>Separate Billing:</strong> execution fees are separate from your service provider’s
          charges (Verizon, Xfinity, Spectrum, etc.), detailed in your provider agreement.
        </li>
        <li>
          <strong>Subscription Fees:</strong> all recurring charges are explained in advance to avoid confusion.
        </li>
      </ul>
      <p className="mb-3">
        We never use misleading or dishonest pricing practices—every cost is transparent before
        you make a commitment.
      </p>

      <h4 className="text-gray-800 font-semibold mb-2">Data Security</h4>
      <p className="mb-3">We take rigorous measures to secure your personal information:</p>
      <ul className="list-disc list-inside mb-3">
        <li>
          <strong>Encryption:</strong> all sensitive data is encrypted during transmission and storage.
        </li>
        <li>
          <strong>Access Control:</strong> only authorized employees with confidentiality agreements can access your data.
        </li>
        <li>
          <strong>Secure Payment Gateways:</strong> we use industry-standard, third-party processors to handle transactions.
        </li>
      </ul>
      <p className="mb-3">
        In the event of a data breach, Bundle Service will notify you and relevant authorities as legally required.
      </p>

      <h4 className="text-gray-800 font-semibold mb-2">Your Rights and Control</h4>
      <p className="mb-3">You have the right to:</p>
      <ul className="list-disc list-inside mb-3">
        <li>
          <strong>Access and Correct Your Data:</strong> request to view, update, or correct your personal information at any time.
        </li>
        <li>
          <strong>Request Data Deletion:</strong> ask for erasure of your personal data when it’s no longer needed for the services you use.
        </li>
        <li>
          <strong>Opt-Out of Marketing:</strong> unsubscribe from marketing communications at any time.
        </li>
        <li>
          <strong>Data Portability:</strong> request your personal data in a machine-readable format.
        </li>
      </ul>

      <h4 className="text-gray-800 font-semibold mb-2">Compliance with Google’s Ad Policies</h4>
      <p className="mb-3">
        Bundle Service strictly follows Google’s advertising policies to ensure honest, transparent,
        and compliant practices. We do not misrepresent our services, affiliations, or pricing,
        nor engage in deceptive data-collection or phishing practices.
      </p>

      <h4 className="text-gray-800 font-semibold mb-2">Changes to Our Privacy Policy</h4>
      <p className="mb-3">
        Bundle Service may modify this policy from time to time. We will post updates on this page
        and notify you of significant changes via email or site notice.
      </p>

      <p>📞 Phone: +1 (888) 510-8078</p>
    </div>
  )}

             {activeTab === 'refund' && (
  <div>
    <h3 className="text-gray-800 font-semibold mb-3 animate-text-glow">Refund Policy</h3>

    <p className="font-semibold mb-2">General Refund Policy:</p>
    <p className="mb-3">
      Bundle Service strives to ensure the satisfaction of our customers. However, as a distributor of third-party services, our refund policies are aligned with the policies of the service providers we represent. Refunds may be issued under the following circumstances:
    </p>
    <ul className="list-disc list-inside mb-4">
      <li>
        <span className="font-semibold">Cancellation Before Installation:</span> If you cancel your service request before the service installation, you may be eligible for a full refund of any upfront payments made to Bundle Service.
      </li>
      <li className="mt-2">
        <span className="font-semibold">Service Issues:</span> If there is a verifiable issue with the service installation or activation that is directly attributable to Bundle Service, we will work to rectify the issue or, in rare cases, process a refund.
      </li>
      <li className="mt-2">
        <span className="font-semibold">Non-Refundable Items:</span> Fees associated with the processing of services, including installation charges, activation fees, and administrative costs, are non-refundable.
      </li>
    </ul>

    <p className="font-semibold mb-2">Refund Request Process:</p>
    <p className="mb-2">To request a refund, you must:</p>
    <ol className="list-decimal list-inside mb-4">
      <li>
        <span className="font-semibold">Submit a Request:</span> Contact our customer service team within 14 days of the service issue to initiate a refund request.
      </li>
      <li className="mt-2">
        <span className="font-semibold">Provide Documentation:</span> You may be required to provide documentation or information regarding the service issue.
      </li>
      <li className="mt-2">
        <span className="font-semibold">Refund Timelines:</span> Approved refunds will be processed within 7–14 business days, depending on your payment method and financial institution.
      </li>
    </ol>

    <p>
      For any inquiries regarding our refund policy, please contact our support team at <a href="tel:8885108078" className="text-blue-600 underline">(888) 510-8078</a>.
    </p>
  </div>
)}

               {activeTab === 'terms' && (
  <div>
    <h3 className="text-gray-800 font-semibold mb-3 animate-text-glow">Terms &amp; Conditions</h3>
    
    <p className="mb-3">
      Welcome to <strong>Bundle Service</strong>. These Terms and Conditions (“Terms”) govern your use of our website, services, and all related interactions between you and <strong>Bundle Service</strong>. By accessing our website or utilizing our services, you agree to comply with and be bound by these Terms. Please read them carefully before proceeding.
    </p>
    <p className="mb-4">
      If you do not agree with any of the Terms outlined below, please do not use our services or this website.
    </p>
    <hr className="mb-4" />
    
    <h4 className="font-semibold mb-2">1. Definitions</h4>
    <ul className="list-disc list-inside mb-4">
      <li><strong>“Bundle Service”</strong> refers to our company, an authorized dealer providing intermediary services between consumers and third-party service providers, including but not limited to internet, cellular, streaming, and bundled services.</li>
      <li><strong>“User”, “you”, or “your”</strong> refers to any person or entity accessing our website or using our services.</li>
      <li><strong>“Services”</strong> refers to any support or execution services provided by <strong>Bundle Service</strong>, including but not limited to setting up new connections, plan upgrades, account cancellations, bill payments, and related support.</li>
      <li><strong>“Third-Party Service Providers”</strong> refers to external companies and service providers with whom <strong>Bundle Service</strong> has partnerships to offer their services to customers.</li>
    </ul>
    
    <h4 className="font-semibold mb-2">2. Scope of Services</h4>
    <p className="mb-2">
      <strong>Bundle Service</strong> offers execution services on behalf of third-party service providers. We assist in tasks such as new connection setup, billing assistance, account upgrades, and other support-related activities. While <strong>Bundle Service</strong> facilitates these services, the actual delivery of internet, streaming, or cellular services is provided by third-party service providers.
    </p>
    <ul className="list-disc list-inside mb-4">
      <li><strong>Quality Disclaimer:</strong> <strong>Bundle Service</strong> is not responsible for the quality, uptime, or reliability of the services delivered by third-party service providers.</li>
      <li><strong>Issue Resolution:</strong> All service-related issues, outages, or quality concerns should be addressed directly with the relevant service provider.</li>
    </ul>
    
    <h4 className="font-semibold mb-2">3. Account Responsibilities</h4>
    <ul className="list-disc list-inside mb-4">
      <li><strong>Account Creation:</strong> To use our services, you may be required to create an account on our website. You agree to provide accurate and complete information when setting up an account and to keep your account information updated.</li>
      <li><strong>Account Security:</strong> You are responsible for maintaining the confidentiality of your account credentials and for all activities conducted under your account. <strong>Bundle Service</strong> will not be liable for any losses resulting from unauthorized use of your account.</li>
      <li><strong>Accurate Information:</strong> You agree to provide correct and up-to-date information, including your billing and contact details. Providing false or incorrect information may result in the suspension or termination of your account.</li>
    </ul>
    
    <h4 className="font-semibold mb-2">4. Payments and Fees</h4>
    <p className="mb-2">
      <strong>Bundle Service</strong> charges execution fees for the administrative services it provides. These fees are separate from the charges billed by third-party service providers.
    </p>
    <ul className="list-disc list-inside mb-4">
      <li><strong>Execution Fees:</strong> The fees charged by <strong>Bundle Service</strong> cover the execution and facilitation of tasks such as connection setup, plan changes, and account management. These fees will be disclosed before you confirm a service request.</li>
      <li><strong>Third-Party Billing:</strong> The charges billed by third-party service providers are outside of <strong>Bundle Service</strong>’s control, and you are responsible for paying these charges directly to the provider according to their billing terms.</li>
    </ul>
    
    <h4 className="font-semibold mb-2">5. Service Requests</h4>
    <ul className="list-disc list-inside mb-4">
      <li><strong>Service Execution:</strong> <strong>Bundle Service</strong> will make reasonable efforts to ensure the timely execution of your requests, such as new connections or upgrades. However, we cannot guarantee a specific timeframe for completion as it may depend on third-party providers’ processes.</li>
      <li><strong>Cancellations:</strong> If you wish to cancel a service request, you must notify us immediately. Cancellations may only be possible if the request has not yet been executed. For more details, please refer to our Refund Policy.</li>
    </ul>
    
    <h4 className="font-semibold mb-2">6. Limitations of Liability</h4>
    <ul className="list-disc list-inside mb-4">
      <li><strong>Third-Party Provider Failures:</strong> <strong>Bundle Service</strong> is not responsible for any service disruptions, quality issues, or delays caused by third-party service providers. Any such issues must be taken up with the respective provider.</li>
      <li><strong>Accuracy of Information:</strong> <strong>Bundle Service</strong> does its best to ensure the accuracy of the information provided on our website. However, we do not guarantee that the information is free of errors, and we reserve the right to correct any inaccuracies or omissions.</li>
      <li><strong>Service Delays:</strong> <strong>Bundle Service</strong> will not be liable for any delays in service execution caused by circumstances outside our control, including but not limited to technical difficulties, third-party delays, or force majeure events.</li>
    </ul>
    
    <h4 className="font-semibold mb-2">7. Use of the Website</h4>
    <ul className="list-disc list-inside mb-4">
      <li><strong>Prohibited Activities:</strong> You agree not to engage in any unlawful, harmful, or malicious activity while using our website, including but not limited to hacking, transmitting viruses, or engaging in fraudulent behavior.</li>
      <li><strong>Intellectual Property:</strong> All content on this website, including text, graphics, logos, and software, is the intellectual property of <strong>Bundle Service</strong> or our licensors. You may not copy, distribute, or otherwise use this content without express permission.</li>
    </ul>
    
    <h4 className="font-semibold mb-2">8. Privacy Policy</h4>
    <p className="mb-4">
      Your use of the <strong>Bundle Service</strong> website and services is subject to our Privacy Policy, which outlines how we collect, use, and protect your personal data.
    </p>
    
    <h4 className="font-semibold mb-2">9. Modifications to Terms</h4>
    <p className="mb-4">
      <strong>Bundle Service</strong> reserves the right to modify or update these Terms at any time without prior notice. Any changes to these Terms will be posted on this page, and the updated version will take effect immediately upon posting. We encourage you to review these Terms periodically to stay informed of any updates.
    </p>
    
    <h4 className="font-semibold mb-2">10. Termination</h4>
    <p className="mb-4">
      <strong>Bundle Service</strong> reserves the right to suspend or terminate your account or access to our services at our discretion, including but not limited to violations of these Terms, fraudulent activity, or failure to make payments.
    </p>
    
    <h4 className="font-semibold mb-2">11. Contact Us</h4>
    <p>
      If you have any questions about these Terms and Conditions, or if you need assistance regarding our services, you can reach out to us at:<br/>
      <strong>📞 (888) 510-8078</strong>
    </p>
  </div>
)}

              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 py-12 border-t border-gray-700">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="animate-fade-in">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg animate-spin-slow">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white animate-text-glow">Bundle Service</span>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed animate-fade-in-up">
                Connecting communities with intelligent connectivity and premium entertainment solutions for over 15 years.
              </p>
            </div>
            
            <div className="animate-fade-in delay-100">
              <h3 className="text-white font-semibold mb-4 animate-text-glow">Intelligent Solutions</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="hover:text-orange-400 transition-colors animate-slide-in-left">AI-Powered Internet</li>
                <li className="hover:text-orange-400 transition-colors animate-slide-in-left delay-100">Smart Entertainment</li>
                <li className="hover:text-orange-400 transition-colors animate-slide-in-left delay-200">Intelligent Security</li>
                <li className="hover:text-orange-400 transition-colors animate-slide-in-left delay-300">Business Intelligence</li>
              </ul>
            </div>
            
            <div className="animate-fade-in delay-200">
              <h3 className="text-white font-semibold mb-4 animate-text-glow">Smart Support</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="hover:text-orange-400 transition-colors animate-slide-in-left">24/7 AI Assistant</li>
                <li className="hover:text-orange-400 transition-colors animate-slide-in-left delay-100">Expert Technicians</li>
                <li className="hover:text-orange-400 transition-colors animate-slide-in-left delay-200">Intelligent Diagnostics</li>
                <li className="hover:text-orange-400 transition-colors animate-slide-in-left delay-300">Predictive Maintenance</li>
              </ul>
            </div>
            
            <div className="animate-fade-in delay-300">
              <h3 className="text-white font-semibold mb-4 animate-text-glow">Legal</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <button onClick={() => setActiveTab('privacy')} className="hover:text-orange-400 transition-colors animate-slide-in-left">
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('refund')} className="hover:text-orange-400 transition-colors animate-slide-in-left delay-100">
                    Refund Policy
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('terms')} className="hover:text-orange-400 transition-colors animate-slide-in-left delay-200">
                    Terms & Conditions
                  </button>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300 animate-fade-in">
            <p>&copy; 2024 Bundle Service. All rights reserved. Powered by Intelligent Technology.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
