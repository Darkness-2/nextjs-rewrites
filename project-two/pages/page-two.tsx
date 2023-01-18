import Link from "next/link";

export default function PageTwo() {
  return (
    <>
      <div className="p-4">
        <p className="font-bold text-red-700">This page is on project two.</p>
        <Link href="/">
          <p className="hover:underline">Return to home</p>
        </Link>
      </div>
    </>
  );
}
