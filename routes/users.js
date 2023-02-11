const express = require('express');
const router = express.Router();

const {profile,getUser} = require('../controllers/usersController');
const checkToken = require('../middlewares/checkToken');

/* /api/users */
router.get('/profile', checkToken, profile);
router.get('/getUser/:name', getUser);

module.exports = router;

