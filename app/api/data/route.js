// app/api/data/route.js
import { NextResponse } from "next/server";

export const dynamic = 'force-static'; // <--- Ini penting

export async function GET(request) {
  return NextResponse.json({
    success: true,
    message: 'hle!',
    data: {
      message: 'Message and email sent successfully!',
    }
  }, { status: 200 });
};