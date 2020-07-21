import { NextApiRequest, NextApiResponse } from "next";
import { getFromApi } from "../../src/utils/api";
import { getItemById } from "./item/[id]";

export default async function topPosts(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method } = req;

  if (method !== "GET")
    return res.status(405).end(`Method ${method} Not Allowed`);

  const list = await getFromApi<string[]>("topstories");
  const first30 = await Promise.all(list.slice(0, 30).map(getItemById));

  return res.status(200).json(first30);
}
