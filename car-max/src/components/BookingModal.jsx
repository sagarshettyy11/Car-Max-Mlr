import React, { useState } from 'react';
import { X, Calendar, MessageSquare, CheckCircle2 } from 'lucide-react';
import { BRAND_INFO, LUXURY_BRANDS, SERVICES } from '../data/carmaxData';

export default function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    brand: 'BMW',
    model: '',
    serviceType: 'Periodic Maintenance & Oil Care',
    customerName: '',
    phone: '',
    preferredDate: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const ref = 'CX-' + Math.floor(100000 + Math.random() * 900000);
    setRefId(ref);
    setSubmitted(true);

    const text = `*CARMAX LUXURY APPOINTMENT INQUIRY* 🏎️\n\n` +
      `*Ref:* ${ref}\n` +
      `*Name:* ${formData.customerName}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Vehicle:* ${formData.brand} ${formData.model}\n` +
      `*Service:* ${formData.serviceType}\n` +
      `*Date:* ${formData.preferredDate || 'Earliest Slot'}\n` +
      `*Notes:* ${formData.notes || 'None'}`;

    window.open(`https://wa.me/${BRAND_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#12141a] border border-white/15 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-gray-300 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-white mb-2">
              <Calendar className="w-4 h-4 text-white" />
              Priority Reservation
            </div>
            <h3 className="text-2xl font-extrabold text-white mb-6">
              Book CARMAX Workshop Slot
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-mono text-gray-300 uppercase mb-1">
                  Vehicle Brand & Model *
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <select
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    className="bg-[#181a22] border border-white/15 rounded-xl px-3 py-2.5 text-white text-xs"
                  >
                    {LUXURY_BRANDS.map((b) => (
                      <option key={b.name} value={b.name}>{b.name}</option>
                    ))}
                  </select>
                  <input
                    type="text"
                    required
                    placeholder="e.g. M340i / Cayenne"
                    value={formData.model}
                    onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                    className="bg-[#181a22] border border-white/15 rounded-xl px-3 py-2.5 text-white text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-gray-300 uppercase mb-1">
                  Requested Service *
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full bg-[#181a22] border border-white/15 rounded-xl px-3 py-2.5 text-white text-xs"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[11px] font-mono text-gray-300 uppercase mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.customerName}
                    onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                    className="w-full bg-[#181a22] border border-white/15 rounded-xl px-3 py-2.5 text-white text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-gray-300 uppercase mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#181a22] border border-white/15 rounded-xl px-3 py-2.5 text-white text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-gray-300 uppercase mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full bg-[#181a22] border border-white/15 rounded-xl px-3 py-2.5 text-white text-xs"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-white hover:bg-gray-200 text-black font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 mt-4 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-black" />
                <span>Confirm & Send on WhatsApp</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <CheckCircle2 className="w-12 h-12 text-white mx-auto" />
            <h3 className="text-xl font-bold text-white">Booking Ref: {refId}</h3>
            <p className="text-xs text-gray-300">
              Your appointment request has been dispatched to CARMAX Mangalore. Our advisor will confirm within 15 minutes!
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-xl bg-white text-black font-bold text-xs"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
