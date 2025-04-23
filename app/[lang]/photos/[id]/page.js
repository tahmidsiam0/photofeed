import Details from "@/components/Details";
import MainPhoto from "@/components/MainPhoto";

export default async function SpecificImagePage({ params }) {
  const { id, lang } = await params;
  const res = await fetch(`${process.env.BASE_URL}/photos/${id}`);
  const photo = await res.json();

  return (
    <div className="grid grid-cols-12 gap-4 2xl:gap-10 ">
      <MainPhoto url={photo.url} alt={photo.title} />
      <Details photo={photo} lang={lang} />
    </div>
  );
}
