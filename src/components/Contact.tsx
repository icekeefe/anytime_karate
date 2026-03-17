import React from 'react';
import { Phone, Instagram, Facebook, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24" style={{ backgroundColor: 'var(--color-primary-dark)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">聯絡我們</h2>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: 'var(--color-primary-gold)' }}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="text-white space-y-8">
            <h3 className="text-3xl font-bold mb-6" style={{ color: 'var(--color-primary-gold)' }}>
              加入 Anytime Karate 蒔刻
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              準備好開始你的空手道之旅了嗎？無論你有任何問題，或是想預約體驗課程，都歡迎隨時與我們聯繫。
            </p>

            <div className="space-y-6 mt-8">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-full" style={{ backgroundColor: 'rgba(56, 203, 202, 0.2)', color: 'var(--color-primary-teal)' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">聯絡電話</p>
                  <p className="text-xl font-bold">02-2345-6789</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-4 rounded-full" style={{ backgroundColor: 'rgba(56, 203, 202, 0.2)', color: 'var(--color-primary-teal)' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">電子郵件</p>
                  <p className="text-xl font-bold">info@anytimekarate.tw</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-4 rounded-full" style={{ backgroundColor: 'rgba(56, 203, 202, 0.2)', color: 'var(--color-primary-teal)' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">總部地址</p>
                  <p className="text-xl font-bold">台北市信義區信義路五段 100 號 3 樓</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 flex gap-6">
              <a 
                href="#" 
                className="p-4 rounded-full transition-transform hover:scale-110"
                style={{ backgroundColor: 'var(--color-primary-teal)', color: 'white' }}
              >
                <Instagram size={28} />
              </a>
              <a 
                href="#" 
                className="p-4 rounded-full transition-transform hover:scale-110"
                style={{ backgroundColor: '#1877F2', color: 'white' }}
              >
                <Facebook size={28} />
              </a>
            </div>
          </div>

          {/* Contact Form (Visual only for demo) */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-primary-dark)' }}>線上預約體驗</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">姓名</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:outline-none focus:ring-[#38cbca] focus:border-[#38cbca]"
                  placeholder="您的姓名"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">聯絡電話</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:outline-none focus:ring-[#38cbca] focus:border-[#38cbca]"
                  placeholder="您的電話號碼"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">想了解的課程</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:outline-none focus:ring-[#38cbca] focus:border-[#38cbca] bg-white">
                  <option>初級班</option>
                  <option>進階班</option>
                  <option>兒童班</option>
                  <option>實戰對打班</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">留言</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:outline-none focus:ring-[#38cbca] focus:border-[#38cbca]"
                  placeholder="有什麼想告訴我們的嗎？"
                ></textarea>
              </div>
              <button 
                className="w-full py-4 rounded-lg font-bold text-lg transition-colors hover:opacity-90"
                style={{ backgroundColor: 'var(--color-primary-gold)', color: 'var(--color-primary-dark)' }}
              >
                送出預約
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
