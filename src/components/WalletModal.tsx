import React, { useState } from 'react';
import { X, User, Phone, Car, MapPin, Briefcase, Upload } from 'lucide-react';

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WalletModal: React.FC<WalletModalProps> = ({ isOpen, onClose }) => {
  const [userType, setUserType] = useState<'captain' | 'agent'>('captain');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-md p-6 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl text-white">
        
        {/* زر الإغلاق */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 p-2 text-neutral-400 hover:text-white bg-neutral-800 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-xl font-bold text-center mb-6 text-white">
          انضم إلى عائلة نشاما درايف
        </h2>

        {/* التبويبات العلوية */}
        <div className="flex bg-neutral-950 p-1 rounded-xl mb-6 border border-neutral-800">
          <button
            type="button"
            onClick={() => setUserType('captain')}
            className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-all ${
              userType === 'captain' ? 'bg-red-600 text-white shadow-lg' : 'text-neutral-400 hover:text-white'
            }`}
          >
            تقديم كابتن توصيل
          </button>
          <button
            type="button"
            onClick={() => setUserType('agent')}
            className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-all ${
              userType === 'agent' ? 'bg-red-600 text-white shadow-lg' : 'text-neutral-400 hover:text-white'
            }`}
          >
            تقديم وكلاء الشحن
          </button>
        </div>

        {/* نموذج تقديم كابتن توصيل */}
        {userType === 'captain' && (
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-400 mb-1">الاسم الكامل</label>
              <div className="relative">
                <User className="absolute right-3 top-3 w-4 h-4 text-neutral-500" />
                <input 
                  type="text" 
                  placeholder="أدخل اسمك الكامل" 
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl pr-10 pl-4 py-2 text-sm text-white focus:outline-none focus:border-red-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-400 mb-1">رقم الهاتف</label>
              <div className="relative">
                <Phone className="absolute right-3 top-3 w-4 h-4 text-neutral-500" />
                <input 
                  type="tel" 
                  placeholder="079XXXXXXXX" 
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl pr-10 pl-4 py-2 text-sm text-white focus:outline-none focus:border-red-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-400 mb-1">نوع السيارة والموديل</label>
              <div className="relative">
                <Car className="absolute right-3 top-3 w-4 h-4 text-neutral-500" />
                <input 
                  type="text" 
                  placeholder="مثال: تويوتا كورولا 2022" 
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl pr-10 pl-4 py-2 text-sm text-white focus:outline-none focus:border-red-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-400 mb-1">صور السيارة</label>
              <label className="flex flex-col items-center justify-center border-2 border-dashed border-neutral-800 hover:border-red-600 rounded-xl p-3 cursor-pointer bg-neutral-950 transition-colors">
                <Upload className="w-5 h-5 text-neutral-400 mb-1" />
                <span className="text-xs text-neutral-400">اضغط لرفع صور السيارة</span>
                <input type="file" multiple className="hidden" />
              </label>
            </div>

            <div>
              <button 
                type="button" 
                className="w-full py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-bold rounded-xl flex items-center justify-center gap-2 border border-neutral-700"
              >
                <MapPin className="w-4 h-4 text-red-500" />
                تحديد موقعي الحالي (GPS)
              </button>
            </div>

            <button 
              type="submit" 
              className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-lg shadow-red-600/30 transition-all mt-4"
            >
              إرسال طلب الانضمام ككابتن
            </button>
          </form>
        )}

        {/* نموذج تقديم وكلاء الشحن */}
        {userType === 'agent' && (
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-400 mb-1">اسم المشروع / الشركة</label>
              <div className="relative">
                <Briefcase className="absolute right-3 top-3 w-4 h-4 text-neutral-500" />
                <input 
                  type="text" 
                  placeholder="أدخل اسم مشروعك أو شركتك" 
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl pr-10 pl-4 py-2 text-sm text-white focus:outline-none focus:border-red-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-400 mb-1">رقم الهاتف</label>
              <div className="relative">
                <Phone className="absolute right-3 top-3 w-4 h-4 text-neutral-500" />
                <input 
                  type="tel" 
                  placeholder="079XXXXXXXX" 
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl pr-10 pl-4 py-2 text-sm text-white focus:outline-none focus:border-red-600"
                />
              </div>
            </div>

            <div>
              <button 
                type="button" 
                className="w-full py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-bold rounded-xl flex items-center justify-center gap-2 border border-neutral-700 mt-2"
              >
                <MapPin className="w-4 h-4 text-red-500" />
                تحديد موقع المشروع (GPS)
              </button>
            </div>

            <button 
              type="submit" 
              className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-lg shadow-red-600/30 transition-all mt-4"
            >
              إرسال طلب وكيل شحن
            </button>
          </form>
        )}

      </div>
    </div>
  );
};