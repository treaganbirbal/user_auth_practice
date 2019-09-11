const express = require('express');
const router = express.Router();
const db = require("../db/queries/usersQueries.js").default
const passport = require("../auth/local.js")
const { loginRequire } = require('../auth/helpers.js')
const {getAllUsers, getSingleUser, updateUser, createUser, deleteUser, isLoggedIn, loginUser, logoutUser} = require('../db/queries/usersQueries.js');


router.get('/', getAllUsers);
router.get('/user/:id', getSingleUser);
router.post('/login', passport.authenticate("local", {}), loginUser);
router.get('/isLoggedIn', isLoggedIn);
router.get('/logout', loginRequire, logoutUser);
router.patch('/:id', updateUser);
router.post('/register', createUser);
router.delete('/:id', deleteUser);


module.exports = router;