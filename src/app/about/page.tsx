"use client";

import Navigation from "../components/Navigation";

const milestones = [
  { year: "1990", event: "Graduated from MEDUNSA Medical School" },
  { year: "1993", event: "Established Private Surgical Practice" },
  { year: "2000", event: "Pioneered Minimally Invasive Surgery Program" },
  { year: "2010", event: "Expanded to Multi-Specialty Surgical Center" },
  { year: "2020", event: "Integrated Telemedicine and Digital Health" },
  { year: "2023", event: "30+ Years of Surgical Excellence Celebration" }
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <Navigation />
      
      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About Dr. Manchidi &amp; Our Practice
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three decades of MEDUNSA-trained surgical excellence, dedicated to advancing 
            patient care through innovation, compassion, and world-class medical expertise.
          </p>
        </div>

        {/* Doctor Profile */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-100">
            <div className="text-center mb-6">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-4xl">👨‍⚕️</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Dr. S. Manchidi</h2>
              <p className="text-blue-600 font-semibold mb-1">MEDUNSA Medical Graduate</p>
              <p className="text-gray-600">Leading Surgical Specialist Since 1993</p>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                 Dr. Manchidi&apos;s medical journey began at the prestigious Medical University of Southern Africa (MEDUNSA), 
                 where he developed the foundational expertise that would guide his distinguished 30-year surgical career.
              </p>

              <p className="text-gray-600 leading-relaxed">
                His MEDUNSA education, combined with continuous professional development and hands-on experience, 
                has established him as a trusted leader in the surgical community, known for both technical excellence 
                and compassionate patient care.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-blue-100 leading-relaxed">
                To provide exceptional surgical care grounded in MEDUNSA&apos;s tradition of excellence, 
                enhanced by three decades of practical experience and cutting-edge medical innovation.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <span className="text-blue-600 text-xl">🎓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Educational Excellence</h4>
                    <p className="text-gray-600 text-sm">MEDUNSA-trained foundation with continuous learning</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-blue-600 text-xl">❤️</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Compassionate Care</h4>
                    <p className="text-gray-600 text-sm">Patient-first approach in all surgical interventions</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-blue-600 text-xl">⚡</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Innovation</h4>
                    <p className="text-gray-600 text-sm">Embracing latest surgical techniques and technology</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-100 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Journey of Excellence
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white p-4 rounded-xl shadow-md border border-blue-100">
                      <h3 className="font-bold text-gray-900 text-lg">{milestone.year}</h3>
                      <p className="text-gray-600">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">100k+</div>
            <div className="text-gray-600">Successful Surgeries</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">99.2%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
            <div className="text-gray-600">Surgical Specialties</div>
          </div>
        </div>
      </main>
    </div>
  );
}
