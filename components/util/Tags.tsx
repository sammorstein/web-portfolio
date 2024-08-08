import Tag from "@/components/util/Tag";

export default function Tags( {collection}: {collection: string[]}) {
  return (
    <div className="flex flex-row shrink-0 grow-0 flex-wrap gap-2 mt-2">
      {collection.map((tag, index) => {
        return <Tag key={index} word={tag} />;
      })}
    </div>
  );
}
