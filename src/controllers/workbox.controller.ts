// user.controller.ts
// import * as CRUD from "../utils/crud.utils";
import { WorkboxModel } from "../models/workbox.model";

// controllers/task.controller.ts
export async function getAllTasks(queryParams: any) {
  try {
    const tasks = await WorkboxModel.find(queryParams);
    return tasks;
  } catch (error) {
    throw new Error("Internal Server Error");
  }
}

// Create a new task
export async function createTask(workbox_task: string, status: boolean) {
  try {
    const newTaskData = {
      workbox_task,
      status,
    };

    // Create a new task using the TaskModel and the extracted data
    const createdTask = await WorkboxModel.create(newTaskData);

    // Return the created task
    return createdTask;
  } catch (error) {
    // Handle errors during task creation
    throw new Error("Internal Server Error");
  }
}
