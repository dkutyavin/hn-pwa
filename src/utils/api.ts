import { NextApiRequest, NextApiResponse } from "next";
import { Item } from "../../interfaces/api";

export function getItemById(id: string) {
  return getFromApi<Item>(`item/${id}`);
}

export async function getListFromApi(
  type: string,
  { req, res }: RequestHandlerParams,
) {
  getHandler({ req, res }, async () => {
    const LIMIT = 10;

    const list = await getFromApi<string[]>(type);
    const firstPage = await Promise.all(list.slice(0, LIMIT).map(getItemById));

    return firstPage;
  });
}

function getEntityUrl(entityType: string) {
  const API_URL = "https://hacker-news.firebaseio.com/v0";
  return `${API_URL}/${entityType}.json`;
}

async function getFromApi<T = any>(entityType: string) {
  const url = getEntityUrl(entityType);
  const res = await fetch(url);
  const data = await res.json();
  return data as T;
}

export async function getHandler<T = any>(
  { req, res }: RequestHandlerParams,
  getter: () => Promise<T>,
) {
  const { method } = req;

  if (method !== "GET") {
    return res.status(405).end(`Method ${method} Not Allowed`);
  }

  const data = await getter();

  res.status(200).json(data);
}

type RequestHandlerParams = {
  req: NextApiRequest;
  res: NextApiResponse;
};
