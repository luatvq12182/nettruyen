const { Router } = require('express');
const {
    getChaptersByStory,
    getChapterOfStory,
    createChapter,
    editChapter,
    deleteChapter
} = require('./controller');

const router = Router();

router.post('/getByStory', getChaptersByStory);
router.post('/getChapterOfStory', getChapterOfStory);
router.post('/', createChapter);
router.put('/', editChapter);
router.delete('/', deleteChapter);

module.exports = router;
