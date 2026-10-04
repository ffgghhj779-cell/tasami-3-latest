/**
 * Indonesian guides at /id/blog/{slug}. Slugs mirror ID_SERVICES so each guide
 * links to its landing page (informational "cara / syarat / biaya" intent).
 */
import type { IdFaq } from "./id-landing";

export type IdBlogBlock =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "check"; items: string[] }
  | { type: "steps"; items: { title: string; text: string }[] }
  | { type: "note"; title: string; text: string };

export type IdBlogPost = {
  slug: string;
  title: string;
  coverTitle: string;
  description: string;
  category: string;
  publishedAt: string;
  highlights: string[];
  body: IdBlogBlock[];
  faqs: IdFaq[];
};

export const ID_BLOG_BASE = "/id/blog";

export const ID_BLOG_POSTS: IdBlogPost[] = [
  {
    slug: "iqama-renewal",
    title: "Cara Perpanjang Iqamah di Arab Saudi: Syarat, Biaya dan Langkahnya",
    coverTitle: "Perpanjang Iqamah",
    description:
      "Panduan lengkap cara perpanjang iqamah di Arab Saudi: syarat yang harus dipenuhi, siapa yang menanggung biaya, langkah lewat Muqeem atau Absher, dan cara menghindari denda keterlambatan.",
    category: "Iqamah",
    publishedAt: "2026-10-04",
    highlights: [
      "Perpanjangan iqamah diajukan oleh pemberi kerja atau sponsor, bukan oleh pekerja sendiri.",
      "Paspor, asuransi kesehatan dan izin kerja harus berlaku sebelum iqamah bisa diperpanjang.",
      "Biaya resmi ditetapkan pemerintah dan dibayar melalui kanal resmi.",
      "Terlambat memperpanjang bisa menimbulkan denda dan menghambat layanan lain.",
    ],
    body: [
      { type: "h2", text: "Apa itu iqamah dan mengapa harus selalu berlaku?" },
      {
        type: "p",
        text: "Iqamah adalah kartu izin tinggal bagi warga asing yang bekerja atau tinggal di Arab Saudi. Selama Anda berada di Saudi, iqamah wajib selalu berlaku. Iqamah yang habis masa berlakunya bisa menimbulkan denda keterlambatan, membuat Anda tidak bisa mengajukan visa exit re-entry, dan menghambat transaksi sehari-hari seperti urusan bank atau pindah sponsor.",
      },
      {
        type: "p",
        text: "Saat ini iqamah juga tersedia dalam bentuk digital di aplikasi Absher, yang diterima di banyak transaksi. Namun tanggal berlakunya tetap sama dengan data di sistem, jadi perpanjangan tetap harus dilakukan tepat waktu.",
      },
      { type: "h2", text: "Siapa yang mengurus perpanjangan iqamah?" },
      {
        type: "p",
        text: "Perpanjangan iqamah diajukan oleh pemberi kerja atau sponsor. Untuk karyawan perusahaan, prosesnya dilakukan melalui platform Muqeem setelah izin kerja diperpanjang di Qiwa. Untuk pekerja rumah tangga, sponsor memperpanjang melalui akun Absher miliknya. Pekerja sendiri tidak bisa memperpanjang iqamahnya, tetapi bisa memantau tanggal berlakunya di Absher dan mengingatkan sponsor lebih awal.",
      },
      { type: "h2", text: "Syarat perpanjang iqamah" },
      {
        type: "check",
        items: [
          "Paspor masih berlaku untuk masa yang cukup.",
          "Asuransi kesehatan aktif, jika diwajibkan untuk kategori Anda.",
          "Izin kerja (rukhsah amal) sudah diperpanjang di Qiwa untuk karyawan perusahaan.",
          "Tidak ada pelanggaran lalu lintas yang belum dibayar.",
          "Biaya resmi iqamah dan biaya terkait sudah dilunasi.",
          "Tidak ada laporan atau pembatasan yang menghalangi layanan.",
        ],
      },
      {
        type: "note",
        title: "Urutan yang benar",
        text: "Untuk karyawan perusahaan, izin kerja di Qiwa harus diperpanjang lebih dulu, baru kemudian iqamah di Muqeem. Mencoba memperpanjang iqamah sebelum izin kerja adalah salah satu penyebab penolakan yang paling sering.",
      },
      { type: "h2", text: "Cara perpanjang iqamah langkah demi langkah" },
      {
        type: "steps",
        items: [
          { title: "Cek tanggal habis", text: "Lihat masa berlaku iqamah dan paspor di Absher, minimal satu bulan sebelum habis." },
          { title: "Lengkapi syarat", text: "Pastikan asuransi aktif, pelanggaran lalu lintas lunas dan paspor masih berlaku." },
          { title: "Perpanjang izin kerja", text: "Untuk karyawan perusahaan, pemberi kerja memperpanjang izin kerja di Qiwa." },
          { title: "Bayar biaya resmi", text: "Sponsor membayar biaya resmi melalui kanal pembayaran resmi." },
          { title: "Perpanjang iqamah", text: "Sponsor mengajukan perpanjangan di Muqeem atau Absher." },
          { title: "Cek tanggal baru", text: "Pastikan tanggal berlaku baru sudah muncul di Absher dan iqamah digital." },
        ],
      },
      { type: "h2", text: "Berapa biaya perpanjang iqamah?" },
      {
        type: "p",
        text: "Biaya perpanjangan iqamah ditetapkan oleh pemerintah Saudi dan bisa berubah sewaktu-waktu. Untuk karyawan perusahaan, biasanya ada biaya iqamah dan biaya izin kerja termasuk levy (al-maqabil al-mali). Untuk pekerja rumah tangga, ketentuannya berbeda. Nominal yang berlaku selalu muncul di platform resmi sebelum pembayaran, jadi kami tidak mencantumkan angka di sini agar tidak menyesatkan.",
      },
      {
        type: "p",
        text: "Hal penting yang perlu diketahui: menurut Peraturan Ketenagakerjaan Saudi, biaya iqamah dan izin kerja beserta perpanjangannya pada umumnya menjadi tanggung jawab pemberi kerja. Jika ada pihak yang meminta Anda mentransfer biaya resmi ke rekening pribadi, berhati-hatilah.",
      },
      { type: "h2", text: "Berapa lama prosesnya?" },
      {
        type: "p",
        text: "Jika semua syarat lengkap, perpanjangan biasanya diproses secara elektronik tanpa perlu menunggu lama. Yang sering membuat lama adalah syarat yang belum terpenuhi: asuransi habis, paspor hampir habis, pelanggaran belum dibayar, atau izin kerja belum diperpanjang.",
      },
      { type: "h2", text: "Kesalahan yang sering terjadi" },
      {
        type: "ul",
        items: [
          "Menunggu sampai hari terakhir lalu baru tahu paspor hampir habis.",
          "Tidak memperbarui data paspor baru di sistem setelah ganti paspor.",
          "Mengira iqamah digital otomatis diperpanjang tanpa pengajuan sponsor.",
          "Menyerahkan kata sandi Absher kepada orang lain.",
        ],
      },
    ],
    faqs: [
      { q: "Bisakah saya memperpanjang iqamah sendiri?", a: "Tidak. Perpanjangan diajukan oleh pemberi kerja atau sponsor melalui Muqeem atau Absher. Anda bisa memantau tanggal berlakunya dan mengingatkan sponsor lebih awal." },
      { q: "Apa yang terjadi jika iqamah terlambat diperpanjang?", a: "Bisa dikenakan denda keterlambatan sesuai aturan, dan beberapa layanan seperti exit re-entry tidak bisa diproses sampai iqamah diperpanjang." },
      { q: "Apakah iqamah digital di Absher cukup?", a: "Iqamah digital diterima di banyak transaksi sehari-hari, tetapi tanggal berlakunya tetap mengikuti data di sistem. Perpanjangan tetap wajib dilakukan." },
      { q: "Apakah Tasami bisa membantu jika sponsor sulit dihubungi?", a: "Kami bisa membantu menjelaskan syarat dan langkahnya kepada Anda dan sponsor, namun pengajuan tetap harus dilakukan dari akun sponsor sesuai aturan." },
    ],
  },
  {
    slug: "transfer-services",
    title: "Cara Pindah Sponsor (Transfer Kafalah) di Arab Saudi: Syarat dan Biaya",
    coverTitle: "Pindah Sponsor",
    description:
      "Panduan cara pindah sponsor atau transfer kafalah di Arab Saudi lewat Qiwa dan Musaned: syarat pekerja dan sponsor baru, siapa yang membayar biaya, langkah-langkahnya, dan penyebab permohonan ditolak.",
    category: "Pindah Sponsor",
    publishedAt: "2026-10-04",
    highlights: [
      "Karyawan perusahaan pindah melalui Qiwa, pekerja rumah tangga melalui Musaned.",
      "Sponsor baru mengajukan permohonan, lalu pekerja menyetujuinya dari akunnya.",
      "Iqamah yang berlaku dan tidak adanya laporan kabur (huroob) sangat menentukan.",
      "Biaya resmi biasanya dibayar oleh sponsor baru melalui kanal resmi.",
    ],
    body: [
      { type: "h2", text: "Apa itu pindah sponsor atau transfer kafalah?" },
      {
        type: "p",
        text: "Pindah sponsor (dikenal juga sebagai transfer kafalah, pindah kafil atau naql khadamat) berarti memindahkan hubungan kerja Anda dari pemberi kerja lama ke pemberi kerja baru secara resmi, tanpa harus keluar dari Arab Saudi. Setelah transfer selesai, sponsor baru bertanggung jawab atas iqamah dan izin kerja Anda.",
      },
      {
        type: "p",
        text: "Sejak reformasi hubungan kerja di Saudi, mobilitas pekerja menjadi lebih mudah. Dalam kondisi tertentu, misalnya setelah kontrak kerja berakhir, pekerja dapat pindah ke pemberi kerja lain sesuai ketentuan yang berlaku, meskipun tidak selalu memerlukan persetujuan pemberi kerja lama. Ketentuannya detail, jadi cek kondisi Anda sebelum mengambil keputusan.",
      },
      { type: "h2", text: "Jalur transfer: Qiwa atau Musaned?" },
      {
        type: "ul",
        items: [
          "Qiwa: untuk karyawan perusahaan dengan kontrak kerja di sektor swasta.",
          "Musaned: untuk pekerja rumah tangga seperti asisten rumah tangga, pengasuh dan sopir pribadi.",
        ],
      },
      { type: "h2", text: "Syarat pindah sponsor" },
      {
        type: "check",
        items: [
          "Iqamah masih berlaku.",
          "Tidak ada laporan kabur (huroob) atau laporan lain yang masih aktif.",
          "Sponsor atau perusahaan baru memenuhi syarat, termasuk status Nitaqat yang memungkinkan.",
          "Profesi di iqamah sesuai dengan pekerjaan di tempat baru, atau bisa disesuaikan.",
          "Persetujuan atau masa pemberitahuan sesuai ketentuan yang berlaku untuk kondisi Anda.",
        ],
      },
      { type: "h2", text: "Cara pindah sponsor langkah demi langkah" },
      {
        type: "steps",
        items: [
          { title: "Cek kelayakan", text: "Periksa status iqamah, laporan, dan kontrak kerja Anda saat ini." },
          { title: "Pastikan sponsor baru siap", text: "Sponsor baru memastikan akunnya aktif dan memenuhi syarat di Qiwa atau Musaned." },
          { title: "Pengajuan oleh sponsor baru", text: "Sponsor baru mengajukan permohonan transfer beserta penawaran kerja." },
          { title: "Persetujuan pekerja", text: "Anda menyetujui permohonan dari akun Qiwa atau sesuai alur di Musaned." },
          { title: "Bayar biaya resmi", text: "Biaya transfer dibayar melalui kanal resmi." },
          { title: "Selesaikan dan perbarui data", text: "Setelah transfer selesai, kontrak baru didokumentasikan dan data iqamah diperbarui." },
        ],
      },
      { type: "h2", text: "Berapa biaya pindah sponsor?" },
      {
        type: "p",
        text: "Biaya transfer ditetapkan oleh instansi resmi dan bisa berbeda tergantung jumlah transfer yang pernah dilakukan dan jenis pekerja. Biasanya biaya ini dibayar oleh sponsor baru melalui kanal resmi. Selain itu mungkin ada biaya terkait seperti perpanjangan izin kerja atau iqamah jika masanya hampir habis. Nominal yang berlaku selalu ditampilkan di platform sebelum pembayaran.",
      },
      {
        type: "note",
        title: "Waspada penipuan",
        text: "Jangan membayar siapa pun yang menjanjikan transfer cepat lewat jalur khusus di luar platform resmi. Semua transfer yang sah berjalan di Qiwa atau Musaned.",
      },
      { type: "h2", text: "Berapa lama prosesnya?" },
      {
        type: "p",
        text: "Jika syarat lengkap dan semua pihak merespons dengan cepat, transfer bisa selesai relatif cepat. Waktu bertambah jika ada masa pemberitahuan, laporan yang harus diselesaikan, atau sponsor baru belum memenuhi syarat.",
      },
      { type: "h2", text: "Penyebab permohonan transfer ditolak" },
      {
        type: "ul",
        items: [
          "Iqamah sudah habis atau hampir habis.",
          "Ada laporan kabur (huroob) yang belum diselesaikan.",
          "Status Nitaqat perusahaan baru tidak memungkinkan.",
          "Profesi tidak sesuai dengan kegiatan perusahaan baru.",
        ],
      },
    ],
    faqs: [
      { q: "Apakah saya butuh persetujuan sponsor lama?", a: "Tergantung kondisi. Dalam beberapa kasus, seperti setelah kontrak berakhir, transfer bisa dilakukan sesuai ketentuan reformasi hubungan kerja. Kami cek kondisi Anda terlebih dulu." },
      { q: "Bisakah pindah sponsor jika ada laporan kabur?", a: "Laporan kabur biasanya harus diselesaikan dulu sesuai prosedur resmi sebelum transfer bisa diproses." },
      { q: "Siapa yang membayar biaya transfer?", a: "Biasanya sponsor baru membayar biaya resmi transfer melalui kanal resmi." },
      { q: "Apakah pekerja rumah tangga bisa pindah ke perusahaan?", a: "Perpindahan antar kategori memiliki ketentuan khusus, termasuk perubahan profesi. Kami jelaskan apakah memungkinkan untuk kondisi Anda." },
    ],
  },
  {
    slug: "exit-reentry",
    title: "Cara Membuat Visa Exit Re-entry Arab Saudi: Syarat, Biaya dan Perpanjangan",
    coverTitle: "Exit Re-entry",
    description:
      "Panduan visa exit re-entry Arab Saudi untuk pulang ke Indonesia: syarat penerbitan, perbedaan single dan multiple, biaya resmi, cara memperpanjang saat di luar negeri, dan risiko jika tidak kembali tepat waktu.",
    category: "Visa",
    publishedAt: "2026-10-04",
    highlights: [
      "Visa exit re-entry diterbitkan oleh sponsor lewat Absher atau Muqeem.",
      "Iqamah harus berlaku cukup lama untuk menutupi masa perjalanan.",
      "Visa bisa diperpanjang dari luar negeri dalam banyak kasus, sebelum habis.",
      "Tidak kembali sebelum visa habis bisa berakibat larangan masuk untuk jangka waktu tertentu.",
    ],
    body: [
      { type: "h2", text: "Apa itu visa exit re-entry?" },
      {
        type: "p",
        text: "Visa exit re-entry (visa keluar-masuk) memungkinkan Anda keluar dari Arab Saudi, misalnya pulang ke Indonesia untuk cuti atau mudik, lalu kembali lagi dengan iqamah yang sama. Visa ini diterbitkan oleh sponsor atau perusahaan secara elektronik, dan tersedia dalam bentuk sekali jalan (single) atau berkali-kali (multiple).",
      },
      { type: "h2", text: "Single atau multiple?" },
      {
        type: "ul",
        items: [
          "Single: untuk satu kali keluar dan kembali. Cocok untuk cuti tahunan biasa.",
          "Multiple: untuk beberapa kali keluar-masuk selama masa visa. Cocok jika Anda sering bepergian.",
        ],
      },
      { type: "h2", text: "Syarat visa exit re-entry" },
      {
        type: "check",
        items: [
          "Iqamah berlaku untuk masa yang cukup selama perjalanan.",
          "Paspor masih berlaku dan datanya sudah diperbarui di sistem.",
          "Pelanggaran lalu lintas sudah dibayar.",
          "Biaya resmi visa sudah dibayar.",
          "Tidak ada larangan bepergian atau kasus yang menghalangi.",
        ],
      },
      { type: "h2", text: "Cara membuat visa exit re-entry" },
      {
        type: "steps",
        items: [
          { title: "Rencanakan tanggal", text: "Tentukan tanggal berangkat dan kembali, lalu sampaikan ke sponsor lebih awal." },
          { title: "Cek iqamah dan paspor", text: "Pastikan keduanya berlaku cukup lama dan data paspor sudah benar." },
          { title: "Lunasi pelanggaran", text: "Bayar pelanggaran lalu lintas jika ada." },
          { title: "Penerbitan oleh sponsor", text: "Sponsor menerbitkan visa di Absher atau Muqeem dan memilih jenis serta durasinya." },
          { title: "Simpan bukti visa", text: "Simpan nomor dan tanggal habis visa, lalu catat batas terakhir kembali." },
        ],
      },
      { type: "h2", text: "Berapa biaya visa exit re-entry?" },
      {
        type: "p",
        text: "Biaya ditetapkan oleh Direktorat Jenderal Paspor (Jawazat) dan berbeda tergantung jenis visa serta durasinya. Nominal muncul di platform sebelum pembayaran dan bisa berubah sewaktu-waktu, jadi selalu cek saat pengajuan. Biaya dibayar melalui kanal resmi.",
      },
      { type: "h2", text: "Bisakah diperpanjang saat saya di Indonesia?" },
      {
        type: "p",
        text: "Dalam banyak kasus bisa. Sponsor dapat memperpanjang visa sebelum habis, dengan syarat iqamah masih berlaku untuk masa perpanjangan dan biaya dibayar. Jika iqamah hampir habis, mungkin perlu diperpanjang lebih dulu. Jangan menunggu hari terakhir.",
      },
      {
        type: "note",
        title: "Jika tidak kembali tepat waktu",
        text: "Tidak kembali sebelum visa habis bisa berdampak pada status iqamah dan berakibat larangan masuk ke Saudi untuk jangka waktu tertentu sesuai aturan. Jika rencana berubah, segera hubungi sponsor.",
      },
      { type: "h2", text: "Berapa lama penerbitannya?" },
      {
        type: "p",
        text: "Jika syarat lengkap, visa biasanya terbit secara elektronik tanpa menunggu lama. Penundaan umumnya karena pelanggaran yang belum dibayar, iqamah yang terlalu pendek, atau data paspor lama.",
      },
    ],
    faqs: [
      { q: "Bisakah saya membuat visa exit re-entry sendiri?", a: "Tidak. Visa diterbitkan oleh sponsor atau perusahaan. Untuk anggota keluarga, kepala keluarga yang menerbitkannya." },
      { q: "Bisakah visa dibatalkan?", a: "Bisa, selama Anda belum keluar dari Saudi. Setelah keluar, yang bisa dilakukan adalah perpanjangan jika syaratnya terpenuhi." },
      { q: "Apakah saya perlu mencetak visa?", a: "Visa tercatat secara elektronik, tetapi menyimpan salinan atau tangkapan layar sangat disarankan untuk berjaga-jaga." },
      { q: "Apa yang harus saya lakukan jika ganti paspor di Indonesia?", a: "Data paspor baru perlu diperbarui di sistem oleh sponsor. Hubungi sponsor sebelum kembali agar tidak ada kendala di bandara." },
    ],
  },
  {
    slug: "final-exit",
    title: "Cara Final Exit dari Arab Saudi: Syarat, Biaya dan Hak yang Harus Diselesaikan",
    coverTitle: "Final Exit",
    description:
      "Panduan final exit (keluar permanen) dari Arab Saudi: syarat penerbitan visa, hak pekerja yang harus diselesaikan seperti gaji dan pesangon, biaya resmi, langkah-langkahnya, dan apa yang terjadi jika tidak berangkat tepat waktu.",
    category: "Visa",
    publishedAt: "2026-10-04",
    highlights: [
      "Visa final exit diterbitkan oleh sponsor lewat Muqeem atau Absher.",
      "Pelanggaran lalu lintas dan kendaraan atas nama Anda harus diselesaikan dulu.",
      "Gaji tersisa dan uang akhir masa kerja (pesangon) perlu diselesaikan sebelum berangkat.",
      "Visa bisa dibatalkan selama Anda belum keluar dari Saudi.",
    ],
    body: [
      { type: "h2", text: "Apa itu final exit?" },
      {
        type: "p",
        text: "Final exit adalah visa keluar permanen dari Arab Saudi. Setelah Anda berangkat dengan visa ini, iqamah dibatalkan dan hubungan kerja dengan sponsor berakhir. Final exit biasanya dilakukan saat kontrak selesai, saat mengundurkan diri, atau saat pemberi kerja mengakhiri hubungan kerja sesuai aturan.",
      },
      { type: "h2", text: "Syarat penerbitan visa final exit" },
      {
        type: "check",
        items: [
          "Paspor masih berlaku.",
          "Pelanggaran lalu lintas sudah dibayar.",
          "Tidak ada kendaraan terdaftar atas nama Anda, atau sudah dipindahkan kepemilikannya.",
          "Tidak ada kasus, laporan atau larangan bepergian.",
          "Biaya resmi terkait iqamah sudah diselesaikan, jika ada.",
        ],
      },
      { type: "h2", text: "Hak pekerja yang harus diselesaikan" },
      {
        type: "p",
        text: "Selain syarat resmi, ada hak dan kewajiban antara pekerja dan pemberi kerja yang sebaiknya diselesaikan dan didokumentasikan sebelum berangkat:",
      },
      {
        type: "ul",
        items: [
          "Gaji yang belum dibayar sampai hari terakhir bekerja.",
          "Uang akhir masa kerja (end of service award / pesangon) sesuai kontrak dan Peraturan Ketenagakerjaan.",
          "Kompensasi cuti yang belum diambil, jika berlaku.",
          "Pengembalian barang milik perusahaan.",
          "Menutup rekening bank, nomor HP dan layanan lain atas nama Anda.",
        ],
      },
      { type: "h2", text: "Cara final exit langkah demi langkah" },
      {
        type: "steps",
        items: [
          { title: "Cek pelanggaran dan kendaraan", text: "Periksa di Absher apakah ada pelanggaran atau kendaraan atas nama Anda." },
          { title: "Selesaikan hak dan kewajiban", text: "Sepakati dan dokumentasikan gaji, pesangon dan cuti dengan pemberi kerja." },
          { title: "Penerbitan visa", text: "Sponsor menerbitkan visa final exit di Muqeem atau Absher." },
          { title: "Pesan tiket", text: "Pastikan tanggal berangkat masih dalam masa berlaku visa." },
          { title: "Berangkat", text: "Setelah berangkat, sponsor menyelesaikan penutupan hubungan kerja di Qiwa dan GOSI." },
        ],
      },
      { type: "h2", text: "Berapa biaya final exit?" },
      {
        type: "p",
        text: "Penerbitan visa final exit mengikuti aturan Jawazat. Tergantung kondisi Anda, mungkin ada biaya terkait iqamah, levy, atau denda yang harus diselesaikan lebih dulu. Semua nominal yang berlaku muncul di platform sebelum penerbitan dan dibayar melalui kanal resmi.",
      },
      {
        type: "note",
        title: "Wajib berangkat dalam masa berlaku visa",
        text: "Jika Anda tidak berangkat sebelum visa final exit habis, Anda dan sponsor bisa dikenakan denda dan prosedur resmi. Jika rencana berubah, minta sponsor membatalkan visa sebelum habis.",
      },
      { type: "h2", text: "Berapa lama prosesnya?" },
      {
        type: "p",
        text: "Jika semua syarat lengkap, visa biasanya terbit secara elektronik tanpa menunggu lama. Yang paling sering menunda adalah pelanggaran yang belum dibayar, kendaraan atas nama pekerja, atau kasus yang perlu diselesaikan.",
      },
    ],
    faqs: [
      { q: "Bisakah final exit diterbitkan jika iqamah sudah habis?", a: "Dalam banyak kasus bisa setelah biaya dan denda terkait dibayar. Nominalnya muncul di platform sebelum penerbitan." },
      { q: "Bisakah saya kembali ke Saudi setelah final exit?", a: "Bisa dengan visa baru sesuai aturan, selama tidak ada larangan masuk. Final exit yang resmi tidak melarang Anda kembali." },
      { q: "Bagaimana jika pemberi kerja tidak membayar pesangon?", a: "Hak pekerja dapat diajukan melalui jalur resmi Kementerian Sumber Daya Manusia. Simpan kontrak dan bukti pembayaran gaji Anda." },
      { q: "Bisakah visa final exit dibatalkan?", a: "Bisa, selama Anda belum meninggalkan Saudi dan sesuai ketentuan di platform." },
    ],
  },
  {
    slug: "document-service",
    title: "Cara Mengurus Dokumen di Arab Saudi: Panduan Lengkap untuk Warga Indonesia",
    coverTitle: "Urus Dokumen di Saudi",
    description:
      "Panduan mengurus dokumen di Arab Saudi untuk warga Indonesia: jenis dokumen yang paling sering diurus, platform resmi yang digunakan, syarat umum, cara memilih jasa pengurusan yang terpercaya, dan cara menghindari penipuan.",
    category: "Dokumen",
    publishedAt: "2026-10-04",
    highlights: [
      "Hampir semua urusan resmi di Saudi berjalan lewat Absher, Muqeem, Qiwa dan Musaned.",
      "Dokumen Indonesia seperti paspor diurus di KBRI Riyadh atau KJRI Jeddah.",
      "Jasa pengurusan yang terpercaya tidak meminta kata sandi dan tidak menjanjikan hasil.",
      "Biaya resmi selalu dibayar langsung melalui kanal resmi.",
    ],
    body: [
      { type: "h2", text: "Dokumen apa saja yang sering diurus?" },
      {
        type: "ul",
        items: [
          "Iqamah: penerbitan, perpanjangan, pengganti yang hilang.",
          "Visa: exit re-entry, final exit, visa kunjungan keluarga.",
          "Pekerjaan: pindah sponsor, perubahan profesi, kontrak kerja di Qiwa.",
          "Pekerja rumah tangga: kontrak dan transfer di Musaned.",
          "Legalisasi dokumen: pengesahan di Kementerian Luar Negeri Saudi untuk dokumen tertentu.",
          "Janji temu: kantor pemerintah, pengadilan atau konsulat.",
        ],
      },
      { type: "h2", text: "Platform resmi yang perlu Anda kenal" },
      {
        type: "ul",
        items: [
          "Absher: layanan individu seperti iqamah, visa, pelanggaran dan pembaruan data.",
          "Muqeem: layanan perusahaan untuk mengurus karyawan asing.",
          "Qiwa: izin kerja, kontrak kerja dan pindah sponsor untuk karyawan perusahaan.",
          "Musaned: semua urusan pekerja rumah tangga.",
          "Najiz: layanan kehakiman seperti surat kuasa elektronik.",
        ],
      },
      {
        type: "note",
        title: "Dokumen dari pemerintah Indonesia",
        text: "Untuk paspor Indonesia dan dokumen kependudukan Indonesia, layanan diberikan oleh KBRI Riyadh atau KJRI Jeddah sesuai wilayah Anda. Tasami tidak menerbitkan dokumen Indonesia, tetapi bisa membantu urusan di sisi Saudi yang terkait, seperti memperbarui data paspor baru di sistem.",
      },
      { type: "h2", text: "Syarat umum mengurus dokumen" },
      {
        type: "check",
        items: [
          "Iqamah dan paspor yang berlaku.",
          "Akun Absher aktif dengan nomor HP atas nama Anda.",
          "Kerja sama sponsor untuk layanan yang harus diajukan dari akunnya.",
          "Pelanggaran dan kewajiban resmi sudah diselesaikan.",
          "Dokumen pendukung sesuai jenis layanan.",
        ],
      },
      { type: "h2", text: "Cara mengurus dokumen dengan benar" },
      {
        type: "steps",
        items: [
          { title: "Kenali layanannya", text: "Pastikan layanan apa yang Anda butuhkan dan di platform mana." },
          { title: "Cek kondisi Anda", text: "Periksa masa berlaku dokumen, pelanggaran dan laporan di Absher." },
          { title: "Siapkan dokumen", text: "Kumpulkan dokumen pendukung sekaligus, bukan satu per satu." },
          { title: "Ajukan lewat akun yang tepat", text: "Akun Anda sendiri atau akun sponsor sesuai jenis layanan." },
          { title: "Pantau hasilnya", text: "Cek status permohonan dan tanggapi catatan jika ada." },
        ],
      },
      { type: "h2", text: "Berapa biaya mengurus dokumen?" },
      {
        type: "p",
        text: "Ada dua jenis biaya yang harus dibedakan: biaya resmi pemerintah yang ditetapkan instansi dan dibayar melalui kanal resmi, serta biaya jasa jika Anda memakai kantor pengurusan. Mintalah penjelasan tertulis tentang perbedaan keduanya sebelum mulai. Biaya resmi tidak pernah perlu ditransfer ke rekening pribadi siapa pun.",
      },
      { type: "h2", text: "Cara memilih jasa pengurusan yang terpercaya" },
      {
        type: "ul",
        items: [
          "Kantor resmi dengan Commercial Register (CR) yang bisa dicek.",
          "Menjelaskan dengan jujur bahwa mereka bukan instansi pemerintah.",
          "Tidak menjanjikan hasil pasti atau waktu tetap.",
          "Tidak meminta kata sandi Absher atau kode verifikasi Anda.",
          "Menjelaskan langkah dan memungkinkan Anda memantau sendiri.",
        ],
      },
      { type: "h2", text: "Berapa lama prosesnya?" },
      {
        type: "p",
        text: "Setiap layanan berbeda. Banyak transaksi elektronik selesai cepat jika syarat lengkap, sementara yang melibatkan pihak lain atau pemeriksaan tambahan membutuhkan waktu lebih lama. Pengecekan kondisi di awal adalah cara terbaik menghemat waktu.",
      },
    ],
    faqs: [
      { q: "Apakah Tasami instansi pemerintah?", a: "Bukan. Tasami adalah kantor jasa pengurusan swasta di Arab Saudi. Semua transaksi tetap diproses melalui platform resmi." },
      { q: "Dalam bahasa apa komunikasinya?", a: "Komunikasi berlangsung lewat WhatsApp dalam bahasa Arab atau Inggris. Kirim pesan singkat yang jelas, dan kami akan menjelaskan langkahnya dengan sederhana." },
      { q: "Apakah saya harus datang ke kantor?", a: "Hampir semua proses bisa dipantau jarak jauh lewat WhatsApp, di kota mana pun di Arab Saudi." },
      { q: "Apakah Tasami bisa mengurus paspor Indonesia?", a: "Tidak. Paspor Indonesia diurus di KBRI Riyadh atau KJRI Jeddah. Kami membantu urusan di sisi Saudi yang terkait." },
    ],
  },
  {
    slug: "business-license",
    title: "Cara Buka Usaha di Arab Saudi untuk Warga Asing: Syarat, Izin dan Biaya",
    coverTitle: "Buka Usaha di Saudi",
    description:
      "Panduan cara buka usaha dan mendirikan perusahaan di Arab Saudi untuk warga asing termasuk warga Indonesia: jalur investasi, izin yang dibutuhkan, syarat umum, komponen biaya, dan kesalahan yang membuat izin ditolak.",
    category: "Usaha",
    publishedAt: "2026-10-04",
    highlights: [
      "Warga asing umumnya memerlukan lisensi investasi dari Kementerian Investasi (MISA).",
      "Setelah itu: Commercial Register, izin kota (Balady), dan izin sesuai kegiatan.",
      "Biaya terdiri dari biaya lisensi, pendaftaran, lokasi dan operasional.",
      "Cek kegiatan usaha dan lokasi sebelum menandatangani kontrak sewa.",
    ],
    body: [
      { type: "h2", text: "Bisakah warga asing membuka usaha di Arab Saudi?" },
      {
        type: "p",
        text: "Bisa. Arab Saudi membuka banyak sektor untuk investor asing. Jalur yang paling umum adalah melalui lisensi investasi dari Kementerian Investasi (MISA), lalu dilanjutkan dengan pendaftaran perusahaan di Kementerian Perdagangan. Ada juga jalur lain untuk kondisi tertentu, misalnya pemegang iqamah premium. Jalur yang tepat tergantung jenis usaha, modal dan status Anda.",
      },
      {
        type: "note",
        title: "Hindari jalur nama pinjaman",
        text: "Menjalankan usaha atas nama warga Saudi padahal dimiliki warga asing (dikenal sebagai tasattur) melanggar hukum dan bisa berakibat sanksi berat. Gunakan selalu jalur investasi resmi.",
      },
      { type: "h2", text: "Izin yang biasanya dibutuhkan" },
      {
        type: "ul",
        items: [
          "Lisensi investasi dari MISA untuk investor asing.",
          "Commercial Register (CR) dari Kementerian Perdagangan.",
          "Pendaftaran di GOSI, Qiwa dan ZATCA (zakat dan pajak).",
          "Izin kota (Balady) untuk lokasi usaha.",
          "Sertifikat keselamatan dari Pertahanan Sipil (Salamah).",
          "Izin tambahan sesuai kegiatan, misalnya izin makanan dari SFDA.",
        ],
      },
      { type: "h2", text: "Syarat umum" },
      {
        type: "check",
        items: [
          "Paspor dan dokumen identitas yang berlaku.",
          "Dokumen perusahaan induk jika berinvestasi atas nama perusahaan, yang sudah dilegalisasi.",
          "Rencana kegiatan usaha yang sesuai daftar kegiatan yang diizinkan.",
          "Memenuhi ketentuan modal dan persyaratan sektor terkait.",
          "Lokasi usaha yang sesuai peruntukan, jika usaha membutuhkan tempat fisik.",
        ],
      },
      { type: "h2", text: "Cara buka usaha langkah demi langkah" },
      {
        type: "steps",
        items: [
          { title: "Tentukan kegiatan dan jalur", text: "Pilih kegiatan usaha dan pastikan jalur investasi yang sesuai dengan kondisi Anda." },
          { title: "Siapkan dokumen", text: "Siapkan dan legalisasi dokumen yang dibutuhkan." },
          { title: "Ajukan lisensi investasi", text: "Ajukan lisensi melalui platform Kementerian Investasi." },
          { title: "Daftarkan perusahaan", text: "Pesan nama dagang, siapkan akta, lalu terbitkan Commercial Register." },
          { title: "Daftar di instansi terkait", text: "Daftarkan perusahaan di GOSI, Qiwa, Muqeem dan ZATCA." },
          { title: "Izin lokasi dan kegiatan", text: "Urus izin Balady, keselamatan, dan izin sektor jika diperlukan." },
        ],
      },
      { type: "h2", text: "Berapa biaya buka usaha di Arab Saudi?" },
      {
        type: "p",
        text: "Tidak ada satu angka yang cocok untuk semua. Biaya terdiri dari biaya lisensi investasi, pendaftaran perusahaan dan langganan Kamar Dagang, legalisasi dokumen, sewa dan persiapan lokasi, izin kota dan keselamatan, serta biaya operasional seperti visa karyawan dan levy. Biaya resmi ditetapkan instansi dan bisa berubah, jadi kami menyusun perkiraan sesuai rencana Anda, bukan angka umum.",
      },
      { type: "h2", text: "Berapa lama prosesnya?" },
      {
        type: "p",
        text: "Tergantung jalur, kegiatan dan kesiapan dokumen. Legalisasi dokumen dari luar negeri dan izin sektor tertentu sering memakan waktu paling lama. Menyiapkan dokumen dengan benar sejak awal adalah cara terbaik mempercepat proses.",
      },
      { type: "h2", text: "Kesalahan yang membuat izin ditolak" },
      {
        type: "ul",
        items: [
          "Menyewa tempat sebelum memastikan kegiatan boleh dijalankan di lokasi itu.",
          "Memilih kegiatan yang tidak sesuai dengan usaha yang sebenarnya.",
          "Dokumen dari luar negeri belum dilegalisasi dengan benar.",
          "Mengandalkan jalur nama pinjaman yang tidak resmi.",
        ],
      },
    ],
    faqs: [
      { q: "Apakah warga Indonesia bisa memiliki usaha 100% di Saudi?", a: "Di banyak sektor bisa melalui jalur investasi asing resmi, tergantung kegiatan dan persyaratan sektor. Kami jelaskan pilihan yang sesuai dengan kondisi Anda." },
      { q: "Apakah saya harus tinggal di Saudi untuk membuka usaha?", a: "Tidak selalu. Beberapa langkah bisa dilakukan dari luar negeri, tetapi menjalankan usaha biasanya membutuhkan perwakilan atau manajer di Saudi." },
      { q: "Apakah Tasami bisa membantu dari awal sampai akhir?", a: "Kami membantu menjelaskan jalur, menyiapkan dokumen dan memantau pendaftaran resmi di setiap tahap, tanpa menjanjikan hasil karena keputusan ada pada instansi berwenang." },
      { q: "Apakah usaha online butuh izin?", a: "Ya, usaha online juga memerlukan pendaftaran resmi sesuai kegiatannya. Ketentuannya bisa berbeda dari usaha dengan tempat fisik." },
    ],
  },
  {
    slug: "musaned",
    title: "Panduan Musaned untuk Pekerja Rumah Tangga di Arab Saudi: Cara, Syarat dan Biaya",
    coverTitle: "Panduan Musaned",
    description:
      "Panduan Musaned untuk sponsor dan pekerja rumah tangga di Arab Saudi: fungsi platform, cara mengajukan visa dan kontrak, syarat yang dibutuhkan, komponen biaya, pindah sponsor, serta hak pekerja yang perlu diketahui.",
    category: "Musaned",
    publishedAt: "2026-10-04",
    highlights: [
      "Musaned adalah platform resmi Kementerian Sumber Daya Manusia untuk pekerja rumah tangga.",
      "Visa, pemilihan kantor perekrutan, kontrak dan transfer semuanya lewat Musaned.",
      "Kontrak menjelaskan gaji, hak istirahat dan masa jaminan.",
      "Penempatan dari Indonesia juga tunduk pada kebijakan pemerintah Indonesia.",
    ],
    body: [
      { type: "h2", text: "Apa itu Musaned?" },
      {
        type: "p",
        text: "Musaned adalah platform resmi Kementerian Sumber Daya Manusia dan Pembangunan Sosial Arab Saudi untuk semua urusan pekerja rumah tangga, seperti asisten rumah tangga, pengasuh anak dan sopir pribadi. Melalui Musaned, sponsor mengajukan visa, memilih kantor perekrutan berlisensi, membuat kontrak elektronik, memindahkan pekerja ke sponsor lain, dan mengurus beberapa laporan.",
      },
      { type: "h2", text: "Musaned untuk sponsor dan untuk pekerja" },
      {
        type: "ul",
        items: [
          "Sponsor: mengajukan visa, memilih kantor perekrutan, menandatangani kontrak, dan mengurus transfer.",
          "Pekerja: kontrak tercatat secara resmi sehingga hak seperti gaji dan istirahat lebih terlindungi.",
          "Pembayaran gaji pekerja rumah tangga melalui kanal elektronik diberlakukan secara bertahap untuk melindungi hak kedua pihak.",
        ],
      },
      { type: "h2", text: "Syarat mengajukan visa pekerja rumah tangga" },
      {
        type: "check",
        items: [
          "Sponsor memenuhi syarat kelayakan sesuai ketentuan yang berlaku.",
          "Bukti kemampuan finansial sesuai jumlah pekerja yang diminta.",
          "Tidak ada pelanggaran atau tunggakan yang menghalangi.",
          "Data Absher sponsor lengkap, termasuk alamat nasional dan nomor HP.",
        ],
      },
      { type: "h2", text: "Cara mengajukan lewat Musaned" },
      {
        type: "steps",
        items: [
          { title: "Masuk ke Musaned", text: "Sponsor masuk melalui Nafath (akses nasional) dan melengkapi data akun." },
          { title: "Ajukan visa", text: "Pilih profesi dan negara asal pekerja." },
          { title: "Bayar biaya resmi visa", text: "Pembayaran dilakukan melalui kanal resmi." },
          { title: "Pilih kantor perekrutan", text: "Bandingkan penawaran kantor berlisensi di dalam platform." },
          { title: "Tanda tangani kontrak", text: "Kontrak elektronik ditandatangani lalu proses perekrutan dipantau sampai pekerja tiba." },
        ],
      },
      { type: "h2", text: "Berapa biaya lewat Musaned?" },
      {
        type: "p",
        text: "Biaya terdiri dari dua bagian: biaya resmi visa yang ditetapkan pemerintah, dan biaya kantor perekrutan yang berbeda menurut negara asal, kantor dan layanan yang termasuk. Penawaran kantor ditampilkan di dalam Musaned, jadi bandingkan sebelum menandatangani. Jangan membayar apa pun di luar platform kepada pihak yang menjanjikan proses lebih cepat.",
      },
      {
        type: "note",
        title: "Penempatan dari Indonesia",
        text: "Penempatan pekerja rumah tangga dari Indonesia ke Arab Saudi juga tunduk pada kebijakan pemerintah Indonesia, yang bisa berubah. Pastikan selalu melalui jalur resmi yang diakui kedua negara untuk melindungi hak pekerja.",
      },
      { type: "h2", text: "Pindah sponsor lewat Musaned" },
      {
        type: "p",
        text: "Pekerja rumah tangga yang sudah berada di Saudi bisa dipindahkan ke sponsor lain melalui Musaned sesuai syarat yang berlaku, dengan persetujuan para pihak. Cara ini sering lebih cepat daripada merekrut dari luar negeri. Transfer harus diselesaikan secara resmi sebelum pekerja pindah rumah.",
      },
      { type: "h2", text: "Hak pekerja yang perlu diketahui" },
      {
        type: "ul",
        items: [
          "Gaji bulanan sesuai kontrak dan dibayar tepat waktu.",
          "Waktu istirahat harian dan hari libur sesuai ketentuan.",
          "Dokumen pribadi seperti paspor tetap menjadi hak pekerja.",
          "Hak mengajukan keluhan melalui jalur resmi kementerian.",
        ],
      },
    ],
    faqs: [
      { q: "Apakah Tasami kantor perekrutan?", a: "Bukan. Kami kantor jasa pengurusan. Perekrutan dilakukan oleh kantor berlisensi di dalam Musaned; kami membantu memahami langkah dan memantau permohonan." },
      { q: "Berapa lama proses perekrutan?", a: "Tidak tetap. Tergantung kantor, negara asal dan prosedur di negara pekerja. Kantor mencantumkan perkiraan waktu dalam penawarannya di Musaned." },
      { q: "Bagaimana jika pekerja tidak cocok setelah tiba?", a: "Kontrak di Musaned biasanya memuat masa jaminan dan ketentuan penggantian atau pengembalian dengan syarat tertentu. Baca ketentuannya sebelum menandatangani." },
      { q: "Bisakah pekerja rumah tangga mengecek kontraknya?", a: "Kontrak tercatat di Musaned. Pekerja bisa meminta sponsor atau kantor menunjukkan detail kontrak, dan bisa menghubungi kementerian jika ada masalah." },
    ],
  },
  {
    slug: "absher",
    title: "Cara Daftar dan Pakai Akun Absher untuk Warga Asing: Panduan Lengkap",
    coverTitle: "Panduan Absher",
    description:
      "Panduan Absher untuk warga Indonesia di Arab Saudi: cara daftar dan aktivasi akun, syarat yang dibutuhkan, layanan yang bisa dipakai, biaya, perbedaan Absher dan Muqeem, serta tips keamanan akun.",
    category: "Absher",
    publishedAt: "2026-10-04",
    highlights: [
      "Akun Absher gratis; biaya hanya untuk layanan tertentu sesuai tarif resmi.",
      "Nomor HP harus terdaftar atas nama Anda agar akun bisa diaktifkan.",
      "Absher untuk individu, Muqeem untuk perusahaan.",
      "Jangan pernah memberikan kata sandi atau kode verifikasi kepada siapa pun.",
    ],
    body: [
      { type: "h2", text: "Apa itu Absher?" },
      {
        type: "p",
        text: "Absher adalah platform resmi Kementerian Dalam Negeri Arab Saudi untuk layanan individu, baik warga Saudi maupun penduduk asing. Melalui Absher Anda bisa melihat data iqamah dan paspor, menyimpan iqamah digital, mengecek dan membayar pelanggaran lalu lintas, memperbarui data, dan memakai berbagai layanan Jawazat dan lalu lintas.",
      },
      { type: "h2", text: "Absher vs Muqeem: apa bedanya?" },
      {
        type: "ul",
        items: [
          "Absher: untuk individu. Sponsor pekerja rumah tangga juga memakai Absher untuk mengurus pekerjanya.",
          "Muqeem: untuk perusahaan, dipakai untuk mengurus iqamah dan visa karyawan asing.",
          "Karyawan perusahaan memakai Absher untuk melihat data dan layanan pribadi, sementara perusahaan memakai Muqeem untuk pengajuan.",
        ],
      },
      { type: "h2", text: "Syarat daftar akun Absher" },
      {
        type: "check",
        items: [
          "Iqamah yang berlaku.",
          "Nomor HP Saudi yang terdaftar atas nama Anda (terverifikasi dengan iqamah).",
          "Alamat email aktif.",
          "Data paspor yang sudah benar di sistem.",
        ],
      },
      { type: "h2", text: "Cara daftar dan aktivasi akun Absher" },
      {
        type: "steps",
        items: [
          { title: "Daftarkan akun", text: "Buka situs atau aplikasi Absher Individu dan pilih pendaftaran pengguna baru dengan nomor iqamah." },
          { title: "Isi data", text: "Masukkan nama pengguna, kata sandi yang kuat, email dan nomor HP." },
          { title: "Verifikasi nomor HP", text: "Masukkan kode yang dikirim ke nomor HP yang terdaftar atas nama Anda." },
          { title: "Aktivasi akun", text: "Selesaikan aktivasi melalui salah satu cara aktivasi yang tersedia, seperti mesin layanan mandiri Absher." },
          { title: "Aktifkan iqamah digital", text: "Setelah masuk, simpan iqamah digital di aplikasi Absher." },
        ],
      },
      {
        type: "note",
        title: "Nomor HP bukan atas nama Anda?",
        text: "Ini penyebab paling umum gagal aktivasi. Pastikan nomor HP terdaftar atas nama Anda di operator dengan iqamah Anda. Jika ganti nomor, perbarui juga di Absher.",
      },
      { type: "h2", text: "Layanan Absher yang sering dipakai" },
      {
        type: "ul",
        items: [
          "Melihat masa berlaku iqamah dan paspor.",
          "Iqamah digital di aplikasi.",
          "Mengecek dan membayar pelanggaran lalu lintas.",
          "Memperbarui data paspor dan nomor HP.",
          "Melihat visa exit re-entry yang diterbitkan sponsor.",
        ],
      },
      { type: "h2", text: "Berapa biaya Absher?" },
      {
        type: "p",
        text: "Mendaftar dan memakai akun Absher gratis. Biaya hanya berlaku untuk layanan tertentu, seperti penerbitan visa atau penggantian dokumen, sesuai tarif resmi yang muncul di platform sebelum pembayaran. Pembayaran dilakukan melalui kanal resmi seperti SADAD.",
      },
      { type: "h2", text: "Tips keamanan akun Absher" },
      {
        type: "ul",
        items: [
          "Jangan memberikan kata sandi atau kode verifikasi kepada siapa pun, termasuk kepada kantor jasa.",
          "Waspadai pesan atau tautan palsu yang mengatasnamakan Absher.",
          "Gunakan kata sandi yang kuat dan berbeda dari akun lain.",
          "Periksa notifikasi Absher secara rutin.",
        ],
      },
    ],
    faqs: [
      { q: "Apakah akun Absher berbayar?", a: "Tidak. Akun Absher gratis. Biaya hanya untuk layanan tertentu sesuai tarif resmi." },
      { q: "Saya lupa kata sandi Absher, apa yang harus dilakukan?", a: "Gunakan fitur lupa kata sandi di Absher dengan nomor HP yang terdaftar. Jika nomor HP sudah berubah, data perlu diperbarui melalui cara resmi yang tersedia." },
      { q: "Bisakah Tasami membuatkan akun Absher untuk saya?", a: "Akun harus dibuat atas nama dan data Anda sendiri. Kami memandu langkah demi langkah tanpa meminta kata sandi Anda." },
      { q: "Apakah karyawan perusahaan juga butuh Absher?", a: "Ya, untuk melihat data pribadi, iqamah digital dan pelanggaran. Pengajuan iqamah dan visa tetap dilakukan perusahaan lewat Muqeem." },
    ],
  },
];

export function findIdPost(slug: string): IdBlogPost | undefined {
  return ID_BLOG_POSTS.find((p) => p.slug === slug);
}

export function idPostWords(post: IdBlogPost): number {
  const text = [
    post.description,
    ...post.highlights,
    ...post.body.flatMap((b) => {
      if (b.type === "h2" || b.type === "p") return [b.text];
      if (b.type === "note") return [b.title, b.text];
      if (b.type === "steps") return b.items.flatMap((s) => [s.title, s.text]);
      return b.items;
    }),
    ...post.faqs.flatMap((f) => [f.q, f.a]),
  ].join(" ");
  return text.split(/\s+/).filter(Boolean).length;
}

export function idReadingMinutes(post: IdBlogPost): number {
  return Math.max(3, Math.ceil(idPostWords(post) / 180));
}

export function idHeadingId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 60);
}

export function idBlogCover(slug: string): string {
  return `/blog/id/${slug}.webp`;
}
