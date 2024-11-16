import { HiSparkles, HiCode, HiColorSwatch, HiCube, HiPencil } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: 'IT Services',
      icon: <HiCode className="w-8 h-8" />,
      description: 'Cutting-edge development solutions that power your digital presence. We create scalable, secure, and innovative applications that drive business growth.',
      features: [
        'Custom Web Development',
        'Mobile App Solutions',
        'Enterprise Software',
        'Cloud Integration',
        'API Development',
        'Technical Consulting'
      ],
      gradient: 'from-violet-600 to-fuchsia-600'
    },
    {
      title: 'Design',
      icon: <HiColorSwatch className="w-8 h-8" />,
      description: 'Creative solutions that captivate and engage your audience. Our design team crafts visually stunning experiences that leave lasting impressions.',
      features: [
        'UI/UX Design',
        'Brand Identity',
        'Web Design',
        'Mobile Design',
        'Design Systems',
        'Interactive Prototypes'
      ],
      gradient: 'from-fuchsia-600 to-cyan-600'
    },
    {
      title: '3D Modeling',
      icon: <HiCube className="w-8 h-8" />,
      description: 'Bringing your ideas to life with professional 3D visualization. Create immersive experiences and stunning visual content.',
      features: [
        '3D Product Modeling',
        'Architectural Visualization',
        'Character Design',
        'Animation',
        'Virtual Reality',
        'Product Rendering'
      ],
      gradient: 'from-cyan-600 to-blue-600'
    },
    {
      title: 'Copywriting',
      icon: <HiPencil className="w-8 h-8" />,
      description: 'Compelling content that drives engagement and results. We craft messages that resonate with your audience and drive action.',
      features: [
        'Content Strategy',
        'SEO Copywriting',
        'Brand Messaging',
        'Technical Writing',
        'Marketing Copy',
        'Social Media Content'
      ],
      gradient: 'from-blue-600 to-violet-600'
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
              Our Services
            </span>
            <HiSparkles className="w-6 h-6 text-violet-400" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Transform Your Vision
            </span>
            <br />
            <span className="text-white">Into Reality</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Experience excellence through our comprehensive suite of digital services, 
            tailored to elevate your brand and drive success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:gap-10 md:grid-cols-2 mt-20">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl p-px overflow-hidden hover:scale-[1.02] transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-20 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative bg-[#0A0A0A]/90 rounded-3xl p-6 sm:p-8 h-full">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${service.gradient}`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-base sm:text-lg mb-8 leading-relaxed">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3 group/feature">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} group-hover/feature:scale-150 transition-transform duration-300`} />
                      <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="group relative rounded-3xl p-px overflow-hidden inline-block"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 opacity-20 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-[#0A0A0A]/90 rounded-3xl p-8 sm:p-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
                Let's collaborate to bring your vision to life with innovative solutions tailored to your needs.
              </p>
              <button className="px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full text-base sm:text-lg font-medium hover:from-violet-700 hover:to-fuchsia-700 transition-all duration-300 transform hover:scale-105">
                Start Your Journey
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
  