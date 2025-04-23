import { getPhotos } from "@/lib/imageData";
import { NextResponse } from "next/server";

export async function GET() {
  const photos = await getPhotos();

  return NextResponse.json(photos);
}
