const { Router } = require('express');
const {
    getConfig,
    createConfig,
    editConfig
} = require('./controller');
const {
    checkLogin,
    checkAuth,
    checkPermission,
} = require('../user/controller');

const router = Router();

router.get('/getConfig', getConfig);

router.use(checkLogin, checkAuth, checkPermission);

router.post('/', createConfig)
router.put('/', editConfig);

module.exports = router;
