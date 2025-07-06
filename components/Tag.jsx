import Link from "next/link";

export default function Tag({ tag }) {
  return (
    <Link
      key={tag}
      href={`/tags/${tag}`}
      className="bg-slate-100 py-1 px-2 border border-emerald-500 rounded-md mr-2 text-xs"
    >
      {tag}
    </Link>
  );
}
