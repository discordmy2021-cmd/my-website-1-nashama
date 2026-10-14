import React from 'react';
import { Download, ShieldCheck, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-neutral-950 py-20 lg:py-28 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-semibold mb-8 shadow-inner">
          <ShieldCheck className="w-4 h-4 text-red-500" />
          <span>تجربة متكاملة للتوصيل والخدمات بأمان تام</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight mb-6">
          نشاما درايف <span className="text-red-600">خدمتك بأمان وراحة</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-neutral-400 mb-10 leading-relaxed">
          حمل تطبيق نشاما درايف الآن واستمتع بتجربة فريدة وسريعة للتوصيل ونقل البضائع.
        </p>

        <div className="flex items-center justify-center">
          <a
            href="https://play.google.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full transition-all shadow-xl shadow-red-600/20 flex items-center justify-center gap-3 text-base"
          >
            <Download className="w-5 h-5" />
            جرب نشاما درايف الآن
          </a>
        </div>

        <div className="mt-16 pt-12 border-t border-neutral-900 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-neutral-400">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-black text-white mb-1">24/7</span>
            <span className="text-xs">دعم فني متواصل</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-black text-white mb-1">100%</span>
            <span className="text-xs">سائقون معتمدون</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-black text-white mb-1">أمان</span>
            <span className="text-xs">تتبع مباشر للرحلات</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-amber-400 mb-1">
              <Star className="w-4 h-4 fill-amber-400" />
              <span className="text-2xl font-black text-white">4.9</span>
            </div>
            <span className="text-xs">تقييم المستخدمين</span>
          </div>
        </div>

      </div>
    </section>
  );
};