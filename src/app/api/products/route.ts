import { NextResponse } from 'next/server'

// Sample product data for sembako
const products = [
  {
    id: 1,
    name: 'Beras Premium',
    category: 'Beras',
    price: 15000,
    unit: 'kg',
    minOrder: 25,
    description: 'Beras kualitas premium dengan butiran penuh dan aroma wangi',
    inStock: true,
    image: '/api/placeholder/300/200'
  },
  {
    id: 2,
    name: 'Minyak Goreng',
    category: 'Minyak',
    price: 18000,
    unit: 'liter',
    minOrder: 12,
    description: 'Minyak goreng kemasan 1 liter berkualitas tinggi',
    inStock: true,
    image: '/api/placeholder/300/200'
  },
  {
    id: 3,
    name: 'Gula Pasir',
    category: 'Gula',
    price: 14000,
    unit: 'kg',
    minOrder: 50,
    description: 'Gula pasir kristal putih berkualitas premium',
    inStock: true,
    image: '/api/placeholder/300/200'
  },
  {
    id: 4,
    name: 'Tepung Terigu',
    category: 'Tepung',
    price: 12000,
    unit: 'kg',
    minOrder: 25,
    description: 'Tepung terigu protein sedang untuk berbagai kebutuhan',
    inStock: true,
    image: '/api/placeholder/300/200'
  },
  {
    id: 5,
    name: 'Mie Instan',
    category: 'Mie',
    price: 2500,
    unit: 'pcs',
    minOrder: 40,
    description: 'Mie instan rasa original kemasan besar',
    inStock: true,
    image: '/api/placeholder/300/200'
  },
  {
    id: 6,
    name: 'Kopi Bubuk',
    category: 'Kopi',
    price: 35000,
    unit: 'kg',
    minOrder: 10,
    description: 'Kopi bubuk arabika premium',
    inStock: true,
    image: '/api/placeholder/300/200'
  }
]

export async function GET() {
  try {
    // Simulate database query delay
    await new Promise(resolve => setTimeout(resolve, 500))

    return NextResponse.json({
      success: true,
      data: products,
      total: products.length,
      company: 'EVI RAHAYU MEGAWATI',
      description: 'Perdagangan Besar Sembako'
    })
  } catch (error) {
    console.error('Products API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    )
  }
}