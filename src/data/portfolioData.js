export const portfolioData = {
  personal: {
    name: "Anggara Kurniawan",
    shortName: "Angga",
    role: "Information Systems Graduate & Junior Tech Specialist",
    subRoles: [
      "Analisis Sistem & Basis Data",
      "IT Support & Jaringan",
      "Web Development (Eksplorasi Otodidak)",
      "Data Analytics & UI/UX Dasar"
    ],
    bio: "Lulusan S1 Sistem Informasi Institut Teknologi Kalimantan (IPK 3.63). Memiliki fondasi dan pemahaman alur di bidang Analisis Sistem, Basis Data, IT Support lapangan, dan Pengembangan Web. Memiliki etos kerja tinggi, adaptif, serta antusias untuk terus belajar dan memperdalam implementasi teknologi secara mandiri (otodidak).",
    location: "Balikpapan, Kalimantan Timur, Indonesia",
    email: "anggarabppn@gmail.com",
    phone: "+62 878-7246-2520",
    phoneUrl: "https://wa.me/6287872462520",
    github: "https://github.com/AnggaraKurniawan1",
    gpa: "3.63 / 4.00",
    availableForHire: true,
    cvPath: "./CV_Anggara_Kurniawan.pdf"
  },

  stats: [
    { label: "IPK Kelulusan", value: "3.63", suffix: "/4.00" },
    { label: "Pengalaman Event & Proyek", value: "4+", suffix: " Kegiatan" },
    { label: "Metode & Pengujian", value: "PXP", suffix: " & UAT" },
    { label: "Mindset", value: "100%", suffix: " Siap Belajar" }
  ],

  learningPhilosophy: {
    title: "Prinsip Belajar & Karakter Kerja",
    quote: "Mengetahui fondasi dan alur logika sistem adalah modal utama. Ketika dihadapkan pada masalah implementasi baru, saya selalu siap menggali dokumentasi dan belajar secara otodidak hingga solusi tercapai.",
    points: [
      "Pemahaman konsep dasar dan diagram alur sistem yang terstruktur.",
      "Cepat beradaptasi dengan stack atau teknologi baru yang dibutuhkan tim.",
      "Berpengalaman koordinasi teknis di bawah tekanan situasi lapangan (IT Support event).",
      "Komitmen belajar mandiri secara berkelanjutan (otodidak)."
    ]
  },

  skillCategories: [
    {
      title: "IT Support & Infrastruktur Jaringan",
      description: "Pengalaman praktis saat event dan operasional teknis lapangan.",
      skills: [
        { name: "IT Support Lapangan", level: "Praktik Lapangan", note: "Pengalaman di Bayan Run & Event Ciroes", icon: "Wrench" },
        { name: "Konfigurasi Router & Switch", level: "Dasar / Paham Alur", note: "Setup jaringan LAN lokal event", icon: "Network" },
        { name: "Hardware & PC Troubleshooting", level: "Familiar", note: "Pengecekan perangkat keras & periferal", icon: "Server" },
        { name: "Setup Local Server & LAN", level: "Dasar & Eksplorasi", note: "Penyediaan server offline lokal", icon: "Network" }
      ]
    },
    {
      title: "Analisis Sistem & Basis Data",
      description: "Fondasi akademik sistem informasi untuk memetakan proses bisnis.",
      skills: [
        { name: "Analisis Kebutuhan Sistem", level: "Pemahaman Konsep", note: "Identifikasi user requirements & flow", icon: "FileText" },
        { name: "Basis Data MySQL", level: "Dasar / Familiar", note: "Query dasar & perancangan tabel relasional", icon: "Database" },
        { name: "Pemodelan Sistem (ERD/BPMN)", level: "Pemahaman Konsep", note: "Diagram alur data & entitas", icon: "Layers" },
        { name: "Odoo ERP System", level: "Pengenalan Modul", note: "Mengetahui konsep dasar modul ERP", icon: "Boxes" }
      ]
    },
    {
      title: "Pengembangan Web (Eksplorasi Otodidak)",
      description: "Memahami struktur dasar kode dan terus berkembang secara mandiri.",
      skills: [
        { name: "HTML5 & CSS3 Dasar", level: "Familiar", note: "Paham sintaks & struktur markup web", icon: "Code" },
        { name: "Tailwind CSS", level: "Dasar & Eksplorasi", note: "Penggunaan utility-first styling", icon: "Layout" },
        { name: "JavaScript (Dasar)", level: "Belajar Otodidak", note: "Logika dasar pemrograman web", icon: "Code" },
        { name: "PHP & Laravel (Konsep MVC)", level: "Dasar / Paham Alur", note: "Pernah digunakan pada skripsi SIMLAB", icon: "Server" },
        { name: "Vue.js & React (Dasar)", level: "Belajar Otodidak", note: "Pengenalan komponen frontend modern", icon: "Code" }
      ]
    },
    {
      title: "Data Analytics & UI/UX Desain",
      description: "Keterampilan pelengkap berbasis pelatihan kampus dan minat kreatif.",
      skills: [
        { name: "Data Analyst Dasar", level: "Pelatihan ITK", note: "Mengubah data menjadi informasi keputusan", icon: "TrendingUp" },
        { name: "UI/UX Prototyping (Figma)", level: "Dasar / Konseptual", note: "Wireframing dan tata letak layar", icon: "Figma" },
        { name: "Desain Grafis & Visual", level: "Pelatihan ITK", note: "Estetika visual & materi presentasi", icon: "Palette" }
      ]
    }
  ],

  projects: [
    {
      id: "simlab",
      title: "SIMLAB STMIK Samarinda",
      subtitle: "Sistem Informasi Layanan Laboratorium (Transformasi Digital)",
      category: "Web Application & System Analysis",
      featured: true,
      badge: "Skripsi Sistem Informasi",
      summary: "Rancang bangun sistem informasi layanan laboratorium untuk mendigitalisasi 4 layanan dari formulir fisik manual menjadi berbasis web menggunakan Laravel & Vue.js.",
      metrics: [
        { label: "Fokus Utama", value: "Analisis & Alur Sistem" },
        { label: "Hasil UAT", value: "91.2% (Sangat Baik)" },
        { label: "Metode", value: "Personal Extreme Programming" },
        { label: "Status Proyek", value: "Tugas Akhir S1" }
      ],
      techStack: ["Laravel", "Vue.js", "Tailwind CSS", "MySQL", "PHPUnit"],
      highlights: [
        "Menganalisis alur 4 layanan laboratorium: Sertifikasi Kompetensi, Izin Penelitian, Peminjaman Ruangan, dan Surat Bebas Lab.",
        "Merancang kebutuhan pengguna dalam 24 user stories terstruktur melalui metode PXP.",
        "Mengimplementasikan integrasi antarmuka dan basis data sesuai arsitektur MVC.",
        "Pengujian fungsional dan pengujian penerimaan pengguna (UAT) dengan respons positif."
      ],
      github: "https://github.com/AnggaraKurniawan1/simlab.stmik",
      liveUrl: null
    },
    {
      id: "bayan-run-it",
      title: "On-Site IT Support Bayan Run 2026",
      subtitle: "Dukungan Infrastruktur Jaringan & Server Lokal Lapangan",
      category: "IT Support & Network Operations",
      featured: true,
      badge: "Pandara Sports Event",
      summary: "Pengalaman terjun langsung mengelola router, switch, dan server data lokal mandiri untuk kelancaran sistem registrasi maraton di lokasi tanpa ketergantungan internet luar.",
      metrics: [
        { label: "Peran", value: "IT Support On-Site" },
        { label: "Tantangan", value: "Jaringan Publik Terbatas" },
        { label: "Solusi", value: "Server & LAN Lokal" },
        { label: "Hasil", value: "Operasional Lancar" }
      ],
      techStack: ["Router & Switch", "Local Web Server", "Local Database", "LAN Network"],
      highlights: [
        "Membantu konfigurasi perangkat jaringan (router dan switch) untuk mendistribusikan akses data kepanitiaan.",
        "Memastikan website lokal dan data peserta dapat diakses lancar di area kegiatan.",
        "Sigap melakukan troubleshooting teknis perangkat keras dan koneksi jaringan di bawah tempo acara yang padat."
      ],
      github: null,
      liveUrl: null
    },
    {
      id: "chicken-agent",
      title: "Chicken-Agent",
      subtitle: "Eksplorasi Otomasi Skrip & AI Workflow",
      category: "Eksplorasi & Pembelajaran",
      featured: false,
      badge: "Eksplorasi Mandiri",
      summary: "Proyek pembelajaran pribadi untuk memahami cara kerja alur perintah otomasi cerdas dan manajemen repositori di GitHub.",
      techStack: ["Python", "Task Workflow", "GitHub"],
      highlights: [
        "Mempelajari logika dasar otomasi instruksi bertahap.",
        "Mempraktikkan alur version control kolaboratif di GitHub."
      ],
      github: "https://github.com/AnggaraKurniawan1/Chicken-Agent",
      liveUrl: null
    }
  ],

  experiences: [
    {
      company: "Pandara Sports",
      location: "Balikpapan Selatan, Kalimantan Timur",
      role: "IT Support - Bayan Run 2026",
      period: "Oktober 2026",
      type: "Event Contract",
      description: "Bertanggung jawab atas kesiapan operasional IT dan koneksi jaringan lokal pada ajang maraton akbar Bayan Run 2026.",
      tasks: [
        "Membantu penyiapan server lokal dan data peserta agar tetap dapat diakses tanpa koneksi internet publik.",
        "Melakukan setup dan pengaturan kabel, router, serta switch untuk pembagian akses komputer panitia.",
        "Siap tanggap mengatasi kendala koneksi dan perangkat keras selama acara berlangsung."
      ]
    },
    {
      company: "Ciroes x Angkasa Pura",
      location: "Balikpapan, Kalimantan Timur",
      role: "Helper Event Cleanup Day",
      period: "Agustus 2026",
      type: "Event Volunteer",
      description: "Kolaborasi aksi lingkungan bersama pihak bandara Angkasa Pura untuk mendukung ketertiban koordinasi operasional tim.",
      tasks: [
        "Mendukung pendataan perlengkapan kerja dan koordinasi tim lapangan.",
        "Membantu kelancaran alur pelaksanaan program di lokasi."
      ]
    },
    {
      company: "Ciroes",
      location: "Balikpapan, Kalimantan Timur",
      role: "Staff Perlengkapan - Event PLN Balikpapan",
      period: "Juni 2026",
      type: "Event Operations",
      description: "Memastikan kesiapan peralatan teknis dan logistik untuk kelancaran kegiatan korporat PT PLN (Persero).",
      tasks: [
        "Membantu instalasi dan pengecekan kelayakan peralatan teknis di lokasi.",
        "Melakukan inventarisasi dan koordinasi ketersediaan kebutuhan teknis."
      ]
    },
    {
      company: "Event Organizer BUMN x Pertamina",
      location: "Balikpapan, Kalimantan Timur",
      role: "Staff Gudang & Logistik",
      period: "Desember 2024",
      type: "Logistics Operations",
      description: "Pengawasan keluar-masuk barang dan pencatatan distribusi logistik kegiatan.",
      tasks: [
        "Pencatatan alur inventaris dengan rapi dan teliti.",
        "Menjaga kesesuaian fisik barang dengan data inventaris."
      ]
    }
  ],

  education: {
    institution: "Institut Teknologi Kalimantan (ITK)",
    degree: "Sarjana Sistem Informasi (S.Kom.)",
    faculty: "Jurusan Matematika dan Teknologi Informasi",
    gpa: "3.63 / 4.00",
    period: "2022 - 2026",
    location: "Balikpapan, Kalimantan Timur",
    highlights: [
      "Fokus kurikulum: Analisis & Perancangan Sistem Informasi, Basis Data, Rekayasa Perangkat Lunak, dan Manajemen Layanan IT.",
      "Tugas Akhir: Rancang Bangun Sistem Informasi Layanan Laboratorium (SIMLAB STMIK) menggunakan Laravel & Vue.js dengan metode Personal Extreme Programming.",
      "Komitmen: Menguasai dasar-dasar arsitektur sistem dan terus membuka diri untuk mempelajari implementasi baru di industri."
    ]
  },

  achievements: [
    {
      title: "Juara 2 Lomba Kreativitas dan Inovasi Regional",
      issuer: "Pemerintah Daerah / Tingkat Regional Kalimantan",
      year: "2024",
      icon: "Award",
      badge: "Prestasi Regional",
      description: "Inovasi gagasan pemecahan masalah dengan pendekatan teknologi terapan."
    },
    {
      title: "Finalis Lomba Kewirausahaan Nasional (P2MW)",
      issuer: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi RI",
      year: "2024",
      icon: "TrendingUp",
      badge: "Prestasi Nasional",
      description: "Program Pembinaan Mahasiswa Wirausaha tingkat nasional yang diselenggarakan Belmawa Kemendikbudristek."
    }
  ],

  certifications: [
    {
      title: "Test of English as a Foreign Language (TOEFL)",
      issuer: "Brighten English",
      period: "Februari 2025 - Februari 2027",
      credentialId: "Valid Verified",
      icon: "Award"
    },
    {
      title: "Pelatihan Data Analytics: Mengubah Data Menjadi Keputusan",
      issuer: "Institut Teknologi Kalimantan (ITK)",
      period: "Juni 2025",
      credentialId: "TIK-ITK-2025",
      icon: "FileText"
    },
    {
      title: "Temukan Kreativitas: Peningkatan Keterampilan Pembuatan Video",
      issuer: "Institut Teknologi Kalimantan (ITK)",
      period: "Mei 2024",
      credentialId: "TIK-ITK-2024",
      icon: "Video"
    },
    {
      title: "Menggali Potensi dalam Desain Grafis & Visual",
      issuer: "Institut Teknologi Kalimantan (ITK)",
      period: "Februari 2024",
      credentialId: "TIK-ITK-2024",
      icon: "Palette"
    }
  ]
};
