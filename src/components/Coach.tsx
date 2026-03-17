import React from 'react';
import { motion } from 'motion/react';
import { Award, Shield, Target } from 'lucide-react';

export default function Coach() {
  return (
    <section id="coach" className="py-24 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--color-primary-dark)' }}>關於教練</h2>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: 'var(--color-primary-gold)' }}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80" 
                alt="教練照片" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div 
              className="absolute -bottom-6 -right-6 p-6 rounded-xl shadow-xl"
              style={{ backgroundColor: 'var(--color-primary-dark)' }}
            >
              <p className="text-white font-bold text-xl">黑帶四段</p>
              <p style={{ color: 'var(--color-primary-gold)' }}>國家級教練認證</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6" style={{ color: 'var(--color-primary-dark)' }}>李教練 (Coach Lee)</h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              擁有超過 15 年的空手道教學經驗，曾多次代表國家參加國際賽事並獲得優異成績。致力於推廣空手道運動，不僅教授防身技巧，更注重培養學員的紀律、專注力與堅韌的心智。
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg" style={{ backgroundColor: 'rgba(56, 203, 202, 0.1)', color: 'var(--color-primary-teal)' }}>
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">豐富賽事經驗</h4>
                  <p className="text-gray-600">多次獲得全國空手道錦標賽冠軍，具備豐富的實戰與指導經驗。</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg" style={{ backgroundColor: 'rgba(56, 203, 202, 0.1)', color: 'var(--color-primary-teal)' }}>
                  <Shield size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">專業防身指導</h4>
                  <p className="text-gray-600">結合現代防身觀念，提供實用且有效的自我保護技巧。</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg" style={{ backgroundColor: 'rgba(56, 203, 202, 0.1)', color: 'var(--color-primary-teal)' }}>
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">因材施教</h4>
                  <p className="text-gray-600">針對不同年齡層與體能狀況的學員，設計專屬的訓練計畫。</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
