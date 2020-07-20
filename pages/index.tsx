import { Item } from "../interfaces/api";
import { Card } from "../src/components/Card";
import { useRequest } from "../src/utils/useRequest";

export default function Home() {
  const { data, status } = useRequest<Item[]>("/api/top");

  if (status === "error") return <div>failed to load</div>;
  if (status === "fetching") return <div>loading...</div>;

  return (
    <div className="space-y-6 m-5">
      {data.map(item => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
}
