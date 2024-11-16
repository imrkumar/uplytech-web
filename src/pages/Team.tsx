// src/pages/Team.tsx
import React from 'react';
import { FaLinkedinIn, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      bio: 'Visionary leader with 10+ years of experience in tech innovation.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        instagram: '#'
      }
    },
    {
      name: 'Jane Smith',
      role: 'CTO',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      bio: 'Tech enthusiast specializing in cutting-edge development solutions.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        instagram: '#'
      }
    },
    {
      name: 'Mike Johnson',
      role: 'Lead Developer',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      bio: 'Full-stack developer with expertise in modern web technologies.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        instagram: '#'
      }
    },
    {
      name: 'Sarah Williams',
      role: 'UI/UX Designer',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      bio: 'Creative designer passionate about user-centered experiences.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        instagram: '#'
      }
    },
    {
      name: 'Alex Chen',
      role: 'Product Manager',
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
      bio: 'Strategic thinker with a focus on user-centric product development.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        instagram: '#'
      }
    },
    {
      name: 'Emily Brown',
      role: 'Marketing Lead',
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
      bio: 'Digital marketing expert specializing in growth strategies.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        instagram: '#'
      }
    },
    {
      name: 'David Wilson',
      role: 'Backend Developer',
      image: 'https://randomuser.me/api/portraits/men/4.jpg',
      bio: 'System architect with expertise in scalable solutions.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        instagram: '#'
      }
    },
    {
      name: 'Lisa Anderson',
      role: 'Frontend Developer',
      image: 'https://randomuser.me/api/portraits/women/4.jpg',
      bio: 'UI specialist focused on creating engaging user experiences.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        instagram: '#'
      }
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
      <div className="relative pt-24 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="flex items-center justify-center mb-4 space-x-2">
            <HiSparkles className="w-6 h-6 text-violet-400" />
            <span className="px-4 py-2 rounded-full bg-white/5 text-sm font-medium text-violet-400">
              Meet Our Team
            </span>
            <HiSparkles className="w-6 h-6 text-violet-400" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              The Minds Behind
            </span>
            <br />
            <span className="text-white">Our Innovation</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Meet our diverse team of experts who are passionate about creating exceptional digital experiences
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative rounded-3xl p-px overflow-hidden transition-transform hover:scale-[1.02] duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 opacity-20 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-[#0A0A0A]/90 rounded-3xl p-6">
                <div className="aspect-square mb-6 overflow-hidden rounded-2xl group-hover:ring-2 group-hover:ring-violet-500/50 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {member.name}
                </h3>
                <p className="text-violet-400 text-sm mb-4">{member.role}</p>
                <p className="text-gray-400 text-sm mb-6 line-clamp-2">{member.bio}</p>
                
                {/* Social Links */}
                <div className="flex space-x-3">
                  {Object.entries(member.social).map(([platform, link]) => (
                    <a
                      key={platform}
                      href={link}
                      className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group/icon hover:scale-110"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {platform === 'linkedin' && <FaLinkedinIn className="w-4 h-4 text-gray-400 group-hover/icon:text-blue-400" />}
                      {platform === 'twitter' && <FaTwitter className="w-4 h-4 text-gray-400 group-hover/icon:text-blue-400" />}
                      {platform === 'github' && <FaGithub className="w-4 h-4 text-gray-400 group-hover/icon:text-gray-200" />}
                      {platform === 'instagram' && <FaInstagram className="w-4 h-4 text-gray-400 group-hover/icon:text-pink-400" />}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Us Section */}
        <div className="mt-20 text-center">
          <div className="group relative rounded-3xl p-px overflow-hidden inline-block w-full max-w-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 opacity-20 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-[#0A0A0A]/90 rounded-3xl p-8 sm:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Join Our Growing Team
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals who are passionate about innovation and technology.
                Join us in creating the future of digital solutions.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full font-medium hover:from-violet-700 hover:to-fuchsia-700 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-2 mx-auto">
                <span>View Open Positions</span>
                <HiSparkles className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
