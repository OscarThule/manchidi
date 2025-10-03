'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navigation = [
  { name: 'Specializations', href: '/specializations', icon: '🎯' },
  { name: 'Book Appointment', href: '/booking', icon: '📅' },
  { name: 'Online Consultation', href: '/consultation', icon: '💻' },
  { name: 'Careers', href: '/careers', icon: '💼' },
  { name: 'About Us', href: '/about', icon: '👨‍⚕️' },
  { name: 'Contact', href: '/contact', icon: '📞' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="relative bg-white/80 backdrop-blur-md border-b border-blue-100/50 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo with Stethoscope Profile */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Stethoscope Icon */}
              <div className="relative text-white">
                <div className="w-6 h-4 flex justify-between">
                  <div className="w-1 h-3 bg-white rounded-l-full mt-1"></div>
                  <div className="w-4 h-1 bg-white mt-2"></div>
                  <div className="w-1 h-3 bg-white rounded-r-full mt-1"></div>
                </div>
                <div className="w-2 h-2 bg-white rounded-full absolute -bottom-1 left-1/2 transform -translate-x-1/2"></div>
              </div>
            </div>
            <div>
              <div className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                Dr. Manchidi Surgery
              </div>
              <div className="text-xs text-gray-500">MEDUNSA Graduate • Since 1993</div>
            </div>
          </Link>

          {/* Desktop Navigation with Icons */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 relative group px-3 py-2 rounded-lg hover:bg-blue-50"
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.name}</span>
                <span className="absolute -bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 transition-all transform scale-x-0 group-hover:scale-x-100"></span>
              </Link>
            ))}
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 transition-all duration-300 flex flex-col items-center justify-center space-y-1 group"
            aria-label="Main menu"
            aria-expanded={isOpen}
          >
            <div className="w-6 h-6 flex items-center justify-center relative">
              {isOpen ? (
                <span className="text-lg font-bold transition-transform duration-300 rotate-90">✕</span>
              ) : (
                <>
                  <span className="text-2xl font-light transition-all duration-300 group-hover:scale-110">⋯</span>
                </>
              )}
            </div>
            <span className="text-xs font-medium text-blue-700">Menu</span>
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-blue-100 z-50 shadow-xl">
            <div className="py-4">
              <div className="px-6 py-3 border-b border-blue-50">
                <h3 className="text-sm font-semibold text-blue-900 uppercase tracking-wide">
                  Quick Navigation Menu
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Explore our medical services and practice information
                </p>
              </div>
              
              <div className="grid grid-cols-1 divide-y divide-blue-50">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-4 px-6 py-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 group"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-2xl transition-transform duration-300 group-hover:scale-110">
                      {item.icon}
                    </span>
                    <div className="flex-1">
                      <div className="font-semibold group-hover:text-blue-600 transition-colors">
                        {item.name}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {getNavDescription(item.name)}
                      </div>
                    </div>
                    <span className="text-gray-300 group-hover:text-blue-400 transition-colors">
                      →
                    </span>
                  </Link>
                ))}
              </div>

              {/* Mobile Footer */}
              <div className="px-6 py-4 bg-blue-50/50 border-t border-blue-100">
                <div className="text-center">
                  <p className="text-xs text-gray-600">
                    🩺 <strong>Emergency?</strong> Call:{" "}
                    <a href="tel:+27123456789" className="text-blue-600 hover:text-blue-700 font-semibold">
                      +27 12 345 6789
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// Helper function for mobile menu descriptions
function getNavDescription(navName: string): string {
  const descriptions: { [key: string]: string } = {
    'Specializations': 'Explore our surgical specialties and treatments',
    'Book Appointment': 'Schedule your in-person consultation',
    'Online Consultation': 'Virtual visits with Dr. Manchidi',
    'Careers': 'Join our medical team opportunities',
    'About Us': 'Meet Dr. Manchidi and our practice story',
    'Contact': 'Get in touch with our clinic',
  }
  return descriptions[navName] || 'Learn more about this section'
}