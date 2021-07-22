let express = require('express');
let usersCtrl = require('./routes/usersCtrl');

exports.router = (function () {
    let apiRouter = express.Router();

    apiRouter.route('/users/register/')
        .post(usersCtrl.login);
    apiRouter.route('/users/register/')
        .post(usersCtrl.register);

    return apiRouter;
})();