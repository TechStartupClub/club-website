'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import primo from '../../assets/primo.jpeg';
import cel from '../../assets/cel.jpeg';
import nick from '../../assets/nick.jpeg';
import jacob from '../../assets/jacob.jpeg';
import q from '../../assets/q.jpeg';
import codeninjas from '../../assets/codeninjas.jpg';
import { Rocket, Target, Briefcase, Users, Trophy, Globe } from 'lucide-react';

const PROFILE_IMAGES = {
  primo: primo.src,
  cel: cel.src,
  nick: nick.src,
  jacob: jacob.src,
  q: q.src,
};

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
        name: 'Quienten Miller',
        company: 'Stoke Space',
        role: 'SWE @ Stoke Space',
        imageUrl: PROFILE_IMAGES.q,
        testimonial: 'Being able to get real experience while on my job search post graduation is one of the biggest reasons I was able to land my full-time role.',
        initials: 'SJ'
      },
      {
        id: '2',
        name: 'Jacob Klymenko',
        company: 'Junt Industries',
        role: 'SWE @ Junt Industries',
        imageUrl: PROFILE_IMAGES.jacob,
        testimonial: 'Leading the Backend team for 2 quarters helped me develop my leadership skills, but also learn and practice new languages, frameworks, and other tools.',
        initials: 'MK'
      },
      {
        id: '3',
        name: 'Celestin Ryf',
        company: 'Insights Emerge',
        role: 'SWE @ Insights Emerge',
        imageUrl: PROFILE_IMAGES.cel,
        testimonial: 'Having this experience has helped me strengthen my resume to the point that recruiters now message me directly for positions.',
        initials: 'AL'
      }
    ],
    [
      {
        id: '4',
        name: 'Nicholas Jordan',
        company: 'Expedia',
        role: 'Expedia Discovery Group',
        imageUrl: PROFILE_IMAGES.nick,
        testimonial: 'Its easy to use the club as a talking point in any interview or screening, recruiters love it!',
        initials: 'ER'
      },
      {
        id: '5',
        name: 'Primitivo Bambao',
        company: '321Buddy',
        role: 'Lead Designer @ 321Buddy',
        imageUrl: PROFILE_IMAGES.primo,
        testimonial: 'The opportunities that have come from the projects Ive built here are outstanding, from small companies to non-profits.',
        initials: 'DT'
      }
    ]
  ];

  const features = [
    { icon: Briefcase, title: 'Real Client Work', description: 'Build actual products for real companies and organizations. Get paid project experience while still in school.' },
    { icon: Target, title: 'Professional Development', description: 'Learn industry best practices, agile methodologies, and professional communication skills.' },
    { icon: Rocket, title: 'Career Placement', description: 'Direct pipeline to internships and full-time roles at top tech companies through our network.' },
    { icon: Users, title: 'Mentorship', description: 'Work directly with industry professionals and successful alumni who guide your career growth.' },
    { icon: Trophy, title: 'Portfolio Projects', description: 'Build an impressive portfolio of shipped products that showcase your abilities to recruiters.' },
    { icon: Globe, title: 'Industry Network', description: 'Connect with hiring managers, startup founders, and tech leaders through our events and partnerships.' }
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

  const handleJoinClick = () => {
    window.open('https://discord.gg/SPJnwq5hPk', '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-inter">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 relative flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-pink-500/30 to-green-400/30 animate-pulse"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-8 text-center">
          <div className="inline-block bg-purple-500/20 border border-purple-400/30 px-6 py-2 rounded-full text-sm mb-8 backdrop-blur-sm flex items-center justify-center gap-2">
            Real Projects • Real Experience • Real Results
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent leading-tight">
            TECH STARTUP CLUB UWT
          </h1>
          
          <p className="text-2xl md:text-3xl font-semibold mb-4 text-slate-100">
            Where Students Build Professional Careers
          </p>
          
          <p className="text-xl mb-12 text-slate-300 max-w-2xl mx-auto">
            Work with real clients, ship real products, and land real internships. Join the club thats launching careers in tech.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleJoinClick}
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 w-64 md:w-auto"
            >
              Join Our Discord
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
          <div className="inline-block bg-white/20 px-6 py-2 rounded-full text-sm mb-6 backdrop-blur-sm flex items-center justify-center gap-2">
            Current Project Spotlight
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Building for University of Washington
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Our development team is currently building a production application for UW, giving our members official internship status and real-world experience working with university stakeholders.
          </p>
          <p className="text-lg text-purple-200">
            This is what sets us apart - while other clubs do practice projects, we ship software that impacts hundreds of users.
          </p>
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
            {features.map((feature, index) => (
              <div key={index} className="p-8 rounded-2xl border border-slate-200 text-center hover:border-purple-600 hover:-translate-y-2 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-10 h-10 text-white" />
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

      {/* Final CTA */}
      <section id="join" className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white text-center">
        <div className="max-w-2xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Launch Your Career?
          </h2>
          <p className="text-xl mb-8 text-slate-300">
            Join our community of motivated students working on real projects with real impact. Everyone is welcome!
          </p>
          <button 
            onClick={handleJoinClick}
            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 px-12 py-4 rounded-lg text-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 mb-4"
          >
            Join Our Discord
          </button>
          <p className="text-sm text-slate-400">
            Connect with us and get started today!
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