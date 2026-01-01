'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Shield, Eye, Database, Lock, UserCheck } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
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
            <Shield className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Kebijakan Privasi
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
                <Eye className="w-6 h-6 mr-3 text-blue-600" />
                Pendahuluan
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <p className="text-gray-600 leading-relaxed">
                Selamat datang di <strong>EVI RAHAYU MEGAWATI</strong>. Kami sangat menghargai privasi Anda 
                dan berkomitmen untuk melindungi data pribadi Anda. Kebijakan Privasi ini menjelaskan 
                bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat 
                menggunakan layanan perdagangan besar sembako kami.
              </p>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card className="p-8 shadow-sm">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-2xl text-gray-900 flex items-center">
                <Database className="w-6 h-6 mr-3 text-purple-600" />
                Pengumpulan Data
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 pb-0 space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Informasi yang Kami Kumpulkan:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Data Pribadi:</strong> Nama lengkap, nomor telepon, alamat email, alamat pengiriman</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Data Bisnis:</strong> Nama perusahaan, NPWP, nomor SIUP, informasi rekening bank</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Data Transaksi:</strong> Riwayat pembelian, pesanan, metode pembayaran</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Data Penggunaan:</strong> Informasi tentang bagaimana Anda menggunakan layanan kami</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Cara Kami Mengumpulkan Data:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Formulir pendaftaran dan pemesanan online</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Komunikasi langsung (telepon, email, WhatsApp)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Platform Meta Ads (Facebook & Instagram)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Analytics dan cookies website</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card className="p-8 shadow-sm">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-2xl text-gray-900 flex items-center">
                <UserCheck className="w-6 h-6 mr-3 text-green-600" />
                Penggunaan Data
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <p className="text-gray-600 mb-4">
                Kami menggunakan data pribadi Anda untuk:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Memproses dan mengelola pesanan Anda</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Menyediakan layanan pelanggan yang lebih baik</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Mengirimkan informasi produk dan promosi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Meningkatkan layanan dan pengalaman pengguna</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Optimasi kampanye Meta Ads kami</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Memenuhi kewajiban hukum dan peraturan</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card className="p-8 shadow-sm">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-2xl text-gray-900 flex items-center">
                <Lock className="w-6 h-6 mr-3 text-orange-600" />
                Perlindungan Data
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 pb-0 space-y-4">
              <p className="text-gray-600">
                Kami berkomitmen untuk melindungi data pribadi Anda dengan:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Keamanan Teknis</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Enkripsi data sensitif</li>
                    <li>• Firewall yang kuat</li>
                    <li>• Sistem monitoring 24/7</li>
                  </ul>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Keamanan Prosedural</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Akses terbatas untuk data</li>
                    <li>• Pelatihan staf rutin</li>
                    <li>• Audit keamanan berkala</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* User Rights */}
          <Card className="p-8 shadow-sm">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-2xl text-gray-900">
                Hak Anda Sebagai Pengguna
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <p className="text-gray-600 mb-4">
                Sebagai pengguna layanan kami, Anda memiliki hak untuk:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Mengakses:</strong> Meminta salinan data pribadi yang kami simpan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Memperbaiki:</strong> Mengoreksi data yang tidak akurat</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Menghapus:</strong> Meminta penghapusan data pribadi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Membatasi:</strong> Membatasi pengolahan data Anda</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Menolak:</strong> Menolak pengolahan data untuk tujuan pemasaran</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Third Party Services */}
          <Card className="p-8 shadow-sm">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-2xl text-gray-900">
                Layanan Pihak Ketiga
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <p className="text-gray-600 mb-4">
                Kami menggunakan layanan pihak ketiga berikut:
              </p>
              <div className="space-y-3">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900">Meta Platforms (Facebook & Instagram)</h4>
                  <p className="text-sm text-gray-600">Untuk kampanye pemasaran dan targeting audiens</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900">Payment Gateways</h4>
                  <p className="text-sm text-gray-600">Untuk pemrosesan pembayaran yang aman</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900">Analytics Services</h4>
                  <p className="text-sm text-gray-600">Untuk analisis penggunaan dan performa website</p>
                </div>
              </div>
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
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau ingin 
                menggunakan hak privasi Anda, silakan hubungi kami:
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="font-semibold text-gray-900">Perusahaan:</span>
                  <span className="text-gray-600">EVI RAHAYU MEGAWATI</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-semibold text-gray-900">Email:</span>
                  <span className="text-gray-600">privacy@evirahayumegawati.com</span>
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
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
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