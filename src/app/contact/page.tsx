"use client";

import Navigation from "../components/Navigation";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <Navigation />

      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Contact Dr. Manchidi & Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reach out to us for appointments, inquiries, or any questions you may have about our surgical services. 
            Our team is ready to assist you.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-100 mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Name</label>
              <input type="text" placeholder="Your Name" className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Email</label>
              <input type="email" placeholder="you@example.com" className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Message</label>
              <textarea placeholder="Your Message" rows={5} className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100">
            <div className="text-3xl mb-2">📞</div>
            <p className="text-gray-600 font-semibold">Phone</p>
            <p className="text-gray-800">+27 76 203 4113</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100">
            <div className="text-3xl mb-2">✉️</div>
            <p className="text-gray-600 font-semibold">Email</p>
            <p className="text-gray-800">lekgorothuleoscar@gmail.com</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100">
            <div className="text-3xl mb-2">📍</div>
            <p className="text-gray-600 font-semibold">Location</p>
            <p className="text-gray-800">Mpumalanga, Emalahleni, South Africa</p>
          </div>
        </div>
      </main>
    </div>
  )
}
