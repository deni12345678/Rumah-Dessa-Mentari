import React from 'react';
import { BookOpen, Compass, Edit3, ArrowRight, Sparkles, Feather } from 'lucide-react';

interface HeroProps {
  onNavigate: (view: string, param?: string) => void;
  onOpenAuth: () => void;
  isLoggedIn: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenAuth, isLoggedIn }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F6F0E6] to-[#EFE6D8] text-slate-900 pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-amber-200/60">
      {/* Subtle Warm Atmospheric Lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-orange-300/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-7">
          {/* Unboxed Editorial Kicker Tag (No Static Pill Box) */}
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-widest">
            <span>RUMAH DESSA MENTARI</span>
            <span aria-hidden="true" className="text-amber-500">·</span>
            <span className="font-medium text-amber-800">Media Digital & Jurnal Literasi</span>
          </div>

          {/* Official Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif-editorial font-bold tracking-tight text-slate-900 leading-tight text-balance">
            “Inspirasi untuk Semua,{' '}
            <span className="text-amber-900 underline decoration-amber-400/60 underline-offset-8">
              Karya untuk Dunia.
            </span>”
          </h1>

          {/* Official Editorial Subhead */}
          <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed max-w-2xl mx-auto">
            Setiap pengalaman menyimpan hikmah. Setiap pemikiran memiliki daya ubah. Mari berbagi kisah inspiratif, opini bernas, dan menerbitkan karya yang abadi.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={() => onNavigate('artikel', 'Semua')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <Compass className="w-4 h-4 text-amber-200" />
              <span>Jelajahi Indeks Artikel</span>
            </button>

            <button
              onClick={() => {
                if (isLoggedIn) {
                  onNavigate('dashboard-kontributor', 'tulis');
                } else {
                  onOpenAuth();
                }
              }}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#0F1E36] hover:bg-[#1B365D] text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-xs"
            >
              <Edit3 className="w-4 h-4 text-amber-400" />
              <span>Kirim Naskah Tulisan</span>
            </button>

            <button
              onClick={() => onNavigate('layanan')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/80 hover:bg-white text-slate-800 border border-amber-300/80 font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-2xs"
            >
              <BookOpen className="w-4 h-4 text-amber-700" />
              <span>Layanan Penulisan Buku</span>
            </button>
          </div>

          {/* Unboxed Editorial Trust Strip (Clean vertical hairline dividers, no floating cards) */}
          <div className="pt-10 border-t border-amber-200/60 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0 text-left">
            <div className="sm:pr-6 sm:border-r border-amber-200/60 space-y-0.5">
              <span className="text-amber-900 font-serif-editorial font-bold text-2xl">8 Rubrik</span>
              <p className="text-xs text-slate-600 font-medium">Topik Konten Terkurasi</p>
            </div>

            <div className="sm:px-6 sm:border-r border-amber-200/60 space-y-0.5">
              <span className="text-amber-900 font-serif-editorial font-bold text-2xl">100% Redaksional</span>
              <p className="text-xs text-slate-600 font-medium">Kurasi Beretika & Bebas SARA</p>
            </div>

            <div className="sm:px-6 sm:border-r border-amber-200/60 space-y-0.5">
              <span className="text-amber-900 font-serif-editorial font-bold text-2xl">6 Layanan Buku</span>
              <p className="text-xs text-slate-600 font-medium">Biografi, Editing & Layout</p>
            </div>

            <div className="sm:pl-6 space-y-0.5">
              <span className="text-amber-900 font-serif-editorial font-bold text-2xl">Terbuka Ummat</span>
              <p className="text-xs text-slate-600 font-medium">Wadah Penulis Desa & Kota</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
