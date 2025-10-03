'use client'

import { useEffect, useState } from 'react'

export default function HeroAnimation() {
  const [currentStage, setCurrentStage] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    
    const interval = setInterval(() => {
      setCurrentStage(prev => (prev + 1) % 4)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const stages = [
    // Stage 0: Pulse circles
    <div key="pulse" className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-64 h-64 lg:w-80 lg:h-80">
        <div className="absolute inset-0 border-4 border-blue-200 rounded-full animate-ping"></div>
        <div className="absolute inset-4 border-4 border-blue-300 rounded-full animate-pulse"></div>
        <div className="absolute inset-8 border-4 border-blue-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-4xl">⚕️</div>
        </div>
      </div>
    </div>,
    
    // Stage 1: Floating medical icons
    <div key="icons" className="absolute inset-0">
      {['💊', '🩺', '❤️', '🦴', '👁️'].map((icon, index) => (
        <div
          key={icon}
          className="absolute text-2xl animate-float"
          style={{
            left: `${20 + index * 15}%`,
            top: `${30 + (index % 2) * 40}%`,
            animationDelay: `${index * 0.5}s`,
          }}
        >
          {icon}
        </div>
      ))}
    </div>,
    
    // Stage 2: Doctor profile with stethoscope
    <div key="doctor" className="absolute inset-0 flex items-center justify-center">
      <div className="relative">
        <div className="w-48 h-48 lg:w-56 lg:h-56 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse-glow">
          <div className="text-6xl lg:text-7xl">👨‍⚕️</div>
        </div>
        {/* Stethoscope */}
        <div className="absolute -top-4 -right-4 w-24 h-24 rotate-45 opacity-80">
          <div className="w-full h-1 bg-gray-400 absolute top-1/2"></div>
          <div className="w-4 h-6 bg-gray-500 rounded-l-full absolute left-0 top-1/2 -translate-y-1/2"></div>
          <div className="w-4 h-6 bg-gray-500 rounded-r-full absolute right-0 top-1/2 -translate-y-1/2"></div>
          <div className="w-6 h-6 bg-gray-600 rounded-full absolute left-1/2 bottom-0 -translate-x-1/2"></div>
        </div>
      </div>
    </div>,
    
    // Stage 3: Success metrics
    <div key="metrics" className="absolute inset-0 flex items-center justify-center">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-blue-100">
        <div className="text-center space-y-4">
          <div className="text-2xl font-bold text-blue-600">99.2%</div>
          <div className="text-sm text-gray-600">Surgical Success Rate</div>
          <div className="w-32 h-2 bg-blue-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"
              style={{ width: '99.2%' }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  ]

  return (
    <div className="relative w-full h-96 lg:h-[500px] flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-cyan-100/30 rounded-3xl backdrop-blur-sm"></div>
      
      {/* Main Animation Container */}
      <div className={`relative z-10 w-full h-full transition-all duration-1000 transform ${
        isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
      }`}>
        {stages[currentStage]}
      </div>
      
      {/* Stage Indicator */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {[0, 1, 2, 3].map((stage) => (
          <button
            key={stage}
            onClick={() => setCurrentStage(stage)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentStage === stage 
                ? 'bg-blue-600 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  )
}