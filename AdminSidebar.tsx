import { History } from 'lucide-react';

// داخل مصفوفة القائمة أو الأزرار:
<button
  onClick={() => setActiveTab('recent-activities')}
  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium ${
    activeTab === 'recent-activities'
      ? 'bg-red-600/10 text-red-500 border border-red-600/30'
      : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
  }`}
>
  <History className="w-5 h-5 text-red-500" />
  <span>الحركات الأخيرة</span>
</button>