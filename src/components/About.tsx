import React from 'react';
import { motion } from 'motion/react';
import { Eye, Target } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--color-primary-dark)' }}>關於我們 What We Do</h2>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: 'var(--color-primary-gold)' }}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-10 rounded-2xl shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-2 h-full" style={{ backgroundColor: 'var(--color-primary-gold)' }}></div>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-full" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', color: 'var(--color-primary-gold)' }}>
                <Eye size={32} />
              </div>
              <h3 className="text-3xl font-bold" style={{ color: 'var(--color-primary-dark)' }}>Vision 願景</h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              透過空手「道」打造一個啟發小朋友與青少年在身心成長中突破自我、擁抱挑戰，並在本地及國際舞台上發光發亮的基地。
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-10 rounded-2xl shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-2 h-full" style={{ backgroundColor: 'var(--color-primary-teal)' }}></div>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-full" style={{ backgroundColor: 'rgba(56, 203, 202, 0.1)', color: 'var(--color-primary-teal)' }}>
                <Target size={32} />
              </div>
              <h3 className="text-3xl font-bold" style={{ color: 'var(--color-primary-dark)' }}>Mission 使命</h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              我們致力於通過專業的空手道訓練，幫助小朋友學習自律、創造力和身體協調，並培養青少年成為精英運動員，勇於挑戰自我、追求卓越，並在比賽中取得佳績，增廣見聞，開拓未來可能性。
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
