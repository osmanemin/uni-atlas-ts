import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URL || "");

const findOne = async ({ query = {}, collectionName }: FindOneOperation): Promise<any> => {
  let result ;
  await client.connect();
  await client
    .db(process.env.DB_NAME || "")
    .collection(collectionName)
    .findOne(query)
    .then((res: any) => {
      result = res;
      delete result._id;
    });
  return result;
};

export default findOne;
