// ==========================================================================
// KASIR PINTAR POS & INVENTARIS - SISTEM TERINTEGRASI ERD
// Versi 2.1: Fitur Foto Barang, Tema Latar Hijau-Biru (Teal-Ocean),
// dan Tipografi Teks Alami
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

// --- 1. SEED DATA MODEL RELASIONAL (ERD DATABASE DENGAN FOTO) ---
const INITIAL_DATABASE = {
  tb_sekolah: [
    {
      id_sekolah: 1,
      kode_sekolah: 'SCH-TSM-002',
      nama_sekolah: 'SMKN 2 Tasikmalaya',
      alamat_sekolah: 'Jl. Noenoeng Tisnasaputra, Kahuripan, Tawang, Kota Tasikmalaya',
      website: 'https://smkn2tasik.sch.id',
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

// --- 2. STATE APLIKASI ---
let db = {};
let currentUser = null;
let cart = [];
let selectedRole = 'kasir';
let audioEnabled = true;
let activeCategoryFilter = 'all';
let qrisTimerInterval = null;
let qrisSecondsRemaining = 300;
let currentPaymentMethod = 'tunai';
let lastCompletedSale = null;

// --- 3. AUDIO SYNTHESIZER ---
let audioCtx = null;
function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioCtx;
}

function playSound(type = 'beep') {
  if (!audioEnabled) return;
  try {
    const ctx = getAudioContext();
    if (ctx.state === 'suspended') ctx.resume();

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'beep') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, ctx.currentTime);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    } else if (type === 'success') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, ctx.currentTime);
      osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1);
      osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.2);
      osc.frequency.setValueAtTime(1046.50, ctx.currentTime + 0.3);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.55);
      osc.start();
      osc.stop(ctx.currentTime + 0.55);
    } else if (type === 'click') {
      // Suara klik dinonaktifkan
      return;
    } else if (type === 'error') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, ctx.currentTime);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
      osc.start();
      osc.stop(ctx.currentTime + 0.25);
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
    lucide.createIcons();
  }
  showToast(audioEnabled ? 'Suara efek diaktifkan' : 'Suara efek dimatikan', 'info');
}

// --- 4. PERSISTENSI DATABASE LOCALSTORAGE ---
function loadDatabase() {
  const saved = localStorage.getItem('kasir_pintar_erd_db');
  if (saved) {
    try {
      db = JSON.parse(saved);
      // Migrasi foto untuk barang lama jika belum memiliki atribut foto
      if (db.tb_barang) {
        db.tb_barang.forEach(b => {
          if (!b.foto) {
            const initMatch = INITIAL_DATABASE.tb_barang.find(ib => ib.barcode === b.barcode);
            b.foto = initMatch ? initMatch.foto : '';
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

  const savedUser = localStorage.getItem('kasir_pintar_current_user');
  if (savedUser) {
    try {
      currentUser = JSON.parse(savedUser);
    } catch (e) {
      currentUser = null;
    }
  }
}

function saveDatabase() {
  localStorage.setItem('kasir_pintar_erd_db', JSON.stringify(db));
}

function resetDatabaseToDefault() {
  if (confirm('Apakah Anda yakin ingin mereset seluruh data kembali ke kondisi awal ERD?')) {
    db = JSON.parse(JSON.stringify(INITIAL_DATABASE));
    saveDatabase();
    cart = [];
    renderDashboard();
    renderPosCatalog();
    renderCart();
    renderInventoryTable();
    renderTransactionsHistory();
    showErdTable('tb_barang');
    showToast('Database berhasil direset ke kondisi awal ERD!', 'success');
  }
}

// --- 5. FORMATTER & TERBILANG RUPIAH ---
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

// --- 6. AUTENTIKASI LOGIN ---
function selectRole(role) {
  selectedRole = role;
  document.querySelectorAll('.role-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-role') === role);
  });
  playSound('click');
}

function fillDemoAccount(username, password, role) {
  document.getElementById('usernameInput').value = username;
  document.getElementById('passwordInput').value = password;
  selectRole(role);
  playSound('click');
}

function togglePasswordVisibility() {
  const pwdInput = document.getElementById('passwordInput');
  const eyeIcon = document.getElementById('pwdEyeIcon');
  if (pwdInput.type === 'password') {
    pwdInput.type = 'text';
    eyeIcon.setAttribute('data-lucide', 'eye-off');
  } else {
    pwdInput.type = 'password';
    eyeIcon.setAttribute('data-lucide', 'eye');
  }
  lucide.createIcons();
}

function handleLogin() {
  const username = document.getElementById('usernameInput').value.trim();
  const password = document.getElementById('passwordInput').value.trim();

  const user = db.tb_user.find(u => u.username === username && u.password === password && u.is_active === 1);
  if (!user) {
    playSound('error');
    showToast('Username atau password tidak ditemukan!', 'error');
    return;
  }

  const roleObj = db.roles.find(r => r.id_role === user.id_role);
  user.role_name = roleObj ? roleObj.nama_role : 'kasir';

  currentUser = user;
  localStorage.setItem('kasir_pintar_current_user', JSON.stringify(currentUser));

  playSound('success');
  showToast(`Selamat datang, ${currentUser.nama_lengkap} (${currentUser.role_name})!`, 'success');
  enterMainApp();
}

function handleLogout() {
  currentUser = null;
  localStorage.removeItem('kasir_pintar_current_user');
  document.getElementById('mainApp').style.display = 'none';
  document.getElementById('loginScreen').style.display = 'flex';
  showToast('Anda telah keluar dari aplikasi.', 'info');
}

function enterMainApp() {
  document.getElementById('loginScreen').style.display = 'none';
  document.getElementById('mainApp').style.display = 'block';

  document.getElementById('navUserName').textContent = currentUser.nama_lengkap;
  document.getElementById('navUserRole').textContent = currentUser.role_name;
  document.getElementById('navUserAvatar').textContent = currentUser.nama_lengkap.charAt(0).toUpperCase();

  const sekolah = db.tb_sekolah[0] || {};
  document.getElementById('navSchoolName').textContent = sekolah.nama_sekolah || 'SMKN 2 Tasikmalaya';

  renderDashboard();
  renderPosCatalog();
  populateCustomerSelect();
  renderCart();
  renderInventoryTable();
  renderTransactionsHistory();
  showErdTable('tb_barang');
  lucide.createIcons();
}

// --- 7. NAVIGASI TAB UTAMA ---
function switchMainTab(tabName) {
  document.querySelectorAll('.nav-tab').forEach(t => {
    t.classList.toggle('active', t.getAttribute('data-tab') === tabName);
  });

  document.querySelectorAll('.tab-content').forEach(section => {
    section.classList.remove('active');
  });

  const activeSection = document.getElementById(`tab-${tabName}`);
  if (activeSection) activeSection.classList.add('active');

  if (tabName === 'dashboard') renderDashboard();
  if (tabName === 'kasir') {
    renderPosCatalog();
    renderCart();
    setTimeout(() => {
      const directInput = document.getElementById('posBarcodeDirect');
      if (directInput) directInput.focus();
    }, 100);
  }
  if (tabName === 'inventory') renderInventoryTable();
  if (tabName === 'transactions') renderTransactionsHistory();
  if (tabName === 'erd') showErdTable('tb_barang');

  playSound('click');
  lucide.createIcons();
}

// --- 8. DASHBOARD / TAMPILAN AWAL (HIJAU-BIRU + TEKS ALAMI) ---
function renderDashboard() {
  const activeProducts = db.tb_barang.filter(b => b.is_delete === 0 && b.is_active === 1);
  const lowStockProducts = activeProducts.filter(b => b.stok < 10);
  const sales = db.tb_penjualan.filter(s => s.is_delete === 0);

  const totalRevenue = sales.reduce((sum, s) => sum + Number(s.total_faktur), 0);

  document.getElementById('dashTodayRevenue').textContent = formatRupiah(totalRevenue);
  document.getElementById('dashTxCount').textContent = `${sales.length} transaksi selesai`;
  document.getElementById('dashTotalProducts').textContent = activeProducts.length;
  document.getElementById('dashCategoryCount').textContent = `${db.tb_kategori.length} kategori aktif`;
  document.getElementById('dashLowStockCount').textContent = lowStockProducts.length;
  document.getElementById('dashTotalCustomers').textContent = db.tb_pelanggan.filter(p => p.is_delete === 0).length;

  const txBody = document.getElementById('dashRecentTxBody');
  if (txBody) {
    txBody.innerHTML = '';
    const recentSales = [...sales].reverse().slice(0, 5);
    if (recentSales.length === 0) {
      txBody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: #94a3b8; padding: 20px;">Belum ada transaksi penjualan</td></tr>`;
    } else {
      recentSales.forEach(s => {
        const kasir = db.tb_user.find(u => u.id_user === s.id_user);
        const pelanggan = db.tb_pelanggan.find(p => p.id_pelanggan === s.id_pelanggan);
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td><strong class="font-mono text-dark">${s.nomor_faktur}</strong></td>
          <td>
            <div style="font-weight: 700; color: #0f172a;">${kasir ? kasir.nama_lengkap : 'Kasir'}</div>
            <small style="color: #64748b;">${pelanggan ? pelanggan.nama_pelanggan : 'Umum'}</small>
          </td>
          <td><span class="bank-chip" style="display:inline-block; padding: 2px 8px; font-weight:700;">${s.cara_bayar}</span></td>
          <td><strong class="font-mono" style="color: #0f766e;">${formatRupiah(s.total_faktur)}</strong></td>
          <td><span class="prod-floating-stock" style="position:static; background:#ccfbf1; color:#0f766e; font-weight:800;">Lunas</span></td>
        `;
        txBody.appendChild(tr);
      });
    }
  }

  const lowList = document.getElementById('dashLowStockList');
  if (lowList) {
    lowList.innerHTML = '';
    if (lowStockProducts.length === 0) {
      lowList.innerHTML = `<div style="text-align: center; color: #64748b; padding: 20px;">Semua persediaan stok aman (&ge; 10 unit)</div>`;
    } else {
      lowStockProducts.slice(0, 6).forEach(p => {
        const item = document.createElement('div');
        item.className = 'low-stock-item';
        item.style.cssText = 'display: flex; align-items: center; justify-content: space-between; padding: 10px 14px; background: #fff1f2; border: 1px solid #fecdd3; border-radius: 8px; margin-bottom: 8px;';
        item.innerHTML = `
          <div style="display: flex; align-items: center; gap: 10px;">
            ${p.foto ? `<img src="${p.foto}" style="width: 34px; height: 34px; border-radius: 6px; object-fit: cover; border: 1px solid #fda4af;">` : ''}
            <div>
              <div style="font-weight: 700; color: #9f1239; font-size: 0.85rem;">${p.nama}</div>
              <small style="color: #64748b; font-family: var(--font-mono);">${p.barcode} &bull; ${p.satuan}</small>
            </div>
          </div>
          <span style="font-size: 0.74rem; font-weight: 800; background: #f43f5e; color: white; padding: 3px 8px; border-radius: 9999px; font-family: var(--font-mono);">Sisa ${p.stok}</span>
        `;
        lowList.appendChild(item);
      });
    }
  }
}

// --- 9. KASIR POS DENGAN KARTU FOTO PRODUK CERAH & ALAMI ---
function renderPosCatalog() {
  const container = document.getElementById('posProductsGrid');
  const pillsContainer = document.getElementById('posCategoryPills');
  if (!container) return;

  if (pillsContainer) {
    pillsContainer.innerHTML = `
      <button class="cat-pill ${activeCategoryFilter === 'all' ? 'active' : ''}" onclick="filterPosCategory('all')">
        <i data-lucide="layout-grid"></i>
        <span>Semua</span>
      </button>
    `;
    db.tb_kategori.forEach(k => {
      const btn = document.createElement('button');
      btn.className = `cat-pill ${activeCategoryFilter === String(k.id_kategori) ? 'active' : ''}`;
      btn.innerHTML = `<span>${k.nama}</span>`;
      btn.onclick = () => filterPosCategory(String(k.id_kategori));
      pillsContainer.appendChild(btn);
    });
  }

  const keyword = (document.getElementById('posSearchInput') ? document.getElementById('posSearchInput').value : '').toLowerCase().trim();
  const activeProducts = db.tb_barang.filter(b => b.is_delete === 0 && b.is_active === 1);

  const filtered = activeProducts.filter(p => {
    const matchCat = activeCategoryFilter === 'all' || String(p.id_kategori) === activeCategoryFilter;
    const matchSearch = !keyword || p.nama.toLowerCase().includes(keyword) || p.barcode.includes(keyword);
    return matchCat && matchSearch;
  });

  const countText = document.getElementById('posCatalogCountText');
  if (countText) countText.textContent = `Menampilkan ${filtered.length} dari ${activeProducts.length} produk`;

  container.innerHTML = '';
  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #64748b;">
        <i data-lucide="package-x" style="width: 48px; height: 48px; margin-bottom: 8px; color: #94a3b8;"></i>
        <p style="font-weight: 800; color: #1e293b; font-size: 1.1rem;">Produk Tidak Ditemukan</p>
        <small style="color: #64748b;">Coba ubah kata kunci pencarian atau pilih kategori lain.</small>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  filtered.forEach(prod => {
    const category = db.tb_kategori.find(k => k.id_kategori === prod.id_kategori);
    const catName = category ? category.nama : 'Umum';

    let stockColor = '#0f766e';
    let stockBg = '#ccfbf1';
    if (prod.stok === 0) {
      stockColor = '#b91c1c';
      stockBg = '#fee2e2';
    } else if (prod.stok < 10) {
      stockColor = '#b45309';
      stockBg = '#fef3c7';
    }

    const card = document.createElement('div');
    card.className = 'product-card-photo';
    card.onclick = () => addToCart(prod.id_barang);

    card.innerHTML = `
      <div class="prod-photo-frame">
        ${prod.foto 
          ? `<img src="${prod.foto}" class="prod-photo-img" alt="${prod.nama}">` 
          : `<div class="prod-photo-fallback"><i data-lucide="package"></i></div>`
        }
        <span class="prod-floating-cat" style="color: #0f766e;">${catName}</span>
        <span class="prod-floating-stock" style="background: ${stockBg}; color: ${stockColor};">${prod.stok} ${prod.satuan}</span>
      </div>
      <div class="prod-card-body">
        <div>
          <h4 class="prod-card-name">${prod.nama}</h4>
          <div class="prod-card-barcode">${prod.barcode}</div>
        </div>
        <div class="prod-card-footer">
          <div class="prod-card-price">${formatRupiah(prod.harga_jual)}</div>
          <div class="prod-add-btn-circle" title="Tambah ke keranjang">
            <i data-lucide="plus"></i>
          </div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });

  lucide.createIcons();
}

function filterPosCategory(catId) {
  activeCategoryFilter = catId;
  renderPosCatalog();
  playSound('click');
}

function handlePosSearch() {
  renderPosCatalog();
}

function clearPosSearch() {
  const input = document.getElementById('posSearchInput');
  if (input) input.value = '';
  renderPosCatalog();
}

function handleBarcodeEnter(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    const barcode = e.target.value.trim();
    if (!barcode) return;

    const product = db.tb_barang.find(b => b.barcode === barcode && b.is_delete === 0);
    if (product) {
      addToCart(product.id_barang);
      e.target.value = '';
    } else {
      playSound('error');
      showToast(`Produk dengan barcode ${barcode} tidak ditemukan!`, 'error');
    }
  }
}

// --- 10. KERANJANG BELANJA (CART) DENGAN THUMBNAIL FOTO ---
function addToCart(productId) {
  const product = db.tb_barang.find(b => b.id_barang === productId);
  if (!product) return;

  if (product.stok <= 0) {
    playSound('error');
    showToast(`Stok ${product.nama} habis!`, 'error');
    return;
  }

  const existingItem = cart.find(item => item.id_barang === productId);
  if (existingItem) {
    if (existingItem.qty + 1 > product.stok) {
      playSound('error');
      showToast(`Jumlah melebihi stok yang tersedia (${product.stok})!`, 'error');
      return;
    }
    existingItem.qty += 1;
  } else {
    cart.push({
      id_barang: product.id_barang,
      barcode: product.barcode,
      nama: product.nama,
      harga_beli: product.harga_beli,
      harga_jual: product.harga_jual,
      satuan: product.satuan,
      foto: product.foto || '',
      qty: 1,
      diskon_tipe: 'nominal',
      diskon_nilai: 0,
      diskon_nominal: 0
    });
  }

  playSound('beep');
  renderCart();
}

function updateCartQty(productId, delta) {
  const item = cart.find(i => i.id_barang === productId);
  const product = db.tb_barang.find(b => b.id_barang === productId);
  if (!item) return;

  const newQty = item.qty + delta;
  if (newQty <= 0) {
    removeFromCart(productId);
    return;
  }

  if (product && newQty > product.stok) {
    playSound('error');
    showToast(`Maksimal stok tersedia adalah ${product.stok}`, 'error');
    return;
  }

  item.qty = newQty;
  playSound('click');
  renderCart();
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id_barang !== productId);
  playSound('click');
  renderCart();
}

function clearCart() {
  if (cart.length === 0) return;
  if (confirm('Kosongkan semua item di keranjang?')) {
    cart = [];
    playSound('click');
    renderCart();
  }
}

function renderCart() {
  const listContainer = document.getElementById('posCartItemsList');
  const checkoutBtn = document.getElementById('btnOpenPayment');
  const invoiceSubtitle = document.getElementById('posActiveInvoice');

  if (invoiceSubtitle) {
    const today = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const nextId = (db.tb_penjualan.length + 1).toString().padStart(4, '0');
    invoiceSubtitle.textContent = `Faktur: INV/${today}/${nextId}`;
  }

  if (!listContainer) return;

  if (cart.length === 0) {
    listContainer.innerHTML = `
      <div class="cart-empty-state">
        <i data-lucide="shopping-cart"></i>
        <p class="natural-heading-sm">Keranjang masih kosong</p>
        <small class="natural-subtext">Klik foto produk di sebelah kiri atau scan barcode untuk menambah item</small>
      </div>
    `;
    if (checkoutBtn) checkoutBtn.disabled = true;
    calculateCartTotals();
    lucide.createIcons();
    return;
  }

  if (checkoutBtn) checkoutBtn.disabled = false;

  listContainer.innerHTML = '';
  cart.forEach(item => {
    const subtotal = item.qty * item.harga_jual;
    const row = document.createElement('div');
    row.className = 'cart-item-row';
    row.innerHTML = `
      <div class="cart-item-product-cell">
        ${item.foto 
          ? `<img src="${item.foto}" class="cart-item-thumb" alt="Item">` 
          : `<div class="cart-item-thumb-fallback"><i data-lucide="package"></i></div>`
        }
        <div>
          <div class="cart-item-name">${item.nama}</div>
          <div class="cart-item-barcode">${item.barcode}</div>
        </div>
      </div>
      <div>
        <div class="qty-control-group">
          <button class="btn-qty" onclick="updateCartQty(${item.id_barang}, -1)">&minus;</button>
          <span class="qty-number">${item.qty}</span>
          <button class="btn-qty" onclick="updateCartQty(${item.id_barang}, 1)">&plus;</button>
        </div>
      </div>
      <div class="font-mono text-dark">${formatRupiah(item.harga_jual)}</div>
      <div class="font-mono font-bold" style="color: #0f766e;">${formatRupiah(subtotal)}</div>
      <button class="btn-remove-item" onclick="removeFromCart(${item.id_barang})" title="Hapus Item">
        <i data-lucide="x"></i>
      </button>
    `;
    listContainer.appendChild(row);
  });

  calculateCartTotals();
  lucide.createIcons();
}

function calculateCartTotals() {
  const subtotal = cart.reduce((sum, item) => sum + (item.qty * item.harga_jual), 0);
  const discountInput = document.getElementById('posDiscountInput');
  const discountType = document.getElementById('posDiscountType');

  let discountVal = discountInput ? Number(discountInput.value) || 0 : 0;
  let discountNominal = 0;

  if (discountType && discountType.value === 'persen') {
    discountNominal = (subtotal * discountVal) / 100;
  } else {
    discountNominal = discountVal;
  }

  if (discountNominal > subtotal) discountNominal = subtotal;

  const grandTotal = Math.max(0, subtotal - discountNominal);
  const totalItemCount = cart.reduce((sum, item) => sum + item.qty, 0);

  document.getElementById('posSubtotalDisplay').textContent = formatRupiah(subtotal);
  document.getElementById('posTotalItemBadge').textContent = `${totalItemCount} Item`;
  document.getElementById('posGrandTotalDisplay').textContent = formatRupiah(grandTotal);

  return { subtotal, discountNominal, grandTotal, totalItemCount };
}

function populateCustomerSelect() {
  const select = document.getElementById('posCustomerSelect');
  if (!select) return;
  select.innerHTML = '';
  db.tb_pelanggan.filter(p => p.is_delete === 0).forEach(cust => {
    const opt = document.createElement('option');
    opt.value = cust.id_pelanggan;
    opt.textContent = cust.nama_pelanggan;
    select.appendChild(opt);
  });
  handleCustomerChange();
}

function handleCustomerChange() {
  const select = document.getElementById('posCustomerSelect');
  const badge = document.getElementById('posCustomerGroupBadge');
  if (!select || !badge) return;

  const custId = Number(select.value);
  const cust = db.tb_pelanggan.find(p => p.id_pelanggan === custId);
  if (cust) {
    const grp = db.tb_kelompok_pelanggan.find(g => g.id_kelompok_pelanggan === cust.id_kelompok_pelanggan);
    badge.textContent = grp ? grp.nama_kelompok : 'Pelanggan';
  }
}

// --- 11. FITUR FOTO PRODUK: UPLOAD & PRESET ---
function handlePhotoUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  if (!file.type.startsWith('image/')) {
    playSound('error');
    showToast('File yang dipilih harus berupa gambar (JPG, PNG, WebP)!', 'error');
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const dataUrl = e.target.result;
    setPhotoPreview(dataUrl);
    playSound('click');
    showToast('Foto produk berhasil dimuat!', 'success');
  };
  reader.readAsDataURL(file);
}

function selectPresetPhoto(type) {
  const data = PRESET_PHOTOS[type];
  if (data) {
    setPhotoPreview(data);
    playSound('click');
    showToast(`Foto ilustrasi "${type}" dipilih!`, 'info');
  }
}

function setPhotoPreview(url) {
  const previewImg = document.getElementById('prodPhotoPreview');
  const placeholder = document.getElementById('photoPlaceholder');
  const removeBtn = document.getElementById('btnRemovePhoto');
  const hiddenInput = document.getElementById('prodPhotoData');

  if (url) {
    previewImg.src = url;
    previewImg.style.display = 'block';
    if (placeholder) placeholder.style.display = 'none';
    if (removeBtn) removeBtn.style.display = 'inline-flex';
    if (hiddenInput) hiddenInput.value = url;
  } else {
    previewImg.src = '';
    previewImg.style.display = 'none';
    if (placeholder) placeholder.style.display = 'flex';
    if (removeBtn) removeBtn.style.display = 'none';
    if (hiddenInput) hiddenInput.value = '';
  }
}

function clearProductPhoto() {
  setPhotoPreview('');
  const fileInput = document.getElementById('prodPhotoFile');
  if (fileInput) fileInput.value = '';
  playSound('click');
}

// --- 12. FITUR TOMBOL PECAHAN RUPIAH ---
function addRupiahPrice(targetField, amount) {
  const inputId = targetField === 'selling' ? 'prodSellingPrice' : 'prodBuyingPrice';
  const input = document.getElementById(inputId);
  if (!input) return;

  const current = Number(input.value) || 0;
  input.value = current + amount;
  handlePriceInputChange(targetField);
  playSound('click');
}

function setRupiahPrice(targetField, amount) {
  const inputId = targetField === 'selling' ? 'prodSellingPrice' : 'prodBuyingPrice';
  const input = document.getElementById(inputId);
  if (!input) return;

  input.value = amount;
  handlePriceInputChange(targetField);
  playSound('click');
}

function clearRupiahPrice(targetField) {
  const inputId = targetField === 'selling' ? 'prodSellingPrice' : 'prodBuyingPrice';
  const input = document.getElementById(inputId);
  if (!input) return;

  input.value = 0;
  handlePriceInputChange(targetField);
  playSound('click');
}

function handlePriceInputChange(targetField) {
  const inputId = targetField === 'selling' ? 'prodSellingPrice' : 'prodBuyingPrice';
  const terbilangId = targetField === 'selling' ? 'sellingPriceTerbilang' : 'buyingPriceTerbilang';
  const input = document.getElementById(inputId);
  const terbilangElem = document.getElementById(terbilangId);
  if (!input || !terbilangElem) return;

  const val = Number(input.value) || 0;
  terbilangElem.textContent = numberToWordsIndonesian(val);
}

// --- 13. MANAJEMEN MASTER BARANG (TAMBAH, EDIT, HAPUS DENGAN FOTO) ---
let deleteTargetId = null;

function renderInventoryTable() {
  const tableBody = document.getElementById('inventoryTableBody');
  const catFilter = document.getElementById('invCategoryFilter');
  const stockFilter = document.getElementById('invStockFilter');
  const searchInput = document.getElementById('invSearchInput');
  const totalCountBadge = document.getElementById('invTotalCountBadge');

  if (!tableBody) return;

  if (catFilter && catFilter.options.length <= 1) {
    db.tb_kategori.forEach(k => {
      const opt = document.createElement('option');
      opt.value = k.id_kategori;
      opt.textContent = k.nama;
      catFilter.appendChild(opt);
    });
  }

  const keyword = searchInput ? searchInput.value.toLowerCase().trim() : '';
  const selectedCat = catFilter ? catFilter.value : 'all';
  const selectedStock = stockFilter ? stockFilter.value : 'all';

  const activeProducts = db.tb_barang.filter(b => b.is_delete === 0);

  const filtered = activeProducts.filter(p => {
    const matchCat = selectedCat === 'all' || String(p.id_kategori) === selectedCat;
    const matchSearch = !keyword || p.nama.toLowerCase().includes(keyword) || p.barcode.includes(keyword);

    let matchStock = true;
    if (selectedStock === 'low') matchStock = p.stok > 0 && p.stok < 10;
    else if (selectedStock === 'empty') matchStock = p.stok === 0;

    return matchCat && matchSearch && matchStock;
  });

  if (totalCountBadge) totalCountBadge.textContent = `Total: ${filtered.length} Barang`;

  tableBody.innerHTML = '';
  if (filtered.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="10" style="text-align: center; color: #64748b; padding: 30px;">Tidak ada barang yang cocok dengan kriteria filter.</td></tr>`;
    return;
  }

  filtered.forEach(p => {
    const category = db.tb_kategori.find(k => k.id_kategori === p.id_kategori);
    const supplier = db.tb_supplier.find(s => s.id_supplier === p.id_supplier);
    const catName = category ? category.nama : '-';
    const supplierName = supplier ? supplier.nama : '-';

    let stockBadge = `<span class="prod-floating-stock" style="position:static; background:#ccfbf1; color:#0f766e;">${p.stok}</span>`;
    if (p.stok === 0) stockBadge = `<span class="prod-floating-stock" style="position:static; background:#fee2e2; color:#b91c1c;">Habis</span>`;
    else if (p.stok < 10) stockBadge = `<span class="prod-floating-stock" style="position:static; background:#fef3c7; color:#b45309;">${p.stok} (Menipis)</span>`;

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="text-align: center;">
        ${p.foto 
          ? `<img src="${p.foto}" class="inv-photo-thumb" alt="${p.nama}">` 
          : `<div class="inv-photo-thumb-fallback"><i data-lucide="package"></i></div>`
        }
      </td>
      <td><span class="font-mono font-bold" style="color: #0284c7;">${p.barcode}</span></td>
      <td><strong style="color: #0f172a;">${p.nama}</strong></td>
      <td><span class="bank-chip" style="display:inline-block; font-size:0.75rem; padding: 2px 8px;">${catName}</span></td>
      <td>${p.satuan}</td>
      <td class="font-mono text-dark">${formatRupiah(p.harga_beli)}</td>
      <td class="font-mono font-bold" style="color: #0f766e;">${formatRupiah(p.harga_jual)}</td>
      <td>${stockBadge}</td>
      <td><small style="color: #64748b;">${supplierName}</small></td>
      <td style="text-align: center;">
        <button class="btn-teal-outline" style="padding: 5px 9px; font-size: 0.78rem; margin-right: 4px;" onclick="openEditProductModal(${p.id_barang})" title="Edit Barang">
          <i data-lucide="edit-3"></i>
        </button>
        <button class="btn-remove-item" style="padding: 5px 9px; font-size: 0.78rem;" onclick="openDeleteProductModal(${p.id_barang})" title="Hapus Barang">
          <i data-lucide="trash-2"></i>
        </button>
      </td>
    `;
    tableBody.appendChild(tr);
  });

  lucide.createIcons();
}

function openAddProductModal() {
  document.getElementById('productModalTitle').textContent = 'Tambah Barang Baru';
  document.getElementById('btnSaveProductText').textContent = 'Simpan Produk';
  document.getElementById('prodEditId').value = '';

  populateProductSelectOptions();

  document.getElementById('prodBarcode').value = '';
  document.getElementById('prodName').value = '';
  document.getElementById('prodUnit').value = 'pcs';
  document.getElementById('prodSellingPrice').value = 0;
  document.getElementById('prodBuyingPrice').value = 0;
  document.getElementById('prodStock').value = 50;
  document.getElementById('prodIsActive').value = '1';

  clearProductPhoto();
  handlePriceInputChange('selling');
  handlePriceInputChange('buying');
  generateRandomBarcode();

  document.getElementById('productModal').style.display = 'flex';
  playSound('click');
  lucide.createIcons();
}

function openEditProductModal(productId) {
  const prod = db.tb_barang.find(b => b.id_barang === productId);
  if (!prod) return;

  document.getElementById('productModalTitle').textContent = 'Ubah Data Barang & Harga';
  document.getElementById('btnSaveProductText').textContent = 'Perbarui Produk';
  document.getElementById('prodEditId').value = prod.id_barang;

  populateProductSelectOptions();

  document.getElementById('prodBarcode').value = prod.barcode;
  document.getElementById('prodName').value = prod.nama;
  document.getElementById('prodCategory').value = prod.id_kategori;
  document.getElementById('prodUnit').value = prod.satuan;
  document.getElementById('prodSupplier').value = prod.id_supplier || '';
  document.getElementById('prodSellingPrice').value = prod.harga_jual;
  document.getElementById('prodBuyingPrice').value = prod.harga_beli;
  document.getElementById('prodStock').value = prod.stok;
  document.getElementById('prodIsActive').value = prod.is_active;

  setPhotoPreview(prod.foto || '');
  handlePriceInputChange('selling');
  handlePriceInputChange('buying');

  document.getElementById('productModal').style.display = 'flex';
  playSound('click');
  lucide.createIcons();
}

function closeProductModal() {
  document.getElementById('productModal').style.display = 'none';
}

function populateProductSelectOptions() {
  const catSelect = document.getElementById('prodCategory');
  const supSelect = document.getElementById('prodSupplier');

  if (catSelect) {
    catSelect.innerHTML = '';
    db.tb_kategori.forEach(k => {
      const opt = document.createElement('option');
      opt.value = k.id_kategori;
      opt.textContent = k.nama;
      catSelect.appendChild(opt);
    });
  }

  if (supSelect) {
    supSelect.innerHTML = '';
    db.tb_supplier.filter(s => s.is_delete === 0).forEach(s => {
      const opt = document.createElement('option');
      opt.value = s.id_supplier;
      opt.textContent = s.nama;
      supSelect.appendChild(opt);
    });
  }
}

function generateRandomBarcode() {
  const prefix = '899100';
  const rand = Math.floor(100000 + Math.random() * 900000);
  document.getElementById('prodBarcode').value = `${prefix}${rand}`;
  playSound('click');
}

function saveProduct() {
  const editId = document.getElementById('prodEditId').value;
  const barcode = document.getElementById('prodBarcode').value.trim();
  const nama = document.getElementById('prodName').value.trim();
  const id_kategori = Number(document.getElementById('prodCategory').value);
  const satuan = document.getElementById('prodUnit').value;
  const id_supplier = Number(document.getElementById('prodSupplier').value);
  const harga_jual = Number(document.getElementById('prodSellingPrice').value) || 0;
  const harga_beli = Number(document.getElementById('prodBuyingPrice').value) || 0;
  const stok = Number(document.getElementById('prodStock').value) || 0;
  const is_active = Number(document.getElementById('prodIsActive').value);
  const foto = document.getElementById('prodPhotoData').value || '';

  if (!barcode || !nama) {
    showToast('Barcode dan nama barang harus diisi!', 'error');
    return;
  }

  const duplicate = db.tb_barang.find(b => b.barcode === barcode && b.is_delete === 0 && (!editId || b.id_barang !== Number(editId)));
  if (duplicate) {
    showToast(`Barcode ${barcode} sudah digunakan oleh produk "${duplicate.nama}"!`, 'error');
    return;
  }

  const category = db.tb_kategori.find(k => k.id_kategori === id_kategori);
  const id_kelompok_kategori = category ? category.id_kelompok : 1;

  if (editId) {
    const prod = db.tb_barang.find(b => b.id_barang === Number(editId));
    if (prod) {
      prod.barcode = barcode;
      prod.nama = nama;
      prod.id_kategori = id_kategori;
      prod.id_kelompok_kategori = id_kelompok_kategori;
      prod.id_supplier = id_supplier;
      prod.satuan = satuan;
      prod.harga_jual = harga_jual;
      prod.harga_beli = harga_beli;
      prod.stok = stok;
      prod.is_active = is_active;
      prod.foto = foto;
    }
    showToast(`Produk "${nama}" berhasil diperbarui!`, 'success');
  } else {
    const newId = db.tb_barang.length > 0 ? Math.max(...db.tb_barang.map(b => b.id_barang)) + 1 : 1;
    const newProduct = {
      id_barang: newId,
      id_sekolah: 1,
      barcode,
      nama,
      id_kategori,
      id_kelompok_kategori,
      id_supplier,
      satuan,
      harga_beli,
      harga_jual,
      stok,
      is_active,
      is_delete: 0,
      foto
    };
    db.tb_barang.push(newProduct);
    showToast(`Produk "${nama}" berhasil ditambahkan ke database!`, 'success');
  }

  saveDatabase();
  closeProductModal();
  renderInventoryTable();
  renderPosCatalog();
  renderDashboard();
  playSound('success');
}

function openDeleteProductModal(productId) {
  const prod = db.tb_barang.find(b => b.id_barang === productId);
  if (!prod) return;

  deleteTargetId = productId;
  document.getElementById('deleteTargetName').textContent = prod.nama;
  document.getElementById('deleteTargetBarcode').textContent = prod.barcode;
  document.getElementById('deleteTargetPrice').textContent = formatRupiah(prod.harga_jual);
  document.getElementById('deleteTargetStock').textContent = `${prod.stok} ${prod.satuan}`;

  const photoImg = document.getElementById('deleteTargetPhoto');
  const photoIcon = document.getElementById('deleteTargetIcon');
  if (prod.foto) {
    photoImg.src = prod.foto;
    photoImg.style.display = 'block';
    if (photoIcon) photoIcon.style.display = 'none';
  } else {
    photoImg.src = '';
    photoImg.style.display = 'none';
    if (photoIcon) photoIcon.style.display = 'block';
  }

  document.getElementById('deleteModal').style.display = 'flex';
  playSound('click');
  lucide.createIcons();
}

function closeDeleteModal() {
  document.getElementById('deleteModal').style.display = 'none';
  deleteTargetId = null;
}

function confirmDeleteProduct() {
  if (!deleteTargetId) return;

  const prod = db.tb_barang.find(b => b.id_barang === deleteTargetId);
  if (prod) {
    prod.is_delete = 1;
    saveDatabase();

    cart = cart.filter(i => i.id_barang !== deleteTargetId);
    renderCart();

    showToast(`Barang "${prod.nama}" telah berhasil dihapus.`, 'info');
    playSound('beep');
  }

  closeDeleteModal();
  renderInventoryTable();
  renderPosCatalog();
  renderDashboard();
}

// --- 14. SISTEM PEMBAYARAN LENGKAP (TUNAI, QRIS, DEBIT, KREDIT) ---
function openPaymentModal() {
  if (cart.length === 0) {
    showToast('Keranjang belanja kosong!', 'error');
    return;
  }

  const totals = calculateCartTotals();
  const invoiceNo = document.getElementById('posActiveInvoice').textContent.replace('Faktur: ', '');
  const custSelect = document.getElementById('posCustomerSelect');
  const custName = custSelect ? custSelect.options[custSelect.selectedIndex].text : 'Umum';

  document.getElementById('payModalInvoiceRef').textContent = invoiceNo;
  document.getElementById('payModalBillAmount').textContent = formatRupiah(totals.grandTotal);
  document.getElementById('payModalCustomerName').textContent = custName;
  document.getElementById('payModalCashierName').textContent = currentUser ? currentUser.nama_lengkap : 'Kasir';

  document.getElementById('cashReceivedInput').value = totals.grandTotal;
  calculateCashChange();
  initQrisPayment(totals.grandTotal);
  calculateCreditInstallment();

  document.getElementById('paymentModal').style.display = 'flex';
  selectPaymentMethod('tunai');
  playSound('click');
  lucide.createIcons();
}

function closePaymentModal() {
  document.getElementById('paymentModal').style.display = 'none';
  if (qrisTimerInterval) clearInterval(qrisTimerInterval);
}

function selectPaymentMethod(method) {
  currentPaymentMethod = method;
  document.querySelectorAll('.pay-method-tab').forEach(tab => {
    tab.classList.toggle('active', tab.getAttribute('data-method') === method);
  });
  document.querySelectorAll('.pay-tab-panel').forEach(panel => {
    panel.classList.remove('active');
  });
  const activePanel = document.getElementById(`payContent-${method}`);
  if (activePanel) activePanel.classList.add('active');

  playSound('click');
  lucide.createIcons();
}

function calculateCashChange() {
  const totals = calculateCartTotals();
  const receivedInput = document.getElementById('cashReceivedInput');
  const received = Number(receivedInput.value) || 0;
  const change = received - totals.grandTotal;

  const changeBox = document.getElementById('cashChangeBox');
  const changeDisplay = document.getElementById('cashChangeDisplay');
  const changeNote = document.getElementById('cashChangeNote');

  if (change >= 0) {
    changeBox.classList.remove('insufficient');
    changeDisplay.textContent = formatRupiah(change);
    changeNote.textContent = change === 0 ? 'Uang pas diterima (Tanpa kembalian)' : `Kembalian yang harus diberikan: ${formatRupiah(change)}`;
  } else {
    changeBox.classList.add('insufficient');
    changeDisplay.textContent = formatRupiah(Math.abs(change));
    changeNote.textContent = `Uang pembayaran masih kurang sebesar ${formatRupiah(Math.abs(change))}`;
  }
}

function setCashReceived(val) {
  const totals = calculateCartTotals();
  const input = document.getElementById('cashReceivedInput');
  if (val === 'exact') {
    input.value = totals.grandTotal;
  } else {
    input.value = val;
  }
  calculateCashChange();
  playSound('click');
}

function addCashReceived(amount) {
  const input = document.getElementById('cashReceivedInput');
  const current = Number(input.value) || 0;
  input.value = current + amount;
  calculateCashChange();
  playSound('click');
}

function initQrisPayment(amount) {
  document.getElementById('qrisAmountDisplay').textContent = formatRupiah(amount);
  const merchantName = (db.tb_sekolah[0] && db.tb_sekolah[0].nama_sekolah) ? db.tb_sekolah[0].nama_sekolah.toUpperCase() : 'SMA N 1 HARAPAN BANGSA';
  document.getElementById('qrisMerchantName').textContent = merchantName;

  const statusPill = document.getElementById('qrisStatusPill');
  statusPill.innerHTML = `
    <span class="status-indicator-dot waiting"></span>
    <span id="qrisStatusText">Menunggu Pembayaran Pembeli...</span>
  `;

  drawDynamicQrSvg();

  if (qrisTimerInterval) clearInterval(qrisTimerInterval);
  qrisSecondsRemaining = 300;
  updateQrisTimer();
  qrisTimerInterval = setInterval(() => {
    qrisSecondsRemaining--;
    if (qrisSecondsRemaining <= 0) {
      clearInterval(qrisTimerInterval);
      document.getElementById('qrisTimerDisplay').textContent = '00:00 (Kadaluarsa)';
    } else {
      updateQrisTimer();
    }
  }, 1000);
}

function updateQrisTimer() {
  const mins = Math.floor(qrisSecondsRemaining / 60).toString().padStart(2, '0');
  const secs = (qrisSecondsRemaining % 60).toString().padStart(2, '0');
  document.getElementById('qrisTimerDisplay').textContent = `${mins}:${secs}`;
}

function drawDynamicQrSvg() {
  const svg = document.getElementById('qrisSvgQr');
  if (!svg) return;
  svg.innerHTML = '';

  const size = 25;
  const cellSize = 180 / size;

  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      let isFilled = false;
      const isTopLeft = (r < 7 && c < 7);
      const isTopRight = (r < 7 && c >= size - 7);
      const isBottomLeft = (r >= size - 7 && c < 7);

      if (isTopLeft || isTopRight || isBottomLeft) {
        const localR = isBottomLeft ? r - (size - 7) : r;
        const localC = isTopRight ? c - (size - 7) : c;
        if (localR === 0 || localR === 6 || localC === 0 || localC === 6) isFilled = true;
        else if (localR >= 2 && localR <= 4 && localC >= 2 && localC <= 4) isFilled = true;
      } else {
        isFilled = ((r * 7 + c * 13 + (r % 3) * (c % 5)) % 2 === 0);
      }

      if (isFilled) {
        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('x', c * cellSize);
        rect.setAttribute('y', r * cellSize);
        rect.setAttribute('width', cellSize);
        rect.setAttribute('height', cellSize);
        rect.setAttribute('fill', '#0f172a');
        svg.appendChild(rect);
      }
    }
  }
}

function simulateQrisPayment() {
  playSound('beep');
  const statusPill = document.getElementById('qrisStatusPill');
  statusPill.innerHTML = `
    <span class="status-indicator-dot waiting"></span>
    <span>Memproses konfirmasi bank...</span>
  `;

  setTimeout(() => {
    playSound('success');
    statusPill.innerHTML = `
      <span class="status-indicator-dot success"></span>
      <span style="color: #10b981; font-weight: 800;">LUNAS! QRIS Terverifikasi Sukses</span>
    `;
    showToast('Pembayaran QRIS berhasil diterima oleh sistem!', 'success');
  }, 1000);
}

function processDebitEdc() {
  const btn = document.getElementById('btnProcessDebit');
  const approvalBox = document.getElementById('debitApprovalBox');
  btn.innerHTML = `<i data-lucide="loader-2" class="spin"></i> <span>Menghubungi Bank Host...</span>`;

  playSound('click');
  setTimeout(() => {
    const apprCode = Math.floor(100000 + Math.random() * 900000);
    const traceNo = Math.floor(1000 + Math.random() * 9000).toString().padStart(6, '0');

    document.getElementById('debitApprovalCode').textContent = `APPR: ${apprCode}`;
    document.getElementById('debitTraceNo').textContent = `TRACE: ${traceNo} | MID: 009827163829`;
    approvalBox.style.display = 'block';

    btn.innerHTML = `<i data-lucide="check"></i> <span>Transaksi Debit Berhasil Diotorisasi</span>`;
    btn.style.background = '#059669';

    playSound('success');
    showToast('Transaksi kartu debit berhasil diotorisasi!', 'success');
    lucide.createIcons();
  }, 1200);
}

function calculateCreditInstallment() {
  const totals = calculateCartTotals();
  const tenor = Number(document.getElementById('creditTenorSelect').value) || 1;
  const monthly = Math.round(totals.grandTotal / tenor);

  document.getElementById('creditTenorDisplay').textContent = tenor === 1 ? '1 Bulan (Bayar Penuh)' : `${tenor} Bulan (Bunga 0%)`;
  document.getElementById('creditMonthlyDisplay').textContent = `${formatRupiah(monthly)} / bln`;
}

function completeTransaction() {
  const totals = calculateCartTotals();
  let paidAmount = totals.grandTotal;
  let changeAmount = 0;
  let caraBayar = 'Tunai';
  let jenisTransaksi = 'tunai';

  if (currentPaymentMethod === 'tunai') {
    const received = Number(document.getElementById('cashReceivedInput').value) || 0;
    if (received < totals.grandTotal) {
      playSound('error');
      showToast('Uang tunai yang diterima kurang dari total tagihan!', 'error');
      return;
    }
    paidAmount = received;
    changeAmount = received - totals.grandTotal;
    caraBayar = 'Tunai';
    jenisTransaksi = 'tunai';
  } else if (currentPaymentMethod === 'qris') {
    caraBayar = 'QRIS';
    jenisTransaksi = 'tunai';
  } else if (currentPaymentMethod === 'debit') {
    const bank = document.querySelector('input[name="debitBank"]:checked')?.value || 'BCA';
    caraBayar = `Debit ${bank}`;
    jenisTransaksi = 'tunai';
  } else if (currentPaymentMethod === 'kredit') {
    const network = document.querySelector('input[name="creditNetwork"]:checked')?.value || 'Visa';
    const tenor = document.getElementById('creditTenorSelect').value;
    caraBayar = `Kredit ${network} (${tenor}x)`;
    jenisTransaksi = 'kredit';
  }

  cart.forEach(item => {
    const prod = db.tb_barang.find(b => b.id_barang === item.id_barang);
    if (prod) {
      prod.stok = Math.max(0, prod.stok - item.qty);
    }
  });

  const newSaleId = db.tb_penjualan.length + 1;
  const today = new Date();
  const dateStr = today.toISOString().replace('T', ' ').slice(0, 19);
  const invoiceNo = document.getElementById('payModalInvoiceRef').textContent;
  const custSelect = document.getElementById('posCustomerSelect');
  const custId = custSelect ? Number(custSelect.value) : 1;

  const saleRecord = {
    id_penjualan: newSaleId,
    id_sekolah: 1,
    id_user: currentUser ? currentUser.id_user : 1,
    id_pelanggan: custId,
    nomor_faktur: invoiceNo,
    tanggal_penjualan: dateStr,
    total_faktur: totals.grandTotal,
    total_bayar: paidAmount,
    kembalian: changeAmount,
    status_pembayaran: 'sudah bayar',
    jenis_transaksi: jenisTransaksi,
    cara_bayar: caraBayar,
    note: `Transaksi POS (${caraBayar})`,
    is_delete: 0
  };

  db.tb_penjualan.push(saleRecord);

  cart.forEach(item => {
    const detailId = db.tb_detail_penjualan.length + 1;
    db.tb_detail_penjualan.push({
      id_detail_penjualan: detailId,
      id_penjualan: newSaleId,
      id_barang: item.id_barang,
      jumlah_barang: item.qty,
      harga_beli: item.harga_beli,
      harga_jual: item.harga_jual,
      diskon_tipe: 'nominal',
      diskon_nilai: 0,
      diskon_nominal: 0,
      subtotal: item.qty * item.harga_jual
    });
  });

  saveDatabase();

  lastCompletedSale = {
    sale: saleRecord,
    items: [...cart],
    totals
  };

  closePaymentModal();
  cart = [];
  renderCart();
  renderPosCatalog();
  renderDashboard();

  playSound('success');
  showToast('Transaksi Penjualan Berhasil Disimpan!', 'success');
  showReceiptModal(lastCompletedSale);
}

// --- 15. STRUK THERMAL ---
function showReceiptModal(saleData) {
  const modal = document.getElementById('receiptModal');
  if (!modal || !saleData) return;

  const { sale, items, totals } = saleData;
  const sekolah = db.tb_sekolah[0] || {};
  const kasir = db.tb_user.find(u => u.id_user === sale.id_user);
  const pelanggan = db.tb_pelanggan.find(p => p.id_pelanggan === sale.id_pelanggan);

  document.getElementById('rcptSchoolTitle').textContent = sekolah.nama_sekolah || 'SMKN 2 TASIKMALAYA';
  document.getElementById('rcptSchoolAddress').textContent = sekolah.alamat_sekolah || 'Jl. Noenoeng Tisnasaputra, Kahuripan, Tawang, Kota Tasikmalaya';
  document.getElementById('rcptInvoiceNo').textContent = sale.nomor_faktur;
  document.getElementById('rcptDate').textContent = sale.tanggal_penjualan;
  document.getElementById('rcptCashier').textContent = kasir ? kasir.nama_lengkap : 'Kasir';
  document.getElementById('rcptCustomer').textContent = pelanggan ? pelanggan.nama_pelanggan : 'Umum';

  const itemsContainer = document.getElementById('rcptItemsList');
  itemsContainer.innerHTML = '';

  items.forEach(it => {
    const row = document.createElement('div');
    row.innerHTML = `
      <div style="font-weight: 700;">${it.nama}</div>
      <div class="rcpt-row">
        <span>${it.qty} x ${formatRupiah(it.harga_jual)}</span>
        <strong>${formatRupiah(it.qty * it.harga_jual)}</strong>
      </div>
    `;
    itemsContainer.appendChild(row);
  });

  document.getElementById('rcptSubtotal').textContent = formatRupiah(totals.subtotal);
  const discountRow = document.getElementById('rcptDiscountRow');
  if (totals.discountNominal > 0) {
    discountRow.style.display = 'flex';
    document.getElementById('rcptDiscount').textContent = `-${formatRupiah(totals.discountNominal)}`;
  } else {
    discountRow.style.display = 'none';
  }

  document.getElementById('rcptGrandTotal').textContent = formatRupiah(sale.total_faktur);
  document.getElementById('rcptPaymentMethod').textContent = sale.cara_bayar.toUpperCase();
  document.getElementById('rcptTotalPaid').textContent = formatRupiah(sale.total_bayar);
  document.getElementById('rcptChange').textContent = formatRupiah(sale.kembalian);
  document.getElementById('rcptTimestamp').textContent = `${sale.tanggal_penjualan} WIB`;

  modal.style.display = 'flex';
  lucide.createIcons();
}

function closeReceiptModal() {
  document.getElementById('receiptModal').style.display = 'none';
}

function copyReceiptText() {
  const content = document.getElementById('thermalReceiptContent').innerText;
  navigator.clipboard.writeText(content).then(() => {
    showToast('Teks struk berhasil disalin ke clipboard!', 'success');
  });
}

// --- 16. RIWAYAT TRANSAKSI ---
function renderTransactionsHistory() {
  const tbody = document.getElementById('transactionsHistoryBody');
  if (!tbody) return;

  const sales = [...db.tb_penjualan].filter(s => s.is_delete === 0).reverse();

  tbody.innerHTML = '';
  if (sales.length === 0) {
    tbody.innerHTML = `<tr><td colspan="10" style="text-align: center; color: #64748b; padding: 30px;">Belum ada riwayat transaksi penjualan.</td></tr>`;
    return;
  }

  sales.forEach(s => {
    const kasir = db.tb_user.find(u => u.id_user === s.id_user);
    const pelanggan = db.tb_pelanggan.find(p => p.id_pelanggan === s.id_pelanggan);

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong class="font-mono text-dark">${s.nomor_faktur}</strong></td>
      <td><small>${s.tanggal_penjualan}</small></td>
      <td>${kasir ? kasir.nama_lengkap : 'Kasir'}</td>
      <td>${pelanggan ? pelanggan.nama_pelanggan : 'Umum'}</td>
      <td><span class="bank-chip" style="display:inline-block; padding: 2px 8px; font-weight:700;">${s.cara_bayar}</span></td>
      <td><strong class="font-mono" style="color: #0f766e;">${formatRupiah(s.total_faktur)}</strong></td>
      <td class="font-mono text-dark">${formatRupiah(s.total_bayar)}</td>
      <td class="font-mono text-dark">${formatRupiah(s.kembalian)}</td>
      <td><span class="prod-floating-stock" style="position:static; background:#ccfbf1; color:#0f766e; font-weight:800;">LUNAS</span></td>
      <td style="text-align: center;">
        <button class="btn-teal-outline" style="padding: 4px 8px; font-size: 0.78rem;" onclick="reprintReceipt(${s.id_penjualan})" title="Lihat Struk">
          <i data-lucide="receipt"></i>
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  lucide.createIcons();
}

function reprintReceipt(saleId) {
  const sale = db.tb_penjualan.find(s => s.id_penjualan === saleId);
  if (!sale) return;

  const details = db.tb_detail_penjualan.filter(d => d.id_penjualan === saleId);
  const items = details.map(d => {
    const prod = db.tb_barang.find(b => b.id_barang === d.id_barang);
    return {
      nama: prod ? prod.nama : 'Barang',
      qty: d.jumlah_barang,
      harga_jual: d.harga_jual
    };
  });

  const saleData = {
    sale,
    items,
    totals: {
      subtotal: sale.total_faktur,
      discountNominal: 0,
      grandTotal: sale.total_faktur
    }
  };

  showReceiptModal(saleData);
}

function exportTransactionsCSV() {
  const sales = db.tb_penjualan.filter(s => s.is_delete === 0);
  if (sales.length === 0) {
    showToast('Tidak ada transaksi untuk diexport!', 'error');
    return;
  }

  let csv = 'No Faktur,Tanggal,Kasir,Pelanggan,Cara Bayar,Total Faktur,Total Bayar,Kembalian,Status\n';
  sales.forEach(s => {
    const kasir = db.tb_user.find(u => u.id_user === s.id_user);
    const pelanggan = db.tb_pelanggan.find(p => p.id_pelanggan === s.id_pelanggan);
    csv += `"${s.nomor_faktur}","${s.tanggal_penjualan}","${kasir ? kasir.nama_lengkap : 'Kasir'}","${pelanggan ? pelanggan.nama_pelanggan : 'Umum'}","${s.cara_bayar}",${s.total_faktur},${s.total_bayar},${s.kembalian},"${s.status_pembayaran}"\n`;
  });

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Laporan_Transaksi_Kasir_${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('File CSV riwayat transaksi berhasil diunduh!', 'success');
}

// --- 17. DATABASE ERD INSPECTOR ---
function showErdTable(tableName) {
  document.querySelectorAll('.erd-tab-pill').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.trim() === tableName);
  });

  const title = document.getElementById('erdCurrentTableTitle');
  const countBadge = document.getElementById('erdRecordCountBadge');
  const thead = document.getElementById('erdRawTableHead');
  const tbody = document.getElementById('erdRawTableBody');

  if (!db[tableName]) return;

  const records = db[tableName];
  title.textContent = `Tabel: ${tableName}`;
  countBadge.textContent = `${records.length} Baris Data`;

  thead.innerHTML = '';
  tbody.innerHTML = '';

  if (records.length === 0) {
    tbody.innerHTML = `<tr><td style="text-align: center; color: #94a3b8; padding: 20px;">Tabel kosong</td></tr>`;
    return;
  }

  const columns = Object.keys(records[0]);
  const headerTr = document.createElement('tr');
  columns.forEach(col => {
    const th = document.createElement('th');
    th.textContent = col;
    headerTr.appendChild(th);
  });
  thead.appendChild(headerTr);

  records.forEach(rec => {
    const tr = document.createElement('tr');
    columns.forEach(col => {
      const td = document.createElement('td');
      const val = rec[col];
      // Jika data berupa Data URL yang sangat panjang, ringkas tampilannya
      if (typeof val === 'string' && val.startsWith('data:image')) {
        td.innerHTML = `<span title="Data URL Foto" style="color:#0f766e; font-family:var(--font-mono); font-size:0.75rem;">[Foto Gambar ${val.length} bytes]</span>`;
      } else {
        td.textContent = val !== null && val !== undefined ? val : 'NULL';
      }
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
}

// --- 18. NOTIFIKASI TOAST ---
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

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
  lucide.createIcons();

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(50px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// --- 19. JAM SISTEM REALTIME ---
function updateSystemClock() {
  const clock = document.getElementById('systemClock');
  if (clock) {
    const now = new Date();
    clock.textContent = now.toLocaleTimeString('id-ID', { hour12: false });
  }
}

// --- 20. INISIALISASI APLIKASI ---
window.addEventListener('DOMContentLoaded', () => {
  loadDatabase();
  setInterval(updateSystemClock, 1000);
  updateSystemClock();

  if (currentUser) {
    enterMainApp();
  } else {
    document.getElementById('loginScreen').style.display = 'flex';
    document.getElementById('mainApp').style.display = 'none';
  }

  lucide.createIcons();
});