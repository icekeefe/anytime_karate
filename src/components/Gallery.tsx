import React from 'react';
import { motion } from 'motion/react';

export default function Gallery() {
  const photos = [
    { url: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80', title: '日常訓練', type: 'activity' },
    { url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80', title: '全國錦標賽', type: 'competition' },
    { url: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&q=80', title: '體能特訓', type: 'activity' },
    { url: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80', title: '道館交流賽', type: 'competition' },
    { url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80', title: '兒童班結業', type: 'activity' },
    { url: 'https://images.unsplash.com/photo-1526506114642-54cb358634fc?auto=format&fit=crop&q=80', title: '國際邀請賽', type: 'competition' },
  ];

  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--color-primary-dark)' }}>活動剪影</h2>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: 'var(--color-primary-gold)' }}></div>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            紀錄學員們揮灑汗水、突破自我的每一個精彩瞬間。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg aspect-square cursor-pointer"
            >
              <img 
                src={photo.url} 
                alt={photo.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span 
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 w-max"
                  style={{ 
                    backgroundColor: photo.type === 'competition' ? 'var(--color-primary-gold)' : 'var(--color-primary-teal)',
                    color: photo.type === 'competition' ? 'var(--color-primary-dark)' : 'white'
                  }}
                >
                  {photo.type === 'competition' ? '比賽照片' : '活動照片'}
                </span>
                <h3 className="text-2xl font-bold text-white">{photo.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
