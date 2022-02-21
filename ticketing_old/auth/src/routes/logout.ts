import express from "express";

const router = express.Router();

router.post("/api/users/logout", (req, res) => {
  res.send("Hi there!");
});

export { router as logoutRouter };
