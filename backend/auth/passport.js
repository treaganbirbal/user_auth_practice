const passport = require('passport');
const db = require('../db/index.js');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, {
      id: user.id,
      email: user.email,
      firstname: user.firstname,
      lastname: user.lastname
  });
})

  passport.deserializeUser((user, done) => {
    db.one(`SELECT * FROM users WHERE email=${email}`, {
      email: user.email
    })
  .then(user => {
    done(null, {
      id: user.id,
      email: user.email,
      firstname: user.firstname,
      lastname: user.lastname
    })
  })
  .catch(err => {
    done(err, null)
  });
 });
}