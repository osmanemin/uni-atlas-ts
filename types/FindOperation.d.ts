import { Response } from "express";
import { Db, MongoClient } from "mongodb";

type FindOperation = {
  collectionName: string;
  sort?: {};
  query?: {};
  data: any[];
};
