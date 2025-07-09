import React from 'react';
import { motion } from 'framer-motion';
import { DownloadIcon, Zap, Shield, Globe, ChevronDown, Monitor, Apple, HardDrive } from 'lucide-react';

const Home: React.FC = () => {
  const scrollToDownloads = () => {
    document.getElementById('downloads')?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Get instant responses to your questions and tasks with our advanced AI technology.',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your data is protected with enterprise-grade security and privacy controls.',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Globe,
      title: 'Global Access',
      description: 'Access your AI assistant from anywhere in the world, on any device.',
      color: 'from-blue-400 to-cyan-500'
    }
  ];

  const downloadOptions = [
    {
      name: 'Windows',
      icon: Monitor,
      description: 'Windows 10 or later'
    },
    {
      name: 'Mac',
      icon: Apple,
      description: 'macOS 10.14 or later'
    },
    {
      name: 'Linux',
      icon: HardDrive,
      description: 'Ubuntu 18.04+ / Debian 10+'
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 gradient-bg opacity-90" />
        <div className="absolute inset-0 bg-gray-900/50" />
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [null, -20, 20],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              ChatGPT —{' '}
              <span className="text-gradient">
                Your AI Assistant,
              </span>
              <br />
              <span className="text-gradient">
                Reimagined.
              </span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            An advanced AI assistant built to help you write, code, brainstorm, and accelerate your work.
          </motion.p>

          {/* Scroll Indicator */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={scrollToDownloads}
            className="mb-16 group"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-gray-400 group-hover:text-white transition-colors"
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <ChevronDown className="h-6 w-6" />
            </motion.div>
          </motion.button>

          {/* Features Preview */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 card-glow"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Download Section */}
      <section id="downloads" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Download ChatGPT
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose your platform and get started with ChatGPT today.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {downloadOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group"
              >
                <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 card-glow">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <option.icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{option.name}</h3>
                    <p className="text-gray-400">{option.description}</p>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-400 hover:from-purple-700 hover:to-cyan-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-3 group"
                  >
                    <DownloadIcon className="h-5 w-5 group-hover:animate-bounce" />
                    <span>Download for {option.name}</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;