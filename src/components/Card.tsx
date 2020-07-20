import { Item } from "../../interfaces/api";

export function Card(item: Item) {
  return (
    <div className="max-w-sm min-h-100 m-auto flex p-6 bg-white rounded-lg shadow-xl">
      <h1>{item.title}</h1>
    </div>
  );
}
