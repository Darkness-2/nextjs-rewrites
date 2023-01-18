import Link from "next/link";

export default function PageOne() {
  return (
    <>
      <div className="p-4">
        <p className="font-bold text-blue-700">This page is on project one.</p>
        <Link href="/">
          <p className="hover:underline">Return to home</p>
        </Link>
      </div>
    </>
  );
}
