export const portfolioData = {
  personal: {
    name: "Anggara Kurniawan",
    shortName: "Angga",
    role: "Information Systems Specialist & Software Engineer",
    subRoles: [
      "Full-stack Web Developer",
      "IoT & Smart Systems Builder",
      "IT Support & Infrastructure Engineer",
      "System & Data Analyst"
    ],
    bio: "Lulusan S1 Sistem Informasi Institut Teknologi Kalimantan (IPK 3.63). Berpengalaman dalam merancang arsitektur sistem informasi enterprise (Laravel & Vue.js/React), sistem monitoring IoT hemat energi, dan infrastruktur IT jaringan/server lapangan berkeandalan tinggi.",
    location: "Balikpapan, Kalimantan Timur, Indonesia",
    email: "anggarabppn@gmail.com",
    phone: "+62 878-7246-2520",
    phoneUrl: "https://wa.me/6287872462520",
    github: "https://github.com/AnggaraKurniawan1",
    gpa: "3.63 / 4.00",
    availableForHire: true,
    cvPath: "./CV_Anggara_Kurniawan.pdf",
    profileImage: "./images/profile.png"
  },

  stats: [
    { label: "IPK Kelulusan", value: "3.63", suffix: "/4.00" },
    { label: "Proyek Selesai", value: "10+", suffix: "" },
    { label: "Skor UAT SIMLAB", value: "91.2%", suffix: "" },
    { label: "Unit Test Pass", value: "100%", suffix: " (PHPUnit)" }
  ],

  skillCategories: [
    {
      title: "Web & Frontend Development",
      description: "Membangun antarmuka modern yang cepat, responsive, dan interaktif.",
      skills: [
        { name: "React.js", level: "Advanced", icon: "Code" },
        { name: "Vue.js", level: "Advanced", icon: "Code" },
        { name: "Tailwind CSS", level: "Expert", icon: "Layout" },
        { name: "HTML5 & Modern CSS3", level: "Expert", icon: "Layers" },
        { name: "JavaScript (ES6+)", level: "Advanced", icon: "Code" }
      ]
    },
    {
      title: "Backend & Database",
      description: "Perancangan REST API, logika bisnis, dan basis data terstruktur.",
      skills: [
        { name: "Laravel (PHP)", level: "Advanced", icon: "Server" },
        { name: "MySQL / Relational DB", level: "Advanced", icon: "Database" },
        { name: "RESTful API Design", level: "Advanced", icon: "Globe" },
        { name: "PHPUnit Automated Testing", level: "Intermediate", icon: "CheckCircle" },
        { name: "MVC Architecture", level: "Advanced", icon: "Layers" }
      ]
    },
    {
      title: "IoT & Embedded Systems",
      description: "Integrasi sensor fisik, mikrokontroler, dan pengolahan data telemetri.",
      skills: [
        { name: "Arduino UNO", level: "Advanced", icon: "Cpu" },
        { name: "ESP8266 Wi-Fi Module", level: "Advanced", icon: "Wifi" },
        { name: "PZEM-004T (Energy Meter)", level: "Advanced", icon: "Zap" },
        { name: "DHT11 Sensor & Telemetri", level: "Advanced", icon: "Activity" },
        { name: "Hardware Prototyping", level: "Intermediate", icon: "Cpu" }
      ]
    },
    {
      title: "IT Support & Network Infrastructure",
      description: "Manajemen jaringan on-site, server lokal, router, dan troubleshooting.",
      skills: [
        { name: "Router & Switch Config", level: "Advanced", icon: "Network" },
        { name: "Local Server Deployment", level: "Advanced", icon: "Server" },
        { name: "Hardware Troubleshooting", level: "Advanced", icon: "Wrench" },
        { name: "Odoo ERP System", level: "Intermediate", icon: "Boxes" },
        { name: "UI/UX Prototyping (Figma)", level: "Intermediate", icon: "Figma" }
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
      badge: "Sistem Informasi & Skripsi Unggulan",
      summary: "Digitalisasi menyeluruh 4 layanan utama laboratorium komputer STMIK Samarinda dari proses manual kertas/Excel menjadi sistem berbasis web terintegrasi.",
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
      id: "iot-ac",
      title: "IoT AC Monitoring & Energy Efficiency",
      subtitle: "Sistem Monitoring Real-Time Penggunaan & Konsumsi Daya Listrik AC",
      category: "Internet of Things & Smart Campus",
      featured: true,
      badge: "Dipublikasikan di SPECTA Journal of Technology",
      summary: "Solusi IoT terintegrasi untuk mendeteksi pemborosan listrik di ruang kelas dengan memantau tegangan RMS, arus, daya aktif, dan status AC secara real-time ke web.",
      metrics: [
        { label: "Akurasi Standby", value: "1.7 - 1.9 W" },
        { label: "Akurasi Aktif", value: "216.8 - 258.3 W" },
        { label: "Potensi Penghematan", value: "Hingga 40-60% Beban Listrik" },
        { label: "Status Publikasi", value: "SPECTA Journal Vol. 10 No. 1" }
      ],
      techStack: ["Arduino UNO", "ESP8266", "PZEM-004T", "DHT11", "MySQL", "Web Dashboard"],
      highlights: [
        "Sensor PZEM-004T membaca tegangan RMS, arus, dan daya aktif secara presisi langsung dari jalur AC.",
        "Sensor DHT11 mengukur suhu dan kelembaban ruangan untuk korelasi efisiensi pendinginan.",
        "Arduino UNO memproses sinyal telemetri dan ESP8266 mengirimkan data via Wi-Fi ke basis data MySQL.",
        "Dashboard berbasis web menyajikan grafik konsumsi energi secara langsung kepada pengelola gedung kampus."
      ],
      github: null,
      liveUrl: "https://journal.itk.ac.id/index.php/sjt"
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
        { label: "Data Handling", value: "Sinkronisasi Real-Time" }
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
      summary: "Eksplorasi pembuatan sistem agentik pintar untuk otomasi alur kerja dan penanganan instruksi adaptif.",
      techStack: ["Python", "AI Agent Workflow", "GitHub API"],
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
      "Fokus kurikulum: Analisis & Perancangan Sistem Informasi, Arsitektur Enterprise, Rekayasa Perangkat Lunak, Manajemen Basis Data, dan IoT.",
      "Tugas Akhir: Sistem Informasi Layanan Laboratorium (SIMLAB STMIK) dengan integrasi Laravel, Vue.js, dan metode Personal Extreme Programming.",
      "Riset Terpublikasi: Ko-penulis publikasi jurnal ilmiah sistem monitoring AC berbasis IoT di SPECTA Journal of Technology."
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
