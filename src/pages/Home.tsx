// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center px-4 md:px-8 py-12 md:py-20">
        {/* Background Effects - Keep your original background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#0A0A0A]">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-indigo-900/30 via-transparent to-transparent animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-radial from-blue-900/30 via-transparent to-transparent animate-pulse [animation-delay:1s]"></div>
          </div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.04] bg-repeat"></div>
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
        </div>

        {/* Hero Content */}
        <motion.div 
          className="relative max-w-[1400px] mx-auto w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
            <motion.div {...fadeInUp}>
              <span className="inline-block px-4 md:px-6 py-2 md:py-2.5 rounded-full bg-indigo-500/10 text-indigo-400 text-sm md:text-base font-medium border border-indigo-500/20">
                Innovating Digital Solutions
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
              {...fadeInUp}
            >
              <span className="block mb-3 md:mb-4">
                Transforming Ideas into
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Digital Excellence
              </span>
            </motion.h1>

            <motion.p 
              className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-4 md:px-0"
              {...fadeInUp}
            >
              We specialize in IT services, design, modeling, and copywriting, delivering innovative solutions that drive your digital success.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0"
              {...fadeInUp}
            >
              <Link
                to="/services"
                className="w-full sm:w-auto inline-flex justify-center items-center px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full font-medium hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Our Services
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex justify-center items-center px-6 md:px-8 py-3 md:py-4 rounded-full border border-white/20 hover:bg-white/5 transition-all duration-300 font-medium"
              >
                Get Started
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="relative py-16 md:py-24 px-4 md:px-8">
        <motion.div 
          className="max-w-[1400px] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Our Core Values
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Guided by innovation, driven by excellence
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                title: 'Innovation',
                description: 'Exploring new paths and developing cutting-edge solutions',
                icon: '💡'
              },
              {
                title: 'Quality',
                description: 'Delivering excellence in every project we undertake',
                icon: '⭐'
              },
              {
                title: 'Customer Focus',
                description: 'Putting your needs first and exceeding expectations',
                icon: '🎯'
              },
              {
                title: 'Teamwork',
                description: 'Collaborating to achieve extraordinary results',
                icon: '🤝'
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent border border-white/[0.08] hover:border-white/[0.2] transition-all duration-300"
              >
                <span className="text-4xl mb-6 block">{value.icon}</span>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="relative py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent">
        <motion.div 
          className="max-w-[1400px] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                title: 'IT Services',
                description: 'Custom web & app development, software solutions, and bot creation',
                features: ['Website Development', 'Mobile Apps', 'Custom Software', 'Bot Development'],
                gradient: 'from-blue-600/20 to-indigo-600/20'
              },
              {
                title: 'Design',
                description: 'Creative design solutions that captivate and engage your audience',
                features: ['UI/UX Design', 'Graphic Design', 'Brand Identity', 'Web Design'],
                gradient: 'from-indigo-600/20 to-purple-600/20'
              },
              {
                title: 'Modeling',
                description: 'Professional 3D modeling and visualization services',
                features: ['3D Modeling', 'Animation', 'Visualization', 'Product Rendering'],
                gradient: 'from-purple-600/20 to-pink-600/20'
              },
              {
                title: 'Copywriting',
                description: 'Compelling content that drives engagement and results',
                features: ['Content Creation', 'SEO Optimization', 'Ad Copy', 'Brand Messaging'],
                gradient: 'from-pink-600/20 to-blue-600/20'
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/[0.08] to-transparent border border-white/[0.08] hover:border-white/[0.2] transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <ul className="grid grid-cols-2 gap-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24 px-4 md:px-8">
        <motion.div 
          className="relative max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-8">
            Let's collaborate to bring your vision to life
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full font-medium hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            Start Your Project
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
