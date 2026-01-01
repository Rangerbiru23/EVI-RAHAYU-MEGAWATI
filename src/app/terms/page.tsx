'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, FileText, ShoppingCart, Package, CreditCard, AlertCircle, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                EVI RAHAYU MEGAWATI
              </span>
            </div>
            <Link href="/">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali ke Beranda
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Syarat dan Ketentuan
          </h1>
          <p className="text-lg text-gray-600">
            EVI RAHAYU MEGAWATI - Perdagangan Besar Sembako
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card className="p-8 shadow-sm">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-2xl text-gray-900 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-blue-600" />
                Pendahuluan
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <p className="text-gray-600 leading-relaxed mb-4">
                Selamat datang di <strong>EVI RAHAYU MEGAWATI</strong>. Syarat dan Ketentuan ini 
                mengatur penggunaan layanan perdagangan besar sembako yang kami sediakan. 
                Dengan menggunakan layanan kami, Anda setuju untuk mematuhi syarat dan ketentuan ini.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>EVI RAHAYU MEGAWATI</strong> adalah perusahaan perdagangan besar sembako 
                yang berlokasi di Cibinong, Bogor, menyediakan berbagai kebutuhan pokok dengan 
                harga grosir yang kompetitif.
              </p>
            </CardContent>
          </Card>

          {/* Services */}
          <Card className="p-8 shadow-sm">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-2xl text-gray-900 flex items-center">
                <Package className="w-6 h-6 mr-3 text-purple-600" />
                Layanan Kami
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 pb-0 space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Layanan yang Tersedia:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Perdagangan Besar Sembako:</strong> Penyediaan berbagai macam kebutuhan pokok</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Distributor Grosir:</strong> Harga khusus untuk pembelian dalam jumlah besar</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Pengiriman:</strong> Layanan distribusi ke wilayah Jabodetabek dan sekitarnya</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Konsultasi Bisnis:</strong> Bimbingan untuk pengusaha sembako</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Produk yang Tersedia:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Kategori Utama</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Berbagai macam beras</li>
                      <li>• Minyak goreng</li>
                      <li>• Gula pasir</li>
                      <li>• Tepung terigu</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Kategori Tambahan</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Mie instan</li>
                      <li>• Kopi dan teh</li>
                      <li>• Bumbu dapur</li>
                      <li>• Produk kemasan</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ordering Process */}
          <Card className="p-8 shadow-sm">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-2xl text-gray-900 flex items-center">
                <ShoppingCart className="w-6 h-6 mr-3 text-green-600" />
                Proses Pemesanan
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 pb-0 space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Cara Pemesanan:</h3>
                <ol className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">1</span>
                    <span>Kontak kami melalui telepon (0852-8570-3582) atau WhatsApp</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">2</span>
                    <span>Sebutkan produk dan jumlah yang dipesan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">3</span>
                    <span>Konfirmasi harga dan total pembayaran</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">4</span>
                    <span>Lakukan pembayaran sesuai kesepakatan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">5</span>
                    <span>Barang akan dikirim ke alamat tujuan</span>
                  </li>
                </ol>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Syarat Pemesanan:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Minimum order untuk harga grosir berlaku</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Stok barang dapat berubah sewaktu-waktu</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Pembayaran lunas sebelum pengiriman</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Payment */}
          <Card className="p-8 shadow-sm">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-2xl text-gray-900 flex items-center">
                <CreditCard className="w-6 h-6 mr-3 text-orange-600" />
                Pembayaran
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 pb-0 space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Metode Pembayaran:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span><strong>Transfer Bank:</strong> Ke rekening perusahaan yang telah ditentukan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span><strong>Tunai:</strong> Untuk pengambilan langsung di gudang</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span><strong>Tempo:</strong> Untuk pelanggan tetap dengan syarat dan ketentuan</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-4 bg-orange-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2 text-orange-600" />
                  Penting:
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Konfirmasi pembayaran wajib dilakukan setelah transfer</li>
                  <li>• Bukti transfer harus disimpan sebagai bukti transaksi</li>
                  <li>• Pengiriman akan diproses setelah pembayaran terkonfirmasi</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Delivery */}
          <Card className="p-8 shadow-sm">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-2xl text-gray-900 flex items-center">
                <Package className="w-6 h-6 mr-3 text-blue-600" />
                Pengiriman
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 pb-0 space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Kebijakan Pengiriman:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Wilayah Layanan:</strong> Jabodetabek dan sekitarnya</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Waktu Pengiriman:</strong> 1-3 hari kerja tergantung lokasi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Biaya Pengiriman:</strong> Disesuaikan dengan jarak dan berat</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Minimum Order:</strong> Berlaku untuk pengiriman gratis</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Status Pengiriman:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Pesanan akan diproses setelah pembayaran konfirm</li>
                  <li>• Nomor resi akan diberikan untuk tracking</li>
                  <li>• Customer service tersedia untuk bantuan pengiriman</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Returns */}
          <Card className="p-8 shadow-sm">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-2xl text-gray-900 flex items-center">
                <AlertCircle className="w-6 h-6 mr-3 text-red-600" />
                Kebijakan Pengembalian
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Syarat Pengembalian:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Produk rusak atau tidak sesuai pesanan</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Klaim diajukan maksimal 24 jam setelah penerimaan</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Bukti foto atau video produk rusak harus disertakan</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-4 bg-red-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Produk yang Tidak Dapat Dikembalikan:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Produk yang sudah dibuka atau digunakan</li>
                    <li>• Kerusakan akibat kesalahan penyimpanan</li>
                    <li>• Produk yang melewati batas waktu klaim</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="p-8 shadow-sm">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-2xl text-gray-900">
                Hak Kekayaan Intelektual
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <p className="text-gray-600 mb-4">
                Semua konten, merek, dan materi di website dan platform <strong>EVI RAHAYU MEGAWATI</strong> 
                dilindungi oleh hukum hak cipta dan merek dagang.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Nama "EVI RAHAYU MEGAWATI" adalah merek dagang terdaftar</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Konten website tidak boleh disalin tanpa izin tertulis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Strategi Meta Ads kami adalah properti intelektual perusahaan</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card className="p-8 shadow-sm">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-2xl text-gray-900">
                Pembatasan Tanggung Jawab
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <p className="text-gray-600 mb-4">
                <strong>EVI RAHAYU MEGAWATI</strong> tidak bertanggung jawab atas:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span>Keterlambatan pengiriman akibat force majeure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span>Kerusakan produk akibat kesalahan penyimpanan pihak ketiga</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span>Kerugian tidak langsung dari penggunaan produk</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span>Ketersediaan stok dari pemasok</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="p-8 shadow-sm bg-gradient-to-r from-blue-50 to-purple-50">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-2xl text-gray-900">
                Hubungi Kami
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <p className="text-gray-600 mb-6">
                Untuk pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="font-semibold text-gray-900">Perusahaan:</span>
                  <span className="text-gray-600">EVI RAHAYU MEGAWATI</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-semibold text-gray-900">Email:</span>
                  <span className="text-gray-600">info@evirahayumegawati.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-semibold text-gray-900">Telepon:</span>
                  <span className="text-gray-600">0852-8570-3582</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-semibold text-gray-900">Alamat:</span>
                  <span className="text-gray-600">
                    PERUM BDB 2 BLOK ES NO.6, Desa/Kelurahan Sukahati, Kec.Cibinong, 
                    Kab. Bogor, Provinsi Jawa Barat
                  </span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-sm text-gray-600 text-center">
                  Dengan menggunakan layanan <strong>EVI RAHAYU MEGAWATI</strong>, Anda menyatakan 
                  telah membaca, memahami, dan menyetujui Syarat dan Ketentuan ini.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold">EVI RAHAYU MEGAWATI</span>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            Perdagangan Besar Sembako Terpercaya
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
          <p className="text-gray-500 text-xs mt-6">
            &copy; 2024 EVI RAHAYU MEGAWATI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}