import React from 'react';
import { motion } from 'motion/react';
import { Clock, MapPin } from 'lucide-react';

export default function Schedule() {
  const scheduleData = [
    { day: '星期一', time: '18:00 - 19:30', level: '初級班', venue: '台北總部道館' },
    { day: '星期二', time: '19:00 - 20:30', level: '進階班', venue: '台北總部道館' },
    { day: '星期三', time: '18:00 - 19:30', level: '兒童班', venue: '新北分館' },
    { day: '星期四', time: '19:00 - 20:30', level: '實戰對打班', venue: '台北總部道館' },
    { day: '星期五', time: '18:00 - 19:30', level: '初級班', venue: '新北分館' },
    { day: '星期六', time: '10:00 - 12:00', level: '綜合訓練', venue: '台北總部道館' },
  ];

  return (
    <section id="schedule" className="py-24" style={{ backgroundColor: 'var(--color-primary-dark)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">課程時間與地點</h2>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: 'var(--color-primary-gold)' }}></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Schedule Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="p-6" style={{ backgroundColor: 'var(--color-primary-teal)' }}>
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <Clock size={28} />
                每週課表
              </h3>
            </div>
            <div className="divide-y divide-gray-200">
              {scheduleData.map((item, index) => (
                <div key={index} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-16 text-center font-bold" style={{ color: 'var(--color-primary-dark)' }}>
                      {item.day}
                    </div>
                    <div className="text-gray-600 font-mono">{item.time}</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: 'rgba(212, 175, 55, 0.2)', color: 'var(--color-primary-dark)' }}>
                      {item.level}
                    </span>
                    <span className="text-gray-500 text-sm w-24 text-right">{item.venue}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Venues */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--color-primary-dark)' }}>
                <MapPin size={28} style={{ color: 'var(--color-primary-teal)' }} />
                台北總部道館
              </h3>
              <p className="text-gray-600 mb-4">台北市信義區信義路五段 100 號 3 樓</p>
              <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&q=80" 
                  alt="台北總部道館" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--color-primary-dark)' }}>
                <MapPin size={28} style={{ color: 'var(--color-primary-teal)' }} />
                新北分館
              </h3>
              <p className="text-gray-600 mb-4">新北市板橋區文化路一段 200 號 2 樓</p>
              <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80" 
                  alt="新北分館" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
