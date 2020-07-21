import { Item } from "../../interfaces/api";
import { useRequest } from "../utils/useRequest";
import { Card, SceletonCard } from "./Card";

interface ListProps {
  type: ListTypes;
}

export default function List({ type }: ListProps) {
  const { data, status } = useRequest<Item[]>(`/api/${type}`);

  if (status === "error") return <div>failed to load</div>;
  if (status === "fetching") return <SceletonList />;

  return (
    <main>
      {data.filter(Boolean).map(item => (
        <Card key={item.id} {...item} />
      ))}
    </main>
  );
}

function SceletonList() {
  const arr = Array.from({ length: 10 });
  return (
    <main className="flex flex-1 flex-col">
      {arr.map((_, index) => (
        <SceletonCard key={index} />
      ))}
    </main>
  );
}

export type ListTypes = "new" | "best" | "top";
