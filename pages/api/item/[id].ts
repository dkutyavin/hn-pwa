import { NextApiRequest, NextApiResponse } from "next";
import { getItemById, getHandler } from "../../../src/utils/api";

export default async function getItem(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { query } = req;
  getHandler({ req, res }, () => getItemById(query.id as string));
}
