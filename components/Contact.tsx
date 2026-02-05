
import React, { useState } from 'react';
import { Send, Linkedin, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => setIsSent(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-brand-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          
          {/* Info Side */}
          <div className="bg-brand-deepBlue p-12 lg:p-20 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-brand-teal font-bold tracking-widest uppercase text-sm mb-4">Get in Touch</h2>
              <h3 className="text-4xl font-bold mb-8">Let's Build Your Global Workforce</h3>
              <p className="text-gray-400 font-serif text-lg mb-12">
                Ready to optimize your operations or scale your clinical teams? Let's discuss a strategy tailored to your global goals.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-brand-teal">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-bold uppercase">Email Me</p>
                    <p className="font-semibold">m.narciso@superstaff.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-brand-gold">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-bold uppercase">LinkedIn</p>
                    <p className="font-semibold">linkedin.com/in/matthewnarciso</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-bold uppercase">Location</p>
                    <p className="font-semibold">Global Operations Hubs</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-white/10">
              <p className="text-sm text-gray-400 italic font-serif">
                "Connecting world-class talent with industry-leading firms."
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-12 lg:p-20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full bg-brand-neutral border-0 rounded-2xl p-4 focus:ring-2 focus:ring-brand-teal transition-all outline-none"
                  placeholder="John Doe"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Work Email</label>
                <input
                  type="email"
                  required
                  className="w-full bg-brand-neutral border-0 rounded-2xl p-4 focus:ring-2 focus:ring-brand-teal transition-all outline-none"
                  placeholder="john@company.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  className="w-full bg-brand-neutral border-0 rounded-2xl p-4 focus:ring-2 focus:ring-brand-teal transition-all outline-none resize-none"
                  placeholder="Tell me about your project or workforce needs..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                ></textarea>
              </div>

              <button
                type="submit"
                className={`w-full group relative overflow-hidden bg-brand-deepBlue text-white font-bold py-5 rounded-2xl transition-all ${
                  isSent ? 'bg-brand-teal' : 'hover:bg-brand-teal'
                }`}
              >
                <span className={`flex items-center justify-center transition-all ${isSent ? 'opacity-0' : 'opacity-100'}`}>
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
                {isSent && (
                  <span className="absolute inset-0 flex items-center justify-center animate-pulse">
                    Message Sent Successfully!
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
