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
  const whatsappNumber = settings.whatsappNumber || '628787906404';
  const officeLocation = settings.officeLocation || 'Karawang & Bekasi, Indonesia';

  return (
    <footer className="bg-[#0A1424] text-slate-300 border-t border-slate-800">
      {/* Top Editorial Promise Stripe */}
      <div className="bg-[#0F1E36] border-b border-slate-800/80 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-serif-editorial text-lg font-bold">Ruang Bersama untuk Ide & Gagasan Bermakna</h4>
              <p className="text-sm text-slate-400 max-w-2xl">
                {settings.brandName || 'Rumah Dessa Mentari'} menyatukan suara pembaca, penulis desa dan kota, akademisi, serta pegiat literasi dalam wadah yang berintegritas dan bebas sensasionalisme.
              </p>
            </div>
          </div>
          <button
            onClick={() => onNavigate('pedoman-penulisan')}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/30 transition-colors whitespace-nowrap"
          >
            Baca Kode Etik Redaksi →
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo size="md" lightMode={true} showSlogan={true} />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mt-3">
              Platform digital yang menjadi ruang berbagi inspirasi, informasi, pengetahuan, gagasan, dan karya tulis masyarakat. Menggabungkan media artikel, komunitas kontributor, serta layanan profesional penulisan dan penyuntingan buku.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${contactEmail}`} className="hover:text-amber-300 transition-colors">
                  {contactEmail}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Konsultasi WhatsApp: +{whatsappNumber}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{officeLocation}</span>
              </div>
            </div>
          </div>

          {/* Kolom Kategori Media */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4 border-b border-slate-800 pb-2">
              Kanal Berita & Opini
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('artikel', 'Kisah Inspiratif')} className="hover:text-amber-400 transition-colors">
                  Kisah Inspiratif
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('artikel', 'Pendidikan')} className="hover:text-amber-400 transition-colors">
                  Pendidikan & Literasi
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('artikel', 'Ekonomi dan UMKM')} className="hover:text-amber-400 transition-colors">
                  Ekonomi & UMKM
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('artikel', 'Kesehatan')} className="hover:text-amber-400 transition-colors">
                  Kesehatan (Teredukasi)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('artikel', 'Opini dan Gagasan')} className="hover:text-amber-400 transition-colors">
                  Opini & Gagasan
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('artikel', 'Olahraga')} className="hover:text-amber-400 transition-colors">
                  Olahraga & Kebugaran
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('artikel', 'Informasi Umum')} className="hover:text-amber-400 transition-colors">
                  Informasi Umum & Cek Fakta
                </button>
              </li>
            </ul>
          </div>

          {/* Kolom Layanan & Buku */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4 border-b border-slate-800 pb-2">
              Layanan & Buku
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('layanan')} className="hover:text-amber-400 transition-colors">
                  Jasa Penulisan Buku (Biografi)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('layanan')} className="hover:text-amber-400 transition-colors">
                  Penyuntingan Naskah (Editing)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('layanan')} className="hover:text-amber-400 transition-colors">
                  Proofreading & Tata Bahasa
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('layanan')} className="hover:text-amber-400 transition-colors">
                  Tata Letak (Layout Naskah)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('penerbitan')} className="hover:text-amber-400 transition-colors">
                  Fondasi Penerbitan RDM
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('penerbitan')} className="hover:text-amber-400 transition-colors">
                  Katalog Naskah Pilihan
                </button>
              </li>
            </ul>
          </div>

          {/* Kolom Kebijakan & Pedoman Etika */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4 border-b border-slate-800 pb-2">
              Pedoman & Etika
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('pedoman-penulisan')} className="hover:text-amber-400 transition-colors text-left">
                  Pedoman Penulisan Kontributor
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('ketentuan-publikasi')} className="hover:text-amber-400 transition-colors text-left">
                  Ketentuan Publikasi Redaksi
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('hak-cipta-dan-koreksi')} className="hover:text-amber-400 transition-colors text-left">
                  Hak Cipta & Hak Jawab
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('kebijakan-privasi')} className="hover:text-amber-400 transition-colors text-left">
                  Kebijakan Privasi
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('ketentuan-penggunaan')} className="hover:text-amber-400 transition-colors text-left">
                  Ketentuan Penggunaan
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('tentang')} className="hover:text-amber-400 transition-colors text-left">
                  Tentang Redaksi & Visi-Misi
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {settings.brandName || 'Rumah Dessa Mentari'}. Seluruh hak cipta dilindungi undang-undang.</p>
          <div className="flex items-center gap-2">
            <span>Dikelola dengan integritas literasi & etika jurnalistik Indonesia.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
