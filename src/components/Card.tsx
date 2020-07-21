import { Item } from "../../interfaces/api";

export function Card(item: Item) {
  return (
    <article className="py-6 px-5 shadow-sm">
      <a target="_blank" rel="noreferrer" href={item.url}>
        <h3 className="font-sans text-lg text-gray-800">{item.title}</h3>
      </a>
    </article>
  );
}
