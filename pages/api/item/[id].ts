import { NextApiRequest, NextApiResponse } from "next";
import { Item } from "../../../interfaces/api";
import { getFromApi } from "../../../src/utils/api";

export default async function getItem(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const {
    query: { id },
    method,
  } = req;

  if (method !== "GET") {
    return res.status(405).end(`Method ${method} Not Allowed`);
  }

  const item = await getItemById(id as string);
  return res.status(200).json(item);
}

export function getItemById(id: string) {
  return getFromApi<Item>(`item/${id}`);
}
