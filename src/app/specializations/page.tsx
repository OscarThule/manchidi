"use client"

import Navigation from "../components/Navigation"


const specializations = [
  {
    icon: '❤️',
    title: 'Cardiothoracic Surgery',
    description: 'Advanced heart and lung surgeries including bypass procedures, valve replacements, and minimally invasive cardiac interventions.'
  },
  {
    icon: '🦴',
    title: 'Orthopedic Surgery',
    description: 'Joint replacements, spinal surgeries, fracture management, and sports injury reconstructions with state-of-the-art techniques.'
  },
  {
    icon: '🧠',
    title: 'Neurosurgery',
    description: 'Brain and spinal cord procedures including tumor resections, aneurysm repairs, and minimally invasive neurosurgeries.'
  },
  {
    icon: '👁️',
    title: 'Ophthalmologic Surgery',
    description: 'Cataract surgeries, retinal procedures, corneal transplants, and advanced vision correction techniques.'
  },
  {
    icon: '👶',
    title: 'Pediatric Surgery',
    description: 'Specialized surgical care for children including congenital defect corrections and minimally invasive pediatric procedures.'
  },
  {
    icon: '🔬',
    title: 'Surgical Oncology',
    description: 'Comprehensive cancer surgery programs including tumor resections, reconstructive surgery, and advanced cancer care.'
  },
]

export default function Specializations() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <Navigation />
      
      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our Surgical Specializations
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With over three decades of surgical excellence since graduating from MEDUNSA, 
            Dr. Manchidi leads a team of specialists delivering comprehensive surgical care 
            across all major medical disciplines.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {specializations.map((spec, index) => (
            <div
              key={spec.title}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{spec.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {spec.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {spec.description}
              </p>
            </div>
          ))}
        </div>

        {/* Expertise Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                MEDUNSA-Trained Excellence
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Dr. Manchidi's medical journey began at the prestigious Medical University of Southern Africa (MEDUNSA), 
                where he developed the foundational expertise that has guided his distinguished 30-year surgical career.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This world-class education, combined with decades of practical experience and continuous professional development, 
                ensures that every patient receives care that meets the highest international standards.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose Our Care?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-lg">🎓</span>
                  MEDUNSA-Trained Surgical Excellence
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-lg">⏱️</span>
                  30+ Years of Surgical Experience
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-lg">🔬</span>
                  Cutting-Edge Surgical Technology
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-lg">❤️</span>
                  Patient-Centered Compassionate Care
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}