import React from 'react';
import { Globe, ArrowUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t bg-[#FFFFFF] mt-12 hidden md:block">
      <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[#484848]">
          <div className="flex gap-4">
             <span>© 2024 Airbnb Clone, Inc.</span>
             <span className="hidden md:inline">·</span>
             <span className="hover:underline cursor-pointer">Privacy</span>
             <span className="hidden md:inline">·</span>
             <span className="hover:underline cursor-pointer">Terms</span>
             <span className="hidden md:inline">·</span>
             <span className="hover:underline cursor-pointer">Sitemap</span>
          </div>
          <div className="flex gap-6 font-semibold mt-4 md:mt-0">
             <div className="flex items-center gap-2 cursor-pointer hover:underline">
               <Globe size={16} />
               English (US)
             </div>
             <div className="cursor-pointer hover:underline">
               MZN
             </div>
             <div className="flex items-center gap-2 cursor-pointer hover:underline">
               Support & Resources <ArrowUp size={16} className="rotate-45" />
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
