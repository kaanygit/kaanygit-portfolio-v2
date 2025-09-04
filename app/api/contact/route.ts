import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('Received data:', body);
    
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ 
        success: false, 
        message: 'Tüm alanları doldurunuz.' 
      }, { status: 400 });
    }

    // Google Form submission URL
    const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfAcut1sKN0czVrxB1-RvPtMMXM2K59c4bLkE2J1s-WxQhoqg/formResponse';
    
    // Create form data
    const formData = new URLSearchParams();
    formData.append('entry.2005620554', name); // Ad Soyad
    formData.append('entry.1045781291', email); // E-posta
    formData.append('entry.1065046570', subject); // Konu
    formData.append('entry.1166974658', message); // Mesaj

    console.log('Sending to Google Form:', formData.toString());

    // Submit to Google Form
    const response = await fetch(GOOGLE_FORM_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });

    console.log('Google Form response status:', response.status);

    // Google Forms typically returns 0 or 200 for successful submissions
    if (response.ok || response.status === 0) {
      return NextResponse.json({ 
        success: true, 
        message: 'Mesaj başarıyla gönderildi!' 
      });
    } else {
      console.error('Google Form error:', response.status, response.statusText);
      return NextResponse.json({ 
        success: false, 
        message: 'Form gönderilirken hata oluştu.' 
      }, { status: 500 });
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ 
      success: false, 
      message: `Sunucu hatası: ${error instanceof Error ? error.message : 'Bilinmeyen hata'}` 
    }, { status: 500 });
  }
}
