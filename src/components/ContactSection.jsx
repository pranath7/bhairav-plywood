import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact-us" className="py-24 border-b border-zinc-200 bg-[#f6f4f0]">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-widest text-amber-800">Visit Our Store</p>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">Get in Touch with Bhairav Plywood</h2>
              <p className="text-sm text-zinc-600">Have questions about wood calibration, veneer matching, or marine ply grades? Drop by our showroom or call Deepak Bansal directly.</p>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/15 text-amber-800 flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-zinc-900">Showroom & Warehouse Address</h4>
                  <p className="text-xs text-zinc-600">24, Old Slaughter House Street, Choolai, Chennai, Tamil Nadu 600112</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/15 text-amber-800 flex-shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-zinc-900">Contact Desk / Mobile</h4>
                  <p className="text-xs text-zinc-600">
                    <strong className="text-zinc-900">Deepak Bansal:</strong> <a href="tel:9940177773" className="text-amber-800 font-bold hover:underline">+91 99401 77773</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/15 text-amber-800 flex-shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-zinc-900">Official Email Inquiry</h4>
                  <p className="text-xs text-zinc-600">
                    <a href="mailto:bheraveply@gmail.com" className="text-amber-800 hover:underline font-semibold">bheraveply@gmail.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-800 flex-shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-zinc-900">Store Timings</h4>
                  <p className="text-xs text-zinc-600">Monday – Saturday: 9:00 AM – 8:30 PM<br />Sunday: By Appointment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border-2 border-zinc-200 bg-white p-7 sm:p-9 shadow-xl space-y-6 text-left">
              <h3 className="font-display text-xl font-black text-zinc-900 flex items-center gap-2.5">
                <Send className="h-5 w-5 text-amber-600" /> Send Direct Requirement
              </h3>

              {submitted ? (
                <div className="rounded-2xl border-2 border-emerald-400 bg-emerald-50 p-7 text-center space-y-2 shadow-sm">
                  <CheckCircle2 className="h-10 w-10 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-bold text-zinc-900">Inquiry Logged Successfully!</h4>
                  <p className="text-xs text-zinc-600">Deepak Bansal (+91 99401 77773) has received your requirement and will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-zinc-900">Your Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Rajesh Kumar" 
                      className="w-full rounded-xl border-2 border-zinc-200 bg-[#fbfaf8] px-4 py-3 text-sm text-zinc-900 font-medium focus:border-amber-500 focus:bg-white focus:outline-none transition-all shadow-inner" 
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-zinc-900">Mobile / WhatsApp Number</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="e.g. 98765 43210" 
                      className="w-full rounded-xl border-2 border-zinc-200 bg-[#fbfaf8] px-4 py-3 text-sm text-zinc-900 font-medium focus:border-amber-500 focus:bg-white focus:outline-none transition-all shadow-inner" 
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-zinc-900">Requirement Details</label>
                    <textarea 
                      required
                      rows="4" 
                      placeholder="Mention sheet quantities, thickness (e.g. 18mm Sharon BWP Ply, Almond flush doors...)" 
                      className="w-full rounded-xl border-2 border-zinc-200 bg-[#fbfaf8] px-4 py-3 text-sm text-zinc-900 font-medium focus:border-amber-500 focus:bg-white focus:outline-none transition-all shadow-inner" 
                    ></textarea>
                  </div>

                  {/* High-contrast, super vibrant Submit Button */}
                  <button 
                    type="submit" 
                    className="w-full rounded-2xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-700 py-4 text-base font-black text-zinc-950 shadow-xl border-2 border-amber-300 transition-all active:scale-95 flex items-center justify-center gap-2.5 cursor-pointer mt-2"
                  >
                    <Send className="h-5 w-5 stroke-[2.5]" /> Submit Requirement
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
