import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, TrendingUp, Users, Award } from 'lucide-react';

const Reviews: React.FC = () => {
  const reviews = [
    {
      name: 'Riya Shah',
      role: 'Senior Developer',
      company: 'TechCorp',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      review: 'ChatGPT boosted our productivity and creativity across all departments. Development cycles reduced by 40%. The AI assistance in code reviews and debugging has been game-changing for our team.',
      highlight: 'Development cycles reduced by 40%',
      category: 'Development'
    },
    {
      name: 'Marcus Chen',
      role: 'Content Director',
      company: 'MediaFlow',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      review: 'The AI assistant transformed our content creation process. We\'re producing 3x more quality content with the same team. The writing assistance and idea generation capabilities are phenomenal.',
      highlight: 'producing 3x more quality content',
      category: 'Content'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      company: 'StartupXYZ',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      review: 'ChatGPT\'s coding assistance saved us countless hours. Bug fixes and feature development became incredibly efficient. Our junior developers are learning faster than ever before.',
      highlight: 'saved us countless hours',
      category: 'Engineering'
    },
    {
      name: 'David Rodriguez',
      role: 'Support Manager',
      company: 'ServicePro',
      image: 'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      review: 'Our customer support team uses ChatGPT to handle complex queries faster. Response times improved by 60%. Customer satisfaction scores have never been higher.',
      highlight: 'Response times improved by 60%',
      category: 'Support'
    },
    {
      name: 'Emma Wilson',
      role: 'Creative Director',
      company: 'DesignStudio',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      review: 'From brainstorming to execution, ChatGPT streamlined our entire creative workflow. It\'s like having a genius collaborator who never runs out of ideas.',
      highlight: 'streamlined our entire creative workflow',
      category: 'Creative'
    },
    {
      name: 'Alex Thompson',
      role: 'Product Manager',
      company: 'InnovateLabs',
      image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      review: 'ChatGPT helps us analyze user feedback, generate product requirements, and create documentation. Our product development cycle is 50% faster now.',
      highlight: 'product development cycle is 50% faster',
      category: 'Product'
    }
  ];

  const stats = [
    {
      icon: Users,
      value: '100,000+',
      label: 'Active Users',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Star,
      value: '4.9/5',
      label: 'Average Rating',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: TrendingUp,
      value: '85%',
      label: 'Productivity Increase',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Award,
      value: '99%',
      label: 'Satisfaction Rate',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const categories = ['All', 'Development', 'Content', 'Engineering', 'Support', 'Creative', 'Product'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredReviews = selectedCategory === 'All' 
    ? reviews 
    : reviews.filter(review => review.category === selectedCategory);

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
              What Our Users Say
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join thousands of professionals who have transformed their productivity with ChatGPT.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-400 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReviews.map((review, index) => (
              <motion.div
                key={`${review.name}-${selectedCategory}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 card-glow"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-gray-600"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{review.name}</h3>
                    <p className="text-purple-400 text-sm font-medium">{review.role}</p>
                    <p className="text-gray-500 text-sm">{review.company}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="relative mb-6">
                  <Quote className="h-8 w-8 text-purple-400/50 mb-4" />
                  <p className="text-gray-300 italic leading-relaxed">
                    "{review.review}"
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-700">
                  <span className="inline-block bg-gradient-to-r from-purple-600/20 to-cyan-400/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                    {review.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-12 border border-gray-700"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Join the ChatGPT Community</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Over 100,000+ professionals trust ChatGPT to boost their productivity. 
              Start your free trial today and experience the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-cyan-400 hover:from-purple-700 hover:to-cyan-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300"
              >
                View Pricing
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;