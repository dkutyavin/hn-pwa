import { Item } from "../interfaces/api";
import { Card } from "../src/components/Card";
import { useRequest } from "../src/utils/useRequest";

export default function New() {
  const { data, status } = useRequest<Item[]>("/api/new");

  if (status === "error") return <div>failed to load</div>;
  if (status === "fetching") return <div>loading...</div>;

  return (
    <main>
      {data.map(item => (
        <Card key={item.id} {...item} />
      ))}
    </main>
  );
}