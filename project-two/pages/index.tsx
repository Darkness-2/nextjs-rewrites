import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <div className="flex bg-red-800 p-4 justify-between items-center">
          <Link href="/">
            <h1 className="text-4xl font-bold text-white hover:text-red-200 hover:underline">
              Project two
            </h1>
          </Link>
          <div className="flex gap-4">
            <Link href="/page-one">
              <p className="text-white hover:underline">Page on project one</p>
            </Link>
            <Link href="/page-two">
              <p className="text-white hover:underline">Page on project two</p>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
