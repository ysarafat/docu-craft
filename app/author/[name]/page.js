import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByAuthor } from "@/utils/doc-util";

export default function AuthorPage({ params: { name } }) {
  const docs = getDocuments();
  const matchDocuments = getDocumentsByAuthor(docs, name);

  return <ContentDisplay id={matchDocuments[0].id} />;
}
