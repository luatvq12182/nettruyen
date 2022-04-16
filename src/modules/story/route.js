const { Router } = require('express');
const {
    getStories,
    getStory,
    queryStory,
    createStory,
    editStory,
    inscrementView,
    deleteStory,
} = require('./controller');
const {
    checkLogin,
    checkAuth,
    checkPermission,
} = require('../user/controller');

const router = Router();

router.get('/', getStories);
router.get('/:slug', getStory);
router.get('/:slug/inscrement', inscrementView);
router.post('/queryStory', queryStory)

router.use(checkLogin, checkAuth, checkPermission);

router.post('/', createStory);
router.put('/', editStory);
router.delete('/', deleteStory);

module.exports = router;
