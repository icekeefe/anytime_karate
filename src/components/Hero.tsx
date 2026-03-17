import React from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-primary-dark/70" style={{ backgroundColor: 'rgba(19, 44, 51, 0.7)' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          鍛鍊身心，<span style={{ color: 'var(--color-primary-gold)' }}>成就更好的自己</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
        >
          Anytime Karate 蒔刻，提供專業空手道教學。無論你是初學者還是進階學員，都能在這裡找到適合你的課程。
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a 
            href="#schedule" 
            className="px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105"
            style={{ backgroundColor: 'var(--color-primary-gold)', color: 'var(--color-primary-dark)' }}
          >
            查看課程資訊
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 rounded-full font-bold text-lg border-2 transition-transform hover:scale-105"
            style={{ borderColor: 'var(--color-primary-teal)', color: 'var(--color-primary-teal)' }}
          >
            聯絡我們
          </a>
        </motion.div>
      </div>
    </div>
  );
}
