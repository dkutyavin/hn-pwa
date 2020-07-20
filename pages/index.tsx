import useSWR from "swr";
import { useState, useEffect } from "react";
import { Item } from "../interfaces/api";

export default function Home() {
  const { data, status } = useRequest<Item[]>("/api/top");

  if (status === "error") return <div>failed to load</div>;
  if (status === "fetching") return <div>loading...</div>;

  return data.map(item => <Card key={`${item.type}_${item.id}`} {...item} />);
}

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then(res => res.json());

function useRequest<T = any>(url: string) {
  const [status, setStatus] = useState<"fetching" | "success" | "error">(
    "fetching",
  );
  const { data, error } = useSWR<T>(url, fetcher);

  useEffect(() => {
    if (data) setStatus("success");
    if (error) setStatus("error");
    if (!error && !data) setStatus("fetching");
  }, [status, data, error]);

  return {
    status,
    error,
    data,
  };
}

function Card(item: Item) {
  return (
    <div className="max-w-sm min-h-100 m-auto flex p-6 bg-white rounded-lg shadow-xl">
      <h1>{item.title}</h1>
    </div>
  );
}
