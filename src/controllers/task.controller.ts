// user.controller.ts
// import * as CRUD from "../utils/crud.utils";
import { Context } from "koa";
import { TaskModel } from "../models/task.model";

// controllers/task.controller.ts
export async function getAllTasks(queryParams: any) {
  try {
    // Use queryParams to filter tasks if needed
    const tasks = await TaskModel.find(queryParams);
    return tasks;
  } catch (error) {
    throw new Error("Internal Server Error");
  }
}

// Create a new task
export async function createTask(
  taskName: string,
  taskIcon: string,
  detail: string,
  start_time: string,
  end_time: string,
  due_date: string,
  status: boolean
) {
  try {
    const newTaskData = {
      taskName,
      taskIcon,
      detail,
      start_time,
      end_time,
      due_date,
      status,
    };

    // Create a new task using the TaskModel and the extracted data
    const createdTask = await TaskModel.create(newTaskData);

    // Return the created task
    return createdTask;
  } catch (error) {
    // Handle errors during task creation
    throw new Error("Internal Server Error");
  }
}
