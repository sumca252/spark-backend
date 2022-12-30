/* eslint-disable no-unreachable */
/**
 * Passport configuration file where you should configure all strategies
 */
"use strict";

const passport = require("passport");
const GithubStrategy = require("passport-github2").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const User = require("../../models/users.model.js");

// Github Strategy Configuration Object
passport.use(
    new GithubStrategy(
        {
            clientID: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            callbackURL: "/api/v1/auth/github/callback",
        },
        async (accessToken, refreshToken, profile, done) => {
            if (profile) {
                const username = profile.username ? profile.username : null;
                const email = profile.emails[0].value
                    ? profile.emails[0].value
                    : null;

                const newUser = {
                    first_name: profile.displayName.split(" ")[0],
                    last_name: profile.displayName.split(" ")[1],
                    username: username,
                    email: email,
                    role_id: 2, // 2 is the default role "Customer"
                };

                const userExists = await User.getUserByUsernameOrEmail(
                    username
                );

                if (userExists.length === 0) {
                    await User.createUserWithUsernameOrEmail(
                        newUser.first_name,
                        newUser.last_name,
                        newUser.username,
                        newUser.email,
                        newUser.role_id
                    );

                    const user = await User.getUserByUsernameOrEmail(
                        username,
                        email
                    );

                    return done(null, user[0]);
                }

                return done(null, userExists[0]);
            }
        }
    )
);

// Google Strategy Configuration Object
passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "/api/v1/auth/google/callback",
        },
        async (accessToken, refreshToken, profile, done) => {
            const newUser = {
                first_name: profile.name.givenName,
                last_name: profile.name.familyName,
                username: "0",
                email: profile.emails[0].value,
                role_id: 2, // 2 is the default role "Customer"
            };

            const userExists = await User.getUserByUsernameOrEmail(
                newUser.username,
                newUser.email
            );

            if (userExists.length === 0) {
                await User.createUserWithUsernameOrEmail(
                    newUser.first_name,
                    newUser.last_name,
                    newUser.username,
                    newUser.email,
                    newUser.role_id
                );

                const user = await User.getUserByUsernameOrEmail(
                    newUser.username,
                    newUser.email
                );

                return done(null, user[0]);
            }

            return done(null, userExists[0]);
        }
    )
);

passport.serializeUser((user, done) => {
    return done(null, user);
});

passport.deserializeUser(async (user, done) => {
    const result = await User.getUserByUsernameOrEmail(
        user.username,
        user.email
    );

    return done(null, result[0]);
});
