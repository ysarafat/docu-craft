import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByCategory } from "@/utils/doc-util";

export default function CategoriesPage({ params: { name } }) {
  const docs = getDocuments();
  const matchDocuments = getDocumentsByCategory(docs, name);
  return <ContentDisplay id={matchDocuments[0].id} />;
}
