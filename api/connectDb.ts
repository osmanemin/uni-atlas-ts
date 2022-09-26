import { MongoClient } from "mongodb";
import { ConnectDb } from "../types/ConnectDb";
import findData from "./crudOperations/fiind";

const dbUrl = process.env.MONGODB_URL || "";
const dbName = process.env.DB_NAME || "";

const connectDb = async ({
  collectionName,
  res,
  crudOperation,
  query,
  sort,
}: ConnectDb)  => {
  let result;
  await MongoClient.connect(dbUrl, (err, db) => {
    if (err) throw err;
    else if (db) {
      const dbo = db.db(dbName);
      if (dbo) {
        switch (crudOperation) {
          case "get":
            result = findData({ query, db, dbo, res, collectionName, sort });
            break;
        }
      } else throw "=========== dbo is undefined =============";
    }
  });
};

export default connectDb;
