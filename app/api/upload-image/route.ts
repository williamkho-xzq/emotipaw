import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { put } from '@vercel/blob';
import type { NextApiResponse, NextApiRequest, PageConfig } from 'next';

// Testing purpose in dev
// export async function POST(request: Request) {
//   const data = await request.formData();
//   const file: File | null = data.get('image') as unknown as File;

//   if (!file) {
//     return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
//   }

//   const bytes = await file.arrayBuffer();
//   const buffer = Buffer.from(bytes);

//   const path = join(process.cwd(), 'public', 'uploads', file.name);
//   await writeFile(path, buffer);

//   const imageUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/uploads/${file.name}`;

//   return NextResponse.json({ imageUrl });
//   // return NextResponse.json({
//   //   imageUrl:
//   //     'http://localhost:3000/_next/image?url=%2Fhappy-pet.jpg&w=3840&q=75',
//   // });
// }

export async function POST(request: Request) {
  const data = await request.formData();
  const file: File | null = data.get('image') as unknown as File;

  if (!file) {
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
  }

  const blob = await put(file.name as string, file, {
    access: 'public',
  });

  return NextResponse.json({ imageUrl: blob.url });
}
