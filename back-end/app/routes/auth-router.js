const authController = require('../http/controllers/auth-controller');
const express = require('express')
const authMiddleware = require('../http/middleware/authJwt')
const router = express.Router();

router.post('/login', authController().login);

router.post('/register', authController().register);

router.get('/getAllUser',[authMiddleware.verifyToken] ,authController().getAllUser);

module.exports = router
