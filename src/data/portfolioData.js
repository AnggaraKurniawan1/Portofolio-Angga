export const portfolioData = {
  personal: {
    name: "Anggara Kurniawan",
    shortName: "Angga",
    role: "Information Systems Specialist & Software Engineer",
    subRoles: [
      "Analisis Sistem & Basis Data",
      "IT Support & Jaringan",
      "Full-stack Web Developer",
      "Data Analytics & UI/UX"
    ],
    bio: "Lulusan S1 Sistem Informasi Institut Teknologi Kalimantan (IPK 3.63) dengan fokus keahlian di bidang Analisis Sistem, Basis Data, IT Support, dan Pengembangan Aplikasi. Berpengalaman dalam perancangan aplikasi web enterprise (Laravel & Vue.js/React), konfigurasi router & switch jaringan lokal, serta pemodelan sistem informasi.",
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
    { label: "Proyek & Operasional", value: "5+", suffix: " Portofolio" },
    { label: "Hasil UAT SIMLAB", value: "91.2%", suffix: " (Sangat Baik)" },
    { label: "Unit Test Pass", value: "100%", suffix: " (PHPUnit)" }
  ],

  skillCategories: [
    {
      title: "IT Support & Infrastruktur Jaringan",
      description: "Manajemen jaringan on-site, server lokal, router, switch, dan troubleshooting hardware.",
      skills: [
        { name: "IT Support Lapangan", level: "Advanced", icon: "Wrench" },
        { name: "Konfigurasi Router & Switch", level: "Advanced", icon: "Network" },
        { name: "Setup Local Server & LAN", level: "Advanced", icon: "Server" },
        { name: "Hardware & PC Troubleshooting", level: "Advanced", icon: "Wrench" }
      ]
    },
    {
      title: "Analisis Sistem & Basis Data",
      description: "Analisis proses bisnis, pemetaan kebutuhan pengguna, dan perancangan basis data terstruktur.",
      skills: [
        { name: "Analisis Kebutuhan Sistem", level: "Advanced", icon: "FileText" },
        { name: "Basis Data MySQL Relasional", level: "Advanced", icon: "Database" },
        { name: "Pemodelan Sistem (ERD/BPMN)", level: "Advanced", icon: "Layers" },
        { name: "Odoo ERP System", level: "Advanced", icon: "Boxes" }
      ]
    },
    {
      title: "Pengembangan Web & Aplikasi",
      description: "Membangun aplikasi web fungsional dengan arsitektur MVC dan teknologi modern.",
      skills: [
        { name: "Laravel (PHP)", level: "Advanced", icon: "Server" },
        { name: "Vue.js & React", level: "Advanced", icon: "Code" },
        { name: "Tailwind CSS", level: "Advanced", icon: "Layout" },
        { name: "HTML5 & Modern CSS3", level: "Advanced", icon: "Layers" },
        { name: "JavaScript (ES6+)", level: "Advanced", icon: "Code" }
      ]
    },
    {
      title: "Data Analytics & UI/UX Design",
      description: "Pengolahan data untuk pengambilan keputusan dan perancangan antarmuka visual.",
      skills: [
        { name: "Data Analytics & Reporting", level: "Advanced", icon: "TrendingUp" },
        { name: "UI/UX Prototyping (Figma)", level: "Advanced", icon: "Figma" },
        { name: "Desain Grafis & Visual", level: "Advanced", icon: "Palette" }
      ]
    }
  ],

  projects: [
    {
      id: "simlab",
      title: "SIMLAB STMIK Samarinda",
      subtitle: "Sistem Informasi Layanan Laboratorium untuk Transformasi Digital",
      category: "Full-Stack Web Application",
      featured: true,
      badge: "Skripsi Sistem Informasi",
      summary: "Digitalisasi menyeluruh 4 layanan utama laboratorium komputer STMIK Samarinda dari proses manual kertas/Excel menjadi sistem berbasis web terintegrasi menggunakan arsitektur MVC (Laravel + Vue.js).",
      metrics: [
        { label: "UAT Score", value: "91.2% (Sangat Baik)" },
        { label: "Unit Testing", value: "100% Pass (97 Test Cases)" },
        { label: "Black Box Testing", value: "100% Pass (35 Skenario)" },
        { label: "Metodologi", value: "Personal Extreme Programming (PXP)" }
      ],
      techStack: ["Laravel", "Vue.js", "Tailwind CSS", "MySQL", "PHPUnit"],
      highlights: [
        "Mendigitalisasi 4 layanan inti: Sertifikasi Kompetensi, Izin Penelitian, Peminjaman Ruangan, dan Surat Bebas Lab.",
        "Fitur deteksi tanggungan lintas modul dan validasi tumpang tindih jadwal secara real-time.",
        "Alur persetujuan (approval) berjenjang dengan hak akses untuk 4 aktor pengguna berbeda.",
        "Dikembangkan dengan 24 user stories terstruktur melalui 5 iterasi Personal Extreme Programming."
      ],
      github: "https://github.com/AnggaraKurniawan1/simlab.stmik",
      liveUrl: null
    },
    {
      id: "bayan-run-it",
      title: "On-Site IT Infrastructure Bayan Run 2026",
      subtitle: "High-Availability Offline Server & Local Network Operations",
      category: "IT Support & Network Engineering",
      featured: true,
      badge: "Pandara Sports Event",
      summary: "Perancangan dan implementasi infrastruktur jaringan lokal dan server data terisolasi di lokasi acara maraton besar dengan keterbatasan konektivitas publik.",
      metrics: [
        { label: "Downtime", value: "0% Selama Event" },
        { label: "Konektivitas", value: "Private LAN & Isolated Server" },
        { label: "Data Handling", value: "Sinkronisasi Real-Time" },
        { label: "Operasional", value: "High Pressure Environment" }
      ],
      techStack: ["Router & Switch Config", "Local Web Server", "Local Database", "LAN Network Mesh"],
      highlights: [
        "Menyelesaikan masalah ketiadaan jaringan publik dengan membangun server lokal mandiri di area event.",
        "Mengonfigurasi router, switch, dan topologi kabel LAN agar sistem registrasi dan data peserta berjalan tanpa lag.",
        "Troubleshooting hardware dan jaringan secara langsung (on-site) dengan respon cepat di bawah tekanan acara berkapasitas tinggi."
      ],
      github: null,
      liveUrl: null
    },
    {
      id: "chicken-agent",
      title: "Chicken-Agent",
      subtitle: "Autonomous Agent & Task Automation Solution",
      category: "Artificial Intelligence & Automation",
      featured: false,
      badge: "Open Source Project",
      summary: "Eksplorasi pembuatan sistem cerdas untuk automasi alur kerja dan penanganan instruksi adaptif.",
      techStack: ["Python", "Task Workflow", "GitHub API"],
      highlights: [
        "Mengintegrasikan automasi logika perintah cerdas berbasis modular.",
        "Pengelolaan kode dan repositori kolaboratif di GitHub."
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
      description: "Bertanggung jawab atas kelancaran infrastruktur sistem informasi dan jaringan pada event maraton akbar Bayan Run 2026.",
      tasks: [
        "Membangun dan mengonfigurasi local server dan basis data mandiri untuk mengatasi kendala sinyal/jaringan publik.",
        "Melakukan setup dan manajemen router serta switch untuk pembagian akses data operasional panitia.",
        "Memastikan website lokal dan data peserta dapat diakses lancar secara real-time tanpa ketergantungan internet luar."
      ]
    },
    {
      company: "Ciroes x Angkasa Pura",
      location: "Balikpapan, Kalimantan Timur",
      role: "Helper Event Cleanup Day",
      period: "Agustus 2026",
      type: "Event Volunteer",
      description: "Kolaborasi aksi lingkungan bersama pengelola bandara Angkasa Pura untuk optimalisasi koordinasi logistik dan operasional.",
      tasks: [
        "Mendukung koordinasi tim lapangan dan pendataan perlengkapan kerja.",
        "Berpartisipasi aktif dalam kegiatan keberlanjutan dan manajemen limbah lokasi."
      ]
    },
    {
      company: "Ciroes",
      location: "Balikpapan, Kalimantan Timur",
      role: "Staff Perlengkapan - Event PLN Balikpapan",
      period: "Juni 2026",
      type: "Event Operations",
      description: "Manajemen kesiapan peralatan teknis dan logistik untuk kelancaran pelaksanaan event korporat PT PLN (Persero).",
      tasks: [
        "Memastikan seluruh perangkat teknis dan kelistrikan terpasang sesuai standar keamanan.",
        "Melakukan inventarisasi dan koordinasi ketersediaan suplai di lapangan."
      ]
    },
    {
      company: "Event Organizer BUMN x Pertamina",
      location: "Balikpapan, Kalimantan Timur",
      role: "Staff Gudang & Logistik",
      period: "Desember 2024",
      type: "Logistics Operations",
      description: "Pengendalian inventaris dan distribusi material event besar gabungan BUMN dan Pertamina.",
      tasks: [
        "Pengawasan alur masuk-keluar barang dengan sistem pencatatan terstruktur.",
        "Menjaga akurasi stok dan koordinasi cepat dengan koordinator lapangan."
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
      "Fokus kurikulum: Analisis & Perancangan Sistem Informasi, Arsitektur Enterprise, Rekayasa Perangkat Lunak, Manajemen Basis Data, dan Tata Kelola IT.",
      "Tugas Akhir: Rancang Bangun Sistem Informasi Layanan Laboratorium (SIMLAB STMIK) menggunakan Laravel & Vue.js dengan metode Personal Extreme Programming.",
      "Pengujian Komprehensif: Kelulusan 100% PHPUnit unit testing (97 test case) dan evaluasi UAT 91.2% (Sangat Baik)."
    ]
  },

  achievements: [
    {
      title: "Juara 2 Lomba Kreativitas dan Inovasi Regional",
      issuer: "Pemerintah Daerah / Tingkat Regional Kalimantan",
      year: "2024",
      icon: "Award",
      badge: "Prestasi Regional",
      description: "Inovasi berbasis solusi teknologi terapan untuk memecahkan permasalahan nyata masyarakat."
    },
    {
      title: "Finalis Lomba Kewirausahaan Nasional (P2MW)",
      issuer: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi RI",
      year: "2024",
      icon: "TrendingUp",
      badge: "Prestasi Nasional",
      description: "Kompetisi Program Pembinaan Mahasiswa Wirausaha tingkat nasional yang diselenggarakan Belmawa Kemendikbudristek."
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
