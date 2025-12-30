'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Eye, Lock, Database, UserCheck, Cookie } from 'lucide-react';

export default function PrivacyPolicy() {
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
              <a href="/privacy" className="text-amber-600 font-semibold">Privacy</a>
              <a href="/terms" className="text-gray-700 hover:text-amber-600 transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kebijakan Privasi untuk ANDRE FIRMANSYAH AKBAR Bakery - Perlindungan data Anda adalah prioritas kami
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-amber-900">
                <Shield className="h-6 w-6 mr-2 text-amber-600" />
                Pendahuluan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Selamat datang di ANDRE FIRMANSYAH AKBAR Bakery. Kami sangat menghargai privasi Anda dan berkomitmen 
                untuk melindungi data pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, 
                menggunakan, dan melindungi informasi Anda ketika menggunakan layanan kami.
              </p>
              <p className="text-gray-700">
                Dengan menggunakan website dan layanan kami, Anda menyetujui praktik-praktik yang dijelaskan dalam 
                kebijakan privasi ini.
              </p>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-amber-900">
                <Database className="h-6 w-6 mr-2 text-amber-600" />
                Pengumpulan Data
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-amber-900 mb-2">Data yang Kami Kumpulkan:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Informasi Pribadi:</strong> Nama, alamat email, nomor telepon, alamat pengiriman</li>
                  <li><strong>Informasi Pesanan:</strong> Detail pesanan, riwayat pembelian, preferensi produk</li>
                  <li><strong>Informasi Teknis:</strong> Alamat IP, browser yang digunakan, waktu akses</li>
                  <li><strong>Informasi Pembayaran:</strong> Detail pembayaran (diproses melalui pihak ketiga yang terpercaya)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-amber-900 mb-2">Cara Kami Mengumpulkan Data:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Formulir pendaftaran dan pemesanan online</li>
                  <li>Komunikasi melalui email atau telepon</li>
                  <li>Cookies dan teknologi pelacakan lainnya</li>
                  <li>Analytics website untuk meningkatkan layanan</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-amber-900">
                <Eye className="h-6 w-6 mr-2 text-amber-600" />
                Penggunaan Data
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 mb-4">
                Kami menggunakan data yang Anda berikan untuk tujuan-tujuan berikut:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-amber-50 rounded-lg">
                  <h4 className="font-semibold text-amber-900 mb-2">Layanan Pelanggan</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Memproses pesanan Anda</li>
                    <li>• Mengirim konfirmasi pesanan</li>
                    <li>• Memberikan update pengiriman</li>
                    <li>• Menangani pertanyaan Anda</li>
                  </ul>
                </div>
                <div className="p-4 bg-amber-50 rounded-lg">
                  <h4 className="font-semibold text-amber-900 mb-2">Peningkatan Layanan</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Analisis preferensi pelanggan</li>
                    <li>• Pengembangan produk baru</li>
                    <li>• Personalisasi pengalaman</li>
                    <li>• Penelitian pasar</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-amber-900">
                <Lock className="h-6 w-6 mr-2 text-amber-600" />
                Perlindungan Data
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Kami mengimplementasikan berbagai langkah keamanan untuk melindungi data pribadi Anda:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Enkripsi:</strong> Data sensitif dienkripsi menggunakan teknologi SSL</li>
                <li><strong>Akses Terbatas:</strong> Hanya personel berwenang yang dapat mengakses data</li>
                <li><strong>Firewall:</strong> Sistem keamanan berlapis untuk mencegah akses tidak sah</li>
                <li><strong>Update Rutin:</strong> Sistem kami selalu diperbarui dengan patch keamanan terbaru</li>
                <li><strong>Backup:</strong> Data di-backup secara rutin untuk mencegah kehilangan</li>
              </ul>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-amber-900">
                <Cookie className="h-6 w-6 mr-2 text-amber-600" />
                Kebijakan Cookies
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Website kami menggunakan cookies untuk meningkatkan pengalaman browsing Anda:
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-amber-50 rounded-lg">
                  <h4 className="font-semibold text-amber-900">Cookies Esensial</h4>
                  <p className="text-sm text-gray-700">Diperlukan untuk fungsi dasar website</p>
                </div>
                <div className="p-3 bg-amber-50 rounded-lg">
                  <h4 className="font-semibold text-amber-900">Cookies Analitik</h4>
                  <p className="text-sm text-gray-700">Membantu kami memahami cara penggunaan website</p>
                </div>
                <div className="p-3 bg-amber-50 rounded-lg">
                  <h4 className="font-semibold text-amber-900">Cookies Pemasaran</h4>
                  <p className="text-sm text-gray-700">Digunakan untuk menampilkan konten yang relevan</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* User Rights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-amber-900">
                <UserCheck className="h-6 w-6 mr-2 text-amber-600" />
                Hak Anda sebagai Pengguna
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Sebagai pengguna, Anda memiliki hak-hak berikut terkait data pribadi Anda:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Hak Akses:</strong> Anda dapat meminta salinan data pribadi yang kami simpan</li>
                <li><strong>Hak Koreksi:</strong> Anda dapat memperbaiki data yang tidak akurat</li>
                <li><strong>Hak Penghapusan:</strong> Anda dapat meminta penghapusan data pribadi Anda</li>
                <li><strong>Hak Pembatasan:</strong> Anda dapat membatasi pemrosesan data Anda</li>
                <li><strong>Hak Portabilitas:</strong> Anda dapat meminta transfer data ke pihak lain</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-amber-900">Hubungi Kami</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Jika Anda memiliki pertanyaan atau kekhawatiran tentang kebijakan privasi kami, 
                silakan hubungi kami melalui:
              </p>
              <div className="bg-amber-50 p-4 rounded-lg">
                <p className="font-semibold text-amber-900 mb-2">ANDRE FIRMANSYAH AKBAR Bakery</p>
                <p className="text-gray-700">📧 Email: privacy@andrefirmansyahbakery.com</p>
                <p className="text-gray-700">📞 Telepon: 0852-8570-3582</p>
                <p className="text-gray-700">📍 Alamat: JL RAJAWALI DESA SUMBERMAKMUR KEC SATUI KAB TANAH BUMBU KALIMANTAN SELATAN</p>
              </div>
            </CardContent>
          </Card>

          {/* Update Notice */}
          <Card className="bg-amber-100 border-amber-200">
            <CardContent className="pt-6">
              <p className="text-amber-900 text-sm">
                <strong>Pembaruan Kebijakan:</strong> Kebijakan privasi ini dapat diperbarui dari waktu ke waktu. 
                Setiap perubahan akan diinformasikan melalui website kami. Versi terakhir diperbarui pada {new Date().toLocaleDateString('id-ID')}.
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