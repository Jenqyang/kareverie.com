import Link from "next/link";
import { SparklesText } from "@/components/magicui/sparkles-text";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          <SparklesText text="Kareverie" />
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-8">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="https://x.com/Jenqyanghou"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Twitter →</h3>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="mailto:zh@kareverie.com"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Email →</h3>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="https://github.com/Jenqyang"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">GitHub →</h3>
          </Link>
        </div>
      </div>
    </main>
  );
}
