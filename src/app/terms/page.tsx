'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, ShoppingCart, Users, AlertTriangle, CheckCircle, Scale } from 'lucide-react';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img src="/logo.png" alt="ANDRE FIRMANSYAH AKBAR Bakery" className="h-12 w-auto mr-3" />
              <div>
                <h1 className="text-xl font-bold text-amber-900">ANDRE FIRMANSYAH AKBAR</h1>
                <p className="text-xs text-amber-700">Bakery & Pastry</p>
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-amber-600 transition-colors">Beranda</a>
              <a href="/privacy" className="text-gray-700 hover:text-amber-600 transition-colors">Privacy</a>
              <a href="/terms" className="text-amber-600 font-semibold">Terms</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">Terms and Conditions</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Syarat dan Ketentuan Layanan untuk ANDRE FIRMANSYAH AKBAR Bakery
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-amber-900">
                <FileText className="h-6 w-6 mr-2 text-amber-600" />
                Pendahuluan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Selamat datang di ANDRE FIRMANSYAH AKBAR Bakery. Syarat dan Ketentuan ini mengatur penggunaan 
                website, produk, dan layanan yang kami sediakan. Dengan mengakses atau menggunakan layanan kami, 
                Anda setuju untuk terikat oleh syarat dan ketentuan ini.
              </p>
              <p className="text-gray-700">
                Website ini dimiliki dan dioperasikan oleh ANDRE FIRMANSYAH AKBAR, bisnis bakery yang berlokasi 
                di Kalimantan Selatan, Indonesia.
              </p>
            </CardContent>
          </Card>

          {/* Services */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-amber-900">
                <ShoppingCart className="h-6 w-6 mr-2 text-amber-600" />
                Layanan Kami
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-amber-900 mb-3">Produk yang Kami Tawarkan:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-amber-50 rounded-lg">
                    <h4 className="font-medium text-amber-900 mb-2">Roti Artisan</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Sourdough</li>
                      <li>• Whole Wheat</li>
                      <li>• French Baguette</li>
                      <li>• Ciabatta</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-amber-50 rounded-lg">
                    <h4 className="font-medium text-amber-900 mb-2">Kue & Pastri</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Croissant</li>
                      <li>• Danish Pastry</li>
                      <li>• Muffin</li>
                      <li>• Donat</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-amber-50 rounded-lg">
                    <h4 className="font-medium text-amber-900 mb-2">Kue Istimewa</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Kue Ulang Tahun</li>
                      <li>• Black Forest</li>
                      <li>• Tiramisu</li>
                      <li>• Red Velvet</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-amber-50 rounded-lg">
                    <h4 className="font-medium text-amber-900 mb-2">Layanan Tambahan</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Pesanan Khusus</li>
                      <li>• Workshop</li>
                      <li>• Pengiriman</li>
                      <li>• Konsultasi</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ordering */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-amber-900">
                <CheckCircle className="h-6 w-6 mr-2 text-amber-600" />
                Proses Pemesanan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-amber-900 mb-3">Cara Pemesanan:</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Pilih produk yang diinginkan melalui website atau langsung ke toko</li>
                  <li>Isi formulir pemesanan dengan data yang lengkap dan akurat</li>
                  <li>Konfirmasi pesanan dan lakukan pembayaran</li>
                  <li>Terima konfirmasi pesanan melalui email/SMS</li>
                  <li>Tunggu pengiriman atau ambil di toko</li>
                </ol>
              </div>
              
              <div>
                <h3 className="font-semibold text-amber-900 mb-3">Syarat Pemesanan:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Usia minimal 18 tahun untuk melakukan pemesanan</li>
                  <li>Menyediakan informasi kontak yang valid</li>
                  <li>Pembayaran harus dilakukan sesuai dengan metode yang dipilih</li>
                  <li>Pesanan khusus minimal 2 hari sebelum pengiriman</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Payment */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-amber-900">
                <Scale className="h-6 w-6 mr-2 text-amber-600" />
                Pembayaran dan Harga
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-amber-900 mb-3">Metode Pembayaran:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Tunai:</strong> Pembayaran langsung di toko</li>
                  <li><strong>Transfer Bank:</strong> Ke rekening yang telah ditentukan</li>
                  <li><strong>E-Wallet:</strong> GoPay, OVO, DANA, LinkAja</li>
                  <li><strong>QRIS:</strong> Pembayaran melalui QR code</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-amber-900 mb-3">Kebijakan Harga:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Harga yang tertera adalah harga final dan belum termasuk ongkos kirim</li>
                  <li>Harga dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya</li>
                  <li>Untuk pesanan besar, tersedia diskon khusus</li>
                  <li>Pajak (jika ada) sudah termasuk dalam harga</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Delivery */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-amber-900">
                <Users className="h-6 w-6 mr-2 text-amber-600" />
                Pengiriman dan Pengambilan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-amber-900 mb-3">Layanan Pengiriman:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Same Day Delivery:</strong> Untuk area dalam kota (pemesanan sebelum pukul 10:00)</li>
                  <li><strong>Next Day Delivery:</strong> Untuk area luar kota</li>
                  <li><strong>Express Delivery:</strong> Tersedia untuk pesanan darurat</li>
                  <li><strong>Self Pickup:</strong> Ambil langsung di toko kami</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-amber-900 mb-3">Biaya Pengiriman:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Dihitung berdasarkan jarak dan berat pesanan</li>
                  <li>Gratis ongkir untuk pembelian minimal Rp 500.000</li>
                  <li>Biaya tambahan untuk pengiriman ke luar kota</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Cancellation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-amber-900">
                <AlertTriangle className="h-6 w-6 mr-2 text-amber-600" />
                Pembatalan dan Pengembalian
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-amber-900 mb-3">Kebijakan Pembatalan:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Pembatalan dapat dilakukan maksimal 24 jam sebelum pengiriman</li>
                  <li>Untuk pesanan khusus, pembatalan maksimal 48 jam sebelumnya</li>
                  <li>Uang akan dikembalikan penuh jika pembatalan sesuai ketentuan</li>
                  <li>Pembatalan mendadak akan dikenakan biaya 50% dari total pesanan</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-amber-900 mb-3">Kebijakan Pengembalian:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Produk dapat dikembalikan jika ada cacat produksi</li>
                  <li>Pengembalian harus dilakukan maksimal 2 jam setelah penerimaan</li>
                  <li>Produk yang sudah dikonsumsi tidak dapat dikembalikan</li>
                  <li>Kami berhak menolak pengembalian yang tidak sesuai ketentuan</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* User Responsibilities */}
          <Card>
            <CardHeader>
              <CardTitle className="text-amber-900">Tanggung Jawab Pengguna</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 mb-4">
                Sebagai pengguna layanan kami, Anda setuju untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Memberikan informasi yang akurat dan lengkap</li>
                <li>Tidak menggunakan layanan untuk tujuan ilegal</li>
                <li>Memperlakukan staf kami dengan hormat</li>
                <li>Mematuhi semua syarat dan ketentuan yang berlaku</li>
                <li>Tidak mereproduksi konten website tanpa izin</li>
                <li> Bertanggung jawab atas keamanan akun Anda</li>
              </ul>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card>
            <CardHeader>
              <CardTitle className="text-amber-900">Batasan Tanggung Jawab</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                ANDRE FIRMANSYAH AKBAR Bakery tidak bertanggung jawab atas:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Keterlambatan pengiriman yang disebabkan oleh pihak ketiga</li>
                <li>Kerusakan produk selama proses pengiriman</li>
                <li>Alergi atau reaksi terhadap bahan makanan</li>
                <li>Kehilangan data karena force majeure</li>
                <li>Kerugian tidak langsung yang timbul dari penggunaan layanan</li>
              </ul>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card>
            <CardHeader>
              <CardTitle className="text-amber-900">Hak Kekayaan Intelektual</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Semua konten di website ini, termasuk namun tidak terbatas pada teks, gambar, logo, 
                dan desain, adalah milik ANDRE FIRMANSYAH AKBAR Bakery dan dilindungi oleh hukum 
                hak cipta Indonesia.
              </p>
              <p className="text-gray-700">
                Dilarang keras untuk menyalin, mendistribusikan, atau menggunakan konten kami tanpa 
                izin tertulis dari ANDRE FIRMANSYAH AKBAR Bakery.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card>
            <CardHeader>
              <CardTitle className="text-amber-900">Perubahan Syarat dan Ketentuan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Kami berhak mengubah syarat dan ketentuan ini kapan saja. Perubahan akan 
                diberitahukan melalui website kami. Penggunaan layanan yang berkelanjutan 
                setelah perubahan dianggap sebagai persetujuan Anda terhadap syarat dan ketentuan yang baru.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardHeader>
              <CardTitle className="text-amber-900">Hubungi Kami</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
              </p>
              <div className="bg-amber-50 p-4 rounded-lg">
                <p className="font-semibold text-amber-900 mb-2">ANDRE FIRMANSYAH AKBAR Bakery</p>
                <p className="text-gray-700">📧 Email: info@andrefirmansyahbakery.com</p>
                <p className="text-gray-700">📞 Telepon: 0852-8570-3582</p>
                <p className="text-gray-700">📍 Alamat: JL RAJAWALI DESA SUMBERMAKMUR KEC SATUI KAB TANAH BUMBU KALIMANTAN SELATAN</p>
              </div>
            </CardContent>
          </Card>

          {/* Agreement */}
          <Card className="bg-amber-100 border-amber-200">
            <CardContent className="pt-6">
              <p className="text-amber-900 text-sm">
                <strong>Persetujuan:</strong> Dengan menggunakan layanan ANDRE FIRMANSYAH AKBAR Bakery, 
                Anda menyatakan bahwa telah membaca, memahami, dan setuju untuk terikat oleh Syarat dan Ketentuan ini. 
                Versi terakhir diperbarui pada {new Date().toLocaleDateString('id-ID')}.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <p className="text-amber-200 text-sm">
              © 2024 ANDRE FIRMANSYAH AKBAR. All rights reserved. | 
              <a href="/privacy" className="hover:text-white mx-2">Privacy Policy</a> | 
              <a href="/terms" className="hover:text-white mx-2">Terms & Conditions</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}