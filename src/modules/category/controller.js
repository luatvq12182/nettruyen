const CategoryRepo = require('./repo');
const {
    BadRequestResponse,
    SuccessResponse,
} = require('../../server/response');

const getCategories = async (req, res) => {
    try {
        const { page, limit } = req.query;

        const categories = await CategoryRepo.select({
            condition: {},
            select: '_id name slug intro title description',
            page,
            limit,
        });

        const count = await CategoryRepo.count();

        const payload = {
            page: Number(page),
            limit: Number(limit),
            total: count,
            data: categories,
        };

        return new SuccessResponse('SUCCESS', payload).send(res);
    } catch (error) {
        return new BadRequestResponse('ERROR', error).send(res);
    }
};

const createCategory = async (req, res) => {
    try {
        const payload = req.body;

        const category = await CategoryRepo.insert(payload);

        return new SuccessResponse('SUCCESS', category).send(res);
    } catch (error) {
        return new BadRequestResponse('ERROR', error).send(res);
    }
};

const editCategory = async (req, res) => {
    try {
        const payload = req.body;

        if (!payload._id) {
            return new BadRequestResponse('ID NOT FOUND', null).send(res);
        }

        const category = await CategoryRepo.update(payload);

        return new SuccessResponse('SUCCESS', category).send(res);
    } catch (error) {
        return new BadRequestResponse('ERROR', error).send(res);
    }
};

const deleteCategory = async (req, res) => {
    try {
        const { id } = req.body;

        await CategoryRepo.deleteOne(id);

        return new SuccessResponse('SUCCESS', null).send(res);
    } catch (error) {
        return new BadRequestResponse('ERROR', error).send(res);
    }
};

const deleteCategories = async (req, res) => {
    try {
        const { ids } = req.body;

        await CategoryRepo.deleteBatch(ids);

        return new SuccessResponse('SUCCESS', ids).send(res);
    } catch (error) {
        return new BadRequestResponse('ERROR', error).send(res);
    }
};

const checkExist = async (req, res, next) => {
    try {
        const { name, slug } = req.body;

        if (
            (await CategoryRepo.selectOne({ name })) ||
            (await CategoryRepo.selectOne({ slug }))
        ) {
            return new BadRequestResponse('Danh mục đã tồn tại', null).send(
                res
            );
        }

        next();
    } catch (error) {
        return new BadRequestResponse('ERROR', error).send(res);
    }
};

module.exports = {
    getCategories,
    createCategory,
    editCategory,
    deleteCategory,
    deleteCategories,
    checkExist,
};
