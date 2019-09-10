const passport = require('passport');
const LocatStrategy = require('passport-local').Strategy;
const init = require('./passport')
const helpers = require('./helpers')

const db = require('../db/index');

init();

passport.use(
  new LocatStrategy({usernameField: 'email'}, (email, password, done) => {
    db.one("SELECT * FROM users WHERE email = ${email}", {
      email: email
    })
    .then(user => {
      if(!helpers.compareHash(password, user.password_digest)) {
        return done(null, false);
      } else {
        return done(null, user)
      }
    })
    .catch(err => {
      return done(err)
    })
  })
);

module.exports = passport;