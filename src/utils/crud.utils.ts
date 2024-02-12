// crud.utils.ts
import { Model } from "mongoose";

export async function createTask<T>(model: Model<T>, doc: T) {
  return model.create(doc);
}
