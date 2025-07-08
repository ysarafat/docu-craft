import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByTag } from "@/utils/doc-util";

export default function TagsPage({ params: { name } }) {
  const docs = getDocuments();
  const matchDocuments = getDocumentsByTag(docs, name);
  return <ContentDisplay id={matchDocuments[0].id} />;
}
