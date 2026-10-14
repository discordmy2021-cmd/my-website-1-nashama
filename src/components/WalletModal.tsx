import React, { useState } from 'react';
import { X, Phone, MapPin, Briefcase } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WalletModal: React.FC<WalletModalProps> = ({ isOpen, onClose }) => {
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [locationGps, setLocationGps] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const gps = `${position.coords.latitude}, ${position.coords.longitude}`;
        setLocationGps(gps);
        alert('تم تحديد موقع المحل بنجاح!');
      });
    } else {
      alert('خدمة تحديد الموقع غير متوفرة');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from('nashama_agents_requests').insert([
        {
          company_name: companyName,
          phone: phone,
          location_gps: locationGps || 'لم يتم التحديد',
        },
      ]);

      if (error) throw error;

      alert('تم إرسال طلب وكيل الشحن بنجاح!');
      setCompanyName('');
      setPhone('');
      setLocationGps('');
      onClose();
    } catch (err: any) {
      alert('خطأ في الإرسال: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-md p-6 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl text-white dir-rtl">
        <button
          onClick={onClose}
          className="absolute top-4 left-4 p-2 text-neutral-400 hover:text-white bg-neutral-800 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-xl font-bold text-center mb-6 text-white">
          الانضمام لوكلاء الشحن
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-neutral-400 mb-1">اسم الشركة / المشروع</label>
            <div className="relative">
              <Briefcase className="absolute right-3 top-3 w-4 h-4 text-neutral-500" />
              <input
                type="text"
                required
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="أدخل اسم شركتك أو مشروعك"
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl pr-10 pl-4 py-2.5 text-sm text-white focus:outline-none focus:border-red-600"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-400 mb-1">رقم الهاتف</label>
            <div className="relative">
              <Phone className="absolute right-3 top-3 w-4 h-4 text-neutral-500" />
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="079XXXXXXXX"
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl pr-10 pl-4 py-2.5 text-sm text-white focus:outline-none focus:border-red-600"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-400 mb-1">تحديد موقع المحل / الشركة</label>
            <button
              type="button"
              onClick={handleGetLocation}
              className="w-full py-2.5 bg-neutral-950 hover:bg-neutral-800 text-neutral-200 text-xs font-bold rounded-xl flex items-center justify-center gap-2 border border-neutral-800 transition-colors"
            >
              <MapPin className="w-4 h-4 text-red-500" />
              {locationGps ? 'تم تحديد الموقع بنجاح ✅' : 'تحديد موقع المحل الحالي عبر الخريطة (GPS)'}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-red-600 hover:bg-red-700 disabled:bg-neutral-800 text-white font-bold rounded-xl shadow-lg shadow-red-600/30 transition-all mt-4"
          >
            {loading ? 'جاري الإرسال...' : 'إرسال طلب الانضمام كوكيل شحن'}
          </button>
        </form>
      </div>
    </div>
  );
};