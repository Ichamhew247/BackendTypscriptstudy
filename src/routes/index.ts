// const { Context } = require("koa");
import Router from "koa-router";
import taskRouter from "./task.route";
import workboxRouter from "./workbox.route";
const router = new Router({
  prefix: "/api/v1", // Set the prefix here
});

// first routes
router.get("/", (ctx: any) => {
  // ctx.throw(500);
  ctx.body = "Hello Mew World";
});

// all paths
router.use(taskRouter.routes(), taskRouter.allowedMethods()); // /api/v1/version
router.use(workboxRouter.routes(), workboxRouter.allowedMethods()); // /api/v1/version

export default router;
