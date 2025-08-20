'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface SuccessStory {
  id: string;
  name: string;
  company: string;
  role: string;
  imageUrl: string;
  testimonial: string;
  initials: string;
}

interface Sponsor {
  id: string;
  name: string;
  logoUrl: string;
}

interface Stat {
  number: string;
  label: string;
}

const TechStartupClubLanding = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const successStories: SuccessStory[][] = [
    [
      {
        id: '1',
        name: 'Sarah Johnson',
        company: 'Meta',
        role: 'Software Engineer @ Meta',
        imageUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        testimonial: 'The client projects I worked on here directly led to my Meta internship. Having real production code to show in interviews was a game-changer.',
        initials: 'SJ'
      },
      {
        id: '2',
        name: 'Michael Kim',
        company: 'Stripe',
        role: 'Product Manager @ Stripe',
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        testimonial: 'Leading a team on the UW project taught me product management skills that got me noticed by Stripe recruiters.',
        initials: 'MK'
      },
      {
        id: '3',
        name: 'Alex Liu',
        company: 'Airbnb',
        role: 'Full-Stack Dev @ Airbnb',
        imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        testimonial: 'From club member to Airbnb engineer in 8 months. The professional development here is unmatched.',
        initials: 'AL'
      }
    ],
    [
      {
        id: '4',
        name: 'Emma Rodriguez',
        company: 'Google',
        role: 'UX Designer @ Google',
        imageUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        testimonial: 'Working on real user problems with actual stakeholders prepared me perfectly for my Google UX internship.',
        initials: 'ER'
      },
      {
        id: '5',
        name: 'David Thompson',
        company: 'Netflix',
        role: 'Data Scientist @ Netflix',
        imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        testimonial: 'The analytics work I did for club clients became the centerpiece of my Netflix interview presentation.',
        initials: 'DT'
      },
      {
        id: '6',
        name: 'Jessica Smith',
        company: 'Uber',
        role: 'Backend Engineer @ Uber',
        imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        testimonial: 'Managing production deployments for real clients gave me confidence that set me apart from other candidates.',
        initials: 'JS'
      }
    ],
    [
      {
        id: '7',
        name: 'Ryan Chen',
        company: 'Amazon',
        role: 'DevOps Engineer @ Amazon',
        imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        testimonial: 'The CI/CD pipelines I built for club projects directly translated to my role at AWS. Real experience matters.',
        initials: 'RC'
      },
      {
        id: '8',
        name: 'Maria Perez',
        company: 'Spotify',
        role: 'Frontend Dev @ Spotify',
        imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        testimonial: 'Building responsive UIs for actual users taught me more than any classroom project ever could.',
        initials: 'MP'
      },
      {
        id: '9',
        name: 'Tyler Wang',
        company: 'Discord',
        role: 'Security Engineer @ Discord',
        imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        testimonial: 'The security audits I conducted for club clients caught the attention of Discord&apos;s security team.',
        initials: 'TW'
      }
    ]
  ];

  const sponsors: Sponsor[] = [
    { id: '1', name: 'Microsoft', logoUrl: 'https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo.png' },
    { id: '2', name: 'Amazon', logoUrl: 'https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png' },
    { id: '3', name: 'Google', logoUrl: 'https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png' },
    { id: '4', name: 'Meta', logoUrl: 'https://logos-world.net/wp-content/uploads/2020/05/Facebook-Logo.png' },
    { id: '5', name: 'Stripe', logoUrl: 'https://logos-world.net/wp-content/uploads/2021/03/Stripe-Logo.png' },
    { id: '6', name: 'Airbnb', logoUrl: 'https://logos-world.net/wp-content/uploads/2020/10/Airbnb-Logo.png' },
    { id: '7', name: 'Netflix', logoUrl: 'https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png' },
    { id: '8', name: 'Uber', logoUrl: 'https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png' }
  ];

  const stats: Stat[] = [
    { number: '89%', label: 'Members land internships' },
    { number: '15+', label: 'Active client projects' },
    { number: '$120K', label: 'Average starting salary' },
    { number: '200+', label: 'Alumni in top tech' }
  ];

  const totalSlides = successStories.length;

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleMouseEnter = () => {
    setIsPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsPlaying(true);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-inter">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 relative flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-pink-500/30 to-green-400/30 animate-pulse"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-8 text-center">
          <div className="inline-block bg-purple-500/20 border border-purple-400/30 px-6 py-2 rounded-full text-sm mb-8 backdrop-blur-sm">
            🚀 Real Projects • Real Experience • Real Results
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent leading-tight">
            TECH STARTUP CLUB
          </h1>
          
          <p className="text-2xl md:text-3xl font-semibold mb-4 text-slate-100">
            Where Students Build Professional Careers
          </p>
          
          <p className="text-xl mb-12 text-slate-300 max-w-2xl mx-auto">
            Work with real clients, ship real products, and land real internships. Join the club thats launching careers in tech.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('join')}
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 w-64 md:w-auto"
            >
              Apply Now
            </button>
            <button
              onClick={() => scrollToSection('success')}
              className="bg-white/10 hover:bg-white/20 border border-white/20 px-8 py-4 rounded-lg text-lg font-semibold backdrop-blur-sm transition-all duration-300 w-64 md:w-auto"
            >
              See Success Stories
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/70" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </div>
      </section>

      {/* Success Stories Carousel */}
      <section id="success" className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900">
              Our Members Land Amazing Opportunities
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real students getting real results through hands-on experience
            </p>
          </div>
          
          <div 
            className="relative max-w-6xl mx-auto overflow-hidden rounded-3xl"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {successStories.map((slide, slideIndex) => (
                <div key={slideIndex} className="min-w-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                    {slide.map((story) => (
                      <div key={story.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                        <div className="flex items-center mb-4">
                          <div className="w-15 h-15 rounded-full border-3 border-purple-600 overflow-hidden mr-4 bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center">
                            <Image
                              src={story.imageUrl}
                              alt={story.name}
                              width={60}
                              height={60}
                              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                const parent = e.currentTarget.parentElement;
                                if (parent) {
                                  parent.innerHTML = `<div class="text-white font-bold text-lg">${story.initials}</div>`;
                                }
                              }}
                            />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-slate-900 mb-1">
                              {story.name}
                            </h4>
                            <span className="inline-block bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                              {story.role}
                            </span>
                          </div>
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                          &ldquo;{story.testimonial}&rdquo;
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center items-center gap-8 mt-12">
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center hover:bg-purple-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15 18l-6-6 6-6v12z"/>
                </svg>
              </button>
              
              <div className="flex gap-2">
                {Array.from({ length: totalSlides }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-purple-600 scale-125' 
                        : 'bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextSlide}
                disabled={currentSlide === totalSlides - 1}
                className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center hover:bg-purple-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 18l6-6-6-6v12z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Current Project Highlight */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-8">
          <div className="inline-block bg-white/20 px-6 py-2 rounded-full text-sm mb-6 backdrop-blur-sm">
            🎯 Current Project Spotlight
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Building for University of Washington
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Our development team is currently building a production application for UW, giving our members official internship status and real-world experience working with university stakeholders.
          </p>
          <p className="text-lg text-purple-200">
            This is what sets us apart - while other clubs do practice projects, we ship software that impacts thousands of users.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-4">
                <div className="text-4xl md:text-5xl font-black text-purple-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-400 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900">
              Why Choose Tech Startup Club?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Were not just another student organization - were a career accelerator
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '💼', title: 'Real Client Work', description: 'Build actual products for real companies and organizations. Get paid project experience while still in school.' },
              { icon: '🎯', title: 'Professional Development', description: 'Learn industry best practices, agile methodologies, and professional communication skills.' },
              { icon: '🚀', title: 'Career Placement', description: 'Direct pipeline to internships and full-time roles at top tech companies through our network.' },
              { icon: '👥', title: 'Mentorship', description: 'Work directly with industry professionals and successful alumni who guide your career growth.' },
              { icon: '🏆', title: 'Portfolio Projects', description: 'Build an impressive portfolio of shipped products that showcase your abilities to recruiters.' },
              { icon: '🌐', title: 'Industry Network', description: 'Connect with hiring managers, startup founders, and tech leaders through our events and partnerships.' }
            ].map((feature, index) => (
              <div key={index} className="p-8 rounded-2xl border border-slate-200 text-center hover:border-purple-600 hover:-translate-y-2 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-16 bg-slate-50 text-center">
        <div className="max-w-5xl mx-auto px-8">
          <h3 className="text-2xl text-slate-600 mb-8 font-medium">
            Proud to be sponsored by industry leaders
          </h3>
          <div className="overflow-hidden">
            <div className="flex animate-slide gap-12 items-center">
              {[...sponsors, ...sponsors].map((sponsor, index) => (
                <div 
                  key={`${sponsor.id}-${index}`} 
                  className="min-w-[150px] h-20 bg-white rounded-xl flex items-center justify-center border border-slate-200 transition-all duration-300 hover:scale-105 hover:border-purple-600 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 p-4"
                >
                  <Image
                    src={sponsor.logoUrl}
                    alt={sponsor.name}
                    width={120}
                    height={60}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.innerHTML = `<div class="text-slate-600 font-semibold text-sm">${sponsor.name}</div>`;
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="join" className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white text-center">
        <div className="max-w-2xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Launch Your Career?
          </h2>
          <p className="text-xl mb-8 text-slate-300">
            Applications are competitive. We&apos;re looking for motivated students ready to work on real projects with real impact.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 px-12 py-4 rounded-lg text-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 mb-4">
            Apply Now - Fall 2025
          </button>
          <p className="text-sm text-slate-400">
            Applications close September 15th
          </p>
        </div>
      </section>

      <style jsx>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-slide {
          animation: slide 20s linear infinite;
        }
        .animate-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default TechStartupClubLanding;