import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Users, Phone, Zap, Crown, Building } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Basic Plan',
      price: '$0',
      period: 'Free',
      description: 'Perfect for getting started',
      features: [
        '10 messages per day',
        'Messages renew every 24 hours',
        'Basic AI responses',
        'Web interface access',
        'Community support'
      ],
      buttonText: 'Get Started',
      buttonStyle: 'bg-gray-700 hover:bg-gray-600 text-white',
      icon: Star,
      popular: false,
      gradient: 'from-gray-600 to-gray-700'
    },
    {
      name: 'Pro Plan',
      price: '$30',
      period: 'per month',
      description: 'For professionals and power users',
      features: [
        '100 messages per day',
        'Messages renew every 12 hours',
        'Advanced AI responses',
        'Priority response time',
        'Desktop app access',
        'Email support',
        'Export conversations',
        'Custom personalities',
        'Extended context memory'
      ],
      buttonText: 'Choose Pro',
      buttonStyle: 'bg-gradient-to-r from-purple-600 to-cyan-400 hover:from-purple-700 hover:to-cyan-500 text-white',
      icon: Zap,
      popular: true,
      gradient: 'from-purple-600 to-cyan-400'
    },
    {
      name: 'Enterprise Plan',
      price: 'Contact us',
      period: 'for pricing',
      description: 'For teams and organizations',
      features: [
        'Custom message limits',
        'Dedicated support team',
        'Advanced analytics',
        'Team collaboration',
        'Custom integrations',
        'SLA guarantees',
        'On-premise deployment',
        'Priority feature requests',
        'Custom training data'
      ],
      buttonText: 'Contact Sales',
      buttonStyle: 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white',
      icon: Building,
      popular: false,
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  const faqs = [
    {
      question: 'Can I upgrade or downgrade my plan anytime?',
      answer: 'Yes, you can change your plan at any time. Changes take effect immediately, and billing is prorated.'
    },
    {
      question: 'What happens if I exceed my message limit?',
      answer: 'You can purchase additional message packs or upgrade to a higher tier. Enterprise customers have custom limits.'
    },
    {
      question: 'Is there a free trial for paid plans?',
      answer: 'Yes, all paid plans come with a 14-day free trial. No credit card required to start.'
    },
    {
      question: 'Do you offer educational discounts?',
      answer: 'Yes, we offer 50% discounts for students and educational institutions. Contact us for details.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the plan that works best for you. Upgrade or downgrade at any time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`relative bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-purple-500 ring-2 ring-purple-500/20 card-glow' 
                    : 'border-gray-700 hover:border-gray-600'
                }`}
              >
                {plan.popular && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                  >
                    <span className="bg-gradient-to-r from-purple-600 to-cyan-400 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
                      <Crown className="h-4 w-4" />
                      <span>Most Popular</span>
                    </span>
                  </motion.div>
                )}

                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <plan.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + featureIndex * 0.1 }}
                      className="flex items-center text-gray-300"
                    >
                      <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full font-semibold py-4 px-6 rounded-xl transition-all duration-300 ${plan.buttonStyle}`}
                >
                  {plan.buttonText}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-400">Everything you need to know about our pricing plans.</p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-12 border border-gray-700"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Need a Custom Solution?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              We offer custom pricing for educational institutions, non-profits, and large enterprises. 
              Contact our sales team to discuss your specific needs.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-cyan-400 hover:from-purple-700 hover:to-cyan-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Contact Sales Team
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;