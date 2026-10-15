import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Car, 
  Truck, 
  AlertCircle, 
  ShieldAlert, 
  Clock, 
  Shield 
} from 'lucide-react';
import { RecentActivities } from './components/RecentActivities';

export function App() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="flex min-h-screen bg-neutral-950 text-white font-sans" dir="rtl">
      
      {/* القائمة الجانبية (Sidebar) بنفس تصميم الصورة */}
      <aside className="w-72 bg-[#0f0f10] border-l border-neutral-800 p-4 flex flex-col justify-between min-h-screen">
        <div>
          {/* الهيدر والعلامة التجارية */}
          <div className="flex items-center gap-3 p-3 mb-6 bg-neutral-900/60 rounded-xl border border-neutral-800/80">
            <div className="p-2.5 bg-red-600/10 border border-red-600/20 rounded-xl">
              <Car className="w-6 h-6 text-red-500" />
            </div>
            <div>
              <h1 className="font-black text-lg text-white">
                <span className="text-red-500">نشامة</span> درايف
              </h1>
              <p className="text-[11px] text-neutral-400">لوحة الإدارة</p>
            </div>
          </div>

          {/* بطاقة المستخدم */}
          <div className="flex items-center justify-between p-3 mb-6 bg-neutral-900/40 rounded-xl border border-neutral-800/60">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 font-bold text-sm">
                FA
                <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-neutral-950"></span>
              </div>
              <div>
                <h3 className="font-bold text-sm text-white">Faisl Alotaibi</h3>
                <p className="text-[11px] text-neutral-400">إداري</p>
              </div>
            </div>
          </div>

          {/* أزرار التنقل الرئيسية */}
          <nav className="space-y-1.5">
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'overview' 
                  ? 'bg-red-950/40 border border-red-600/40 text-red-500 shadow-lg' 
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-900/60 border border-transparent'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              نظرة عامة
            </button>

            <button
              onClick={() => setActiveTab('admins')}
              className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'admins' 
                  ? 'bg-red-950/40 border border-red-600/40 text-red-500 shadow-lg' 
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-900/60 border border-transparent'
              }`}
            >
              <Users className="w-4 h-4" />
              المستخدمون الإداريون
            </button>

            <button
              onClick={() => setActiveTab('captains')}
              className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'captains' 
                  ? 'bg-red-950/40 border border-red-600/40 text-red-500 shadow-lg' 
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-900/60 border border-transparent'
              }`}
            >
              <Car className="w-4 h-4" />
              السائقون (الكباتن)
            </button>

            <button
              onClick={() => setActiveTab('agents')}
              className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'agents' 
                  ? 'bg-red-950/40 border border-red-600/40 text-red-500 shadow-lg' 
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-900/60 border border-transparent'
              }`}
            >
              <Truck className="w-4 h-4" />
              وكلاء الشحن
            </button>

            <button
              onClick={() => setActiveTab('complaints')}
              className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'complaints' 
                  ? 'bg-red-950/40 border border-red-600/40 text-red-500 shadow-lg' 
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-900/60 border border-transparent'
              }`}
            >
              <AlertCircle className="w-4 h-4" />
              الشكاوى والاستفسارات
            </button>

            <button
              onClick={() => setActiveTab('issues')}
              className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'issues' 
                  ? 'bg-red-950/40 border border-red-600/40 text-red-500 shadow-lg' 
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-900/60 border border-transparent'
              }`}
            >
              <ShieldAlert className="w-4 h-4" />
              مشاكل النظام
            </button>

            {/* الخيار الجديد المطلـوب: سجل الحركات وطلبات التقديم */}
            <div className="pt-3 mt-3 border-t border-neutral-800/80">
              <button
                onClick={() => setActiveTab('logs')}
                className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'logs' 
                    ? 'bg-red-600 text-white shadow-lg shadow-red-900/20' 
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-900/60 border border-neutral-800/60'
                }`}
              >
                <Clock className="w-4 h-4 text-red-400" />
                سجل التقديم والحركات الحية
              </button>
            </div>
          </nav>
        </div>
      </aside>

      {/* المحتوى الرئيسي للموقع */}
      <main className="flex-1 p-8 bg-neutral-950 overflow-y-auto">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-amber-500 font-medium">صباح الخير</p>
                <h2 className="text-2xl font-black text-white mt-1">مرحباً بك في لوحة الإدارة</h2>
                <p className="text-xs text-neutral-400 mt-1">تابع حركة ونشاط المنظومة بمرونة</p>
              </div>
            </div>

            {/* عرض الحركات الأخيرة مباشرة في النظرة العامة أيضاً */}
            <div className="mt-8">
              <h3 className="text-base font-bold text-white mb-4">أحدث التقديمات والطلبات</h3>
              <RecentActivities />
            </div>
          </div>
        )}

        {/* عرض الشاشات عند الضغط على الخيار الجديد أو الأزرار */}
        {activeTab === 'logs' && (
          <div className="space-y-6">
            <div className="border-b border-neutral-800 pb-4">
              <h2 className="text-xl font-bold text-white">سجل التقديمات والحركات الحية</h2>
              <p className="text-xs text-neutral-400 mt-1">سجل حي ومباشر لطلبات تقديم الكباتن، وكلاء الشحن، والشكاوى من قاعدة البيانات</p>
            </div>
            <RecentActivities />
          </div>
        )}

        {activeTab === 'captains' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold">طلبات تقديم الكباتن (السائقون)</h2>
            <RecentActivities />
          </div>
        )}

        {activeTab === 'agents' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold">طلبات وكلاء الشحن</h2>
            <RecentActivities />
          </div>
        )}

        {activeTab === 'complaints' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold">سجل الشكاوى والاستفسارات</h2>
            <RecentActivities />
          </div>
        )}

        {activeTab === 'admins' && (
          <div className="p-8 text-center text-neutral-500 bg-neutral-900/20 rounded-2xl border border-neutral-800">
            قائمة المستخدمين الإداريين
          </div>
        )}

        {activeTab === 'issues' && (
          <div className="p-8 text-center text-neutral-500 bg-neutral-900/20 rounded-2xl border border-neutral-800">
            سجل بلاغات مشاكل النظام
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
