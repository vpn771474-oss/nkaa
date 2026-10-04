import React from "react";
import { ShieldCheck, Image as ImageIcon } from "lucide-react";

export const BeforeAfterSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 md:px-8 max-w-[1450px] mx-auto text-right">
      <div className="bg-[#FFFEFB] border border-[#E7E1DA] rounded-[32px] p-6 sm:p-10 text-center max-w-2xl mx-auto shadow-sm">
        <div className="w-12 h-12 rounded-full bg-[#F4F0E9] flex items-center justify-center mx-auto mb-3.5 text-[#68475E]">
          <ImageIcon className="w-5 h-5" />
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-[#151314] mb-2">
          نماذج الحالات الموثقة
        </h3>
        <p className="text-xs sm:text-sm text-[#6F6A69] leading-relaxed mb-4">
          نماذج الحالات ستظهر هنا عند إضافة محتوى موثّق ومطابق لاشتراطات الإفصاح والموافقة الطبية المعتمدة.
        </p>
        <div className="inline-flex items-center gap-2 text-xs text-[#A8B6A0] bg-[#DCE3D8]/30 px-3.5 py-1 rounded-full">
          <ShieldCheck className="w-3.5 h-3.5 text-[#68475E]" />
          <span>التزام مهني بأخلاقيات النشر الطبي</span>
        </div>
      </div>
    </section>
  );
};
