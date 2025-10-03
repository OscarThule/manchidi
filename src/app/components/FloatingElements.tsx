'use client'

const floatingShapes = [
  { id: 1, x: 10, y: 20, size: 4, delay: 0 },
  { id: 2, x: 85, y: 15, size: 6, delay: 2 },
  { id: 3, x: 25, y: 70, size: 3, delay: 4 },
  { id: 4, x: 70, y: 80, size: 5, delay: 6 },
  { id: 5, x: 45, y: 30, size: 4, delay: 8 },
  { id: 6, x: 15, y: 85, size: 7, delay: 10 },
  { id: 7, x: 90, y: 60, size: 3, delay: 12 },
  { id: 8, x: 35, y: 45, size: 5, delay: 14 },
]

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 -left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl"></div>
      
      {/* Floating Shapes */}
      {floatingShapes.map((shape) => (
        <div
          key={shape.id}
          className="absolute rounded-full bg-gradient-to-br from-blue-200/40 to-cyan-200/40 animate-float-slow"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            animationDelay: `${shape.delay}s`,
          }}
        />
      ))}
      
      {/* Geometric Patterns */}
      <div className="absolute top-20 right-20 w-8 h-8 border-2 border-blue-200/30 rounded-lg animate-float-slow"></div>
      <div className="absolute bottom-40 left-20 w-6 h-6 border-2 border-cyan-200/30 rotate-45 animate-float-slow delay-5"></div>
      <div className="absolute top-60 left-10 w-10 h-10 border-2 border-blue-200/20 rounded-full animate-float-slow delay-10"></div>
    </div>
  )
}