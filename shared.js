// ==========================================================================
// KASIR PINTAR POS & INVENTARIS - SHARED CORE MODULE (shared.js)
// Modul sentral untuk persistensi database relasional ERD (localStorage),
// autentikasi sesi, efek suara, format mata uang, dan navigasi bersama.
// ==========================================================================

// --- PRESET ILUSTRASI FOTO BARANG (SVG DATA URI BERKUALITAS TINGGI) ---
const PRESET_PHOTOS = {
  kopi: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 120" width="160" height="120"><rect width="160" height="120" fill="%23292524"/><circle cx="80" cy="55" r="32" fill="%2378350f"/><ellipse cx="80" cy="55" rx="26" ry="20" fill="%23451a03"/><path d="M72,42 Q80,55 88,68" stroke="%23fef3c7" stroke-width="3" fill="none" stroke-linecap="round"/><rect x="40" y="94" width="80" height="16" rx="4" fill="%23b45309"/><text x="80" y="106" font-family="sans-serif" font-size="10" font-weight="bold" fill="%23ffffff" text-anchor="middle">KOPI GAYO</text></svg>`,
  
  beras: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 120" width="160" height="120"><rect width="160" height="120" fill="%23f1f5f9"/><path d="M45,30 C45,20 115,20 115,30 L118,98 C118,105 42,105 42,98 Z" fill="%23fef08a" stroke="%23eab308" stroke-width="2"/><ellipse cx="80" cy="30" rx="35" ry="10" fill="%23fef9c3"/><circle cx="80" cy="62" r="18" fill="%2316a34a"/><text x="80" y="66" font-family="sans-serif" font-size="9" font-weight="bold" fill="%23ffffff" text-anchor="middle">BERAS 5KG</text><rect x="52" y="86" width="56" height="8" rx="2" fill="%23ca8a04"/></svg>`,
  
  minuman: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 120" width="160" height="120"><rect width="160" height="120" fill="%23e0f2fe"/><rect x="62" y="32" width="36" height="70" rx="10" fill="%2338bdf8" stroke="%230284c7" stroke-width="2"/><rect x="70" y="18" width="20" height="14" rx="3" fill="%23bae6fd"/><rect x="62" y="55" width="36" height="24" fill="%230284c7"/><text x="80" y="70" font-family="sans-serif" font-size="8" font-weight="bold" fill="%23ffffff" text-anchor="middle">MINERAL</text><circle cx="80" cy="92" r="3" fill="%23ffffff" opacity="0.8"/></svg>`,
  
  teh: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 120" width="160" height="120"><rect width="160" height="120" fill="%23fef3c7"/><rect x="64" y="30" width="32" height="72" rx="8" fill="%23b45309" stroke="%2378350f" stroke-width="2"/><rect x="70" y="16" width="20" height="14" rx="2" fill="%23ef4444"/><rect x="64" y="52" width="32" height="26" fill="%23dc2626"/><text x="80" y="68" font-family="sans-serif" font-size="8" font-weight="bold" fill="%23ffffff" text-anchor="middle">TEH BOTOL</text></svg>`,
  
  snack: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 120" width="160" height="120"><rect width="160" height="120" fill="%23fff7ed"/><polygon points="45,26 115,22 110,98 50,102" fill="%23f97316" stroke="%23ea580c" stroke-width="2"/><ellipse cx="80" cy="62" rx="20" ry="18" fill="%23facc15"/><text x="80" y="66" font-family="sans-serif" font-size="9" font-weight="bold" fill="%239a3412" text-anchor="middle">KERIPIK</text><line x1="45" y1="26" x2="115" y2="22" stroke="%23c2410c" stroke-width="3"/></svg>`,
  
  buku: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 120" width="160" height="120"><rect width="160" height="120" fill="%23f5f3ff"/><rect x="46" y="24" width="68" height="80" rx="5" fill="%234f46e5" stroke="%233730a3" stroke-width="2"/><rect x="46" y="24" width="14" height="80" rx="3" fill="%23312e81"/><rect x="68" y="42" width="38" height="24" rx="3" fill="%23ffffff"/><text x="87" y="57" font-family="sans-serif" font-size="8" font-weight="bold" fill="%234f46e5" text-anchor="middle">BUKU 38L</text><line x1="64" y1="78" x2="108" y2="78" stroke="%23a5b4fc" stroke-width="2"/></svg>`,
  
  pulpen: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 120" width="160" height="120"><rect width="160" height="120" fill="%23f0fdfa"/><polygon points="40,95 48,93 118,28 110,20 40,85" fill="%230f766e"/><polygon points="35,100 40,95 40,85" fill="%23f59e0b"/><polygon points="32,103 35,100 37,102" fill="%23111827"/><rect x="105" y="15" width="18" height="20" rx="4" fill="%23134e4a" transform="rotate(45 114 25)"/></svg>`,
  
  minyak: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 120" width="160" height="120"><rect width="160" height="120" fill="%23fefce8"/><rect x="55" y="32" width="50" height="74" rx="8" fill="%23eab308" stroke="%23ca8a04" stroke-width="2"/><rect x="68" y="16" width="24" height="16" rx="3" fill="%23ca8a04"/><circle cx="80" cy="65" r="16" fill="%23ffffff" opacity="0.9"/><text x="80" y="69" font-family="sans-serif" font-size="8" font-weight="bold" fill="%23854d0e" text-anchor="middle">MINYAK 2L</text></svg>`
};

// --- INITIAL DATABASE BERDASARKAN ERD LENGKAP ---
const INITIAL_DATABASE = {
  tb_sekolah: [
    {
      id_sekolah: 1,
      kode_sekolah: 'SCH-001',
      nama_sekolah: 'SMA Negeri 1 Harapan Bangsa',
      alamat_sekolah: 'Jl. Pendidikan No. 45, Jakarta',
      website: 'https://sman1harapanbangsa.sch.id',
      is_active: 1,
      created_at: '2026-01-01 08:00:00'
    }
  ],

  roles: [
    { id_role: 1, nama_role: 'super admin' },
    { id_role: 2, nama_role: 'admin' },
    { id_role: 3, nama_role: 'kasir' }
  ],

  tb_user: [
    {
      id_user: 1,
      id_sekolah: 1,
      id_role: 3,
      username: 'kasir',
      password: '123',
      nama_lengkap: 'Rina Kasir',
      is_active: 1,
      created_at: '2026-01-01 09:00:00'
    },
    {
      id_user: 2,
      id_sekolah: 1,
      id_role: 2,
      username: 'admin',
      password: '123',
      nama_lengkap: 'Ahmad Admin',
      is_active: 1,
      created_at: '2026-01-01 09:00:00'
    },
    {
      id_user: 3,
      id_sekolah: 1,
      id_role: 1,
      username: 'superadmin',
      password: '123',
      nama_lengkap: 'Budi Super',
      is_active: 1,
      created_at: '2026-01-01 09:00:00'
    }
  ],

  tb_kelompok_kategori: [
    { id_kelompok: 1, id_sekolah: 1, nama_kelompok: 'Makanan & Minuman' },
    { id_kelompok: 2, id_sekolah: 1, nama_kelompok: 'Perlengkapan Sekolah' },
    { id_kelompok: 3, id_sekolah: 1, nama_kelompok: 'Kebutuhan Pokok' }
  ],

  tb_kategori: [
    { id_kategori: 1, id_kelompok: 1, nama: 'Snack & Makanan Ringan' },
    { id_kategori: 2, id_kelompok: 1, nama: 'Minuman Dingin' },
    { id_kategori: 3, id_kelompok: 2, nama: 'Alat Tulis Kantor (ATK)' },
    { id_kategori: 4, id_kelompok: 3, nama: 'Sembako' },
    { id_kategori: 5, id_kelompok: 1, nama: 'Kopi & Teh' }
  ],

  tb_supplier: [
    {
      id_supplier: 1,
      id_sekolah: 1,
      nama: 'PT Sumber Pangan Sejahtera',
      no_telepon: '0812-3456-7890',
      alamat_supplier: 'Kawasan Industri Pulogadung, Jakarta',
      is_delete: 0
    },
    {
      id_supplier: 2,
      id_sekolah: 1,
      nama: 'CV Mitra ATK Mandiri',
      no_telepon: '0857-9876-5432',
      alamat_supplier: 'Ruko Glodok Makmur No. 12, Jakarta Barat',
      is_delete: 0
    },
    {
      id_supplier: 3,
      id_sekolah: 1,
      nama: 'Distributor Minuman Segar Abadi',
      no_telepon: '0878-1122-3344',
      alamat_supplier: 'Jl. Daan Mogot Km. 11, Jakarta Barat',
      is_delete: 0
    }
  ],

  tb_barang: [
    {
      id_barang: 1,
      id_sekolah: 1,
      barcode: '899100110001',
      nama: 'Kopi Gayo Premium 250g',
      id_kategori: 5,
      id_kelompok_kategori: 1,
      id_supplier: 1,
      satuan: 'pack',
      harga_beli: 45000,
      harga_jual: 65000,
      stok: 24,
      is_active: 1,
      is_delete: 0,
      foto: PRESET_PHOTOS.kopi
    },
    {
      id_barang: 2,
      id_sekolah: 1,
      barcode: '899100110002',
      nama: 'Beras Organik Raja Pulen 5kg',
      id_kategori: 4,
      id_kelompok_kategori: 3,
      id_supplier: 1,
      satuan: 'pack',
      harga_beli: 72000,
      harga_jual: 88000,
      stok: 15,
      is_active: 1,
      is_delete: 0,
      foto: PRESET_PHOTOS.beras
    },
    {
      id_barang: 3,
      id_sekolah: 1,
      barcode: '899100110003',
      nama: 'Buku Tulis Sinar Dunia 38 Lembar',
      id_kategori: 3,
      id_kelompok_kategori: 2,
      id_supplier: 2,
      satuan: 'buku',
      harga_beli: 3200,
      harga_jual: 5000,
      stok: 85,
      is_active: 1,
      is_delete: 0,
      foto: PRESET_PHOTOS.buku
    },
    {
      id_barang: 4,
      id_sekolah: 1,
      barcode: '899100110004',
      nama: 'Pulpen Gel Standard 0.5mm Hitam',
      id_kategori: 3,
      id_kelompok_kategori: 2,
      id_supplier: 2,
      satuan: 'pcs',
      harga_beli: 2000,
      harga_jual: 3500,
      stok: 120,
      is_active: 1,
      is_delete: 0,
      foto: PRESET_PHOTOS.pulpen
    },
    {
      id_barang: 5,
      id_sekolah: 1,
      barcode: '899100110005',
      nama: 'Air Mineral Botol Dingin 600ml',
      id_kategori: 2,
      id_kelompok_kategori: 1,
      id_supplier: 3,
      satuan: 'botol',
      harga_beli: 2500,
      harga_jual: 4000,
      stok: 48,
      is_active: 1,
      is_delete: 0,
      foto: PRESET_PHOTOS.minuman
    },
    {
      id_barang: 6,
      id_sekolah: 1,
      barcode: '899100110006',
      nama: 'Teh Botol Sosro Dingin 250ml',
      id_kategori: 2,
      id_kelompok_kategori: 1,
      id_supplier: 3,
      satuan: 'botol',
      harga_beli: 4000,
      harga_jual: 6000,
      stok: 36,
      is_active: 1,
      is_delete: 0,
      foto: PRESET_PHOTOS.teh
    },
    {
      id_barang: 7,
      id_sekolah: 1,
      barcode: '899100110007',
      nama: 'Keripik Singkong Renyah Rasa Keju',
      id_kategori: 1,
      id_kelompok_kategori: 1,
      id_supplier: 1,
      satuan: 'pack',
      harga_beli: 7500,
      harga_jual: 12000,
      stok: 7,
      is_active: 1,
      is_delete: 0,
      foto: PRESET_PHOTOS.snack
    },
    {
      id_barang: 8,
      id_sekolah: 1,
      barcode: '899100110008',
      nama: 'Minyak Goreng Sania 2 Liter',
      id_kategori: 4,
      id_kelompok_kategori: 3,
      id_supplier: 1,
      satuan: 'pack',
      harga_beli: 31000,
      harga_jual: 36000,
      stok: 4,
      is_active: 1,
      is_delete: 0,
      foto: PRESET_PHOTOS.minyak
    },
    {
      id_barang: 9,
      id_sekolah: 1,
      barcode: '899100110009',
      nama: 'Kotak Pensil Karakter Sekolah',
      id_kategori: 3,
      id_kelompok_kategori: 2,
      id_supplier: 2,
      satuan: 'pcs',
      harga_beli: 15000,
      harga_jual: 25000,
      stok: 18,
      is_active: 1,
      is_delete: 0,
      foto: PRESET_PHOTOS.buku
    }
  ],

  tb_kelompok_pelanggan: [
    { id_kelompok_pelanggan: 1, id_sekolah: 1, nama_kelompok: 'Siswa / Siswi' },
    { id_kelompok_pelanggan: 2, id_sekolah: 1, nama_kelompok: 'Guru & Tenaga Pendidik' },
    { id_kelompok_pelanggan: 3, id_sekolah: 1, nama_kelompok: 'Pelanggan Umum' }
  ],

  tb_pelanggan: [
    {
      id_pelanggan: 1,
      id_kelompok_pelanggan: 3,
      nama_pelanggan: 'Pelanggan Umum',
      telepon: '-',
      alamat: 'Di tempat',
      is_delete: 0
    },
    {
      id_pelanggan: 2,
      id_kelompok_pelanggan: 1,
      nama_pelanggan: 'Doni Pratama (Kelas 11-A)',
      telepon: '0813-9988-7766',
      alamat: 'Komplek Griya Indah Blok C',
      is_delete: 0
    },
    {
      id_pelanggan: 3,
      id_kelompok_pelanggan: 2,
      nama_pelanggan: 'Ibu Siti Rahmawati, S.Pd (Guru)',
      telepon: '0812-7766-5544',
      alamat: 'Ruang Guru Lantai 2',
      is_delete: 0
    }
  ],

  tb_penjualan: [
    {
      id_penjualan: 1,
      id_sekolah: 1,
      id_user: 1,
      id_pelanggan: 1,
      nomor_faktur: 'INV/20260909/0001',
      tanggal_penjualan: '2026-09-09 10:15:00',
      total_faktur: 71000,
      total_bayar: 100000,
      kembalian: 29000,
      status_pembayaran: 'sudah bayar',
      jenis_transaksi: 'tunai',
      cara_bayar: 'Tunai',
      note: 'Pembelian langsung kasir',
      is_delete: 0
    }
  ],

  tb_detail_penjualan: [
    {
      id_detail_penjualan: 1,
      id_penjualan: 1,
      id_barang: 1,
      jumlah_barang: 1,
      harga_beli: 45000,
      harga_jual: 65000,
      diskon_tipe: 'nominal',
      diskon_nilai: 0,
      diskon_nominal: 0,
      subtotal: 65000
    },
    {
      id_detail_penjualan: 2,
      id_penjualan: 1,
      id_barang: 6,
      jumlah_barang: 1,
      harga_beli: 4000,
      harga_jual: 6000,
      diskon_tipe: 'nominal',
      diskon_nilai: 0,
      diskon_nominal: 0,
      subtotal: 6000
    }
  ]
};

// --- PERSISTENSI DATABASE ---
let db = {};

function loadDatabase() {
  const saved = localStorage.getItem('kasir_pintar_erd_db');
  if (saved) {
    try {
      db = JSON.parse(saved);
      if (db.tb_barang) {
        db.tb_barang.forEach(b => {
          if (!b.foto) {
            const match = INITIAL_DATABASE.tb_barang.find(ib => ib.barcode === b.barcode);
            b.foto = match ? match.foto : '';
          }
        });
      }
    } catch (e) {
      db = JSON.parse(JSON.stringify(INITIAL_DATABASE));
      saveDatabase();
    }
  } else {
    db = JSON.parse(JSON.stringify(INITIAL_DATABASE));
    saveDatabase();
  }
  return db;
}

function saveDatabase() {
  localStorage.setItem('kasir_pintar_erd_db', JSON.stringify(db));
}

function resetDatabaseToDefault() {
  if (confirm('Apakah Anda yakin ingin mereset seluruh data kembali ke kondisi awal ERD?')) {
    db = JSON.parse(JSON.stringify(INITIAL_DATABASE));
    saveDatabase();
    showToast('Database berhasil direset ke kondisi awal ERD!', 'success');
    setTimeout(() => location.reload(), 600);
  }
}

// --- AUTENTIKASI SESI ---
function getCurrentUser() {
  const savedUser = localStorage.getItem('kasir_pintar_current_user');
  if (savedUser) {
    try {
      return JSON.parse(savedUser);
    } catch (e) {
      return null;
    }
  }
  return null;
}

function checkAuth(allowRedirect = true) {
  const user = getCurrentUser();
  if (!user && allowRedirect) {
    window.location.href = 'login.html';
    return null;
  }
  return user;
}

function logout() {
  localStorage.removeItem('kasir_pintar_current_user');
  window.location.href = 'login.html';
}

// --- UTILITAS BERSAMA ---
function formatRupiah(number) {
  if (isNaN(number)) number = 0;
  return 'Rp ' + Number(number).toLocaleString('id-ID');
}

function numberToWordsIndonesian(number) {
  number = Math.floor(Math.abs(number));
  if (number === 0) return 'Nol rupiah';

  const satuan = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas'];

  function terbilang(n) {
    if (n < 12) return satuan[n];
    if (n < 20) return terbilang(n - 10) + ' belas';
    if (n < 100) return terbilang(Math.floor(n / 10)) + ' puluh ' + terbilang(n % 10);
    if (n < 200) return 'seratus ' + terbilang(n - 100);
    if (n < 1000) return terbilang(Math.floor(n / 100)) + ' ratus ' + terbilang(n % 100);
    if (n < 2000) return 'seribu ' + terbilang(n - 1000);
    if (n < 1000000) return terbilang(Math.floor(n / 1000)) + ' ribu ' + terbilang(n % 1000);
    if (n < 1000000000) return terbilang(Math.floor(n / 1000000)) + ' juta ' + terbilang(n % 1000000);
    return terbilang(Math.floor(n / 1000000000)) + ' milyar ' + terbilang(n % 1000000000);
  }

  const result = terbilang(number).trim().replace(/\s+/g, ' ');
  return result.charAt(0).toUpperCase() + result.slice(1) + ' rupiah';
}

// --- EFEK SUARA ---
let audioCtx = null;
let audioEnabled = true;

function playSound(type = 'beep') {
  if (!audioEnabled) return;
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    if (type === 'beep') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.1);
    } else if (type === 'success') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, audioCtx.currentTime);
      osc.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.1);
      osc.frequency.setValueAtTime(783.99, audioCtx.currentTime + 0.2);
      osc.frequency.setValueAtTime(1046.50, audioCtx.currentTime + 0.3);
      gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.55);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.55);
    } else if (type === 'click') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1200, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.05);
    } else if (type === 'error') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.25);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.25);
    }
  } catch (e) {
    console.log('Audio error:', e);
  }
}

function toggleAudio() {
  audioEnabled = !audioEnabled;
  const icon = document.getElementById('soundIcon');
  if (icon) {
    icon.setAttribute('data-lucide', audioEnabled ? 'volume-2' : 'volume-x');
    if (window.lucide) lucide.createIcons();
  }
  showToast(audioEnabled ? 'Suara efek diaktifkan' : 'Suara efek dimatikan', 'info');
}

// --- NOTIFIKASI TOAST ---
function showToast(message, type = 'info') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;

  let iconName = 'info';
  if (type === 'success') iconName = 'check-circle-2';
  else if (type === 'error') iconName = 'alert-circle';

  toast.innerHTML = `
    <i data-lucide="${iconName}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  if (window.lucide) lucide.createIcons();

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(50px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// --- INISIALISASI NAVBAR BERSAMA ---
function initSharedNavbar(activeTab) {
  loadDatabase();
  const user = checkAuth(true);
  if (!user) return;

  const school = db.tb_sekolah[0] || {};

  // Perbarui UI Nav
  const navUserName = document.getElementById('navUserName');
  const navUserRole = document.getElementById('navUserRole');
  const navUserAvatar = document.getElementById('navUserAvatar');
  const navSchoolName = document.getElementById('navSchoolName');

  if (navUserName) navUserName.textContent = user.nama_lengkap;
  if (navUserRole) navUserRole.textContent = user.role_name || (user.id_role === 1 ? 'super admin' : (user.id_role === 2 ? 'admin' : 'kasir'));
  if (navUserAvatar) navUserAvatar.textContent = user.nama_lengkap.charAt(0).toUpperCase();
  if (navSchoolName) navSchoolName.textContent = school.nama_sekolah || 'SMA Negeri 1 Harapan Bangsa';

  // Highlight tab aktif
  document.querySelectorAll('.nav-tab').forEach(tab => {
    if (tab.getAttribute('data-tab') === activeTab) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  // Jam realtime
  function updateClock() {
    const clock = document.getElementById('systemClock');
    if (clock) {
      clock.textContent = new Date().toLocaleTimeString('id-ID', { hour12: false });
    }
  }
  setInterval(updateClock, 1000);
  updateClock();

  if (window.lucide) lucide.createIcons();
}
