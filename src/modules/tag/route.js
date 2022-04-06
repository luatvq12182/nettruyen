const { Router } = require('express');
const {
    getTags,
    createTag,
    editTag,
    deleteTag,
    deleteTags,
    checkExist,
} = require('./controller');
const {
    checkLogin,
    checkAuth,
    checkPermission,
} = require('../user/controller');

const router = Router();

router.get('/', getTags);

router.use(checkLogin, checkAuth, checkPermission);

router.post('/', checkExist, createTag);
router.put('/', checkExist, editTag);
router.delete('/', deleteTag);
router.delete('/deleteBatch', deleteTags);

module.exports = router;
