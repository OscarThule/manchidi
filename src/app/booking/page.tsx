'use client'

import { useState } from 'react'
import Navigation from '../components/Navigation'


export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    procedure: '',
    preferredDate: '',
    message: ''
  })

  const procedures = [
    'General Consultation',
    'Cardiac Surgery Consultation',
    'Orthopedic Assessment',
    'Neurosurgery Evaluation',
    'Ophthalmology Consultation',
    'Pediatric Surgery Review',
    'Oncology Surgical Consultation',
    'Second Opinion'
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Booking submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <Navigation />
      
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Book Your Consultation
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Schedule a consultation with Dr. Manchidi and our specialist team. 
              Experience MEDUNSA-trained surgical excellence combined with three decades of expertise.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Booking Form */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="+27 XXX XXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Procedure Type *
                  </label>
                  <select
                    name="procedure"
                    required
                    value={formData.procedure}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a procedure</option>
                    {procedures.map(proc => (
                      <option key={proc} value={proc}>{proc}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    required
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Please provide any relevant medical history or specific concerns..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Request Consultation
                </button>
              </form>
            </div>

            {/* Information Sidebar */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Why Consult With Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-xl mt-1">🎓</span>
                    <div>
                      <strong>MEDUNSA-Trained Expertise</strong>
                      <p className="text-blue-100 text-sm">World-class medical education foundation</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl mt-1">⏱️</span>
                    <div>
                      <strong>30+ Years Experience</strong>
                      <p className="text-blue-100 text-sm">Three decades of surgical excellence</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl mt-1">💡</span>
                    <div>
                      <strong>Personalized Care</strong>
                      <p className="text-blue-100 text-sm">Tailored treatment plans for every patient</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Emergency Cases</h3>
                <p className="text-gray-600 mb-4">
                  For urgent surgical consultations or emergency cases, please call our emergency line:
                </p>
                <div className="text-2xl font-bold text-blue-600 mb-2">+27 (0) 12 345 6789</div>
                <p className="text-sm text-gray-500">Available 24/7 for emergency surgical cases</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}