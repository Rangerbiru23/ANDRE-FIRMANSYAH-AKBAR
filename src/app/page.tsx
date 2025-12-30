'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, Star, ChefHat, Heart, Truck } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('products');

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
              <a href="#home" className="text-gray-700 hover:text-amber-600 transition-colors">Beranda</a>
              <a href="#products" className="text-gray-700 hover:text-amber-600 transition-colors">Produk</a>
              <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors">Tentang</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors">Kontak</a>
              <a href="/privacy" className="text-gray-700 hover:text-amber-600 transition-colors">Privacy</a>
              <a href="/terms" className="text-gray-700 hover:text-amber-600 transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/hero-bakery.jpg" alt="Fresh Bakery" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-amber-900 bg-opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-5xl font-bold mb-4">ANDRE FIRMANSYAH AKBAR</h2>
          <p className="text-2xl mb-8">Roti & Kue Artisan Terbaik di Kalimantan Selatan</p>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Dibuat dengan cinta, bahan-bahan pilihan, dan resep turun-temurun yang menghadirkan kelezatan autentik di setiap gigitan.
          </p>
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
            Pesan Sekarang
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center p-6 border-amber-200">
              <CardContent className="pt-6">
                <ChefHat className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="font-semibold text-amber-900 mb-2">Resep Autentik</h3>
                <p className="text-gray-600 text-sm">Resep turun-temurun dengan sentuhan modern</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 border-amber-200">
              <CardContent className="pt-6">
                <Heart className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="font-semibold text-amber-900 mb-2">Dibuat dengan Cinta</h3>
                <p className="text-gray-600 text-sm">Setiap produk dibuat dengan perhatian penuh</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 border-amber-200">
              <CardContent className="pt-6">
                <Truck className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="font-semibold text-amber-900 mb-2">Pengiriman Fresh</h3>
                <p className="text-gray-600 text-sm">Diantar langsung dari oven ke tangan Anda</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 border-amber-200">
              <CardContent className="pt-6">
                <Star className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="font-semibold text-amber-900 mb-2">Kualitas Premium</h3>
                <p className="text-gray-600 text-sm">Hanya bahan-bahan terbaik yang kami gunakan</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Produk Unggulan Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dari roti tradisional hingga kue modern, semua dibuat dengan bahan berkualitas tinggi dan teknik terbaik.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-lg border border-amber-200">
              <button
                onClick={() => setActiveTab('products')}
                className={`px-6 py-2 rounded-l-lg ${activeTab === 'products' ? 'bg-amber-600 text-white' : 'bg-white text-amber-900'}`}
              >
                Produk
              </button>
              <button
                onClick={() => setActiveTab('services')}
                className={`px-6 py-2 rounded-r-lg ${activeTab === 'services' ? 'bg-amber-600 text-white' : 'bg-white text-amber-900'}`}
              >
                Layanan
              </button>
            </div>
          </div>

          {activeTab === 'products' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <img src="/pastries-display.jpg" alt="Assorted Pastries" className="w-full h-48 object-cover" />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">Kue & Pastri</h3>
                  <p className="text-gray-600 mb-4">Berbagai macam kue dan pastri segar yang dibuat setiap hari</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Croissant Butter</li>
                    <li>• Danish Pastry</li>
                    <li>• Muffin Variasi</li>
                    <li>• Donat Glaze</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-2">🍞</div>
                    <p className="text-amber-900 font-semibold">Roti Artisan</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">Roti Premium</h3>
                  <p className="text-gray-600 mb-4">Roti pilihan dengan fermentasi sempurna dan tekstur terbaik</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Sourdough</li>
                    <li>• Whole Wheat</li>
                    <li>• French Baguette</li>
                    <li>• Ciabatta</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-pink-100 to-amber-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-2">🎂</div>
                    <p className="text-amber-900 font-semibold">Kue Ulang Tahun</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">Kue Istimewa</h3>
                  <p className="text-gray-600 mb-4">Kue spesial untuk momen-momen berharga Anda</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Black Forest</li>
                    <li>• Tiramisu</li>
                    <li>• Red Velvet</li>
                    <li>• Cheese Cake</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'services' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8">
                <h3 className="text-2xl font-semibold text-amber-900 mb-4">Pesanan Khusus</h3>
                <p className="text-gray-600 mb-4">
                  Kami menerima pesanan khusus untuk acara Anda, mulai dari ulang tahun, pernikahan, hingga acara korporat.
                </p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>✓ Konsultasi menu gratis</li>
                  <li>✓ Desain kustom sesuai tema</li>
                  <li>✓ Pengiriman ke lokasi acara</li>
                  <li>✓ Diskon untuk pesanan besar</li>
                </ul>
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  Konsultasi Gratis
                </Button>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-semibold text-amber-900 mb-4">Workshop & Kursus</h3>
                <p className="text-gray-600 mb-4">
                  Pelajari seni membuat roti dan kue dari ahlinya. Kelas tersedia untuk pemula hingga profesional.
                </p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>✓ Kelas rutin setiap minggu</li>
                  <li>✓ Materi lengkap & praktis</li>
                  <li>✓ Sertifikat peserta</li>
                  <li>✓ Bawa pulang hasil karya</li>
                </ul>
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  Daftar Sekarang
                </Button>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-amber-900 mb-6">Tentang <span className="text-amber-600">ANDRE FIRMANSYAH AKBAR</span></h2>
              <p className="text-gray-700 mb-6">
                ANDRE FIRMANSYAH AKBAR adalah usaha bakery yang berdedikasi untuk menghadirkan produk roti dan kue berkualitas tinggi 
                untuk masyarakat Kalimantan Selatan. Didirikan dengan passion terhadap seni baking, kami menggabungkan resep tradisional 
                dengan inovasi modern.
              </p>
              <p className="text-gray-700 mb-6">
                Setiap produk kami dibuat dengan bahan-bahan pilihan, tanpa pengawet buatan, dan dengan proses yang higienis. 
                Kami percaya bahwa makanan enak dimulai dari bahan berkualitas dan dibuat dengan sepenuh hati.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-amber-900 mb-2">Visi Kami</h4>
                  <p className="text-gray-600 text-sm">
                    Menjadi bakery pilihan utama di Kalimantan Selatan dengan produk berkualitas dan pelayanan terbaik.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-900 mb-2">Misi Kami</h4>
                  <p className="text-gray-600 text-sm">
                    Menghadirkan kebahagiaan melalui produk bakery yang lezat dan berkualitas untuk setiap pelanggan.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold text-amber-900 mb-2">Kenapa Pilih Kami?</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-amber-100 rounded-full p-2 mr-4">
                    <Clock className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900">Fresh Setiap Hari</h4>
                    <p className="text-gray-600 text-sm">Produk selalu baru dipanggang setiap hari</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-100 rounded-full p-2 mr-4">
                    <Star className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900">Kualitas Terjamin</h4>
                    <p className="text-gray-600 text-sm">Hanya bahan terbaik yang kami gunakan</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-100 rounded-full p-2 mr-4">
                    <Heart className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900">Dibuat dengan Cinta</h4>
                    <p className="text-gray-600 text-sm">Setiap produk adalah karya seni</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Hubungi Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami siap melayani kebutuhan bakery Anda. Jangan ragu untuk menghubungi kami untuk informasi lebih lanjut.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold text-amber-900 mb-6">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-amber-600 mr-4" />
                  <div>
                    <p className="font-semibold text-amber-900">Telepon</p>
                    <p className="text-gray-600">0852-8570-3582</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-amber-600 mr-4" />
                  <div>
                    <p className="font-semibold text-amber-900">Email</p>
                    <p className="text-gray-600">info@andrefirmansyahbakery.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-amber-600 mr-4 mt-1" />
                  <div>
                    <p className="font-semibold text-amber-900">Alamat</p>
                    <p className="text-gray-600">
                      JL RAJAWALI DESA SUMBERMAKMUR KEC SATUI<br />
                      KAB TANAH BUMBU KALIMANTAN SELATAN<br />
                      Desa/Kelurahan Sumber Makmur, Kec. Satui<br />
                      Kab. Tanah Bumbu, Provinsi Kalimantan Selatan
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-amber-50 rounded-lg">
                <h4 className="font-semibold text-amber-900 mb-2">Jam Operasional</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Senin - Sabtu</span>
                    <span className="font-medium text-amber-900">06:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Minggu</span>
                    <span className="font-medium text-amber-900">07:00 - 18:00</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-semibold text-amber-900 mb-6">Kirim Pesan</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Tulis pesan Anda..."
                  ></textarea>
                </div>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                  Kirim Pesan
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/logo.png" alt="Logo" className="h-10 w-auto mr-3" />
                <div>
                  <h3 className="font-bold text-lg">ANDRE FIRMANSYAH AKBAR</h3>
                  <p className="text-amber-200 text-sm">Bakery & Pastry</p>
                </div>
              </div>
              <p className="text-amber-200 text-sm">
                Roti & kue artisan terbaik di Kalimantan Selatan
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-amber-200 text-sm">
                <li><a href="#home" className="hover:text-white transition-colors">Beranda</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Produk</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Kontak</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-amber-200 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Pesanan Khusus</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Workshop</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pengiriman</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Korporat</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-amber-200 text-sm">
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-amber-800 mt-8 pt-8 text-center">
            <p className="text-amber-200 text-sm">
              © 2024 ANDRE FIRMANSYAH AKBAR. All rights reserved. | Dibuat dengan ❤️ di Kalimantan Selatan
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}