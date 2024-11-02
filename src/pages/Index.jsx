import { ArrowRight, Circle, Square, Triangle } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-te-black text-te-white">
      {/* Geometric shapes */}
      <div className="geometric-shape w-96 h-96 rounded-full -top-48 -left-48 bg-te-red opacity-20" />
      <div className="geometric-shape w-72 h-72 -bottom-36 -right-36 bg-te-red opacity-20 rotate-45" />
      <div className="geometric-shape w-48 h-48 top-1/2 -translate-y-1/2 left-1/4 bg-te-white opacity-5" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-24 relative z-10"
      >
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="inline-block p-2 bg-te-red mb-4">
              <Square className="w-6 h-6 text-te-white" />
            </div>
            <h1 className="text-7xl md:text-8xl font-space mb-6 tracking-tighter">
              CSV EDIT
              <span className="text-te-red">TOOL</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 font-light"
          >
            Upload, edit, and manage your CSV files with precision and style
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="group px-8 py-4 bg-te-red text-te-white rounded-none flex items-center justify-center gap-2 hover:bg-red-600 transition-colors">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border-2 border-te-white text-te-white rounded-none hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid grid-cols-12 gap-px pointer-events-none opacity-10">
        {Array.from({ length: 144 }).map((_, i) => (
          <div key={i} className="border-[0.5px] border-gray-500" />
        ))}
      </div>
    </div>
  );
};

export default Index;