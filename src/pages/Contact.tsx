// src/pages/Contact.tsx
import React, { useState } from 'react';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiSend 
} from 'react-icons/fi';
import { 
  FaTwitter, 
  FaLinkedinIn, 
  FaGithub, 
  FaInstagram,
  FaWhatsapp,
  FaDiscord
} from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <FiMail className="w-6 h-6" />,
      title: 'Email',
      value: 'contact@uplytech.com',
      color: 'text-fuchsia-400',
      bg: 'bg-fuchsia-600/10',
      link: 'mailto:contact@uplytech.com'
    },
    {
      icon: <FiPhone className="w-6 h-6" />,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      color: 'text-violet-400',
      bg: 'bg-violet-600/10',
      link: 'tel:+15551234567'
    },
    {
      icon: <FaWhatsapp className="w-6 h-6" />,
      title: 'WhatsApp',
      value: '+1 (555) 123-4567',
      color: 'text-green-400',
      bg: 'bg-green-600/10',
      link: 'https://wa.me/15551234567'
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: 'Location',
      value: '123 Innovation Street, Tech City',
      color: 'text-cyan-400',
      bg: 'bg-cyan-600/10',
      link: 'https://maps.google.com'
    }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: <FaTwitter className="w-5 h-5" />, color: 'hover:text-blue-400' },
    { name: 'LinkedIn', icon: <FaLinkedinIn className="w-5 h-5" />, color: 'hover:text-blue-600' },
    { name: 'GitHub', icon: <FaGithub className="w-5 h-5" />, color: 'hover:text-gray-400' },
    { name: 'Instagram', icon: <FaInstagram className="w-5 h-5" />, color: 'hover:text-pink-500' },
    { name: 'Discord', icon: <FaDiscord className="w-5 h-5" />, color: 'hover:text-indigo-400' }
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
              Get In Touch
            </span>
            <HiSparkles className="w-6 h-6 text-violet-400" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Let's Create Something
            </span>
            <br />
            <span className="text-white">Extraordinary</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? We're here to turn your ideas into reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="group relative rounded-3xl p-px overflow-hidden transition-transform hover:scale-[1.01] duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 opacity-20 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-[#0A0A0A]/90 rounded-3xl p-6 sm:p-8">
                <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Quick Contact
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 transition-colors duration-300"
                    >
                      <div className={`p-3 rounded-lg ${item.bg}`}>
                        <div className={item.color}>{item.icon}</div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="text-gray-400">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="group relative rounded-3xl p-px overflow-hidden transition-transform hover:scale-[1.01] duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-cyan-600 opacity-20 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-[#0A0A0A]/90 rounded-3xl p-6 sm:p-8">
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Connect With Us
                </h2>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((platform) => (
                    <a
                      key={platform.name}
                      href="#"
                      className={`flex items-center justify-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 ${platform.color} group`}
                    >
                      <span className="transform group-hover:scale-125 transition-transform duration-300">
                        {platform.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="group relative rounded-3xl p-px overflow-hidden transition-transform hover:scale-[1.01] duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 opacity-20 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-[#0A0A0A]/90 rounded-3xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { id: 'name', label: 'Your Name', type: 'text' },
                  { id: 'email', label: 'Email Address', type: 'email' },
                  { id: 'subject', label: 'Subject', type: 'text' }
                ].map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block text-sm font-medium text-gray-300 mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      value={formData[field.id as keyof typeof formData]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-violet-500 focus:ring-2 focus:ring-violet-500 transition-colors duration-300"
                      required
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-violet-500 focus:ring-2 focus:ring-violet-500 transition-colors duration-300"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-lg font-medium hover:from-violet-700 hover:to-fuchsia-700 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <FiSend className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
