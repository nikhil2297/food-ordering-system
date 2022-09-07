const authController = require('../http/controllers/auth-controller');
const express = require('express')
const authMiddleware = require('../http/middleware/authJwt')
const router = express.Router();

router.post('/login', [authMiddleware.allowCrossDomain] ,authController().login);

router.post('/register',[authMiddleware.allowCrossDomain], authController().register);

router.get('/getAllUser',[authMiddleware.allowCrossDomain, authMiddleware.verifyToken] ,authController().getAllUser);

module.exports = router
