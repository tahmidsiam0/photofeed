import { getDictionary } from "@/app/[lang]/dictionaries";
import Image from "next/image";
import Actions from "./Actions";
import Insights from "./Insights";
import { dateFormatter } from "@/utils";
import AuthorInfo from "./AuthorInfo";

export default async function Details({ photo, lang }) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <div className="p-6 border rounded-xl col-span-12 lg:col-span-4">
        <h2 className="text-lg lg:text-2xl font-bold mb-2">{photo.title}</h2>
        <div className="text-xs lg:text-sm text-black/60 mb-6">
          {photo.tags.map((tag) => "#" + tag).join(", ")}
        </div>
        <div className="space-y-2.5 text-black/80 text-xs lg:text-sm">
          <Insights keyName={dictionary.views} value={photo.views} />
          <Insights keyName={dictionary.share} value={photo.share} />
          <Insights
            keyName={dictionary.uploadedOn}
            value={dateFormatter(photo.uploaded)}
          />
        </div>
        <AuthorInfo author={photo.author} dictionary={dictionary} />
        <Actions dictionary={dictionary} />
      </div>
    </>
  );
}
