// app/api/data/route.js
import { NextResponse } from "next/server";

// Penting: Tambahkan baris ini untuk memberitahu Next.js bahwa route ini statis
export const dynamic = 'force-static'; 

export async function GET(request) {
  return NextResponse.json({
    success: true,
    message: 'hle!',
    data: {
      message: 'Message and email sent successfully!',
    }
  }, { status: 200 });
};