// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import connectDb from '../../api/connectDb';

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const query = req.query;
    const sort: any = {};
    if (typeof query.sort === "string") {
      const splitted: string[] = query.sort.split(":");
      sort[splitted[0]] = splitted[1];
    }
    delete query.sort;
    if (req.query.id) query.id = req.query.id;
    connectDb({
      collectionName: "universities",
      res,
      crudOperation: "get",
      query,
      sort,
    });
}
