import React, { useState } from 'react';
import { Clock, Shield, Briefcase, AlertCircle, FileText, CheckCircle2, Search } from 'lucide-react';

// نموذج هيكل بيانات حركة أو طلب
interface ActivityLog {
  id: string;
  type: 'captain' | 'agent' | 'complaint';
  title: string;
  submittedAt: string; // وقت التقديم
  details: {
    name: string;
    phone: string;
    extraInfo?: string; // مثلاً: نوع السيارة والموديل للكابتن، أو اسم الشركة لوكيل الشحن
  };
  status: 'new' | 'reviewed' | 'completed';
}

export const RecentActivitiesView: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'captain' | 'agent' | 'complaint'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  // تجريب بيانات الحركات الأخيرة (أو جلبها من قاعدة بيانات Supabase مباشرة)
  const activities: ActivityLog[] = [
    {
      id: 'ACT-101',
      type: 'captain',
      title: 'تقديم طلب انضمام كابتن جديد',
      submittedAt: 'منذ 5 دقائق - 10:45 م',
      details: {
        name: 'أحمد محمود العبداللات',
        phone: '0791234567',
        extraInfo: 'تويوتا كورولا 2022 - لوحة: 12-34567',
      },
      status: 'new',
    },
    {
      id: 'ACT-102',
      type: 'agent',
      title: 'تقديم طلب انضمام وكيل شحن',
      submittedAt: 'منذ 25 دقيقة - 10:25 م',
      details: {
        name: 'مؤسسة النسر للشحن السريع',
        phone: '0789876543',
        extraInfo: 'الموقع: عمان - شارع المدينة المنورة',
      },
      status: 'new',
    },
    {
      id: 'ACT-103',
      type: 'complaint',
      title: 'استفسار / شكوى عن تأخير طلب',
      submittedAt: 'منذ ساعة - 09:50 م',
      details: {
        name: 'عمر خالد',
        phone: '0775554433',
        extraInfo: 'تأخير في استلام الشحنة من الفرع الرئيسي',
      },
      status: 'reviewed',
    },
  ];

  const filteredActivities = activities.filter((act) => {
    const matchesFilter = filter === 'all' || act.type === filter;
    const matchesSearch =
      act.details.name.includes(searchTerm) ||
      act.details.phone.includes(searchTerm) ||
      act.title.includes(searchTerm);
    return matchesFilter && matchesSearch;
  });

  const getTypeBadge = (type: ActivityLog['type']) => {
    switch (type) {
      case 'captain':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <Shield className="w-3.5 h-3.5" /> طلب كابتن
          </span>
        );
      case 'agent':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Briefcase className="w-3.5 h-3.5" /> وكيل شحن
          </span>
        );
      case 'complaint':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-500/10 text-red-400 border border-red-500/20">
            <AlertCircle className="w-3.5 h-3.5" /> شكوى / استفسار
          </span>
        );
    }
  };

  return (
    <div className="p-6 bg-neutral-950 text-white min-h-screen dir-rtl">
      {/* العنوان والرأس */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-black text-white flex items-center gap-2">
            <Clock className="w-6 h-6 text-red-600" />
            سجل الحركات الأخيرة
          </h1>
          <p className="text-neutral-400 text-sm mt-1">
            متابعة فورية لجميع الطلبات الواردة من الكباتن، وكلاء الشحن، والشكاوى بالوقت والتاريخ.
          </p>
        </div>

        {/* شريط البحث والتصفية */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <Search className="absolute right-3 top-2.5 w-4 h-4 text-neutral-500" />
            <input
              type="text"
              placeholder="بحث بالاسم أو الرقم..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-neutral-900 border border-neutral-800 rounded-xl pr-9 pl-4 py-2 text-xs text-white focus:outline-none focus:border-red-600 w-48"
            />
          </div>

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as any)}
            className="bg-neutral-900 border border-neutral-800 rounded-xl px-3 py-2 text-xs text-neutral-300 focus:outline-none focus:border-red-600"
          >
            <option value="all">جميع الحركات</option>
            <option value="captain">طلبات الكباتن</option>
            <option value="agent">وكلاء الشحن</option>
            <option value="complaint">الشكاوى والاستفسارات</option>
          </select>
        </div>
      </div>

      {/* قائمة الحركات والأحداث */}
      <div className="space-y-4">
        {filteredActivities.length === 0 ? (
          <div className="p-12 text-center bg-neutral-900/50 border border-neutral-800 rounded-2xl text-neutral-500">
            لا توجد حركات حديثة مسجلة حالياً
          </div>
        ) : (
          filteredActivities.map((item) => (
            <div
              key={item.id}
              className="p-5 bg-neutral-900 border border-neutral-800 rounded-2xl hover:border-neutral-700 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-neutral-950 border border-neutral-800 rounded-xl mt-1">
                  <FileText className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-bold text-white text-base">{item.title}</h3>
                    {getTypeBadge(item.type)}
                  </div>
                  
                  <div className="text-xs text-neutral-400 space-y-1">
                    <p>
                      <span className="text-neutral-300 font-semibold">مقدم الطلب:</span> {item.details.name} ({item.details.phone})
                    </p>
                    {item.details.extraInfo && (
                      <p>
                        <span className="text-neutral-300 font-semibold">التفاصيل:</span> {item.details.extraInfo}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* التوقيت والحالة */}
              <div className="flex md:flex-col items-center md:items-end justify-between border-t md:border-t-0 border-neutral-800 pt-3 md:pt-0">
                <span className="flex items-center gap-1.5 text-xs font-medium text-neutral-400">
                  <Clock className="w-3.5 h-3.5 text-red-500" />
                  {item.submittedAt}
                </span>

                <span className="text-xs px-2.5 py-1 rounded-lg bg-neutral-950 text-neutral-300 border border-neutral-800 mt-2">
                  معرف الحركة: {item.id}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};