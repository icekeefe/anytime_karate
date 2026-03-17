import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { name: '關於我們', href: '#about' },
    { name: '關於教練', href: '#coach' },
    { name: '課程資訊', href: '#schedule' },
    { name: '活動剪影', href: '#gallery' },
    { name: '聯絡我們', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-40 bg-primary-dark/95 backdrop-blur-sm border-b border-white/10" style={{ backgroundColor: 'rgba(19, 44, 51, 0.95)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-primary-gold tracking-wider" style={{ color: 'var(--color-primary-gold)' }}>
              Anytime Karate <span className="text-white">蒔刻</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-primary-teal px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  style={{ transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary-teal)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-primary-dark border-b border-white/10" style={{ backgroundColor: 'var(--color-primary-dark)' }}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-primary-teal block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
