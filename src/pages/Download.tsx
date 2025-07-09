import React from 'react';
import { motion } from 'framer-motion';
import { Download as DownloadIcon, Monitor, Apple, HardDrive, CheckCircle, Zap, Shield } from 'lucide-react';

const Download: React.FC = () => {
  const platforms = [
    {
      name: 'Windows',
      icon: Monitor,
      description: 'Compatible with Windows 10 and 11',
      version: 'v2.1.0',
      size: '125 MB',
      requirements: [
        'Windows 10/11 (64-bit)',
        '4GB RAM minimum',
        '2GB free disk space',
        'Internet connection required'
      ]
    },
    {
      name: 'Mac',
      icon: Apple,
      description: 'Works on macOS Monterey and newer',
      version: 'v2.1.0',
      size: '98 MB',
      requirements: [
        'macOS 12.0 or later',
        '4GB RAM minimum',
        '2GB free disk space',
        'Internet connection required'
      ]
    },
    {
      name: 'Linux',
      icon: HardDrive,
      description: 'Supports major Linux distributions',
      version: 'v2.1.0',
      size: '87 MB',
      requirements: [
        'Ubuntu 20.04+ / CentOS 8+',
        '4GB RAM minimum',
        '2GB free disk space',
        'Internet connection required'
      ]
    }
  ];

  const installSteps = [
    {
      step: 1,
      title: 'Download',
      description: 'Click the download button for your platform and save the installer.',
      icon: DownloadIcon
    },
    {
      step: 2,
      title: 'Install',
      description: 'Run the installer and follow the setup wizard instructions.',
      icon: Zap
    },
    {
      step: 3,
      title: 'Launch',
      description: 'Open ChatGPT and sign in to start using your AI assistant.',
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-20" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Download ChatGPT
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose your platform and get started with ChatGPT today. All versions include the same powerful features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 card-glow"
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <platform.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">{platform.name}</h3>
                  <p className="text-gray-400 mb-2">{platform.description}</p>
                  <div className="flex justify-center space-x-4 text-sm text-gray-500">
                    <span>{platform.version}</span>
                    <span>•</span>
                    <span>{platform.size}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <h4 className="text-lg font-semibold text-white">System Requirements:</h4>
                  <ul className="space-y-2">
                    {platform.requirements.map((req, reqIndex) => (
                      <motion.li
                        key={reqIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + reqIndex * 0.1 }}
                        className="text-gray-400 flex items-center"
                      >
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {req}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-400 hover:from-purple-700 hover:to-cyan-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-3 group"
                >
                  <DownloadIcon className="h-5 w-5 group-hover:animate-bounce" />
                  <span>Download for {platform.name}</span>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Steps */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Installation Steps</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Get up and running with ChatGPT in just three simple steps.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {installSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto">
                    <step.icon className="h-8 w-8 text-purple-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700 text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-6">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Advanced AI conversation capabilities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Code generation and debugging assistance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Writing and content creation tools</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Multi-language support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Offline mode capabilities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Regular updates and improvements</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Download;