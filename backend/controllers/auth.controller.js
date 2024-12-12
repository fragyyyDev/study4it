export const home = (req, res) => {
    res.send("Hello World!");
  };
  
  export const logout = (req, res, next) => {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect(`${process.env.FRONTEND_URL}/`);
    });
  };
  
  //Signup / login
  export const getUser = (req, res) => {
    if (req.isAuthenticated()) {
      const {
        discordId,
        username,
        discriminator,
        avatar,
        email,
        correctAnswers,
        mistakes,
        createdAt,
      } = req.user;
      res.json({
        user: {
          discordId,
          username,
          discriminator,
          avatar,
          email,
          correctAnswers,
          mistakes,
          createdAt,
        },
      });
    } else {
      res.status(401).json({ error: "Not authenticated" });
    }
  };
  