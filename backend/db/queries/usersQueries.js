// const db = require ('../db/index.js')

const authHelper = require('../../auth/helpers.js')

const getAllUsers = (req, res, next) => {
  db.any("SELECT * FROM users")
    .then(data => {
      res.status(200)
       .json({
         status:'Success',
         message: 'Received ALL Users',
         data: data
       })
  })
  .catch(err => {
    return next(err)
  })
}

const getSingleUser = (req, res, next) => {
  let userId = Number(req.params.id)
  db.one("SELECT * FROM users WHERE ID=$1", userId)
    .then(data => {
      res.status(200)
         .json({
           status:'Success',
           message: 'Received One Users',
           data: data
         })
    })
    .catch(err => {
      return next(err)
    })
}

const updateUser = (req, res, next) => {
    let userId = Number(req.params.id)
  db.none('UPDATE users SET name=${name}, email=${email} WHERE id=${userId}', {
    id: req.params.id,
    name: req.body.name,
    email: req.body.email
    })
    .then(() => {
      res.status(200)
          .json({
            status: 'success',
            message: 'Updated A User'
          })
    })
    .catch(err => {
      return next(err)
    })
}

const createUser = (req, res, next) => {
  const hash = authHelper.createHash(req.body.password_digest);

  db.none('INSERT INTO users(name, email, password_digest) VALUES(${name}, ${email}, ${password_digest})',
  { name: req.body.name, email: req.body.email, password_digest: hash}
  )
    .then(() => {
      res.status(200)
         .json({
           status: 'success',
           message: "New User Added"
         })
    })
    .catch(err => {
      return next(err)
    })
}

const deleteUser = (req, res, next) => {
  let userId = Number(req.params.id)
  db.result("DELETE FROM users WHERE ID=$1", userId)
    .then(result => {
      res.status(200)
          .json({
            status: 'success',
            message: 'User Has Been Deleted'
          })
    })
    .catch(err => {
      return next(err)
    })
  }

const logoutUser = (req, res, next) => {
    req.logout();
    res.status(200).send("Logged Out Successfully");
  }

const loginUser = (req, res) => {
  res.json(req.user)
};

const isLoggedIn = (req, res) => {
  if(req.user){
    res.json({
      user: req.user })
  } else {
    res.json({ email : null })
  }
}

module.exports={
  getAllUsers,
  getSingleUser,
  updateUser,
  createUser,
  deleteUser,
  logoutUser,
  loginUser,
  isLoggedIn
}