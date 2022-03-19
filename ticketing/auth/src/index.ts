import express from "express";
import { json } from "body-parser";

import {
  currentUserRouter,
  signInRouter,
  signUpRouter,
  signOutRouter,
} from "./routes";

const app = express();

app.use(json());
app.use(currentUserRouter);
app.use(signInRouter);
app.use(signUpRouter);
app.use(signOutRouter);

app.listen(3000, () => {
  console.log("Listening on port 3000!!");
});
