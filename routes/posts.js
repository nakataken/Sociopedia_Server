import express from "express";
import { verifyToken } from "../middleware/auth.js";
import { upload } from "../middleware/multer.js";
import {
  createPost,
  getFeedPosts,
  getUserPosts,
  likePost,
} from "../controllers/posts.js";

const router = express.Router();

router.post("/", verifyToken, upload.single("picture"), createPost);

// READ
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

// UPDATE
router.patch("/:id/like", verifyToken, likePost);

export default router;
