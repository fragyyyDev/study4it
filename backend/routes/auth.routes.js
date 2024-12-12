// routes/auth.routes.js

import express from 'express';
import passport from 'passport';
import {
  home,
  logout,
  getUser,
} from '../controllers/auth.controller.js';

const router = express.Router();

// Test route
router.get('/', home);

// Logout
router.get('/logout', logout);

// Discord OAuth
router.get('/auth/discord', passport.authenticate('discord'));

// Discord OAuth Callback
router.get(
  '/auth/discord/callback',
  passport.authenticate('discord', { failureRedirect: '/' }), //failureRedirect- hodi tam kam chces pokud to nevyjde
  (req, res) => {
    //redirect na frontend po uspesny verifikaci
    res.redirect(`${process.env.FRONTEND_URL}/dashboard`);
  }
);

// Route co ti posle info o userovi
router.get('/api/user', getUser);

export default router;
