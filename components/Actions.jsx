import Image from "next/image";

export default function Actions({ dictionary }) {
  return (
    <>
      <div className="mt-6">
        <div className="flex items-stretch gap-3">
          <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
            <Image
              src="/heart.svg"
              className="w-5 h-5"
              height={50}
              width={50}
              alt="Heart Icon"
            />
            100
          </button>
          <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
            <Image
              src="/save.svg"
              className="w-5 h-5"
              alt="Save Icon"
              height={50}
              width={50}
            />
            {dictionary.save}
          </button>
          <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
            <Image
              src="/share.svg"
              className="w-5 h-5"
              alt="Share Icon"
              height={50}
              width={50}
            />
            {dictionary.share}
          </button>
        </div>
      </div>
    </>
  );
}
