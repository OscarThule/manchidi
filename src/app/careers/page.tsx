"use client"

import Navigation from "../components/Navigation"

const currentOpenings = [
  {
    title: "Senior Surgical Registrar",
    department: "Cardiothoracic Surgery",
    type: "Full-time",
    location: "Mohlaletse",
    experience: "3+ years",
    description: "Join our elite cardiothoracic team under Dr. Manchidi&apos;s leadership"
  },
  {
    title: "Orthopedic Surgery Fellow",
    department: "Orthopedic Department",
    type: "Fellowship",
    location: "Mohlaletse",
    experience: "2+ years",
    description: "Advanced training in joint replacement and spinal surgery"
  },
  {
    title: "Neurosurgery Nurse Practitioner",
    department: "Neurosurgery Unit",
    type: "Full-time",
    location: "Mohlaletse",
    experience: "4+ years",
    description: "Specialized nursing care for neurosurgical patients"
  },
  {
    title: "Medical Research Coordinator",
    department: "Research &amp; Innovation",
    type: "Full-time",
    location: "Hybrid",
    experience: "2+ years",
    description: "Coordinate surgical research projects and clinical trials"
  }
]

const benefits = [
  {
    icon: "🎓",
    title: "Learning &amp; Development",
    description: "Continuous medical education and surgical training programs"
  },
  {
    icon: "💼",
    title: "Career Advancement",
    description: "Clear pathways for professional growth and specialization"
  },
  {
    icon: "⚕️",
    title: "Cutting-Edge Technology",
    description: "Access to latest surgical equipment and medical technology"
  },
  {
    icon: "👥",
    title: "Mentorship Program",
    description: "Direct mentorship from Dr. Manchidi and senior surgeons"
  }
]

export default function Careers() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <Navigation />
      
      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Join Our Surgical Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build your career alongside MEDUNSA-trained surgical excellence. 
            Learn from Dr. Manchidi&apos;s three decades of experience while working with cutting-edge medical technology.
          </p>
        </div>

        {/* Current Openings */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Current Career Opportunities
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {currentOpenings.map((job) => (
              <div key={job.title} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {job.type}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <span>🏢</span>
                    {job.department}
                  </div>
                  <div className="flex items-center gap-2">
                    <span>📍</span>
                    {job.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <span>⏱️</span>
                    {job.experience}
                  </div>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-300">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Work With Us?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-blue-100">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* MEDUNSA Legacy Section */}
        <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">MEDUNSA Legacy of Excellence</h2>
              <p className="text-blue-100 mb-4 leading-relaxed">
                Dr. Manchidi&apos;s MEDUNSA education forms the foundation of our practice&apos;s commitment to 
                surgical excellence. We continue this legacy by mentoring the next generation of 
                surgical professionals with the same rigorous standards and compassionate care.
              </p>
              <p className="text-blue-100 leading-relaxed">
                Join a team where MEDUNSA&apos;s tradition of excellence meets 30 years of practical 
                surgical experience and innovation.
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">Our Training Philosophy</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span>🎯</span>
                  Evidence-based surgical practices
                </li>
                <li className="flex items-center gap-3">
                  <span>🤝</span>
                  Hands-on surgical training
                </li>
                <li className="flex items-center gap-3">
                  <span>💡</span>
                  Innovative surgical techniques
                </li>
                <li className="flex items-center gap-3">
                  <span>❤️</span>
                  Patient-centered care approach
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
