// Import dependencies
// import helmet from "koa-helmet";
// import json from "koa-json";

import Koa from "koa";
import bodyParser from "koa-bodyparser";
import compress from "koa-compress";
import logger from "koa-logger";
import cors from "@koa/cors";
import session from "koa-session";

// Import middlewares
import { logStartupInfo } from "./middlewares/logStartupInfo.middleware";

// Import routes
import router from "./routes";
import { stripColors } from "colors";

const app = new Koa();

app.use(logger());
app.use(cors());
// app.use(bodyParser());
app.use(compress());
app.keys = ["mysecreatkey"]; // replace with your own secret key
app.use(session(app));

// Apply the routes to the app
app.use(router.routes());

// response
app.use((ctx: any) => {
  ctx.body = "Hello Homepage";

  console.log(stripColors.blue("MewGreen"));
});

const PORT = process.env.PORT || "3000";
app.listen(+PORT, () => {
  logStartupInfo(+PORT); // Call the utility function to log the startup info
});

const CONFIG = {
  key: "koa.sess" /** (string) cookie key (default is koa.sess) */,
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 86400000,
  autoCommit: true /** (boolean) automatically commit headers (default true) */,
  overwrite: true /** (boolean) can overwrite or not (default true) */,
  httpOnly: true /** (boolean) httpOnly or not (default true) */,
  signed: true /** (boolean) signed or not (default true) */,
  rolling:
    false /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */,
  renew:
    false /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/,
  secure: true /** (boolean) secure cookie*/,
  sameSite:
    null /** (string) session cookie sameSite options (default null, don't set it) */,
};
