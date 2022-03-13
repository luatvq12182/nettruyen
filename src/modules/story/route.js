const { Router } = require('express');
const {
    getStories,
    getStory,
    createStory,
    editStory,
    deleteStory,
} = require('./controller');

const router = Router();

router.get('/', getStories);
router.get('/:slug', getStory);
router.post('/', createStory);
router.put('/', editStory);
router.delete('/', deleteStory)

module.exports = router;
