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

export function SceletonCard() {
  return (
    <article className="flex-1 flex px-5 shadow-sm items-center">
      <div className="h-5 w-3/5 bg-gray-400"></div>
    </article>
  );
}
