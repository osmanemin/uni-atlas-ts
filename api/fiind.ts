import { MongoClient } from "mongodb";
import { FindOperation } from "../types/FindOperation";
const client = new MongoClient(process.env.MONGODB_URL || "");

const findData = async ({
  query = {},
  collectionName,
  sort = {},
  data,
}: FindOperation) => {
  await client.connect();
  const cursor = client
    .db(process.env.DB_NAME || "")
    .collection(collectionName)
    .find(query)
    .sort(sort);
  await cursor.forEach((doc: any) => {
    delete doc._id;
    data.push(doc);
  });
};

export default findData;
