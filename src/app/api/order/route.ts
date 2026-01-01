import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      customerName, 
      customerPhone, 
      customerEmail, 
      deliveryAddress, 
      items, 
      totalAmount,
      paymentMethod 
    } = body

    // Validation
    if (!customerName || !customerPhone || !items || items.length === 0) {
      return NextResponse.json(
        { error: 'Customer name, phone, and items are required' },
        { status: 400 }
      )
    }

    // Phone validation (Indonesian format)
    const phoneRegex = /^(\+62|62|0)[0-9]{9,12}$/
    if (!phoneRegex.test(customerPhone.replace(/[-\s]/g, ''))) {
      return NextResponse.json(
        { error: 'Invalid Indonesian phone number format' },
        { status: 400 }
      )
    }

    // Validate items
    for (const item of items) {
      if (!item.productId || !item.quantity || item.quantity < item.minOrder) {
        return NextResponse.json(
          { error: `Invalid item data or quantity below minimum order for ${item.name || 'product'}` },
          { status: 400 }
        )
      }
    }

    // Generate order ID
    const orderId = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
    
    // Calculate estimated delivery
    const orderDate = new Date()
    const estimatedDelivery = new Date(orderDate)
    estimatedDelivery.setDate(estimatedDelivery.getDate() + 2) // 2 days delivery

    // Here you would typically:
    // 1. Save order to database
    // 2. Update inventory
    // 3. Send order confirmation email/SMS
    // 4. Process payment
    
    // Log the order
    console.log('New order received:', {
      orderId,
      customer: {
        name: customerName,
        phone: customerPhone,
        email: customerEmail || 'Not provided'
      },
      delivery: deliveryAddress,
      items: items.length,
      totalAmount,
      paymentMethod: paymentMethod || 'Transfer',
      timestamp: orderDate.toISOString()
    })

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1500))

    return NextResponse.json({
      success: true,
      message: 'Order placed successfully!',
      order: {
        orderId,
        customerName,
        customerPhone,
        customerEmail,
        deliveryAddress,
        items,
        totalAmount,
        paymentMethod: paymentMethod || 'Transfer',
        status: 'pending',
        orderDate: orderDate.toISOString(),
        estimatedDelivery: estimatedDelivery.toISOString()
      },
      nextSteps: [
        'Please complete payment to confirm your order',
        'You will receive a confirmation SMS shortly',
        'Our team will contact you for delivery arrangements'
      ]
    })

  } catch (error) {
    console.error('Order API error:', error)
    return NextResponse.json(
      { error: 'Failed to process order' },
      { status: 500 }
    )
  }
}