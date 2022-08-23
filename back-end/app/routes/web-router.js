const authRouter = require('./auth-router')

function initMainRouter(app) {
    app.use(authRouter)
}

module.exports = initMainRouter