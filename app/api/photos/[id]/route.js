import { getPhotosById, getSpecialPhotos } from "@/lib/imageData";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = await params;
  const photo = await getPhotosById(id);
  // const specialPhotos = await getSpecialPhotos(id);
  //   return NextResponse.json({
  //     id: photo.id,
  //     title: photo.title,
  //     url: photo.url,
  //   });
  return NextResponse.json(photo);
}
