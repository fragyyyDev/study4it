// routes/answer.routes.js

import express from "express";
import {
  mistakeQuestion,
  validQuestion,
} from "../controllers/answer.controller.js";
import { ensureAuthenticated } from "../middleware/auth.js"; // Import the authentication middleware

const router = express.Router();

/**
 * @route   POST /api/answer/mistake
 * @desc    Record a mistake for the authenticated user
 * @access  Private
 */
router.post("/mistake", ensureAuthenticated, mistakeQuestion);

/**
 * @route   POST /api/answer/valid
 * @desc    Record a correct answer for the authenticated user
 * @access  Private
 */
router.post("/valid", ensureAuthenticated, validQuestion);

export default router;
