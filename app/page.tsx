import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex justify-center align-baseline mt-48  ">
        <div className="flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <div className="group rounded-lg border border-transparent px-28 py-10 transition-colors  border-neutral-700 bg-neutral-800/30">
            <p
              className={`m-0 max-w-[30ch] text-2xl font-semibold opacity-100 text-center`}
            >
              Mizrab Sheikh
            </p>
            <p
              className={`m-0 max-w-[30ch] text-2xl font-semibold opacity-70 text-center`}
            >
              20I-0453
            </p>
            <p
              className={`m-0 max-w-[30ch] text-2xl font-semibold opacity-70 text-center`}
            >
              DevOps Course
            </p>
          </div>
        </div>
      </main>

      <a
        className=" flex place-items-center justify-center mt-32 gap-2 p-8 lg:pointer-events-auto lg:p-0"
      >
        By{" "}
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
      </a>
    </>
  );
}
