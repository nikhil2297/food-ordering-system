const resturantController = require('../http/controllers/resturant-controller')
const express = require('express')
const authMiddleware = require('../http/middleware/authJwt')
const router = express.Router();


router.post('/add-resturant', [authMiddleware.verifyToken, authMiddleware.getUserData], resturantController().addResturant);