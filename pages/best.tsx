import { Item } from "../interfaces/api";
import { Card } from "../src/components/Card";
import { useRequest } from "../src/utils/useRequest";
import { Header } from "../src/components/Header";

export default function Best() {
  const { data, status } = useRequest<Item[]>("/api/best");

  if (status === "error") return <div>failed to load</div>;
  if (status === "fetching") return <div>loading...</div>;

  return (
    <main>
      <Header />
      {data.map(item => (
        <Card key={item.id} {...item} />
      ))}
    </main>
  );
}
