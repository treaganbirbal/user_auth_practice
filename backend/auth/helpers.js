const bcrypt = require('bcrypt')

const compareHash = (userPassword, dbPassword) => {
  return bcrypt.compareSync(userPassword, dbPassword)
}

const createHash = (password) => {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(password, salt);
  return hash;
}


const loginRequire = (req, res, next) => {
  if(!req.user) {
    res.status(401).json({
      status: 'Forbidden - Please Log In'
    });
    return;
  }
  next()
}

module.exports = {
  compareHash,
  loginRequire,
  createHash
}