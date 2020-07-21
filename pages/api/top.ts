import { NextApiRequest, NextApiResponse } from "next";
import { getListFromApi } from "../../src/utils/api";

export default function topPosts(req: NextApiRequest, res: NextApiResponse) {
  return getListFromApi("topstories", { req, res });
}
