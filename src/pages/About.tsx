// src/pages/About.tsx
import React from 'react';
import { HiSparkles, HiLightningBolt, HiGlobe, HiHeart } from 'react-icons/hi';
import { FiTarget, FiAward, FiUsers, FiClock } from 'react-icons/fi';

const About: React.FC = () => {
  const stats = [
    { number: '100+', label: 'Projects Completed', icon: <FiAward className="w-6 h-6" /> },
    { number: '50+', label: 'Happy Clients', icon: <FiUsers className="w-6 h-6" /> },
    { number: '15+', label: 'Team Members', icon: <HiHeart className="w-6 h-6" /> },
    { number: '24/7', label: 'Support', icon: <FiClock className="w-6 h-6" /> }
  ];

  const values = [
    {
      title: "Innovation",
      description: "Pushing boundaries to create cutting-edge solutions that define the future",
      icon: <HiLightningBolt className="w-8 h-8" />
    },
    {
      title: "Excellence",
      description: "Delivering outstanding quality in every project we undertake",
      icon: <FiAward className="w-8 h-8" />
    },
    {
      title: "Collaboration",
      description: "Working together to achieve extraordinary results for our clients",
      icon: <FiUsers className="w-8 h-8" />
    },
    {
      title: "Integrity",
      description: "Maintaining the highest standards of professional ethics and transparency",
      icon: <HiGlobe className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-[#030014] text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#030014] via-[#100b2e] to-[#030014]">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-violet-600/30 to-fuchsia-600/30 rounded-full filter blur-[120px] animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-cyan-600/30 to-blue-600/30 rounded-full filter blur-[120px] animate-float-delayed"></div>
        </div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-4 space-x-2">
            <HiSparkles className="w-6 h-6 text-violet-400" />
            <span className="px-4 py-2 rounded-full bg-white/5 text-sm font-medium text-violet-400">
              About Us
            </span>
            <HiSparkles className="w-6 h-6 text-violet-400" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Innovating the Future
            </span>
            <br />
            <span className="text-white">of Digital Solutions</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            At UplyTech, we blend creativity with technology to deliver exceptional digital experiences
          </p>
        </div>

        {/* Story Section with Animation */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <div className="space-y-6 transform hover:scale-[1.02] transition-transform duration-300">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Story
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Founded with a vision to transform the digital landscape, UplyTech has grown into a leading force in technology innovation. We bring together talented professionals who are passionate about creating impactful digital solutions.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Our journey is marked by continuous learning, innovation, and a commitment to excellence in everything we do.
            </p>
          </div>

          {/* Stats Grid with Hover Effects */}
          <div className="group relative rounded-3xl p-px overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 opacity-20 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-[#0A0A0A]/90 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 transform hover:scale-105 transition-transform duration-300">
                    <div className="flex justify-center mb-3 text-violet-400">
                      {stat.icon}
                    </div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 mt-2">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Values Section with Icons */}
        <div className="mb-32">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group relative rounded-2xl p-px overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 opacity-20 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-[#0A0A0A]/90 rounded-2xl p-6">
                  <div className="text-violet-400 mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {value.title}
                  </h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision with Enhanced Design */}
        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              title: "Our Mission",
              icon: <FiTarget className="w-8 h-8" />,
              description: "To empower businesses through innovative digital solutions that drive growth, efficiency, and success in the modern digital landscape."
            },
            {
              title: "Our Vision",
              icon: <HiLightningBolt className="w-8 h-8" />,
              description: "To be a global leader in digital innovation, setting new standards for excellence and creativity in the technology industry."
            }
          ].map((item, index) => (
            <div key={index} className="group relative rounded-3xl p-px overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 opacity-20 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-[#0A0A0A]/90 rounded-3xl p-8">
                <div className="text-violet-400 mb-4">
                  {item.icon}
                </div>
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {item.title}
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
