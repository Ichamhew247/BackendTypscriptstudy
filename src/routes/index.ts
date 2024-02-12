// const { Context } = require("koa");
import Router from "koa-router";
import mewRouter from "./task.route";
const router = new Router({
  prefix: "/api/v1", // Set the prefix here
});

// first routes
router.get("/", (ctx: any) => {
  // ctx.throw(500);
  ctx.body = "Hello Mew World";
});

// all paths
router.use(mewRouter.routes(), mewRouter.allowedMethods()); // /api/v1/version

export default router;
