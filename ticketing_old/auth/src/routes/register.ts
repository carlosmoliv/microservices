import express, { Request, Response } from "express";
// import { validationResult } from "express-validator";
import { body, validationResult } from "express-validator/check";

const router = express.Router();

router.post(
  "/api/users/register",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be between 4 and 20 characters"),
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).send(errors.array());
    }

    const { email, password } = req.body;

    console.log("Creating a user...");

    res.send({});
  }
);

export { router as registerRouter };
