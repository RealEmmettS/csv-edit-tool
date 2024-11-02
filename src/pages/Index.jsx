import { ArrowRight, Circle, Square } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Geometric shapes */}
      <div className="geometric-shape w-64 h-64 rounded-full -top-32 -left-32" />
      <div className="geometric-shape w-96 h-96 -bottom-48 -right-48 rotate-45" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-24 relative z-10"
      >
        <div className="max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-6xl md:text-7xl mb-6"
          >
            Welcome to Your
            <span className="text-te-red"> Modern</span> App
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-12"
          >
            Start building something amazing with our minimalist and functional design system
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="group px-8 py-4 bg-te-black text-white rounded-lg flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border-2 border-te-black rounded-lg hover:bg-gray-50 transition-colors">
              Learn More
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid grid-cols-8 gap-4 pointer-events-none">
        {Array.from({ length: 64 }).map((_, i) => (
          <div key={i} className="border-[0.5px] border-gray-100" />
        ))}
      </div>
    </div>
  );
};

export default Index;