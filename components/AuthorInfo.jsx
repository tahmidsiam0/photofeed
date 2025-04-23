import Image from "next/image";

export default function AuthorInfo({ author, dictionary }) {
  return (
    <>
      <div className="mt-6">
        {/* <!-- author header --> */}
        <div className="flex justify-between items-center mb-3">
          {/* <!--  --> */}
          <div className="flex items-center gap-3">
            <Image
              className="size-12 lg:size-14 rounded-full border"
              src={author.avatar}
              alt="avatar"
              height={50}
              width={50}
            />
            <div className="spacy-y-3">
              <h6 className="lg:text-lg font-bold">{author.name}</h6>
              <p className="text-black/60 text-xs lg:text-sm">
                {author.followers} {dictionary.followers}
              </p>
            </div>
          </div>
          {/* <!-- action --> */}
          <button className="flex items-center gap-1.5 text-black/60 text-xs xl:text-sm">
            <Image
              src="/follow.svg"
              className="w-5 h-5"
              height={50}
              width={50}
              alt="Follow Icon"
            />
            {dictionary.follow}
          </button>
        </div>
        {/* <!-- author bio --> */}
        <p className="text-xs lg:text-sm text-black/60">{author.bio}</p>
      </div>
    </>
  );
}
