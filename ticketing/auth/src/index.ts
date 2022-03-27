import express from "express";
import "express-async-errors";
import { json } from "body-parser";

import { errorHandler } from "./middlewares/errorHandler";
import {
  currentUserRouter,
  signInRouter,
  signUpRouter,
  signOutRouter,
} from "./routes";

import { NotFoundError } from "./errors/notFoundError";

const app = express();

app.use(json());

app.use(currentUserRouter);
app.use(signInRouter);
app.use(signUpRouter);
app.use(signOutRouter);

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Listening on port 3000!!");
});
