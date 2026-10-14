import React, { useState } from 'react';
import { X, User, Phone, Car, Calendar, CreditCard, Upload } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface CaptainModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CaptainModal: React.FC<CaptainModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [carType, setCarType] = useState('');
  const [carModel, setCarModel] = useState('');
  const [plateNumber, setPlateNumber] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from('nashama_captains_requests').insert([
        {
          full_name: fullName,
          phone: phone,
          car_type: carType,
          car_model: carModel,
          plate_number: plateNumber,
        },
      ]);

      if (error) throw error;

      alert('تم إرسال طلب الانضمام ككابتن بنجاح وسيتوجه إلى مركز التحكم!');
      setFullName('');
      setPhone('');
      setCarType('');
      setCarModel('');
      setPlateNumber('');
      onClose();
    } catch (err: any) {
      alert('حدث خطأ أثناء الإرسال: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-lg p-6 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl text-white max-h-[90vh] overflow-y-auto dir-rtl">
        <button
          onClick={onClose}
          className="absolute top-4 left-4 p-2 text-neutral-400 hover:text-white bg-neutral-800 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-xl font-bold text-center mb-6 text-white">
          طلب الانضمام ككابتن توصيل
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-neutral-400 mb-1">الاسم الرباعي</label>
            <div className="relative">
              <User className="absolute right-3 top-3 w-4 h-4 text-neutral-500" />
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="أدخل اسمك الرباعي الكامل"
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-neutral-400 mb-1">نوع السيارة</label>
              <div className="relative">
                <Car className="absolute right-3 top-3 w-4 h-4 text-neutral-500" />
                <input
                  type="text"
                  required
                  value={carType}
                  onChange={(e) => setCarType(e.target.value)}
                  placeholder="مثال: تويوتا كامري"
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl pr-10 pl-4 py-2.5 text-sm text-white focus:outline-none focus:border-red-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-400 mb-1">تاريخ إصدار السيارة (الموديل)</label>
              <div className="relative">
                <Calendar className="absolute right-3 top-3 w-4 h-4 text-neutral-500" />
                <input
                  type="text"
                  required
                  value={carModel}
                  onChange={(e) => setCarModel(e.target.value)}
                  placeholder="مثال: 2022"
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl pr-10 pl-4 py-2.5 text-sm text-white focus:outline-none focus:border-red-600"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-400 mb-1">رقم اللوحة</label>
            <div className="relative">
              <CreditCard className="absolute right-3 top-3 w-4 h-4 text-neutral-500" />
              <input
                type="text"
                required
                value={plateNumber}
                onChange={(e) => setPlateNumber(e.target.value)}
                placeholder="مثال: 12-34567"
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl pr-10 pl-4 py-2.5 text-sm text-white focus:outline-none focus:border-red-600"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-400 mb-1">صور السيارة</label>
            <label className="flex flex-col items-center justify-center border-2 border-dashed border-neutral-800 hover:border-red-600 rounded-xl p-4 cursor-pointer bg-neutral-950 transition-colors">
              <Upload className="w-6 h-6 text-neutral-400 mb-1" />
              <span className="text-xs text-neutral-400">اضغط لرفع صور السيارة</span>
              <input type="file" multiple className="hidden" />
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-red-600 hover:bg-red-700 disabled:bg-neutral-800 text-white font-bold rounded-xl shadow-lg shadow-red-600/30 transition-all mt-4"
          >
            {loading ? 'جاري الإرسال...' : 'إرسال طلب الانضمام ككابتن'}
          </button>
        </form>
      </div>
    </div>
  );
};