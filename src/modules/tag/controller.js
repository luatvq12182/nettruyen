const TagRepo = require('./repo');
const {
    BadRequestResponse,
    SuccessResponse,
} = require('../../server/response');

const getTags = async (req, res) => {
    try {
        const { page, limit } = req.query;

        const tags = await TagRepo.select({
            condition: {},
            select: '_id name slug',
            page,
            limit,
        });

        const count = await TagRepo.count();

        const payload = {
            page: Number(page),
            limit: Number(limit),
            total: count,
            data: tags,
        };

        return new SuccessResponse('SUCCESS', payload).send(res);
    } catch (error) {
        return new BadRequestResponse('ERROR', error).send(res);
    }
};

const createTag = async (req, res) => {
    try {
        const payload = req.body;

        const tag = await TagRepo.insert(payload);

        return new SuccessResponse('SUCCESS', tag).send(res);
    } catch (error) {
        return new BadRequestResponse('ERROR', error).send(res);
    }
};

const editTag = async (req, res) => {
    try {
        const payload = req.body;

        if (!payload._id) {
            return new BadRequestResponse('ID NOT FOUND', null).send(res);
        }

        const tag = await TagRepo.update(payload);

        return new SuccessResponse('SUCCESS', tag).send(res);
    } catch (error) {
        return new BadRequestResponse('ERROR', error).send(res);
    }
};

const deleteTag = async (req, res) => {
    try {
        const { id } = req.body;

        await TagRepo.deleteOne(id);

        return new SuccessResponse('SUCCESS', null).send(res);
    } catch (error) {
        return new BadRequestResponse('ERROR', error).send(res);
    }
};

const deleteTags = async (req, res) => {
    try {
        const { ids } = req.body;

        await TagRepo.deleteBatch(ids);

        return new SuccessResponse('SUCCESS', ids).send(res);
    } catch (error) {
        return new BadRequestResponse('ERROR', error).send(res);
    }
};

const checkExist = async (req, res, next) => {
    try {
        const { name, slug } = req.body;

        if (
            (await TagRepo.selectOne({ name })) ||
            (await TagRepo.selectOne({ slug }))
        ) {
            return new BadRequestResponse('Tag đã tồn tại', null).send(
                res
            );
        }

        next();
    } catch (error) {
        return new BadRequestResponse('ERROR', error).send(res);
    }
};

module.exports = {
    getTags,
    createTag,
    editTag,
    deleteTag,
    deleteTags,
    checkExist,
};
