import express from "express";
import { json } from "body-parser";

import { currentUserRouter } from "./routes/currentUser";
import { loginRouter } from "./routes/login";
import { logoutRouter } from "./routes/logout";
import { registerRouter } from "./routes/register";

const app = express();
app.use(json());

app.use(currentUserRouter);
app.use(loginRouter);
app.use(logoutRouter);
app.use(registerRouter);

app.listen(4000, () => {
  console.log("Listening on port 4000!");
});
