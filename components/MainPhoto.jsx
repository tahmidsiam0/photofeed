import Image from "next/image";

export default function MainPhoto({ url, alt }) {
  return (
    <>
      <div className="col-span-12 lg:col-span-8 border rounded-xl">
        <Image
          className="max-w-full h-full max-h-[70vh] mx-auto"
          src={url}
          width={900}
          height={400}
          alt={alt}
        />
      </div>
    </>
  );
}
