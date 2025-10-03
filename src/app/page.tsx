'use client'

import { useEffect, useState } from 'react'
import FloatingElements from './components/FloatingElements'
import Navigation from './components/Navigation'
import HeroAnimation from './components/HeroAnimation'


export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 overflow-hidden relative">
      <FloatingElements />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent"></div>
      
      <div className={`relative z-10 transition-all duration-1000 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}>
        <Navigation />
        
        <main className="container mx-auto px-6 py-8">
          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[85vh] pt-8">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200 text-blue-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Trusted Surgical Excellence Since 1993
                </div>
                
                {/* Main Heading */}
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                    Precision{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                      Care
                    </span>
                    <br />
                    with Three Decades
                    <br />
                    of{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                      Excellence
                    </span>
                  </h1>
                  
                  <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                    Under the distinguished leadership of <strong className="text-blue-600">Dr. Manchidi</strong>, 
                    our practice brings over 30 years of surgical mastery to deliver world-class 
                    healthcare with compassion and cutting-edge technology.
                  </p>
                </div>
              </div>  
               
              
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="group relative bg-white/80 backdrop-blur-sm border-2 border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md">
                  <span className="relative z-10">Emergency Care</span>
                </button>
                 <button className="group relative bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden">
                  <span className="relative z-10">Book Consultation</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 py-6 border-y border-gray-200/60">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">30+</div>
                  <div className="text-sm text-gray-500 font-medium">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">100k plus+</div>
                  <div className="text-sm text-gray-500 font-medium">Successful Procedures</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">99%</div>
                  <div className="text-sm text-gray-500 font-medium">Success Rate</div>
                </div>
              </div>

          

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-8 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  Board Certified Surgeons
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  Advanced Technology
                </div>
              </div>
            </div>

            {/* Animated Hero Section */}
            <div className="relative">
              <HeroAnimation />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}