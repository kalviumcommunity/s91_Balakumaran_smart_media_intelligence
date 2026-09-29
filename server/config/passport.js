const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const User = require("../models/User");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },

    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({
          googleId: profile.id,
        });

        if (!user) {
          user = await User.findOne({
            email: profile.emails[0].value,
          });
        }

        if (!user) {
          user = await User.create({
            username:
              profile.displayName.replace(/\s+/g, "_") +
              "_" +
              Date.now(),

            email: profile.emails[0].value,

            googleId: profile.id,

            profileImage:
              profile.photos?.[0]?.value || "",

            role: "editor",

            authProvider: "google",
          });
        } else if (!user.googleId) {
          user.googleId = profile.id;
          user.authProvider = "google";

          if (
            profile.photos &&
            profile.photos.length > 0
          ) {
            user.profileImage = profile.photos[0].value;
          }

          await user.save();
        }

        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

module.exports = passport;