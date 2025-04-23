import PhotoList from "@/components/PhotoList";

export default async function Home() {
  const res = await fetch(`${process.env.BASE_URL}/photos`);
  const photos = await res.json();

  return (
    <>
      <PhotoList photos={photos} />
    </>
  );
}
