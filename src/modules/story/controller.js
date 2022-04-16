const StoryRepo = require('./repo');
const AttachmentRepo = require('../attachment/repo');
const {
    BadRequestResponse,
    SuccessResponse,
} = require('../../server/response');

const getStories = async (req, res) => {
    try {
        const { page, limit } = req.query;

        const stories = await StoryRepo.select({
            condition: {},
            select: '_id name slug categories tags createdAt updatedAt',
            page,
            limit,
        });

        const count = await StoryRepo.count();

        const payload = {
            page: Number(page),
            limit: Number(limit),
            total: count,
            data: stories,
        };

        return new SuccessResponse('SUCCESS', payload).send(res);
    } catch (error) {
        return new BadRequestResponse('ERROR', error).send(res);
    }
};

const getStory = async (req, res) => {
    try {
        const { slug } = req.params;

        const story = await StoryRepo.selectOne({ slug });

        if (story && story.attachmentId) {
            const attachment = await AttachmentRepo.selectOneById(
                story.attachmentId
            );

            if (attachment) {
                return new SuccessResponse(
                    'SUCCESS',
                    Object.assign(story.toObject(), {
                        attachment: {
                            _id: attachment._id,
                            filename: attachment.filename,
                        },
                    })
                ).send(res);
            }
        }

        return new SuccessResponse('SUCCESS', story).send(res);
    } catch (error) {
        return new BadRequestResponse('ERROR', error).send(res);
    }
};

const queryStory = async (req, res) => {
    try {
        const { name, categories, tags, page, limit, sort } = req.body;

        const condition = {};

        if (name) {
            condition.name = {
                $regex: name,
                $options: 'i',
            };
        }

        if (categories) {
            condition.categories = {
                $in: categories,
            };
        }

        if (tags) {
            condition.tags = {
                $in: tags,
            };
        }

        const stories = await StoryRepo.select({
            condition,
            select: '_id name slug categories tags views createdAt updatedAt',
            sort,
            page,
            limit,
        });

        const count = await StoryRepo.count(condition);

        const payload = {
            page: Number(page),
            limit: Number(limit),
            total: count,
            data: stories,
        };

        return new SuccessResponse('SUCCESS', payload).send(res);
    } catch (error) {
        return new BadRequestResponse('ERROR', error).send(res);
    }
};

const createStory = async (req, res) => {
    try {
        const payload = req.body;

        const story = await StoryRepo.insert(payload);

        return new SuccessResponse('SUCCESS', story).send(res);
    } catch (error) {
        return new BadRequestResponse('ERROR', error).send(res);
    }
};

const inscrementView = async (req, res) => {
    try {
        const { slug } = req.params;

        const story = await StoryRepo.selectOne({ slug });

        if (story) {
            await StoryRepo.update({
                _id: story._id,
                views: story.views + 1
            });

            return new SuccessResponse('SUCCESS', story.views).send(res);
        }

        return new BadRequestResponse('ERROR', null).send(res);
    } catch (error) {
        return new BadRequestResponse('ERROR', error).send(res);
    }
};

const editStory = async (req, res) => {
    try {
        const payload = req.body;

        if (!payload._id) {
            return new BadRequestResponse('ID NOT FOUND', null).send(res);
        }

        const category = await StoryRepo.update(payload);

        return new SuccessResponse('SUCCESS', category).send(res);
    } catch (error) {
        return new BadRequestResponse('ERROR', error).send(res);
    }
};

const deleteStory = async (req, res) => {
    try {
        const { ids } = req.body;

        await StoryRepo.deleteBatch(ids);

        return new SuccessResponse('SUCCESS', ids).send(res);
    } catch (error) {
        return new BadRequestResponse('ERROR', error).send(res);
    }
};

module.exports = {
    getStories,
    getStory,
    queryStory,
    createStory,
    editStory,
    deleteStory,
    inscrementView
};
