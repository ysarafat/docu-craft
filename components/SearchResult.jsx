import Link from "next/link";

export default function SearchResult({ results, term, closeSearchResult }) {
  return (
    <div className="absolute left-0 top-1/2 z-[999] w-full rounded-md bg-white p-4 shadow mt-6">
      <p className="!text-lg">
        Showing result for <span className="font-bold">{term}</span>
      </p>
      <ul role="list" className="divide-y divide-gray-100 [&>*]:py-2">
        {results?.map((result) => (
          <li key={result.id}>
            <Link
              onClick={(e) => {
                closeSearchResult(e);
              }}
              href={`/docs/${result?.id}`}
              className="transition-all hover:text-emerald-600"
            >
              {result?.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
