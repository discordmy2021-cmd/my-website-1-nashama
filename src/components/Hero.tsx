import React from 'react';
import { ArrowLeft, Download, ShieldCheck, Star } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden bg-neutral-950 py-20 lg:py-32 border-b border-neutral-900">
      {/* Background ambient light gradients instead of harsh red block */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-semibold mb-8 shadow-inner">
          <ShieldCheck className="w-4 h-4 text-red-500" />
          <span>تجربة متكاملة للراكب والكابتن بأمان ت تام</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight mb-6">
          تطبيق ذكي متكامل يلبي كافة <span className="text-red-600">احتياجاتك</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-neutral-400 mb-10 leading-relaxed">
          شاشات تفاعلية بتصميم عصري وأداء فائق السرعة. انقر على أي شاشة لتجربة الميزات الحية وتتبع رحلتك بكل راحة واطمئنان.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          
          {/* رابط زر التحميل المطلوب */}
          <a
            href="https://play.google.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full transition-all shadow-xl shadow-red-600/20 flex items-center justify-center gap-3 text-base"
          >
            <Download className="w-5 h-5" />
            جرب نشاما درايف الآن
          </a>

          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 font-bold rounded-full border border-neutral-800 transition-all flex items-center justify-center gap-2 text-base"
          >
            <span>احجز رحلتك الآن</span>
            <ArrowLeft className="w-5 h-5 text-red-500" />
          </button>
        </div>

        {/* Stats or Ratings preview */}
        <div className="mt-16 pt-12 border-t border-neutral-900/80 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-neutral-400">
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