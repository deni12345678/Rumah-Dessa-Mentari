import React from 'react';
import { BrandLogo } from './BrandLogo';
import { BookOpen, Mail, MapPin, Phone, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { DmlStore } from '../lib/store';

interface FooterProps {
  onNavigate: (view: string, param?: string) => void;
  whatsappNumber?: string;
  contactEmail?: string;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
}) => {
  const settings = DmlStore.getSettings();
  const contactEmail = settings.contactEmail || 'dessamentarilangit@gmail.com';
  const whatsappNumber = settings.whatsappNumber || '6287879069404';
  const officeLocation = settings.officeLocation || 'Karawang & Bekasi, Indonesia';

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-white/5">
      {/* Top Editorial Promise Stripe */}
      <div className="border-b border-white/5 py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6 text-left">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 shrink-0">
              <Sparkles className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-white font-serif-editorial text-xl font-bold">Inspirasi untuk Semua, Karya untuk Dunia</h4>
              <p className="text-sm text-slate-500 max-w-2xl mt-1">
                Rumah Dessa Mentari menyatukan suara penulis, akademisi, dan pegiat literasi dalam wadah yang berintegritas.
              </p>
            </div>
          </div>
          <button
            onClick={() => onNavigate('pedoman-penulisan')}
            className="px-6 py-3 text-xs font-bold rounded-xl bg-white/5 hover:bg-white/10 text-amber-400 border border-amber-500/20 transition-all whitespace-nowrap"
          >
            Kode Etik Redaksi
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <BrandLogo size="md" lightMode={true} showSlogan={true} />
            <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
              Platform digital yang menjadi ruang berbagi inspirasi, pengetahuan, dan karya tulis masyarakat. Menggabungkan media artikel dengan layanan profesional penerbitan buku.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs">
                <Mail className="w-4 h-4 text-amber-500/60" />
                <a href={`mailto:${contactEmail}`} className="hover:text-amber-400 transition-colors">
                  {contactEmail}
                </a>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <Phone className="w-4 h-4 text-amber-500/60" />
                <span>WA: +{whatsappNumber}</span>
              </div>
            </div>
          </div>

          {/* Kolom Kategori Media */}
          <div>
            <h4 className="text-white font-bold text-xs tracking-[0.1em] uppercase mb-6">
              Publikasi
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><button onClick={() => onNavigate('artikel', 'Kisah Inspiratif')} className="hover:text-amber-400 transition-colors">Inspirasi</button></li>
              <li><button onClick={() => onNavigate('artikel', 'Pendidikan')} className="hover:text-amber-400 transition-colors">Pendidikan</button></li>
              <li><button onClick={() => onNavigate('artikel', 'Opini dan Gagasan')} className="hover:text-amber-400 transition-colors">Opini</button></li>
              <li><button onClick={() => onNavigate('artikel', 'Literasi dan Buku')} className="hover:text-amber-400 transition-colors">Literasi</button></li>
            </ul>
          </div>

          {/* Kolom Layanan & Buku */}
          <div>
            <h4 className="text-white font-bold text-xs tracking-[0.1em] uppercase mb-6">
              Layanan
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><button onClick={() => onNavigate('layanan')} className="hover:text-amber-400 transition-colors">Penulisan Buku</button></li>
              <li><button onClick={() => onNavigate('layanan')} className="hover:text-amber-400 transition-colors">Penyuntingan</button></li>
              <li><button onClick={() => onNavigate('penerbitan')} className="hover:text-amber-400 transition-colors">Penerbitan</button></li>
              <li><button onClick={() => onNavigate('penerbitan')} className="hover:text-amber-400 transition-colors">Katalog Naskah</button></li>
            </ul>
          </div>

          {/* Kolom Kebijakan & Pedoman Etika */}
          <div>
            <h4 className="text-white font-bold text-xs tracking-[0.1em] uppercase mb-6">
              Hukum
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><button onClick={() => onNavigate('kebijakan-privasi')} className="hover:text-amber-400 transition-colors">Privasi</button></li>
              <li><button onClick={() => onNavigate('ketentuan-penggunaan')} className="hover:text-amber-400 transition-colors">Ketentuan</button></li>
              <li><button onClick={() => onNavigate('hak-cipta-dan-koreksi')} className="hover:text-amber-400 transition-colors">Hak Cipta</button></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-10 border-t border-white/5 space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center md:items-start gap-1">
              <span className="text-white font-bold text-sm tracking-widest uppercase">DML Digital Solution</span>
              <span className="text-amber-500/80 text-[10px] font-bold uppercase tracking-[0.3em]">Digital Innovation & Technology</span>
            </div>
            
            <div className="flex items-center gap-6 text-[11px] font-medium text-slate-600 tracking-wider uppercase">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                Integritas Literasi
              </span>
              <span className="hidden md:inline text-slate-800">|</span>
              <span>Karawang & Bekasi, ID</span>
            </div>
          </div>

          <div className="pt-6 border-t border-white/[0.02] flex flex-col sm:flex-row items-center justify-between text-[10px] font-bold text-slate-700 gap-4 tracking-widest uppercase">
            <p>© 2026 DML Digital Solution. All Rights Reserved. Developed for Rumah Dessa Mentari.</p>
            <p>v2.5.0 Production Ready</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
