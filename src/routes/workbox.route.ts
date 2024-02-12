import * as TaskController from "../controllers/workbox.controller";

const Router = require("koa-router");
const taskRouter = new Router({
  prefix: "/workbox",
});

// routes/task.route.ts
taskRouter.get("/", async (ctx: any) => {
  try {
    console.log("Get workbox");
    const queryParams = ctx.request.query;
    const tasks = await TaskController.getAllTasks(queryParams);

    ctx.status = 200;
    ctx.body = { tasks };
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: "Internal Error" };
  }
});

taskRouter.post("/", async (ctx: any) => {
  try {
    console.log("New workbox");
    const { workbox_task, status } = ctx.request.body;

    const newTask = await TaskController.createTask(workbox_task, status);

    ctx.body = { newTask };
  } catch (error: any) {
    console.error("Error creating task:", error);

    ctx.status = 500;
    ctx.body = { error: "Internal Server Error", details: error.message };
  }
});

export default taskRouter;

// const Router = require("koa-router");
// // const versionController = require("../controllers/version.controller");

// const mewRouter = new Router({
//   prefix: "/version",
// });

// mewRouter.get("/", async (ctx: any) => {
//   ctx.type = "html"; // ตั้งค่า content type เป็น HTML
//   ctx.body = "my mew version";
// });

// export default mewRouter;
