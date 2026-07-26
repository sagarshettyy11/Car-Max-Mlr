import React, { useState } from 'react';
import { BRAND_INFO, LUXURY_BRANDS, SERVICES } from '../data/carmaxData';
import { Calendar, Clock, Car, Wrench, Phone, User, CheckCircle2, MessageSquare, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';

export default function BookingSection() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const [formData, setFormData] = useState({
    brand: 'BMW',
    model: '',
    year: '2023',
    regNo: '',
    serviceType: 'Periodic Maintenance & Oil Care',
    preferredDate: '',
    timeSlot: 'Morning (10:00 AM)',
    pickupType: 'Drive-in to Workshop',
    customerName: '',
    phone: '',
    cityArea: 'Mangalore',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ref = 'CX-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setSubmitted(true);

    // Format WhatsApp Message
    const text = `*NEW BOOKING APPOINTMENT REQUEST* 🏎️\n\n` +
      `*Ref ID:* ${ref}\n` +
      `*Customer:* ${formData.customerName}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*City/Location:* ${formData.cityArea}\n\n` +
      `*Vehicle:* ${formData.brand} ${formData.model} (${formData.year})\n` +
      `*Reg No:* ${formData.regNo || 'N/A'}\n` +
      `*Requested Service:* ${formData.serviceType}\n` +
      `*Appointment Date:* ${formData.preferredDate || 'Earliest Slot'}\n` +
      `*Time Slot:* ${formData.timeSlot}\n` +
      `*Pickup Preference:* ${formData.pickupType}\n` +
      `*Notes:* ${formData.notes || 'None'}`;

    const whatsappUrl = `https://wa.me/${BRAND_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="booking" className="py-24 bg-[#090a0d] relative overflow-hidden border-t border-white/10">
      {/* Background Glow */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#ff5500]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#ff5500] font-mono uppercase tracking-widest mb-4">
            <Calendar className="w-3.5 h-3.5" />
            CONVENIENT APPOINTMENT RESERVATION
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            BOOK YOUR <span className="orange-gradient-text">SERVICE SLOT</span>
          </h2>
          <p className="text-base text-gray-400 font-light leading-relaxed">
            Reserve priority workshop inspection or request doorstep flatbed towing across Mangalore and surrounding coastal districts.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl relative">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step Indicator Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-xl bg-[#ff5500] text-white font-bold flex items-center justify-center text-sm shadow-md">
                      {step}
                    </span>
                    <span className="text-sm font-bold text-white uppercase tracking-wider">
                      {step === 1 && 'Step 1: Vehicle Specification'}
                      {step === 2 && 'Step 2: Service & Date Selection'}
                      {step === 3 && 'Step 3: Owner Information'}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-gray-400">Step {step} of 3</span>
                </div>

                {/* STEP 1: VEHICLE INFORMATION */}
                {step === 1 && (
                  <div className="space-y-4 animate-fadeIn">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-widest text-gray-300 mb-2">
                        Select Vehicle Make / Brand *
                      </label>
                      <select
                        name="brand"
                        value={formData.brand}
                        onChange={handleChange}
                        className="w-full bg-[#12141a] border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#ff5500]"
                      >
                        {LUXURY_BRANDS.map((b) => (
                          <option key={b.name} value={b.name}>
                            {b.name} ({b.logoText})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-widest text-gray-300 mb-2">
                          Vehicle Model (e.g. 3 Series / E-Class / Fortuner) *
                        </label>
                        <input
                          type="text"
                          name="model"
                          required
                          value={formData.model}
                          onChange={handleChange}
                          placeholder="e.g. M340i / GLE 450"
                          className="w-full bg-[#12141a] border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#ff5500]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-widest text-gray-300 mb-2">
                          Registration Reg. No (Optional)
                        </label>
                        <input
                          type="text"
                          name="regNo"
                          value={formData.regNo}
                          onChange={handleChange}
                          placeholder="e.g. KA-19-XX-0007"
                          className="w-full bg-[#12141a] border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#ff5500]"
                        />
                      </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        type="button"
                        onClick={() => {
                          if (!formData.model) alert('Please enter your vehicle model.');
                          else setStep(2);
                        }}
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#ff3300] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg hover:shadow-[#ff5500]/40"
                      >
                        <span>Next: Select Service</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: SERVICE & APPOINTMENT DATE */}
                {step === 2 && (
                  <div className="space-y-4 animate-fadeIn">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-widest text-gray-300 mb-2">
                        Required Service or Customization *
                      </label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full bg-[#12141a] border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#ff5500]"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title} ({s.category})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-widest text-gray-300 mb-2">
                          Preferred Appointment Date
                        </label>
                        <input
                          type="date"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          className="w-full bg-[#12141a] border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#ff5500]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-widest text-gray-300 mb-2">
                          Time Slot
                        </label>
                        <select
                          name="timeSlot"
                          value={formData.timeSlot}
                          onChange={handleChange}
                          className="w-full bg-[#12141a] border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#ff5500]"
                        >
                          <option value="Morning (10:00 AM)">Morning (10:00 AM)</option>
                          <option value="Afternoon (02:00 PM)">Afternoon (02:00 PM)</option>
                          <option value="Evening (05:00 PM)">Evening (05:00 PM)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-widest text-gray-300 mb-2">
                        Vehicle Transport Preference
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {['Drive-in to Workshop', 'Doorstep Towing / Pickup'].map((pref) => (
                          <button
                            type="button"
                            key={pref}
                            onClick={() => setFormData({ ...formData, pickupType: pref })}
                            className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                              formData.pickupType === pref
                                ? 'bg-[#ff5500] border-[#ff5500] text-white shadow-md'
                                : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                            }`}
                          >
                            {pref}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-5 py-3 rounded-xl border border-white/15 text-gray-300 text-xs font-bold"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#ff3300] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg"
                      >
                        <span>Next: Contact Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: CONTACT & SUBMIT */}
                {step === 3 && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-widest text-gray-300 mb-2">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          name="customerName"
                          required
                          value={formData.customerName}
                          onChange={handleChange}
                          placeholder="e.g. Sagar Shetty"
                          className="w-full bg-[#12141a] border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#ff5500]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-widest text-gray-300 mb-2">
                          Mobile / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full bg-[#12141a] border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#ff5500]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-widest text-gray-300 mb-2">
                        Location / Area (e.g. Pumpwell, Surathkal, Udupi)
                      </label>
                      <input
                        type="text"
                        name="cityArea"
                        value={formData.cityArea}
                        onChange={handleChange}
                        placeholder="Mangalore"
                        className="w-full bg-[#12141a] border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#ff5500]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-widest text-gray-300 mb-2">
                        Special Instructions or Issues Observed
                      </label>
                      <textarea
                        name="notes"
                        rows="3"
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="e.g. Brake noise when reversing / Want quote for PPF wrap"
                        className="w-full bg-[#12141a] border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#ff5500]"
                      ></textarea>
                    </div>

                    <div className="pt-4 flex justify-between gap-4">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="px-5 py-3 rounded-xl border border-white/15 text-gray-300 text-xs font-bold"
                      >
                        Back
                      </button>

                      <button
                        type="submit"
                        className="flex-1 py-4 rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#ff3300] text-white font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-[#ff5500]/30 hover:shadow-[#ff5500]/50 transition-all flex items-center justify-center gap-2"
                      >
                        <MessageSquare className="w-5 h-5" />
                        <span>Confirm & Send via WhatsApp</span>
                      </button>
                    </div>
                  </div>
                )}
              </form>
            ) : (
              /* SUCCESS TOAST SCREEN */
              <div className="text-center py-8 space-y-6 animate-fadeIn">
                <div className="w-20 h-20 rounded-full bg-[#ff5500]/20 text-[#ff5500] mx-auto flex items-center justify-center border-2 border-[#ff5500]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div>
                  <span className="text-xs uppercase tracking-widest text-[#ff5500] font-mono font-bold bg-[#ff5500]/15 px-3 py-1 rounded-full border border-[#ff5500]/30">
                    Booking Request Generated
                  </span>
                  <h3 className="text-3xl font-extrabold text-white mt-3">
                    Thank You, {formData.customerName}!
                  </h3>
                  <p className="text-xs font-mono text-gray-400 mt-1">
                    Reference ID: <strong className="text-white">{bookingRef}</strong>
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-gray-300 max-w-md mx-auto text-left space-y-2 font-mono">
                  <div>• Vehicle: <span className="text-white font-bold">{formData.brand} {formData.model}</span></div>
                  <div>• Service: <span className="text-[#ff5500] font-bold">{formData.serviceType}</span></div>
                  <div>• Date & Time: <span className="text-white">{formData.preferredDate || 'Earliest'} ({formData.timeSlot})</span></div>
                  <div>• Transport: <span className="text-emerald-400">{formData.pickupType}</span></div>
                </div>

                <p className="text-xs text-gray-400 max-w-md mx-auto">
                  Our service advisor will contact you within 15 minutes to confirm slot availability and provide preliminary estimates.
                </p>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setStep(1);
                  }}
                  className="px-6 py-2.5 rounded-xl border border-white/15 text-xs text-gray-300 font-bold hover:text-white"
                >
                  Book Another Service
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
