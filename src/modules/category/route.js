const { Router } = require('express');
const {
    getCategories,
    createCategory,
    editCategory,
    deleteCategory,
    deleteCategories,
    checkExist,
} = require('./controller');
const {
    checkLogin,
    checkAuth,
    checkPermission,
} = require('../user/controller');

const router = Router();

router.get('/', getCategories);

router.use(checkLogin, checkAuth, checkPermission);

router.post('/', checkExist, createCategory);
router.put('/', checkExist, editCategory);
router.delete('/', deleteCategory);
router.delete('/deleteBatch', deleteCategories);

module.exports = router;
