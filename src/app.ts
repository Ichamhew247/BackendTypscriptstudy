// Import dependencies
const helmet = require("koa-helmet");
const json = require("koa-json");

const Koa = require("koa");
// const bodyParser = require("koa-bodyparser");
const compress = require("koa-compress");
const logger = require("koa-logger");
const cors = require("@koa/cors");
const session = require("koa-session");

// Import routes
import router from "./routes";

const app = new Koa();

app.use(logger());
app.use(cors());
// app.use(bodyParser());
app.use(compress());
app.keys = ["your-secret-key"]; // replace with your own secret key
app.use(session(app));

// Apply the routes to the app
app.use(router.routes());

// response
app.use((ctx: any) => {
  ctx.body = "Hello Mew";
});

app.listen(3000);

app.keys = ["myKey"];

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
