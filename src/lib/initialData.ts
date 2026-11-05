import { Article, BookCatalogItem, SiteSettings, User } from '../types';

export const INITIAL_SITE_SETTINGS: SiteSettings = {
  brandName: 'Rumah Dessa Mentari',
  slogan: 'Inspirasi untuk Semua, Karya untuk Dunia.',
  shortDescription: 'Berbagi inspirasi, memperluas wawasan, dan menghadirkan karya yang bermakna melalui media artikel, komunitas kontributor, dan layanan literasi buku.',
  whatsappNumber: '628787906404',
  contactEmail: 'dessamentarilangit@gmail.com',
  adminEmailBackup: 'santosodeni3@gmail.com',
  officeLocation: 'Karawang & Bekasi, Indonesia',
  allowSubmissions: true,
  editorialPolicyVersion: 'v2.4 (2026)',
};

export const INITIAL_USERS: (User & { passwordHash: string; salt: string })[] = [
  {
    id: 'user-admin-1',
    name: 'Deni Santoso, M.M.',
    email: 'santosodeni3@gmail.com',
    role: 'admin',
    approvalStatus: 'approved',
    bio: 'Pemimpin Redaksi & Pengelola Platform Rumah Dessa Mentari. Praktisi literasi dan pegiat media komunitas.',
    phone: '08787906404',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=250&q=80',
    createdAt: '2025-01-10T08:00:00Z',
    salt: 'salt_admin_12345',
    passwordHash: '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', // SHA256 of admin123
  },
  {
    id: 'user-editor-1',
    name: 'Siti Rahmawati, M.Hum.',
    email: 'editor@rumahdessamentari.com',
    role: 'editor',
    approvalStatus: 'approved',
    bio: 'Editor Senior Naskah & Penyunting Kebahasaan bersertifikat. Mengawal kurasi dan etika publikasi RDM.',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80',
    createdAt: '2025-01-12T09:30:00Z',
    salt: 'salt_editor_12345',
    passwordHash: '0192023a7bbd73250516f069df18b500', // Pre-hashed representation
  },
  {
    id: 'user-contributor-1',
    name: 'Arif Wicaksono',
    email: 'penulis@rumahdessamentari.com',
    role: 'contributor',
    approvalStatus: 'approved',
    bio: 'Kontributor lepas, guru sekolah dasar di perbatasan, dan pencinta sastra lokal.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80',
    createdAt: '2025-02-01T10:00:00Z',
    salt: 'salt_contrib_12345',
    passwordHash: 'kontributor_hash_demo',
  },
  {
    id: 'user-contributor-pending',
    name: 'Novi Puspitasari, S.Pd.',
    email: 'novi.guru@gmail.com',
    role: 'contributor',
    approvalStatus: 'pending',
    phone: '081298765432',
    bio: 'Guru literasi dan pegiat taman baca masyarakat di Jawa Tengah. Berpengalaman menulis esai pendidikan anak dan cerita inspiratif.',
    portfolioUrl: 'https://kompasiana.com/novipuspita',
    preferredCategories: ['Pendidikan', 'Kisah Inspiratif'],
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=250&q=80',
    createdAt: '2026-10-22T06:30:00Z',
    salt: 'salt_novi_12345',
    passwordHash: 'novi_hash_demo',
  },
];

export const INITIAL_ARTICLES: Article[] = [
  {
    id: 'art-1',
    slug: 'merawat-asa-di-pelosok-desa-kisah-pak-sabar-membangun-jembatan-literasi',
    title: 'Merawat Asa di Pelosok Desa: Kisah Pak Sabar Membangun Jembatan Literasi Anak Sungai',
    summary: 'Berbekal sepeda ontel tua dan tumpukan buku donasi, Pak Sabar melintasi jalanan terjal untuk memastikan anak-anak di bantaran sungai tetap memiliki jendela melihat dunia.',
    category: 'Kisah Inspiratif',
    tags: ['Inspirasi', 'Literasi Desa', 'Pendidikan', 'Keteladanan'],
    authorId: 'user-contributor-1',
    authorName: 'Arif Wicaksono',
    authorBio: 'Kontributor lepas, guru sekolah dasar di perbatasan, dan pencinta sastra lokal.',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80',
    coverImage: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80',
    imageAttribution: 'Foto berlisensi Unsplash via Alur Dokumentasi Pustaka Bergerak',
    readingTime: 5,
    status: 'published',
    sources: ['Wawancara langsung lapangan di Dusun Kali Kidul, Agustus 2026', 'Catatan Komunitas Sepeda Buku'],
    publishedAt: '2026-10-18T08:30:00Z',
    updatedAt: '2026-10-18T08:30:00Z',
    views: 1420,
    featured: true,
    content: `Setiap Selasa dan Jumat sore, derit rantai sepeda tua terdengar dari kejauhan melintasi jalan tanah merah Dusun Kali Kidul. Di boncengannya, dua kotak kayu bertuliskan "Pustaka Mentari" terisi rapi oleh buku cerita anak, ensiklopedia bergambar, dan lembar mewarnai.

Sosok di balik sepeda itu adalah Pak Sabaruddin (58 tahun), mantan pegawai tata usaha sekolah yang mendedikasikan masa pensiunnya untuk menjemput bola literasi. Baginya, jarak sepuluh kilometer dari rumah ke perkampungan terisolir bukanlah halangan.

### Menghidupkan Lentera di Tepian Sungai
"Anak-anak di sini tidak punya akses internet cepat, dan perpustakaan terdekat jaraknya 22 kilometer melewati hutan jati," tutur Pak Sabar saat kami temui di bawah pohon beringin tempat anak-anak berkumpul. "Kalau kita menunggu mereka datang ke kota, mereka akan kehilangan masa-masa emas untuk mencintai membaca."

Inisiatif sederhana yang dimulai sejak tiga tahun lalu ini kini telah berbuah manis. Sebanyak 45 anak di dusun tersebut kini lancar membaca dan aktif menceritakan kembali apa yang mereka pelajari. Beberapa anak bahkan mulai menulis buku harian sendiri.

### Kekuatan Gotong Royong
Gerakan ini tidak berjalan sendirian. Ibu-ibu di desa kini bergantian menyediakan ubi rebus dan teh manis hangat saat sesi membaca bersama berlangsung. Dukungan buku juga mengalir dari donatur di berbagai kota yang tergerak melihat konsistensi Pak Sabar.

Kisah Pak Sabar membuktikan bahwa perubahan besar tidak selalu diawali dengan dana melimpah atau teknologi mutakhir. Ia lahir dari ketulusan hati, ketekunan melangkah, dan keyakinan bahwa setiap anak berhak merasakan hangatnya cahaya ilmu.`
  },
  {
    id: 'art-2',
    slug: 'anatomi-buku-yang-bernyawa-mengapa-proses-editing-menentukan-kualitas-karya',
    title: 'Anatomi Buku yang Bernyawa: Mengapa Proses Editing Menentukan Kualitas Karya',
    summary: 'Sebuah naskah mentah ibarat bongkahan marmer. Di tangan penyunting yang teliti, ia dipahat menjadi karya yang tidak hanya enak dibaca, tetapi juga memiliki kedalaman makna.',
    category: 'Literasi dan Buku',
    tags: ['Kepengarangan', 'Penyuntingan', 'Buku', 'Literasi'],
    authorId: 'user-editor-1',
    authorName: 'Siti Rahmawati, M.Hum.',
    authorBio: 'Editor Senior Naskah & Penyunting Kebahasaan bersertifikat. Mengawal kurasi dan etika publikasi RDM.',
    authorAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80',
    coverImage: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1200&q=80',
    imageAttribution: 'Foto Dokumentasi Studio Naskah Rumah Dessa Mentari',
    readingTime: 6,
    status: 'published',
    sources: ['Pedoman Umum Ejaan Bahasa Indonesia (PUEBI)', 'Asosiasi Penerbit Indonesia (IKAPI) Standar Penulisan'],
    publishedAt: '2026-10-15T11:00:00Z',
    views: 980,
    featured: true,
    content: `Banyak penulis pemula beranggapan bahwa pekerjaan seorang editor hanyalah memeriksa saltik (typo) atau meletakkan tanda koma pada tempatnya. Padahal, proses penyuntingan naskah (editorial curation) adalah dialog intelektual antara penulis dan pembaca pertama yang paling kritis sekaligus paling peduli.

### Dua Sayap Penyuntingan: Substantif dan Mekanis
Di ruang kerja redaksi, penyuntingan dibagi menjadi dua tahap krusial:
1. **Penyuntingan Substantif (Developmental Editing):** Menelisik alur logika, kekuatan argumen, konsistensi karakter (dalam fiksi), relevansi bab, hingga tone bahasa yang selaras dengan target pembaca.
2. **Penyuntingan Mekanis (Copyediting & Proofreading):** Menjaga kepatuhan tata bahasa baku, keharmonisan pilihan kata (diksi), kejelasan struktur kalimat majemuk, serta kepatuhan hak cipta sitasi rujukan.

### Mempertahankan Suara Penulis
Editor yang bijak tidak akan merampas karakter orisinal penulis. Sebaliknya, peran editor adalah membersihkan kabut yang menghalangi kejernihan pesan penulis, sehingga pembaca dapat menyerap gagasan tersebut dengan utuh tanpa tersandung kebingungan sintaksis.

Bagi siapa pun yang tengah menyiapkan naskah buku, baik memoar, buku ajar, maupun kumpulan esai—ingatlah bahwa draf pertama adalah milik hati Anda, namun draf akhir yang telah disunting dengan cermat adalah hadiah terindah untuk pembaca dunia.`
  },
  {
    id: 'art-3',
    slug: 'kiat-umkm-kerajinan-bambu-menembus-pasar-ekspor-dengan-narasi-autentik',
    title: 'Kiat UMKM Kerajinan Bambu Menembus Pasar Ekspor dengan Narasi Autentik',
    summary: 'Bukan sekadar menjual perabot, perajin lokal di Kulon Progo berhasil memikat pembeli mancanegara berkat cerita kelestarian lingkungan dan kearifan anyaman tangan.',
    category: 'Ekonomi dan UMKM',
    tags: ['UMKM', 'Ekonomi Kreatif', 'Ekspor', 'Bambu Ramah Lingkungan'],
    authorId: 'user-admin-1',
    authorName: 'Deni Santoso, M.M.',
    authorBio: 'Pemimpin Redaksi & Pengelola Platform Rumah Dessa Mentari. Praktisi literasi dan pegiat media komunitas.',
    coverImage: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=1200&q=80',
    imageAttribution: 'Dokumentasi Galeri Anyam Bambu Lestari',
    readingTime: 4,
    status: 'published',
    sources: ['Laporan Dinas Koperasi dan UMKM 2026', 'Wawancara Pendiri Klaster Kerajinan Bambu Nusantara'],
    publishedAt: '2026-10-12T14:15:00Z',
    views: 810,
    featured: false,
    content: `Di era pasar global yang dipenuhi produk cetakan pabrik massal, pasar internasional justru semakin mencari barang yang memiliki "jiwa" dan jejak keberlanjutan. Fenomena inilah yang ditangkap jeli oleh kelompok perajin bambu di perbukitan Menoreh.

### Nilai Tambah Melalui Storytelling
Ketika produk anyaman hanya dipasarkan sebagai "tempat buah bambu", nilainya di pasar lokal berkisar Rp25.000. Namun, ketika mereka membubuhkan hangtag berisi cerita: bahwa bambu dipanen saat fase bulan mati agar tahan hama tanpa bahan kimia keras, serta dianyam oleh ibu-ibu mandiri desa, nilainya berlipat di pasar Eropa dan Jepang.

"Dunia internasional tidak hanya membeli barang, mereka membeli komitmen etis di balik pembuatannya," jelas Kang Marno, koordinator koperasi kerajinan.

Tiga pilar yang dapat dipelajari oleh pelaku UMKM lainnya:
- Standarisasi finishing ramah lingkungan (food-grade water-based).
- Kemasan ringkas siap kirim internasional (knock-down packing).
- Dokumentasi digital proses pembuatan yang transparan di media sosial.`
  },
  {
    id: 'art-4',
    slug: 'mengenali-sinyal-kelelahan-mental-burnout-dan-langkah-pemulihannya',
    title: 'Mengenali Sinyal Kelelahan Mental (Burnout) dan Langkah Pemulihannya Secara Ilmiah',
    summary: 'Kelelahan kronis sering kali diabaikan hingga menurunkan fungsi fisik dan emosional. Kenali tanda-tanda klinis dan strategi regulasi diri yang terbukti secara psikologis.',
    category: 'Kesehatan',
    tags: ['Kesehatan Mental', 'Burnout', 'Gaya Hidup Sehat', 'Edukasi Medis'],
    authorId: 'user-editor-1',
    authorName: 'Siti Rahmawati, M.Hum.',
    authorBio: 'Editor Senior Naskah & Penyunting Kebahasaan bersertifikat. Mengawal kurasi dan etika publikasi RDM.',
    coverImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    imageAttribution: 'Unsplash Medical Wellness Reference',
    readingTime: 5,
    status: 'published',
    sources: [
      'Organisasi Kesehatan Dunia (WHO) International Classification of Diseases (ICD-11: QD85)',
      'Jurnal Psikologi Klinis Universitas Gadjah Mada',
      'Tinjauan Asosiasi Psikiatri Indonesia'
    ],
    publishedAt: '2026-10-10T09:00:00Z',
    views: 1250,
    featured: false,
    content: `*(Catatan Etika Redaksi: Artikel ini ditujukan semata-mata untuk tujuan edukasi kesehatan dan tidak dimaksudkan untuk menggantikan diagnosis maupun terapi dokter atau psikolog klinis berlisensi).*

Tekanan kerja yang berkepanjangan tanpa ruang rekreasi yang memadai dapat memicu sindrom *burnout*. Badan Kesehatan Dunia (WHO) secara resmi menggolongkan burnout sebagai fenomena okupasional yang memiliki dampak nyata terhadap produktivitas dan kesejahteraan umum.

### Tiga Dimensi Utama Burnout:
1. **Pengurasan Energi (Exhaustion):** Rasa lelah ekstrem yang tidak kunjung hilang meskipun sudah beristirahat di akhir pekan.
2. **Keterasingan Mental (Depersonalisasi):** Munculnya rasa sinis, apatis, dan jarak emosional terhadap pekerjaan atau rekan sejawat.
3. **Penurunan Efikasi Diri:** Merasa tidak mampu menyelesaikan tugas dan hilangnya rasa bangga atas pencapaian pribadi.

### Pendekatan Berbasis Bukti untuk Pemulihan:
- **Restrukturisasi Batas Kerja:** Menetapkan jam mati untuk notifikasi gawai setelah jam kerja berakhir.
- **Aktivitas Fisik Aerobik Ringan:** Jalan kaki santai 30 menit terbukti menurunkan kadar kortisol dalam sirkulasi darah.
- **Konsultasi Profesional:** Jangan ragu mencari pendampingan psikolog atau konselor jika gejala berlangsung lebih dari 6 minggu disertai gangguan tidur.`
  },
  {
    id: 'art-5',
    slug: 'menumbuhkan-daya-kritis-melalui-kebiasaan-membaca-sejak-dini',
    title: 'Menumbuhkan Daya Kritis Melalui Kebiasaan Membaca Sejak Dini',
    summary: 'Membaca bukan sekadar mengeja huruf, melainkan melatih nalar anak untuk bertanya, membandingkan informasi, dan berempati pada perspektif yang beragam.',
    category: 'Pendidikan',
    tags: ['Pendidikan Anak', 'Literasi Keluarga', 'Berpikir Kritis'],
    authorId: 'user-contributor-1',
    authorName: 'Arif Wicaksono',
    authorBio: 'Kontributor lepas, guru sekolah dasar di perbatasan, dan pencinta sastra lokal.',
    coverImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80',
    imageAttribution: 'Dokumentasi Program Sekolah Ramah Anak',
    readingTime: 4,
    status: 'published',
    sources: ['Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi - Gerakan Literasi Nasional', 'UNESCO Institute for Lifelong Learning'],
    publishedAt: '2026-10-05T07:45:00Z',
    views: 730,
    content: `Di tengah banjir informasi digital yang serbapendek dan cepat, kemampuan anak dalam membaca mendalam (deep reading) menjadi benteng utama agar mereka tidak mudah termakan hoaks dan disinformasi.

Para pendidik di sekolah maupun orang tua di rumah dapat menerapkan metode dialogis saat membaca buku bersama. Alih-alih hanya menyuruh anak menghafal nama tokoh, ajukan pertanyaan terbuka:
- "Menurutmu, mengapa tokoh utama mengambil keputusan tersebut?"
- "Jika kamu berada di posisinya, apa hal berbeda yang akan kamu lakukan?"

Pertanyaan-pertanyaan seperti ini melatih anak untuk memahami relasi sebab-akibat dan menumbuhkan kecerdasan emosional yang kelak menjadi bekal kepemimpinan mereka.`
  },
  {
    id: 'art-6',
    slug: 'konsistensi-di-atas-bakat-menyelami-filosofi-atlet-lari-jarak-jauh',
    title: 'Konsistensi di Atas Bakat: Menyelami Filosofi Atlet Lari Jarak Jauh',
    summary: 'Di lintasan maraton sepanjang 42 kilometer, musuh terbesar bukanlah lawan di samping, melainkan bisikan di dalam kepala yang meminta kita untuk menyerah.',
    category: 'Olahraga',
    tags: ['Olahraga', 'Maraton', 'Disiplin', 'Kesehatan Fisik'],
    authorId: 'user-contributor-1',
    authorName: 'Arif Wicaksono',
    authorBio: 'Kontributor lepas, guru sekolah dasar di perbatasan, dan pencinta sastra lokal.',
    coverImage: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&w=1200&q=80',
    imageAttribution: 'Unsplash Sports Marathon Collection',
    readingTime: 4,
    status: 'published',
    sources: ['Catatan Pelatnas Atletik Indonesia', 'Buku What I Talk About When I Talk About Running oleh Haruki Murakami'],
    publishedAt: '2026-09-28T16:20:00Z',
    views: 640,
    content: `Lari jarak jauh adalah salah satu metafora terindah tentang kehidupan. Ia mengajarkan bahwa langkah kecil yang diulang dengan disiplin tinggi jauh lebih berharga daripada sprint sesaat yang menghabiskan seluruh tenaga di kilometer pertama.

Setiap pelari maraton akrab dengan istilah "The Wall"—kondisi saat cadangan glikogen otot menipis drastis di sekitar kilometer ke-30. Pada detik-detik itulah karakter sejati seorang manusia diuji. Konsistensi bangun sebelum fajar untuk berlatih, menjaga pola makan, dan menghargai sinyal tubuh adalah fondasi yang membentuk ketangguhan mental.`
  },
  {
    id: 'art-7',
    slug: 'membedah-fakta-dan-opini-dalam-pusaran-informasi-media-sosial',
    title: 'Membedah Fakta dan Opini dalam Pusaran Informasi Media Sosial',
    summary: 'Bagaimana publik dapat menjaga kejernihan akal di tengah banjir konten yang dirancang untuk memancing emosi sesaat? Berikut panduan praktis literasi media RDM.',
    category: 'Informasi Umum',
    tags: ['Literasi Digital', 'Verifikasi Fakta', 'Media', 'Klarifikasi'],
    authorId: 'user-admin-1',
    authorName: 'Deni Santoso, M.M.',
    authorBio: 'Pemimpin Redaksi & Pengelola Platform Rumah Dessa Mentari. Praktisi literasi dan pegiat media komunitas.',
    coverImage: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80',
    imageAttribution: 'Media Desk Documentation RDM',
    readingTime: 5,
    status: 'published',
    sources: ['Dewan Pers Indonesia Kode Etik Jurnalistik', 'Masyarakat Anti Fitnah Indonesia (Mafindo)'],
    publishedAt: '2026-09-22T10:10:00Z',
    views: 890,
    content: `*(Verifikasi Informasi Publik: Redaksi Rumah Dessa Mentari menjunjung tinggi pemisahan antara data faktual yang dapat diverifikasi dan opini editorial).*

Dalam lanskap komunikasi kiwari, batas antara fakta empiris dan opini subjektif sering kali kabur oleh judul yang bombastis (*clickbait*). Fenomena ruang gema (*echo chamber*) membuat pengguna media sosial cenderung hanya menyerap informasi yang membenarkan prasangka mereka.

### 4 Langkah Cek Mandiri Sebelum Menyebarkan Informasi:
1. **Periksa Tanggal dan Konteks Asli:** Sering kali video atau foto lama dari peristiwa berbeda dipotong ulang seolah-olah terjadi hari ini.
2. **Telusuri Sumber Primer:** Apakah pernyataan tersebut bersumber dari rilis resmi instansi berwenang, atau sekadar rumor anonim di grup percakapan?
3. **Pisahkan Kata Kerja Objektif dan Kata Sifat Emosional:** Berita faktual berfokus pada apa yang terjadi, kapan, di mana, dan oleh siapa, tanpa memaksakan vonis moral pada paragraf pembuka.
4. **Waspadai Klaim Sensasional Tanpa Rujukan:** Kebenaran tidak diukur dari berapa banyak tanda seru atau huruf kapital yang digunakan.`
  },
  {
    id: 'art-8',
    slug: 'masa-depan-buku-cetak-di-era-ledakan-konten-digital-kilat',
    title: 'Masa Depan Buku Cetak di Era Ledakan Konten Digital Kilat',
    summary: 'Di tengah layar sentuh yang terus berkedip, mengapa aroma kertas dan sensasi membalik halaman tetap tak tergantikan bagi peradaban akal budi manusia?',
    category: 'Opini dan Gagasan',
    tags: ['Opini', 'Buku Cetak', 'Budaya Baca', 'Filsafat'],
    authorId: 'user-editor-1',
    authorName: 'Siti Rahmawati, M.Hum.',
    authorBio: 'Editor Senior Naskah & Penyunting Kebahasaan bersertifikat. Mengawal kurasi dan etika publikasi RDM.',
    coverImage: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80',
    imageAttribution: 'Perpustakaan Naskah Klasik RDM Archive',
    readingTime: 5,
    status: 'published',
    sources: ['Studi Pew Research Center mengenai Reading Habits', 'Esai Umberto Eco: This Is Not the End of the Book'],
    publishedAt: '2026-09-15T13:40:00Z',
    views: 1100,
    content: `Satu dekade lalu, sejumlah pengamat teknologi meramalkan kematian buku cetak. Namun kenyataan menunjukkan hal sebaliknya: buku fisik tetap bertahan, bahkan mengalami lonjakan apresiasi estetis di kalangan pembaca muda.

Membaca buku cetak adalah ritual perlambatan (*deliberate slowing down*). Ia adalah antitesis dari kegelisahan digital. Ketika membuka halaman buku fisik, tidak ada notifikasi yang memotong konsentrasi, tidak ada godaan algoritma yang membelokkan perhatian kita setiap lima detik.

Buku cetak adalah monumen pemikiran. Ia adalah saksi bisu bahwa di suatu kurun waktu, ada manusia yang mendedikasikan bertahun-tahun hidupnya untuk merenung, merangkai kalimat, dan menyerahkannya kepada peradaban.`
  },

  // Contributor items in review & revision stages:
  {
    id: 'art-in-review-1',
    slug: 'revitalisasi-tradisi-lisan-melalui-dokumentasi-tulisan-generasi-muda',
    title: 'Revitalisasi Tradisi Lisan Melalui Dokumentasi Tulisan Generasi Muda',
    summary: 'Mengapa kisah tutur para tetua adat di lereng gunung perlu segera dialihwahanakan ke dalam aksara naskah sebelum hilang ditelan waktu.',
    category: 'Literasi dan Buku',
    tags: ['Tradisi Lisan', 'Dokumentasi Naskah', 'Kebudayaan'],
    authorId: 'user-contributor-1',
    authorName: 'Arif Wicaksono',
    authorBio: 'Kontributor lepas, guru sekolah dasar di perbatasan, dan pencinta sastra lokal.',
    coverImage: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=1200&q=80',
    imageAttribution: 'Dokumentasi Pribadi Penggiat Budaya Gunung',
    readingTime: 4,
    status: 'submitted',
    sources: ['Wawancara dengan sesepuh Desa Suroloyo'],
    submittedAt: '2026-10-21T10:15:00Z',
    views: 0,
    content: `Tradisi tutur lisan telah berabad-abad menjadi wadah penyimpan kearifan ekologis bangsa kita. Namun saat ini, jumlah penutur asli kian berkurang sementara generasi muda jarang mendengarkan hikayat di pendopo malam hari. Melalui inisiatif mencatat dan membukukan cerita rakyat lokal, kita tidak hanya menyelamatkan cerita, namun juga filosofi hidup berdampingan dengan alam.`
  },
  {
    id: 'art-revision-1',
    slug: 'pola-hidup-sehat-berbasis-pangan-lokal-tanaman-rempah',
    title: 'Pola Hidup Sehat Berbasis Pangan Lokal dan Khasiat Tanaman Rempah',
    summary: 'Menilik manfaat jahe, temulawak, dan kunyit bagi pemeliharaan stamina harian dengan pengolahan yang higienis.',
    category: 'Kesehatan',
    tags: ['Rempah Nusantara', 'Kesehatan Alami', 'Gaya Hidup'],
    authorId: 'user-contributor-1',
    authorName: 'Arif Wicaksono',
    authorBio: 'Kontributor lepas, guru sekolah dasar di perbatasan, dan pencinta sastra lokal.',
    coverImage: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1200&q=80',
    imageAttribution: 'Dokumentasi Kebun Herbal Alami',
    readingTime: 4,
    status: 'revision_requested',
    sources: ['Catatan Jamu Tradisional Jawa'],
    revisionNotes: 'Catatan Editor (Siti Rahmawati): Naskah menarik dan sarat kearifan lokal. Namun sesuai Pedoman Standar Khusus Konten Kesehatan RDM, mohon perbaiki bagian klaim "dapat menyembuhkan segala jenis radang lambung kronis" agar diganti dengan bahasa edukatif dan tambahkan disclaimer rujukan jurnal ilmiah atau rekomendasi Kemenkes. Setelah diperbaiki, silakan ajukan kembali.',
    submittedAt: '2026-10-19T14:00:00Z',
    reviewedAt: '2026-10-20T16:30:00Z',
    views: 0,
    content: `Rempah-rempah nusantara bukan sekadar bumbu penyedap masakan, melainkan warisan farmakope alami yang kaya akan senyawa antioksidan seperti kurkuminoid. Konsumsi rebusan jahe dan temulawak secara teratur dalam kadar yang wajar dapat membantu menghangatkan tubuh dan memelihara daya tahan.`
  },
  {
    id: 'art-rejected-1',
    slug: 'analisis-spekulatif-tren-koin-kripto-minggu-ini',
    title: 'Analisis Spekulatif Pergerakan Tren Pasar Aset Digital Minggu Ini',
    summary: 'Mencoba membaca arah spekulasi instrumen kripto berisiko tinggi tanpa menyertakan disclaimer finansial resmi.',
    category: 'Ekonomi dan UMKM',
    tags: ['Aset Digital', 'Opini Finansial'],
    authorId: 'user-contributor-1',
    authorName: 'Arif Wicaksono',
    authorBio: 'Kontributor lepas, guru sekolah dasar di perbatasan, dan pencinta sastra lokal.',
    coverImage: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=1200&q=80',
    imageAttribution: 'Crypto Market Graphics Archive',
    readingTime: 3,
    status: 'rejected',
    sources: ['Media sosial dan forum spekulasi online'],
    revisionNotes: 'Catatan Dewan Redaksi (Deni Santoso, M.M.): Mohon maaf, naskah ini belum memenuhi kriteria publikasi Rumah Dessa Mentari. Kami tidak memublikasikan naskah ajakan spekulasi finansial atau promosi instrumen berisiko tinggi tanpa izin regulator OJK/Bappebti demi melindungi pembaca. Silakan fokus menyusun topik seputar ekonomi riil, UMKM, atau literasi.',
    submittedAt: '2026-10-14T09:00:00Z',
    reviewedAt: '2026-10-15T11:00:00Z',
    views: 0,
    content: `Pasar aset digital terus berfluktuasi dengan cepat dalam hitungan jam. Diperlukan kewaspadaan tinggi bagi para pemula sebelum menempatkan dana...`
  },
  {
    id: 'art-draft-1',
    slug: 'refleksi-pengajaran-membaca-di-ruang-kelas-bambu',
    title: 'Refleksi Pengajaran Membaca di Ruang Kelas Berdinding Bambu',
    summary: 'Catatan harian tentang ekspresi mata anak-anak saat pertama kali berhasil mengeja kata "Matahari" dengan lantang.',
    category: 'Pendidikan',
    tags: ['Catatan Guru', 'Pendidikan Pedesaan', 'Refleksi'],
    authorId: 'user-contributor-1',
    authorName: 'Arif Wicaksono',
    authorBio: 'Kontributor lepas, guru sekolah dasar di perbatasan, dan pencinta sastra lokal.',
    coverImage: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
    imageAttribution: 'Arsip Pribadi Arif Wicaksono',
    readingTime: 3,
    status: 'draft',
    sources: [],
    views: 0,
    content: `Pagi ini hujan rintik-rintik mengetuk atap seng sekolah kami. Angin dingin menyusup lewat celah dinding anyaman bambu, namun antusiasme lima belas anak di ruang kelas ini tidak sedikit pun surut. Mereka duduk melingkar dengan buku cerita dongeng nusantara di tangan masing-masing...`
  }
];

export const INITIAL_BOOKS: BookCatalogItem[] = [
  {
    id: 'book-1',
    title: 'Menembus Langit Asa: Kumpulan Esai Pendidikan dari Tapal Batas',
    author: 'Arif Wicaksono & Tim Relawan Guru',
    synopsis: 'Potret perjuangan, refleksi pedagogis, dan catatan ketulusan guru-guru yang mendidik di perbatasan negeri dengan fasilitas serbaminimal.',
    coverImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
    status: 'koleksi_kurasi',
    genre: 'Memoar & Bunga Rampai Pendidikan',
    estimatedPages: 196,
    targetAudience: 'Pendidik, mahasiswa, pemerhati sosial dan masyarakat luas'
  },
  {
    id: 'book-2',
    title: 'Menata Aksara Menghidupkan Jiwa: Panduan Praktis Menulis Naskah Buku',
    author: 'Tim Redaksi Rumah Dessa Mentari',
    synopsis: 'Panduan menyeluruh dari merumuskan gagasan awal, menyusun outline bab, menyunting draf sendiri, hingga memilih jalur publikasi yang bermartabat.',
    coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80',
    status: 'segera_terbit',
    genre: 'Panduan Kepenulisan & Literasi',
    estimatedPages: 220,
    targetAudience: 'Penulis pemula, akademisi, dan profesional'
  },
  {
    id: 'book-3',
    title: 'Geliat Ekonomi di Bawah Lindungan Mentari: Kisah 10 Pengusaha Lokal',
    author: 'Deni Santoso, M.M.',
    synopsis: 'Studi kasus inspiratif mengenai inovasi produk, pemanfaatan kearifan lokal, dan strategi bertahan pelaku usaha kecil menengah di Indonesia.',
    coverImage: 'https://images.unsplash.com/photo-1532012164546-f432f2e3777f?auto=format&fit=crop&w=600&q=80',
    status: 'pembinaan_naskah',
    genre: 'Inspirasi Bisnis & UMKM',
    estimatedPages: 180,
    targetAudience: 'Pelaku UMKM, wirausahawan muda, dan pembaca umum'
  }
];
