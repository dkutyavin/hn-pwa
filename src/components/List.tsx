import { Item } from "../../interfaces/api";
import { useRequest } from "../utils/useRequest";
import { Card } from "./Card";

interface ListProps {
  type: ListTypes;
}

export default function List({ type }: ListProps) {
  const { data, status } = useRequest<Item[]>(`/api/${type}`);

  if (status === "error") return <div>failed to load</div>;
  if (status === "fetching") return <div>loading...</div>;

  return (
    <main>
      {data.filter(Boolean).map(item => (
        <Card key={item.id} {...item} />
      ))}
    </main>
  );
}

export type ListTypes = "new" | "best" | "top";
