import { Item } from "../../interfaces/api";

export function Card(item: Item) {
  return (
    <div className="py-6 pl-5 rounded-lg shadow-sm">
      <a target="_blank" rel="noreferrer" href={item.url}>
        <h1>{item.title}</h1>
      </a>
    </div>
  );
}
