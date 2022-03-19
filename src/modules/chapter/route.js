const { Router } = require('express');
const {
    getChaptersByStory,
    getChapterOfStory,
    createChapter,
    editChapter,
    changeOrder,
    deleteChapter
} = require('./controller');
const {
    checkLogin,
    checkAuth,
    checkPermission,
} = require('../user/controller');

const router = Router();

router.post('/getByStory', getChaptersByStory);
router.post('/getChapterOfStory', getChapterOfStory);

router.use(checkLogin, checkAuth, checkPermission);

router.post('/', createChapter);
router.put('/', editChapter);
router.put('/changeOrder', changeOrder);
router.delete('/', deleteChapter);

module.exports = router;
