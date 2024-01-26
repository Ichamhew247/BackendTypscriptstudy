const Router = require("koa-router");
// const versionController = require("../controllers/version.controller");

const mewRouter = new Router({
  prefix: "/version",
});

mewRouter.get("/", async (ctx: any) => {
  ctx.type = "html"; // ตั้งค่า content type เป็น HTML
  ctx.body = "my mew version";
});

export default mewRouter;
