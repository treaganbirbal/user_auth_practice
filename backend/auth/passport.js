const passport = require('passport');
const db = require('../db/index.js');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, 
      // id: user.id,
       user.email
      // firstname: user.firstname,
      // lastname: user.lastname
  );
})

  passport.deserializeUser((firstname, done) => {
    db.one(`SELECT * FROM users WHERE email=${email}`, {
      email: firstname
    })
  .then(user => {
    done(null, 
      // id: user.id,
      user.email,
      // firstname: user.firstname,
      // lastname: user.lastname
    )
  })
  .catch(err => {
    done(err, null)
  });
 });
}