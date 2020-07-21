import { NextApiRequest, NextApiResponse } from "next";
import { getListFromApi } from "../../src/utils/api";

export default function newPosts(req: NextApiRequest, res: NextApiResponse) {
  return getListFromApi("newstories", { req, res });
}
