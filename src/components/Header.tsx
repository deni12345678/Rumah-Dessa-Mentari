import React, { useState } from 'react';
import {
  BookOpen,
  ChevronDown,
  Edit3,
  Globe,
  Layers,
  LogOut,
  Menu,
  Search,
  Shield,
  User as UserIcon,
  UserCheck,
  X
} from 'lucide-react';
import { ArticleCategory, User } from '../types';
import { BrandLogo } from './BrandLogo';
import { PWAInstallButton } from './PWAInstallButton';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string, param?: string) => void;
  currentUser: User | null;
  onOpenAuth: () => void;
  onLogout: () => void;
  onOpenSearch: () => void;
}

export const CATEGORIES_LIST: ArticleCategory[] = [
  'Kisah Inspiratif',
  'Pendidikan',
  'Ekonomi dan UMKM',
  'Olahraga',
  'Kesehatan',
  'Opini dan Gagasan',
  'Literasi dan Buku',
  'Informasi Umum',
];

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  currentUser,
  onOpenAuth,
  onLogout,
  onOpenSearch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const handleNav = (view: string, param?: string) => {
    onNavigate(view, param);
    setMobileMenuOpen(false);
    setCategoryDropdownOpen(false);
    setUserDropdownOpen(false);
  };

  const getRoleBadge = (role: string, approvalStatus?: string) => {
    if (approvalStatus === 'pending') {
      return <span className="text-[10px] bg-amber-100 text-amber-900 font-bold px-1.5 py-0.5 rounded border border-amber-300">Menunggu ACC</span>;
    }
    switch (role) {
      case 'admin':
        return <span className="text-[10px] bg-red-100 text-red-800 font-bold px-1.5 py-0.5 rounded border border-red-200">Admin</span>;
      case 'editor':
        return <span className="text-[10px] bg-purple-100 text-purple-800 font-bold px-1.5 py-0.5 rounded border border-purple-200">Editor</span>;
      case 'contributor':
        return <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded border border-emerald-200">Penulis (ACC)</span>;
      default:
        return <span className="text-[10px] bg-slate-100 text-slate-700 font-medium px-1.5 py-0.5 rounded">Pembaca</span>;
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-2xs">
      {/* Top Banner Tagline */}
      <div className="bg-[#0F1E36] text-amber-200 text-xs py-1.5 px-4 text-center font-medium tracking-wider flex items-center justify-center gap-3">
        <span className="font-serif-editorial italic">“Inspirasi untuk Semua, Karya untuk Dunia”</span>
        <span className="hidden sm:inline text-slate-400">·</span>
        <span className="hidden sm:inline text-slate-300">Jurnal Literasi, Komunitas Penulis & Penerbitan Karya</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Logo & Brand Wordmark */}
          <button
            onClick={() => handleNav('beranda')}
            className="flex items-center text-left focus:outline-hidden shrink-0"
          >
            <BrandLogo size="md" showSlogan={true} />
          </button>

          {/* Zone 2: Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 text-sm font-medium text-slate-700">
            <button
              onClick={() => handleNav('beranda')}
              className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                currentView === 'beranda'
                  ? 'text-amber-900 bg-amber-50/80 font-semibold'
                  : 'hover:text-amber-800 hover:bg-slate-50'
              }`}
            >
              Beranda
            </button>

            {/* Katalog Publikasi Dropdown */}
            <div className="relative">
              <button
                onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  currentView === 'artikel' || CATEGORIES_LIST.includes(currentView as any) || currentView === 'penerbitan'
                    ? 'text-amber-900 bg-amber-50/80 font-semibold'
                    : 'hover:text-amber-800 hover:bg-slate-50'
                }`}
              >
                <span>Katalog & Publikasi</span>
                <ChevronDown className="w-4 h-4 opacity-70" />
              </button>

              {categoryDropdownOpen && (
                <div
                  className="absolute left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-stone-200 py-2 z-50 animate-in fade-in slide-in-from-top-2"
                  onMouseLeave={() => setCategoryDropdownOpen(false)}
                >
                  <div className="px-4 py-1.5 text-[11px] font-bold text-amber-900 uppercase tracking-wider bg-amber-50/60 border-b border-stone-100">
                    Format Publikasi
                  </div>
                  <button
                    onClick={() => handleNav('penerbitan')}
                    className="w-full text-left px-4 py-2.5 text-xs font-bold text-slate-900 hover:bg-amber-50/80 flex items-center justify-between"
                  >
                    <span className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-amber-600" />
                      <span>Buku & E-Book Terbitan</span>
                    </span>
                    <span className="text-[10px] bg-amber-100 text-amber-900 font-bold px-1.5 py-0.5 rounded">Katalog</span>
                  </button>
                  <button
                    onClick={() => handleNav('artikel', 'Literasi dan Buku')}
                    className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-800 hover:bg-amber-50/80 flex items-center justify-between"
                  >
                    <span>📖 Majalah Literasi & Jurnal</span>
                    <span className="text-slate-400 text-[10px]">Edisi Cetak/Digital</span>
                  </button>
                  <button
                    onClick={() => handleNav('artikel', 'Informasi Umum')}
                    className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-800 hover:bg-amber-50/80 flex items-center justify-between"
                  >
                    <span>📰 Koran Digital & Warta Desa</span>
                    <span className="text-slate-400 text-[10px]">Kabar Komunitas</span>
                  </button>
                  <button
                    onClick={() => handleNav('artikel', 'Semua')}
                    className="w-full text-left px-4 py-2.5 text-xs font-bold text-slate-900 hover:bg-amber-50/80 flex items-center justify-between border-t border-b border-stone-100 my-1 bg-stone-50/50"
                  >
                    <span>✍️ Feed Artikel Penulis</span>
                    <span className="text-amber-800 text-[11px] font-semibold">Lihat Semua →</span>
                  </button>

                  <div className="px-4 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">
                    Rubrik Tematik
                  </div>
                  {CATEGORIES_LIST.map(cat => (
                    <button
                      key={cat}
                      onClick={() => handleNav('artikel', cat)}
                      className="w-full text-left px-4 py-1.5 text-xs font-medium text-slate-700 hover:bg-amber-50/60 hover:text-amber-900 transition-colors"
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNav('layanan')}
              className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                currentView === 'layanan'
                  ? 'text-amber-900 bg-amber-50/80 font-semibold'
                  : 'hover:text-amber-800 hover:bg-slate-50'
              }`}
            >
              Layanan & Kirim Naskah
            </button>

            <button
              onClick={() => handleNav('tentang')}
              className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                currentView === 'tentang'
                  ? 'text-amber-900 bg-amber-50/80 font-semibold'
                  : 'hover:text-amber-800 hover:bg-slate-50'
              }`}
            >
              Tentang Kami
            </button>

            <button
              onClick={() => handleNav('hak-cipta-dan-koreksi')}
              className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                currentView === 'hak-cipta-dan-koreksi'
                  ? 'text-amber-900 bg-amber-50/80 font-semibold'
                  : 'hover:text-amber-800 hover:bg-slate-50'
              }`}
            >
              Kontak & FAQ
            </button>
          </nav>

          {/* Right Action Icons & Auth */}
          <div className="flex items-center space-x-3">
            {/* Search Button */}
            <button
              onClick={onOpenSearch}
              aria-label="Cari artikel"
              className="p-2.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              title="Cari artikel..."
            >
              <Search className="w-5 h-5" />
            </button>

            {/* PWA Install Button */}
            <PWAInstallButton />

            {/* Kirim Tulisan CTA */}
            <button
              onClick={() => {
                if (!currentUser) {
                  onOpenAuth();
                } else {
                  handleNav('dashboard-kontributor', 'tulis');
                }
              }}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 shadow-xs hover:shadow-md transition-all"
            >
              <Edit3 className="w-4 h-4" />
              <span>Kirim Tulisan</span>
            </button>

            {/* User Profile / Login */}
            {currentUser ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2 p-1.5 pr-2.5 rounded-lg border border-slate-200 hover:border-slate-300 bg-slate-50 text-slate-800 transition-colors"
                >
                  <img
                    src={currentUser.avatarUrl || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80'}
                    alt={currentUser.name}
                    className="w-7 h-7 rounded-full object-cover border border-amber-500/50"
                  />
                  <div className="text-left hidden md:block">
                    <p className="text-xs font-bold leading-tight truncate max-w-[110px]">{currentUser.name}</p>
                    <div className="flex items-center gap-1">{getRoleBadge(currentUser.role, currentUser.approvalStatus)}</div>
                  </div>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
                </button>

                {userDropdownOpen && (
                  <div
                    className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-2"
                    onMouseLeave={() => setUserDropdownOpen(false)}
                  >
                    <div className="px-4 py-2 border-b border-slate-100">
                      <p className="text-xs text-slate-500">Masuk sebagai:</p>
                      <p className="text-sm font-bold text-slate-800 truncate">{currentUser.name}</p>
                      <p className="text-xs text-slate-500 truncate">{currentUser.email}</p>
                    </div>

                    <button
                      onClick={() => handleNav('dashboard-kontributor', 'daftar')}
                      className="w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-900 flex items-center gap-2.5"
                    >
                      <Edit3 className="w-4 h-4 text-amber-600" />
                      <span>Dashboard Penulis</span>
                    </button>

                    <button
                      onClick={() => handleNav('dashboard-kontributor', 'profil')}
                      className="w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-900 flex items-center gap-2.5 border-b border-slate-100 pb-2.5"
                    >
                      <UserIcon className="w-4 h-4 text-amber-600" />
                      <span>Edit Profil & Foto</span>
                    </button>

                    {(currentUser.role === 'editor' || currentUser.role === 'admin') && (
                      <button
                        onClick={() => handleNav('dashboard-editor')}
                        className="w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-purple-50 hover:text-purple-900 flex items-center gap-2.5"
                      >
                        <UserCheck className="w-4 h-4 text-purple-600" />
                        <span>Meja Redaksi / Editor</span>
                      </button>
                    )}

                    {currentUser.role === 'admin' && (
                      <button
                        onClick={() => handleNav('dashboard-admin')}
                        className="w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-red-50 hover:text-red-900 flex items-center gap-2.5"
                      >
                        <Shield className="w-4 h-4 text-red-600" />
                        <span>Kelola Platform (Admin)</span>
                      </button>
                    )}

                    <div className="border-t border-slate-100 my-1"></div>

                    <button
                      onClick={() => {
                        setUserDropdownOpen(false);
                        onLogout();
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2.5"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Keluar</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={onOpenAuth}
                className="px-4 py-2 text-sm font-semibold rounded-lg bg-[#0F1E36] hover:bg-[#1B365D] text-white shadow-xs transition-colors"
              >
                Masuk / Daftar
              </button>
            )}

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-lg animate-in fade-in slide-in-from-top-1">
          <div className="space-y-1">
            <button
              onClick={() => handleNav('beranda')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-50"
            >
              Beranda
            </button>
            <button
              onClick={() => handleNav('artikel', 'Semua')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-50"
            >
              Semua Artikel
            </button>

            {/* Categories expandable in mobile */}
            <div className="pt-2 pb-1 px-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Pilihan Rubrik</span>
              <div className="mt-2 grid grid-cols-2 gap-1.5">
                {CATEGORIES_LIST.map(cat => (
                  <button
                    key={cat}
                    onClick={() => handleNav('artikel', cat)}
                    className="text-left text-xs text-slate-600 hover:text-amber-800 bg-slate-50 hover:bg-amber-50/70 p-2 rounded-md"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-100 my-2"></div>

            <button
              onClick={() => handleNav('layanan')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-50"
            >
              Layanan Penulisan & Buku
            </button>
            <button
              onClick={() => handleNav('penerbitan')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-50"
            >
              Fondasi Penerbitan
            </button>
            <button
              onClick={() => handleNav('tentang')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-50"
            >
              Tentang Kami & Tim Redaksi
            </button>
            <button
              onClick={() => handleNav('pedoman-penulisan')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50"
            >
              Pedoman & Etika Publikasi
            </button>

            <div className="pt-3">
              <button
                onClick={() => {
                  if (!currentUser) {
                    onOpenAuth();
                  } else {
                    handleNav('dashboard-kontributor', 'tulis');
                  }
                }}
                className="w-full py-2.5 px-4 text-center text-sm font-semibold rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 flex items-center justify-center gap-2"
              >
                <Edit3 className="w-4 h-4" />
                <span>Mulai Kirim Tulisan</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
