'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Phone, Mail, MapPin, Package, TrendingUp, Users, Target, BarChart3, Facebook, Instagram, MessageCircle } from 'lucide-react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Package className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                EVI RAHAYU MEGAWATI
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => setActiveTab('home')}
                className={`text-sm font-medium transition-colors ${
                  activeTab === 'home' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Beranda
              </button>
              <button 
                onClick={() => setActiveTab('services')}
                className={`text-sm font-medium transition-colors ${
                  activeTab === 'services' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Layanan
              </button>
              <button 
                onClick={() => setActiveTab('about')}
                className={`text-sm font-medium transition-colors ${
                  activeTab === 'about' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Tentang
              </button>
              <button 
                onClick={() => setActiveTab('contact')}
                className={`text-sm font-medium transition-colors ${
                  activeTab === 'contact' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Kontak
              </button>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Hubungi Kami
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                <TrendingUp className="w-4 h-4 mr-1" />
                Perdagangan Besar Sembako
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  EVI RAHAYU MEGAWATI
                </span>
              </h1>
              <h2 className="text-2xl text-gray-700 mb-6">
                Solusi Terpercaya untuk Kebutuhan Sembako Grosir Anda
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Kami adalah distributor sembako terkemuka yang menyediakan berbagai kebutuhan pokok 
                dengan kualitas terbaik dan harga kompetitif. Didukung oleh strategi pemasaran digital 
                Meta Ads yang efektif untuk jangkauan pasar yang lebih luas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Phone className="w-5 h-5 mr-2" />
                  0852-8570-3582
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 bg-white/80 backdrop-blur-sm border-blue-200">
                  <Package className="w-8 h-8 text-blue-600 mb-2" />
                  <h3 className="font-semibold text-gray-900">Produk Lengkap</h3>
                  <p className="text-sm text-gray-600">Berbagai macam sembako berkualitas</p>
                </Card>
                <Card className="p-6 bg-white/80 backdrop-blur-sm border-purple-200">
                  <Target className="w-8 h-8 text-purple-600 mb-2" />
                  <h3 className="font-semibold text-gray-900">Harga Grosir</h3>
                  <p className="text-sm text-gray-600">Harga kompetitif untuk pembelian besar</p>
                </Card>
                <Card className="p-6 bg-white/80 backdrop-blur-sm border-green-200">
                  <Users className="w-8 h-8 text-green-600 mb-2" />
                  <h3 className="font-semibold text-gray-900">Pelayanan Prima</h3>
                  <p className="text-sm text-gray-600">Customer service yang responsif</p>
                </Card>
                <Card className="p-6 bg-white/80 backdrop-blur-sm border-orange-200">
                  <BarChart3 className="w-8 h-8 text-orange-600 mb-2" />
                  <h3 className="font-semibold text-gray-900">Pengiriman Cepat</h3>
                  <p className="text-sm text-gray-600">Distribusi tepat waktu dan aman</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
              Layanan Kami
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Solusi Lengkap untuk Bisnis Sembako Anda
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami menyediakan berbagai layanan untuk mendukung kesuksesan bisnis sembako Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow border-blue-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Package className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Distributor Sembako</h3>
              <p className="text-gray-600 mb-6">
                Menyediakan berbagai macam kebutuhan pokok seperti beras, minyak goreng, gula, 
                tepung, dan produk sembako lainnya dengan kualitas terjamin.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Berbagai merek terkenal</li>
                <li>• Kualitas produk terjamin</li>
                <li>• Stok selalu tersedia</li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow border-purple-200">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Harga Grosir</h3>
              <p className="text-gray-600 mb-6">
                Harga khusus untuk pembelian grosir dengan sistem tier pricing yang 
                menguntungkan untuk para reseller dan pengusaha sembako.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Harga kompetitif</li>
                <li>• Diskon volume pembelian</li>
                <li>• Flexibel pembayaran</li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow border-green-200">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pengiriman & Logistik</h3>
              <p className="text-gray-600 mb-6">
                Layanan pengiriman yang cepat dan aman ke seluruh wilayah dengan 
                sistem tracking yang memudahkan monitoring pesanan Anda.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Pengiriman tepat waktu</li>
                <li>• Armada pengiriman terpercaya</li>
                <li>• Asuransi pengiriman</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Meta Ads Integration Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                <TrendingUp className="w-4 h-4 mr-1" />
                Digital Marketing
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Strategi Meta Ads untuk Jangkauan Pasar Lebih Luas
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Kami memanfaatkan platform Meta Ads (Facebook & Instagram) untuk mempromosikan 
                produk sembako kami kepada target audiens yang tepat, meningkatkan brand awareness 
                dan mendapatkan pelanggan baru.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Targeted Advertising</h4>
                    <p className="text-gray-600">Menjangkau audiens yang tepat berdasarkan demografi dan minat</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Performance Tracking</h4>
                    <p className="text-gray-600">Monitoring real-time untuk optimasi kampanye</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">ROI Optimization</h4>
                    <p className="text-gray-600">Maksimalkan return on investment dari setiap kampanye</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 bg-white">
                <Facebook className="w-8 h-8 text-blue-600 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Facebook Ads</h4>
                <p className="text-sm text-gray-600">Jangkau jutaan pengguna Facebook dengan iklan yang tepat sasaran</p>
              </Card>
              <Card className="p-6 bg-white">
                <Instagram className="w-8 h-8 text-pink-600 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Instagram Ads</h4>
                <p className="text-sm text-gray-600">Visual marketing yang menarik untuk produk sembako</p>
              </Card>
              <Card className="p-6 bg-white">
                <Target className="w-8 h-8 text-purple-600 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Audience Targeting</h4>
                <p className="text-sm text-gray-600">Sasaran audiens yang presisi untuk hasil maksimal</p>
              </Card>
              <Card className="p-6 bg-white">
                <BarChart3 className="w-8 h-8 text-green-600 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Analytics</h4>
                <p className="text-sm text-gray-600">Data-driven insights untuk strategi marketing yang lebih baik</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
              Tentang Kami
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">EVI RAHAYU MEGAWATI</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Distributor Sembako Terpercaya di Cibinong
              </h3>
              <p className="text-gray-600 mb-6">
                <strong>EVI RAHAYU MEGAWATI</strong> adalah perusahaan perdagangan besar sembako yang 
                telah berpengalaman dalam menyediakan kebutuhan pokok bagi masyarakat. Kami berkomitmen 
                untuk memberikan produk berkualitas dengan harga yang kompetitif.
              </p>
              <p className="text-gray-600 mb-6">
                Dengan dukungan teknologi digital dan strategi pemasaran modern melalui Meta Ads, 
                kami terus berkembang untuk melayani lebih banyak pelanggan di seluruh wilayah.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Visi Kami</h4>
                  <p className="text-sm text-gray-600">
                    Menjadi distributor sembako terdepan yang terpercaya dan inovatif di Indonesia.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Misi Kami</h4>
                  <p className="text-sm text-gray-600">
                    Menyediakan produk sembako berkualitas dengan layanan terbaik dan harga kompetitif.
                  </p>
                </div>
              </div>
            </div>
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
              <h4 className="font-semibold text-gray-900 mb-6">Informasi Kontak</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Alamat</p>
                    <p className="text-sm text-gray-600">
                      PERUM BDB 2 BLOK ES NO.6, Desa/Kelurahan Sukahati, Kec.Cibinong, 
                      Kab. Bogor, Provinsi Jawa Barat
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Telepon</p>
                    <p className="text-sm text-gray-600">0852-8570-3582</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-sm text-gray-600">info@evirahayumegawati.com</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Siap Memenuhi Kebutuhan Sembako Anda?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Hubungi kami sekarang untuk mendapatkan penawaran terbaik dan konsultasi gratis 
            mengenai kebutuhan sembako grosir Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Phone className="w-5 h-5 mr-2" />
              Hubungi Sekarang
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Kami
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Package className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-lg">EVI RAHAYU MEGAWATI</span>
              </div>
              <p className="text-gray-400 text-sm">
                Perdagangan Besar Sembako Terpercaya dengan strategi digital marketing yang efektif.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Distributor Sembako</li>
                <li>Harga Grosir</li>
                <li>Pengiriman & Logistik</li>
                <li>Konsultasi Bisnis</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                <li>Tentang Kami</li>
                <li>Kontak</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Hubungi Kami</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>📞 0852-8570-3582</p>
                <p>📍 Cibinong, Bogor</p>
                <p>✉️ info@evirahayumegawati.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 EVI RAHAYU MEGAWATI. All rights reserved. | Powered by Meta Ads Strategy</p>
          </div>
        </div>
      </footer>
    </div>
  )
}