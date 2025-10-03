"use client"

import Navigation from "../components/Navigation"


const consultationTypes = [
  {
    title: "Virtual Telemedicine Consultation",
    description: "Secure video consultations from the comfort of your home",
    features: ["High-quality video calls", "Secure medical platform", "Digital prescriptions", "Follow-up scheduling"],
    price: "R750",
    duration: "30 minutes"
  },
  {
    title: "In-Person Surgical Evaluation",
    description: "Comprehensive physical examination and surgical assessment",
    features: ["Physical examination", "Diagnostic review", "Surgical planning", "Treatment roadmap"],
    price: "R800",
    duration: "45 minutes"
  },
  {
    title: "Second Opinion Consultation",
    description: "Expert review of your current diagnosis and treatment plan",
    features: ["Medical record review", "Alternative perspectives", "Comprehensive report", "Recommendations"],
    price: "R1,500",
    duration: "60 minutes"
  }
]

export default function Consultation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <Navigation />
      
      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Online & In-Person Consultations
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access MEDUNSA-trained surgical expertise through our comprehensive consultation services. 
            Dr. Manchidi brings three decades of experience to every patient interaction.
          </p>
        </div>

        {/* Consultation Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {consultationTypes.map((consult, index) => (
            <div key={consult.title} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{consult.title}</h3>
                <p className="text-gray-600 mb-4">{consult.description}</p>
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-2 px-6 rounded-full inline-block">
                  <span className="text-2xl font-bold">{consult.price}</span>
                  <span className="text-blue-100 ml-2">| {consult.duration}</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-6">
                {consult.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <span className="text-green-500 text-lg">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                Book This Consultation
              </button>
            </div>
          ))}
        </div>

        {/* Technology Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Advanced Telemedicine Platform
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our secure telemedicine platform allows you to consult with Dr. Manchidi from anywhere, 
                ensuring continuity of care while maintaining the highest standards of medical excellence.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-blue-600 text-lg">🔒</span>
                  <span className="font-semibold">HIPAA Compliant Secure Platform</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-600 text-lg">📱</span>
                  <span className="font-semibold">Easy-to-Use Mobile & Desktop Access</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-600 text-lg">⚡</span>
                  <span className="font-semibold">Instant Medical Record Access</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white text-center">
              <div className="text-6xl mb-4">👨‍⚕️</div>
              <h3 className="text-2xl font-bold mb-3">Dr. S. Manchidi</h3>
              <p className="text-blue-100 mb-2">MEDUNSA Medical Graduate</p>
              <p className="text-blue-100">30+ Years Surgical Experience</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}