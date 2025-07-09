import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Eye, 
  Lock, 
  Download, 
  Trash2, 
  Globe, 
  FileText, 
  Phone,
  Database,
  UserCheck,
  AlertTriangle,
  Settings,
  Clock,
  Mail
} from 'lucide-react';

const Privacy: React.FC = () => {
  const sections = [
    {
      icon: Database,
      title: 'Data Collection & Usage',
      content: 'We collect necessary user data for service functionality and improvement including account information (email, username, profile data, preferences), usage analytics (messages sent, features used, session duration, click patterns), technical data (device information, browser data, IP addresses, system specifications), and integration data from connected services when authorized by you.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Lock,
      title: 'Data Storage & Security',
      content: 'All data is stored locally on secure, encrypted servers with industry-standard protection. We use AES-256 encryption for data at rest and TLS 1.3 for data in transit. Regular security audits and penetration testing are performed, with SOC 2 Type II compliance maintained and data centers located in secure facilities with 24/7 monitoring.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Clock,
      title: 'Data Retention & Deletion',
      content: 'Account data is retained while your account is active. Inactive accounts have data retained for 2 years, then automatically deleted. Upon account deletion, all personal data is permanently deleted within 30 days. During the 30-day period, data recovery is possible by contacting support. Backup data is also removed from systems within the deletion timeframe.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: UserCheck,
      title: 'User Rights & Control',
      content: 'You have the right to access your data (downloadable export available), modify or correct personal information, delete your account and all associated data, data portability in standard formats, opt-out of non-essential data collection, and restrict processing for specific purposes.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Third-Party Services & Sharing',
      content: 'We do not sell or share personal data for marketing purposes. Data is shared only with essential service providers under strict contracts. Anonymous, aggregated data may be used for research and analytics. Legal compliance may require data sharing with authorities when required by law.',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Eye,
      title: 'Cookies & Tracking',
      content: 'We use essential cookies for site functionality and user authentication, analytics cookies for usage patterns and performance monitoring, preference cookies to remember user settings and customizations, and third-party cookies from integrated services. Cookie consent management with granular control options is provided.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Settings,
      title: 'AI & Machine Learning',
      content: 'Your conversations may be used to improve AI models (with opt-out available). Personal identifying information is removed from training data. Federated learning techniques are used to protect individual privacy, and regular bias and fairness audits are performed on AI systems.',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      icon: AlertTriangle,
      title: 'Children\'s Privacy',
      content: 'Our service is not intended for users under 13 years old. Parental consent is required for users 13-18 in certain jurisdictions. Special protections exist for educational use in schools, and immediate deletion of data occurs if an underage user is discovered.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const complianceItems = [
    'Full compliance with GDPR, CCPA, and other applicable privacy laws',
    'Regular compliance audits and legal review of practices',
    'Data Protection Officer available for privacy concerns',
    'Breach notification procedures in place (within 72 hours when required)',
    'Privacy by design principles integrated into product development'
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: 'Privacy Officer',
      contact: 'privacy@gpt.com',
      description: 'For privacy-related inquiries'
    },
    {
      icon: Shield,
      title: 'Data Protection Officer',
      contact: 'dpo@gpt.com',
      description: 'For GDPR and data protection matters'
    },
    {
      icon: Phone,
      title: 'General Support',
      contact: 'support@gpt.com',
      description: 'For general inquiries and support'
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
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We take your privacy seriously. Here's how we protect and handle your data.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700 mb-12"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg p-3">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Your Privacy Matters</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              At ChatGPT, we believe privacy is a fundamental right. This policy explains how we collect, 
              use, and protect your personal information when you use our services. We are committed to 
              transparency and giving you control over your data.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`bg-gradient-to-r ${section.color} rounded-lg p-3`}>
                    <section.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">{section.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* International Data Transfers */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6">International Data Transfers</h2>
            <p className="text-gray-400">How we handle your data across borders</p>
          </motion.div>

          <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Globe className="h-6 w-6 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Cross-Border Processing</h4>
                  <p className="text-gray-400">Data processing may occur in countries outside your residence with appropriate safeguards implemented for international transfers.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FileText className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Legal Safeguards</h4>
                  <p className="text-gray-400">GDPR adequacy decisions and Standard Contractual Clauses are used where applicable, with data localization options available for Enterprise customers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Compliance & Legal</h2>
            <p className="text-gray-400">Our commitment to legal and regulatory compliance</p>
          </motion.div>

          <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700">
            <ul className="space-y-4">
              {complianceItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
            <p className="text-gray-400">Get in touch with our privacy team</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <method.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{method.title}</h3>
                <p className="text-purple-400 font-medium mb-2">{method.contact}</p>
                <p className="text-gray-400 text-sm">{method.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Response Time</h3>
              <p className="text-gray-400 mb-6">
                We respond to all privacy requests within 30 days as required by law. 
                For urgent matters, please mark your email as "URGENT" in the subject line.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-cyan-400 hover:from-purple-700 hover:to-cyan-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
              >
                Contact Privacy Team
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Policy Updates */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Policy Updates</h2>
            <p className="text-gray-400 mb-6">
              This policy is updated as needed to reflect service changes. Users are notified of material 
              changes via email and site notifications. Previous versions are available for reference.
            </p>
            <div className="text-gray-500 text-sm">
              <p>Last updated: January 2025</p>
              <p className="mt-2">Version 2.1</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;