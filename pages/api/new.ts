import { NextApiRequest, NextApiResponse } from "next";
import { Item } from "../../interfaces/api";

export default async function topPosts(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method } = req;

  if (method !== "GET")
    return res.status(405).end(`Method ${method} Not Allowed`);

  const list = await getTopList();
  const first30 = await Promise.all(list.slice(0, 30).map(getById));

  return res.status(200).json(first30);
}

async function getTopList() {
  const response = await fetch(
    "https://hacker-news.firebaseio.com/v0/newstories.json",
  );
  const data = await response.json();
  return data as string[];
}

async function getById(id: string) {
  const res = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
  );
  const data = await res.json();
  return data as Item;
}
