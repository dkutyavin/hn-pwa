import { NextApiRequest, NextApiResponse } from "next";
import { Item } from "../../interfaces/api";

const API_URL = "https://hacker-news.firebaseio.com/v0";

function getEntityUrl(entityType: string) {
  return `${API_URL}/${entityType}.json`;
}

export async function getFromApi<T = any>(entityType: string) {
  const url = getEntityUrl(entityType);
  const res = await fetch(url);
  const data = await res.json();
  return data as T;
}

export function getItemById(id: string) {
  return getFromApi<Item>(`item/${id}`);
}

export async function getListFromApi(
  type: string,
  { req, res }: { req: NextApiRequest; res: NextApiResponse },
) {
  const { method } = req;
  const LIMIT = 10;

  if (method !== "GET")
    return res.status(405).end(`Method ${method} Not Allowed`);

  const list = await getFromApi<string[]>(type);
  const firstPage = await Promise.all(list.slice(0, LIMIT).map(getItemById));

  res.status(200).json(firstPage);
}
