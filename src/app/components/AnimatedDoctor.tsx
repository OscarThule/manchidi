'use client'

import { useEffect, useState } from 'react'

export default function AnimatedDoctor() {
  const [stage, setStage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setStage((prev) => (prev + 1) % 4)
    }, 2000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-96 lg:h-[500px] flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-3xl blur-xl"></div>
      
      {/* Animated Container */}
      <div className="relative z-10 w-64 h-64 lg:w-80 lg:h-80">
        {/* Base Doctor Silhouette */}
        <div className={`absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full transition-all duration-1000 ${
          stage >= 0 ? 'opacity-20' : 'opacity-0'
        }`}></div>
        
        {/* Floating Dots/Stars */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-white rounded-full transition-all duration-1000 ${
              stage >= 1 ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.1}s`,
              transform: stage >= 1 ? 'scale(1)' : 'scale(0)',
            }}
          ></div>
        ))}
        
        {/* Stethoscope Formation */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
          stage >= 2 ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="relative w-48 h-32">
            {/* Stethoscope Tube */}
            <div className="absolute top-1/2 left-4 right-4 h-1 bg-gray-300 rounded-full"></div>
            {/* Earpieces */}
            <div className="absolute left-0 top-1/2 w-6 h-8 bg-gray-400 rounded-l-full -translate-y-1/2"></div>
            <div className="absolute right-0 top-1/2 w-6 h-8 bg-gray-400 rounded-r-full -translate-y-1/2"></div>
            {/* Chestpiece */}
            <div className="absolute left-1/2 bottom-0 w-8 h-8 bg-gray-500 rounded-full -translate-x-1/2"></div>
          </div>
        </div>
        
        {/* Final Doctor Icon */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
          stage >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}>
          <div className="text-6xl lg:text-8xl">👨‍⚕️</div>
        </div>
      </div>

      {/* Stage Indicator */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              stage === i ? 'bg-blue-600 scale-125' : 'bg-gray-300'
            }`}
          ></div>
        ))}
      </div>
    </div>
  )
}