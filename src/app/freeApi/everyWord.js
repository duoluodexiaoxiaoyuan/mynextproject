import { NextResponse } from 'next/server';

export async function GET(req,  { params} ) {
  const res = await fetch('https://v.api.aa1.cn/api/api-wenan-anwei/index.php?type=json', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  return NextResponse.json({ data })
}


