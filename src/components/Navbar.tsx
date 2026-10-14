import React, { useState } from 'react';
import { Menu, X, Shield, Bell, Briefcase } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenCaptain: () => void;
  onOpenNotifications: () => void;
  onOpenAuth: () => void;
  onOpenCall: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCaptain,
  onOpenNotifications,
  onOpenAuth,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2 text-2xl font-black tracking-wider text-white">
            <span className="text-red-600">نشاما</span> درايف
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
          <a href="#" className="text-red-500 font-semibold transition-colors">الرئيسية</a>
          <a href="#features" className="hover:text-red-500 transition-colors">مميزاتنا</a>
          <a href="#how-it-works" className="hover:text-red-500 transition-colors">كيف يعمل؟</a>
          <a href="#captain-app" className="hover:text-red-500 transition-colors">تطبيق السائق</a>
          
          <a 
            href="https://nashama-drive-web-ap-fhr3.bolt.host/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-red-500 transition-colors flex items-center gap-1 text-red-400 font-semibold"
          >
            مركز التحكم
          </a>

          <a href="#contact" className="hover:text-red-500 transition-colors">تواصل معنا</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenNotifications}
            className="p-2 text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 rounded-full hover:border-neutral-700 transition-colors relative"
            title="الإشعارات"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
          </button>

          <button
            onClick={onOpenCaptain}
            className="px-4 py-2 text-xs font-bold text-neutral-300 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-full transition-all flex items-center gap-2"
          >
            <Shield className="w-3.5 h-3.5 text-red-500" />
            انضم ككابتن
          </button>

          <button
            onClick={onOpenAuth}
            className="px-5 py-2.5 text-xs font-bold text-white bg-red-600 hover:bg-red-700 rounded-full shadow-lg shadow-red-600/30 transition-all flex items-center gap-2"
          >
            <Briefcase className="w-4 h-4" />
            انضم لوكلاء الشحن
          </button>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenNotifications}
            className="p-2 text-neutral-300 bg-neutral-900 rounded-full"
          >
            <Bell className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-neutral-300 hover:text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-neutral-950 border-b border-neutral-800 px-4 pt-2 pb-6 space-y-3">
          <a href="#" className="block py-2 text-red-500 font-medium">الرئيسية</a>
          <a href="#features" className="block py-2 text-neutral-300">مميزاتنا</a>
          <a href="#how-it-works" className="block py-2 text-neutral-300">كيف يعمل؟</a>
          <a href="#captain-app" className="block py-2 text-neutral-300">تطبيق السائق</a>
          <a 
            href="https://nashama-drive-web-ap-fhr3.bolt.host/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block py-2 text-red-400 font-bold"
          >
            مركز التحكم
          </a>
          <a href="#contact" className="block py-2 text-neutral-300">تواصل معنا</a>
          <div className="pt-4 flex flex-col gap-2">
            <button
              onClick={() => { setIsOpen(false); onOpenCaptain(); }}
              className="w-full py-2.5 text-center text-sm font-bold text-neutral-200 bg-neutral-900 border border-neutral-800 rounded-xl"
            >
              انضم ككابتن
            </button>
            <button
              onClick={() => { setIsOpen(false); onOpenAuth(); }}
              className="w-full py-2.5 text-center text-sm font-bold text-white bg-red-600 rounded-xl shadow-lg shadow-red-600/30"
            >
              انضم لوكلاء الشحن
            </button>
          </div>
        </div>
      )}
    </header>
  );
};