import express from "express";
import { login, register } from "../controllers/auth.js";
import { upload } from "../middleware/multer.js";

const router = express.Router();

// ROUTES WITH FILES
router.post("/register", upload.single("picture"), register);

// LOGGING IN
router.post("/login", login);

export default router;
