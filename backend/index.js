import express from "express";
import session from "express-session";
import passport from "passport";
import { Strategy as DiscordStrategy } from "passport-discord";
import dotenv from "dotenv";
import cors from "cors";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";
import User from "./models/user.model.js";
import answerRoutes from "./routes/answer.routes.js";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

// Setup expressu
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Connect do MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Middleware na session s mongem
app.use(
  session({
    secret: process.env.SESSION_SECRET || "default_secret",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI,
      collectionName: "sessions",
      ttl: 14 * 24 * 60 * 60, // 14 days
    }),
    cookie: {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      maxAge: 14 * 24 * 60 * 60 * 1000, // 14 days
    },
  })
);

// CORS middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true, // aby se posilali cookies od discordu
  })
);

// Zapnout passport od disu
app.use(passport.initialize());
app.use(passport.session());

// Passport config od disu
passport.use(
  new DiscordStrategy(
    {
      clientID: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      callbackURL: process.env.DISCORD_CALLBACK_URL,
      scope: ["identify", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // najit jestli user existuje
        let user = await User.findOne({ discordId: profile.id });

        if (user) {
          // update
          user.username = profile.username;
          user.discriminator = profile.discriminator;
          user.avatar = profile.avatar;
          user.email = profile.email;
          await user.save();
        } else {
          // Vytvoreni noveho usera
          user = new User({
            discordId: profile.id,
            username: profile.username,
            discriminator: profile.discriminator,
            avatar: profile.avatar,
            email: profile.email,
            correctAnswers: [],
            mistakes: [],
          });
          await user.save();
        }

        return done(null, user);
      } catch (err) {
        console.error("Error during Discord authentication:", err);
        return done(err, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

//routy
app.use("/api/answer", answerRoutes);
app.use("/", authRoutes);

// Error Middle ware
app.use((err, req, res, next) => {
  console.error(err.stack); // Debug log
  res.status(500).json({ error: "Something went wrong!" });
});

// Start serveru
app.listen(port, () => {
  console.log(`Backend server listening on port ${port}`);
});
