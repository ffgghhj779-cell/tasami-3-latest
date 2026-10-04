/**
 * Indonesian (id) landing pages — standalone, outside the next-intl locales.
 * No government fees, fixed durations or approval promises.
 */

export type IdFaq = { q: string; a: string };

export type IdService = {
  slug: string;
  title: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  metaDescription: string;
  intro: string;
  who: string[];
  steps: string[];
  tips: string[];
  faqs: IdFaq[];
  /** Equivalent page in the main locales (path without locale prefix), for hreflang. */
  equivalentPath?: string;
};

export const ID_BASE = "/id";
export const ID_SERVICES_BASE = "/id/services/government";

export const ID_COMMON_FAQS: IdFaq[] = [
  {
    q: "Apakah Tasami instansi pemerintah?",
    a: "Bukan. Tasami adalah kantor jasa pengurusan (ta'qib) swasta di Arab Saudi. Semua transaksi tetap diproses melalui platform resmi seperti Absher, Muqeem, Qiwa dan Musaned.",
  },
  {
    q: "Bahasa apa yang dipakai untuk komunikasi?",
    a: "Komunikasi berlangsung lewat WhatsApp dalam bahasa Arab atau Inggris. Kirim pesan singkat yang jelas tentang kebutuhan Anda, dan kami akan menjelaskan langkahnya dengan sederhana.",
  },
  {
    q: "Siapa yang membayar biaya resmi pemerintah?",
    a: "Biaya resmi pemerintah dibayar langsung oleh Anda atau sponsor melalui kanal resmi. Kami hanya menjelaskan langkah-langkahnya dan memantau prosesnya.",
  },
];

export const ID_SERVICES: IdService[] = [
  {
    slug: "iqama-renewal",
    title: "Perpanjang Iqamah di Arab Saudi",
    primaryKeyword: "jasa perpanjang iqamah",
    secondaryKeywords: ["perpanjangan iqamah Arab Saudi", "perpanjang iqamah online", "perpanjang iqamah lewat WhatsApp", "perpanjang iqamah terpercaya"],
    metaDescription:
      "Jasa perpanjang iqamah di Arab Saudi bersama Tasami: kami cek syarat, paspor dan pelanggaran, lalu memantau perpanjangan lewat Absher atau Muqeem via WhatsApp. Bukan instansi pemerintah.",
    intro:
      "Iqamah adalah izin tinggal yang wajib selalu berlaku selama Anda bekerja dan tinggal di Arab Saudi. Perpanjangan iqamah sering tertunda karena beberapa syarat harus terpenuhi bersamaan: paspor masih berlaku, asuransi kesehatan aktif jika diwajibkan, tidak ada pelanggaran lalu lintas yang belum dibayar, dan biaya resmi sudah dilunasi oleh sponsor atau perusahaan. Jika satu syarat saja kurang, perpanjangan bisa gagal dan muncul denda keterlambatan. Tasami membantu memeriksa kondisi iqamah Anda terlebih dahulu, menjelaskan apa yang masih kurang, lalu memantau proses perpanjangan melalui Absher atau Muqeem sampai tanggal baru muncul. Semua komunikasi dilakukan lewat WhatsApp, tanpa perlu bolak-balik ke kantor.",
    who: [
      "Pekerja asal Indonesia yang iqamahnya akan segera habis.",
      "Sponsor atau perusahaan yang ingin memperpanjang iqamah karyawan Indonesia.",
      "Keluarga yang perlu memperpanjang iqamah pendamping (tanggungan).",
      "Siapa saja yang mendapat pesan error di Absher dan tidak tahu penyebabnya.",
    ],
    steps: [
      "Kami cek tanggal habis iqamah dan masa berlaku paspor.",
      "Kami pastikan tidak ada pelanggaran atau laporan yang menghambat perpanjangan.",
      "Kami jelaskan biaya resmi agar dibayar sendiri melalui kanal resmi.",
      "Kami pantau proses perpanjangan di Absher atau Muqeem bersama sponsor.",
      "Kami konfirmasi tanggal baru dan menjelaskan cara memakai iqamah digital.",
    ],
    tips: [
      "Mulai perpanjangan jauh sebelum tanggal habis untuk menghindari denda.",
      "Periksa masa berlaku paspor; beberapa kasus mengharuskan paspor diperpanjang dulu.",
      "Lunasi pelanggaran lalu lintas yang tercatat atas nama Anda.",
      "Simpan salinan iqamah dan paspor di tempat yang aman.",
      "Pastikan nomor HP Anda di Absher selalu aktif untuk menerima notifikasi.",
    ],
    faqs: [
      { q: "Bagaimana jika iqamah saya sudah habis?", a: "Biasanya masih bisa diperpanjang setelah membayar denda keterlambatan sesuai aturan. Kami cek kondisi Anda dulu sebelum mulai." },
      { q: "Apakah perpanjangan iqamah bisa online?", a: "Ya, perpanjangan dilakukan secara elektronik lewat Absher atau Muqeem oleh sponsor atau perusahaan, dan kami membantu memantau langkahnya." },
      { q: "Apakah Tasami bisa menjamin iqamah pasti diperpanjang?", a: "Tidak ada jaminan, karena keputusan ada pada sistem resmi. Peran kami adalah memastikan syarat lengkap dan proses berjalan dengan benar." },
    ],
    equivalentPath: "/services/government/jawazat/tajdid-iqamat-amala",
  },
  {
    slug: "transfer-services",
    title: "Pindah Sponsor (Transfer Kafalah) di Arab Saudi",
    primaryKeyword: "jasa pindah sponsor Arab Saudi",
    secondaryKeywords: ["transfer kafalah", "pindah kafil", "pindah sponsor Arab Saudi online", "transfer kafalah terpercaya"],
    metaDescription:
      "Jasa pindah sponsor (transfer kafalah) di Arab Saudi bersama Tasami: kami cek kelayakan, dokumen dan persetujuan, lalu memantau proses lewat Qiwa atau Musaned. Bukan instansi pemerintah.",
    intro:
      "Pindah sponsor atau transfer kafalah berarti memindahkan status kerja Anda dari pemberi kerja lama ke pemberi kerja baru secara resmi. Untuk pekerja perusahaan, proses ini umumnya berjalan melalui platform Qiwa, sedangkan untuk pekerja rumah tangga melalui Musaned. Banyak permohonan tertunda karena iqamah hampir habis, ada laporan atau pelanggaran yang belum selesai, atau sponsor baru belum memenuhi syarat. Tasami membantu memeriksa kelayakan Anda dan sponsor baru, menyiapkan daftar dokumen, lalu memantau permohonan sampai transfer selesai. Kami menjelaskan setiap tahap dengan bahasa sederhana melalui WhatsApp, dan Anda tetap memegang kendali atas akun dan keputusan Anda.",
    who: [
      "Pekerja Indonesia yang sudah mendapat pemberi kerja baru.",
      "Pekerja rumah tangga yang ingin pindah ke keluarga lain melalui Musaned.",
      "Perusahaan yang ingin menerima pekerja dari perusahaan lain.",
      "Siapa saja yang permohonan transfernya ditolak dan ingin tahu sebabnya.",
    ],
    steps: [
      "Kami cek status iqamah, kontrak dan kemungkinan hambatan transfer.",
      "Kami pastikan sponsor baru memenuhi syarat di platform terkait.",
      "Kami bantu menyiapkan data dan dokumen yang dibutuhkan.",
      "Kami jelaskan biaya resmi agar dibayar melalui kanal resmi.",
      "Kami pantau persetujuan semua pihak sampai transfer tercatat.",
    ],
    tips: [
      "Pastikan iqamah masih berlaku sebelum mengajukan transfer.",
      "Selesaikan pelanggaran atau laporan yang masih terbuka terlebih dahulu.",
      "Baca kontrak kerja baru dengan teliti sebelum menyetujui.",
      "Jangan mulai bekerja di tempat baru sebelum transfer resmi selesai.",
      "Simpan bukti persetujuan dan nomor permohonan.",
    ],
    faqs: [
      { q: "Apa beda transfer lewat Qiwa dan Musaned?", a: "Qiwa untuk pekerja perusahaan, sedangkan Musaned untuk pekerja rumah tangga seperti asisten rumah tangga dan sopir pribadi." },
      { q: "Apakah butuh persetujuan sponsor lama?", a: "Tergantung kondisi dan aturan yang berlaku untuk kasus Anda. Kami jelaskan setelah melihat status Anda." },
      { q: "Apakah Tasami agen penyalur tenaga kerja?", a: "Bukan. Kami tidak mencarikan pekerjaan atau sponsor; kami hanya membantu mengurus prosedur resminya." },
    ],
    equivalentPath: "/services/government/omala/naql-kafala",
  },
  {
    slug: "exit-reentry",
    title: "Visa Exit Re-entry di Arab Saudi",
    primaryKeyword: "jasa exit re-entry Arab Saudi",
    secondaryKeywords: ["exit reentry visa", "exit re-entry Arab Saudi online", "exit reentry visa lewat WhatsApp", "exit re-entry terpercaya"],
    metaDescription:
      "Jasa visa exit re-entry di Arab Saudi bersama Tasami: kami cek iqamah dan syarat, lalu memantau penerbitan atau perpanjangan visa lewat Absher atau Muqeem. Bukan instansi pemerintah.",
    intro:
      "Visa exit re-entry (keluar-masuk) dibutuhkan saat Anda ingin pulang ke Indonesia atau bepergian ke luar Arab Saudi lalu kembali lagi dengan iqamah yang sama. Visa ini diterbitkan oleh sponsor atau perusahaan melalui Absher atau Muqeem, dan syaratnya antara lain iqamah masih berlaku untuk masa yang cukup serta biaya resmi sudah dibayar. Jika Anda sudah berada di luar negeri dan butuh waktu lebih lama, visa dalam banyak kasus bisa diperpanjang sebelum habis. Tasami membantu memeriksa syarat, menjelaskan jenis visa yang tepat (sekali jalan atau multiple), dan memantau penerbitan atau perpanjangan visa agar Anda bisa berangkat dan kembali dengan tenang.",
    who: [
      "Pekerja Indonesia yang ingin cuti pulang kampung.",
      "Keluarga yang ingin bepergian bersama tanggungan.",
      "Sponsor yang perlu menerbitkan visa untuk pekerja rumah tangga.",
      "Pekerja yang sedang di Indonesia dan visanya hampir habis.",
    ],
    steps: [
      "Kami cek masa berlaku iqamah dan paspor sebelum visa diterbitkan.",
      "Kami jelaskan pilihan jenis visa dan durasi sesuai rencana Anda.",
      "Kami jelaskan biaya resmi agar dibayar melalui kanal resmi.",
      "Kami pantau penerbitan atau perpanjangan visa di Absher atau Muqeem.",
      "Kami konfirmasi tanggal batas kembali agar tidak terlewat.",
    ],
    tips: [
      "Pastikan iqamah berlaku cukup lama untuk menutupi masa perjalanan.",
      "Catat tanggal terakhir harus kembali dan jangan sampai terlewat.",
      "Ajukan perpanjangan sebelum visa habis, bukan sesudahnya.",
      "Simpan salinan visa di HP dan dalam bentuk cetak.",
      "Beri tahu sponsor jika rencana kepulangan berubah.",
    ],
    faqs: [
      { q: "Bisakah visa diperpanjang saat saya di Indonesia?", a: "Dalam banyak kasus bisa, selama syarat terpenuhi dan diajukan sebelum visa habis. Kami cek kondisi Anda dulu." },
      { q: "Apa akibatnya jika tidak kembali tepat waktu?", a: "Bisa berdampak pada status iqamah atau larangan masuk sementara sesuai aturan. Karena itu tanggal kembali harus diperhatikan." },
      { q: "Siapa yang menerbitkan visa exit re-entry?", a: "Sponsor atau perusahaan melalui Absher atau Muqeem. Kami membantu menjelaskan dan memantau langkahnya." },
    ],
    equivalentPath: "/services/government/jawazat/khuroj-wa-awda",
  },
  {
    slug: "final-exit",
    title: "Final Exit (Keluar Permanen) dari Arab Saudi",
    primaryKeyword: "jasa final exit Arab Saudi",
    secondaryKeywords: ["final exit Arab Saudi online", "final exit lewat WhatsApp", "final exit terpercaya", "visa keluar permanen Saudi"],
    metaDescription:
      "Jasa final exit (keluar permanen) dari Arab Saudi bersama Tasami: kami cek kewajiban, pelanggaran dan hak pekerja, lalu memantau penerbitan visa final exit. Bukan instansi pemerintah.",
    intro:
      "Final exit adalah visa keluar permanen ketika kontrak kerja selesai dan Anda ingin pulang ke Indonesia tanpa kembali dengan iqamah yang sama. Sebelum visa final exit diterbitkan, biasanya ada beberapa hal yang perlu dibereskan: pelanggaran lalu lintas, kendaraan atas nama Anda, tagihan atau laporan yang masih terbuka, serta penyelesaian hak-hak pekerja dengan pemberi kerja. Jika ada yang terlewat, visa bisa tertahan di menit terakhir. Tasami membantu memeriksa semua kewajiban yang mungkin menghambat, menyusun urutan penyelesaian yang benar, dan memantau penerbitan visa final exit melalui Absher atau Muqeem, sehingga kepulangan Anda lebih tertata.",
    who: [
      "Pekerja Indonesia yang kontraknya sudah selesai.",
      "Pekerja rumah tangga yang akan pulang permanen.",
      "Perusahaan yang ingin memulangkan karyawan secara resmi.",
      "Keluarga yang akan meninggalkan Arab Saudi bersama tanggungan.",
    ],
    steps: [
      "Kami cek pelanggaran, kendaraan dan kewajiban atas nama Anda.",
      "Kami ingatkan penyelesaian hak pekerja dengan pemberi kerja.",
      "Kami jelaskan biaya resmi jika ada agar dibayar melalui kanal resmi.",
      "Kami pantau penerbitan visa final exit di Absher atau Muqeem.",
      "Kami jelaskan batas waktu keberangkatan setelah visa terbit.",
    ],
    tips: [
      "Lunasi pelanggaran lalu lintas sebelum mengajukan final exit.",
      "Pindahkan atau batalkan kendaraan yang masih atas nama Anda.",
      "Pastikan gaji dan hak akhir kerja sudah diselesaikan.",
      "Tutup atau urus rekening bank dan nomor HP sesuai kebutuhan.",
      "Berangkat sebelum batas waktu visa final exit berakhir.",
    ],
    faqs: [
      { q: "Apakah iqamah harus masih berlaku?", a: "Biasanya iqamah perlu dalam kondisi yang memungkinkan penerbitan visa. Kami cek status Anda sebelum mulai." },
      { q: "Bagaimana jika ada pelanggaran yang belum dibayar?", a: "Pelanggaran biasanya harus dilunasi dulu karena bisa menahan penerbitan visa final exit." },
      { q: "Bisakah final exit dibatalkan setelah terbit?", a: "Dalam kondisi tertentu bisa dibatalkan sebelum berangkat sesuai aturan yang berlaku. Kami jelaskan sesuai kasus Anda." },
    ],
    equivalentPath: "/services/government/jawazat/khuroj-nihai",
  },
  {
    slug: "document-service",
    title: "Jasa Pengurusan Dokumen di Arab Saudi",
    primaryKeyword: "jasa urus dokumen Arab Saudi",
    secondaryKeywords: ["jasa pengurusan dokumen di Saudi", "urus dokumen Saudi online", "urus dokumen lewat WhatsApp", "jasa dokumen terpercaya"],
    metaDescription:
      "Jasa pengurusan dokumen di Arab Saudi bersama Tasami: iqamah, visa, legalisasi, janji temu dan transaksi resmi lainnya kami pantau lewat platform resmi via WhatsApp. Bukan instansi pemerintah.",
    intro:
      "Hidup dan bekerja di Arab Saudi berarti berurusan dengan banyak dokumen resmi: iqamah, visa keluar-masuk, kontrak kerja, legalisasi dokumen, janji temu di kantor pemerintah atau kedutaan, hingga laporan dan pembaruan data. Setiap transaksi punya platform, syarat dan urutan sendiri, dan satu kesalahan kecil bisa membuat permohonan tertolak. Tasami adalah kantor jasa pengurusan di Arab Saudi yang membantu Anda memahami langkah yang tepat, menyiapkan dokumen dengan benar, dan memantau proses lewat platform resmi seperti Absher, Muqeem, Qiwa, Musaned dan Kementerian Luar Negeri. Anda cukup menjelaskan kebutuhan lewat WhatsApp, lalu kami arahkan langkah demi langkah.",
    who: [
      "Pekerja Indonesia yang bingung dengan prosedur resmi di Saudi.",
      "Keluarga Indonesia yang tinggal di Saudi bersama tanggungan.",
      "Perusahaan yang mempekerjakan tenaga kerja Indonesia.",
      "Siapa saja yang butuh legalisasi atau janji temu resmi.",
    ],
    steps: [
      "Anda jelaskan kebutuhan atau kirim foto pesan error lewat WhatsApp.",
      "Kami tentukan platform dan jenis layanan yang tepat.",
      "Kami siapkan daftar dokumen dan syarat yang dibutuhkan.",
      "Kami jelaskan biaya resmi agar dibayar melalui kanal resmi.",
      "Kami pantau proses sampai selesai dan mengirim ringkasan hasilnya.",
    ],
    tips: [
      "Simpan foto paspor, iqamah dan kontrak kerja di HP Anda.",
      "Tulis nama persis sesuai paspor di setiap formulir.",
      "Jangan menyerahkan kata sandi akun resmi kepada orang yang tidak dikenal.",
      "Periksa tanggal habis dokumen secara rutin.",
      "Minta penjelasan tertulis setiap langkah agar tidak salah paham.",
    ],
    faqs: [
      { q: "Dokumen apa saja yang bisa dibantu?", a: "Antara lain iqamah, exit re-entry, final exit, transfer sponsor, Musaned, Absher, janji temu kedutaan dan legalisasi dokumen." },
      { q: "Apakah saya harus datang ke kantor?", a: "Sebagian besar layanan bisa diurus jarak jauh lewat WhatsApp dan platform resmi. Kami beri tahu jika ada langkah yang butuh kehadiran." },
      { q: "Apakah layanan ini untuk seluruh Saudi?", a: "Ya, kami melayani klien di Makkah, Jeddah, Riyadh, Dammam, Madinah dan kota lainnya di Arab Saudi." },
    ],
  },
  {
    slug: "business-license",
    title: "Izin Usaha dan Pendirian Perusahaan di Arab Saudi",
    primaryKeyword: "jasa izin usaha Arab Saudi",
    secondaryKeywords: ["jasa pendirian perusahaan Arab Saudi", "buka usaha di Arab Saudi", "izin usaha Arab Saudi online", "izin usaha terpercaya"],
    metaDescription:
      "Jasa izin usaha dan pendirian perusahaan di Arab Saudi bersama Tasami: kami jelaskan jalur yang sesuai, menyiapkan dokumen dan memantau pendaftaran resmi. Bukan instansi pemerintah.",
    intro:
      "Membuka usaha di Arab Saudi membutuhkan beberapa izin resmi, seperti pendaftaran komersial (commercial register), izin kota (baladiya) dan izin tambahan sesuai jenis kegiatan. Bagi investor asing, termasuk dari Indonesia, biasanya ada jalur investasi khusus dengan syarat tersendiri. Banyak orang langsung menyewa tempat atau membeli peralatan sebelum memastikan kegiatan usahanya boleh dijalankan di lokasi tersebut, sehingga izin tertolak. Tasami membantu menjelaskan jalur yang sesuai dengan kondisi Anda, memilih kegiatan usaha yang tepat, menyiapkan dokumen, dan memantau pendaftaran melalui platform resmi Kementerian Perdagangan dan Balady, tanpa menjanjikan hasil karena keputusan ada pada instansi berwenang.",
    who: [
      "Warga Indonesia yang ingin membuka usaha di Arab Saudi.",
      "Investor yang ingin mendirikan perusahaan atau cabang.",
      "Pemilik usaha yang perlu menambah kegiatan atau memindahkan izin.",
      "Siapa saja yang izinnya ditolak dan ingin tahu sebabnya.",
    ],
    steps: [
      "Kami dengarkan rencana usaha dan status kependudukan Anda.",
      "Kami jelaskan jalur pendaftaran dan izin yang dibutuhkan.",
      "Kami bantu memilih kegiatan usaha dari daftar resmi.",
      "Kami jelaskan biaya resmi agar dibayar melalui kanal resmi.",
      "Kami pantau pendaftaran dan izin tambahan sampai keputusan keluar.",
    ],
    tips: [
      "Pastikan jalur yang sesuai untuk status Anda sebelum mengeluarkan modal.",
      "Cek syarat lokasi sebelum menandatangani kontrak sewa.",
      "Pilih kegiatan usaha yang sesuai dengan pekerjaan nyata Anda.",
      "Siapkan dokumen identitas dan paspor yang masih berlaku.",
      "Catat tanggal perpanjangan setiap izin.",
    ],
    faqs: [
      { q: "Apakah warga asing bisa membuka usaha di Saudi?", a: "Bisa melalui jalur dan syarat yang ditetapkan instansi berwenang. Kami jelaskan pilihan yang sesuai dengan kondisi Anda." },
      { q: "Apakah Tasami menjamin izin pasti terbit?", a: "Tidak. Keputusan ada pada instansi resmi; peran kami adalah menyiapkan dan memantau permohonan dengan benar." },
      { q: "Apakah Tasami menjadi mitra atau sponsor usaha saya?", a: "Tidak. Kami hanya kantor jasa pengurusan prosedur, bukan mitra, investor atau sponsor." },
    ],
    equivalentPath: "/services/government/tijara/tasis-sharika",
  },
  {
    slug: "musaned",
    title: "Musaned: Visa Pekerja Rumah Tangga di Arab Saudi",
    primaryKeyword: "jasa musaned pembantu rumah tangga",
    secondaryKeywords: ["musaned", "visa pekerja rumah tangga Arab Saudi", "musaned online", "musaned terpercaya"],
    metaDescription:
      "Jasa Musaned untuk visa dan urusan pekerja rumah tangga di Arab Saudi bersama Tasami: kontrak, transfer dan laporan kami pantau lewat platform resmi. Bukan instansi pemerintah.",
    intro:
      "Musaned adalah platform resmi Kementerian Sumber Daya Manusia untuk semua urusan pekerja rumah tangga di Arab Saudi, seperti asisten rumah tangga, pengasuh anak dan sopir pribadi. Melalui Musaned, sponsor mengajukan visa, memilih kantor perekrutan berlisensi, membuat kontrak, memindahkan pekerja ke keluarga lain dan mengurus beberapa laporan. Bagi pekerja Indonesia, memahami status kontrak dan hak di Musaned sangat penting. Tasami membantu sponsor dan pekerja memahami langkah yang benar di Musaned, menyiapkan data, dan memantau permohonan sampai selesai. Kami bukan kantor perekrutan dan tidak menyalurkan tenaga kerja; perekrutan dilakukan oleh kantor berlisensi di dalam Musaned.",
    who: [
      "Keluarga di Saudi yang ingin merekrut pekerja rumah tangga.",
      "Pekerja rumah tangga Indonesia yang ingin pindah sponsor.",
      "Sponsor yang perlu memperpanjang atau memperbarui kontrak.",
      "Siapa saja yang permohonannya di Musaned tertahan.",
    ],
    steps: [
      "Kami cek jenis layanan Musaned yang dibutuhkan.",
      "Kami jelaskan syarat dan dokumen untuk sponsor maupun pekerja.",
      "Kami bantu mengisi data permohonan dengan benar.",
      "Kami jelaskan biaya resmi agar dibayar melalui kanal resmi.",
      "Kami pantau permohonan sampai statusnya selesai.",
    ],
    tips: [
      "Gunakan hanya kantor perekrutan berlisensi yang tercantum di Musaned.",
      "Baca isi kontrak, termasuk masa percobaan dan hak pekerja.",
      "Pastikan data paspor pekerja tertulis dengan benar.",
      "Simpan semua kontrak dan bukti pembayaran.",
      "Selesaikan transfer secara resmi sebelum pekerja pindah rumah.",
    ],
    faqs: [
      { q: "Apakah Tasami kantor perekrutan?", a: "Bukan. Kami kantor jasa pengurusan; perekrutan dilakukan oleh kantor berlisensi di dalam Musaned." },
      { q: "Apakah pekerja rumah tangga bisa pindah sponsor lewat Musaned?", a: "Bisa sesuai syarat yang berlaku. Kami cek status kontrak dan menjelaskan langkahnya." },
      { q: "Apakah sopir pribadi juga lewat Musaned?", a: "Ya, sopir pribadi termasuk pekerjaan rumah tangga yang diurus melalui Musaned." },
    ],
    equivalentPath: "/services/government/jawazat/tashirat-amala-manziliya",
  },
  {
    slug: "absher",
    title: "Bantuan Absher dan Muqeem di Arab Saudi",
    primaryKeyword: "jasa absher",
    secondaryKeywords: ["akun absher", "absher muqeem", "absher online", "absher lewat WhatsApp"],
    metaDescription:
      "Bantuan akun Absher dan layanan Muqeem di Arab Saudi bersama Tasami: aktivasi, pembaruan data, layanan iqamah dan visa kami jelaskan langkah demi langkah via WhatsApp. Bukan instansi pemerintah.",
    intro:
      "Absher adalah platform resmi Kementerian Dalam Negeri untuk layanan individu seperti iqamah, visa keluar-masuk, pelanggaran lalu lintas dan pembaruan data, sedangkan Muqeem dipakai perusahaan untuk mengurus karyawan asingnya. Banyak pekerja Indonesia kesulitan membuat atau mengaktifkan akun Absher, mengganti nomor HP, membaca pesan error, atau menemukan layanan yang tepat di dalam menu yang banyak. Tasami membantu Anda memahami cara memakai Absher dengan aman, menjelaskan arti pesan yang muncul, dan menunjukkan langkah layanan yang Anda butuhkan. Akun tetap milik Anda: kami tidak meminta Anda menyerahkan kata sandi kepada siapa pun, termasuk kepada kami.",
    who: [
      "Pekerja Indonesia yang belum punya atau belum mengaktifkan akun Absher.",
      "Siapa saja yang mengganti nomor HP dan tidak bisa menerima kode.",
      "Perusahaan yang memakai Muqeem untuk karyawan Indonesia.",
      "Siapa saja yang mendapat pesan error dan tidak paham artinya.",
    ],
    steps: [
      "Anda jelaskan masalah atau kirim tangkapan layar pesan error.",
      "Kami jelaskan penyebab yang paling mungkin dan langkah perbaikannya.",
      "Kami pandu cara aktivasi, pembaruan data atau pemilihan layanan.",
      "Kami jelaskan biaya resmi jika ada agar dibayar melalui kanal resmi.",
      "Kami pastikan layanan berhasil dan memberi tips agar tidak terulang.",
    ],
    tips: [
      "Jangan pernah membagikan kata sandi atau kode OTP kepada orang lain.",
      "Daftarkan nomor HP atas nama Anda sendiri di Absher.",
      "Perbarui data segera setelah memperpanjang paspor.",
      "Unduh dokumen digital (iqamah digital) untuk keperluan sehari-hari.",
      "Periksa notifikasi Absher secara rutin.",
    ],
    faqs: [
      { q: "Apakah saya harus memberikan kata sandi Absher?", a: "Tidak. Kami menjelaskan langkahnya dan Anda sendiri yang masuk ke akun. Jangan bagikan kata sandi atau OTP kepada siapa pun." },
      { q: "Apa beda Absher dan Muqeem?", a: "Absher untuk layanan individu, sedangkan Muqeem dipakai perusahaan untuk mengurus karyawan asingnya." },
      { q: "Bagaimana jika nomor HP lama sudah tidak aktif?", a: "Ada prosedur pembaruan nomor sesuai aturan yang berlaku. Kami jelaskan langkahnya sesuai kondisi Anda." },
    ],
  },
];

export const ID_HUB = {
  title: "Jasa Pengurusan Dokumen dan Iqamah di Arab Saudi",
  metaDescription:
    "Tasami membantu warga Indonesia di Arab Saudi mengurus iqamah, exit re-entry, final exit, pindah sponsor, Musaned dan Absher lewat platform resmi via WhatsApp. Bukan instansi pemerintah.",
  intro: [
    "Tasami adalah kantor jasa pengurusan (ta'qib) swasta di Arab Saudi yang membantu individu, keluarga dan perusahaan menyelesaikan transaksi resmi dengan lebih mudah. Halaman ini kami buat khusus untuk warga Indonesia yang tinggal dan bekerja di Saudi, agar Anda bisa memahami layanan kami dalam bahasa Indonesia sebelum menghubungi kami.",
    "Kebanyakan urusan resmi di Saudi dilakukan secara elektronik melalui platform seperti Absher, Muqeem, Qiwa dan Musaned. Masalahnya, setiap platform punya syarat, urutan dan istilah sendiri, dan satu kesalahan kecil bisa membuat permohonan tertolak atau menimbulkan denda keterlambatan. Kami membantu memeriksa kondisi Anda, menjelaskan langkah yang benar, menyiapkan dokumen, lalu memantau prosesnya sampai selesai.",
    "Kami bukan instansi pemerintah dan tidak menjanjikan persetujuan. Biaya resmi pemerintah selalu dibayar langsung oleh Anda atau sponsor melalui kanal resmi. Kami melayani klien di Makkah, Jeddah, Riyadh, Dammam, Madinah dan seluruh kota di Arab Saudi, dengan komunikasi utama lewat WhatsApp.",
  ],
  why: [
    "Penjelasan langkah demi langkah dengan bahasa sederhana.",
    "Semua proses melalui platform resmi, tanpa jalan pintas.",
    "Tidak perlu bolak-balik kantor; sebagian besar layanan jarak jauh.",
    "Kami tidak meminta kata sandi akun resmi Anda.",
  ],
};

/** Map from main-locale path → Indonesian URL path, for reciprocal hreflang. */
export const ID_ALTERNATE_BY_PATH: Record<string, string> = Object.fromEntries([
  ["", ID_BASE],
  ...ID_SERVICES.filter((s) => s.equivalentPath).map((s) => [
    s.equivalentPath as string,
    `${ID_SERVICES_BASE}/${s.slug}`,
  ]),
]);

export function findIdService(slug: string): IdService | undefined {
  return ID_SERVICES.find((s) => s.slug === slug);
}

export const ID_WHATSAPP_TEXT = "Halo Tasami, saya butuh bantuan:";
