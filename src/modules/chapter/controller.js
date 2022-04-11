const ChapterRepo = require('./repo');
const {
    BadRequestResponse,
    SuccessResponse,
} = require('../../server/response');

const getNewChapters = async (req, res) => {
    try {
        const { page, limit } = req.query;

        const chapters = await ChapterRepo.select({
            condition: {},
            select: '_id name order storyId',
            page,
            limit,
            sort: {
                createdAt: -1
            }
        });

        const payload = {
            page: Number(page),
            limit: Number(limit),
            data: chapters,
        };

        return new SuccessResponse('SUCCESS', payload).send(res);
    } catch (error) {
        return new BadRequestResponse('ERROR', error).send(res);
    }
};

const getChaptersByStory = async (req, res) => {
    try {
        const { storyId, page, limit } = req.body;

        const chapters = await ChapterRepo.select({
            condition: { storyId },
            select: '_id name order createdAt updatedAt',
            page,
            limit,
        });

        const count = await ChapterRepo.count(storyId);

        const payload = {
            page: Number(page),
            limit: Number(limit),
            total: count,
            data: chapters,
        };

        return new SuccessResponse('SUCCESS', payload).send(res);
    } catch (error) {
        return new BadRequestResponse('ERROR', error).send(res);
    }
};

const getChapterOfStory = async (req, res) => {
    try {
        const { storyId, order, isFull } = req.body;

        const select = isFull ? '' : 'name content title description';

        const chapter = await ChapterRepo.selectOne(
            {
                storyId,
                order,
            },
            select
        );

        return new SuccessResponse('SUCCESS', chapter).send(res);
    } catch (error) {
        return new BadRequestResponse('ERROR', error).send(res);
    }
};

const createChapter = async (req, res) => {
    try {
        const payload = req.body;

        if (!payload.storyId) {
            return new BadRequestResponse('ID NOT FOUND', null).send(res);
        }

        const count = await ChapterRepo.count(payload.storyId);

        const chapter = await ChapterRepo.insert({
            ...payload,
            order: count + 1,
        });

        return new SuccessResponse('SUCCESS', chapter).send(res);
    } catch (error) {
        return new BadRequestResponse('ERROR', error).send(res);
    }
};

const editChapter = async (req, res) => {
    try {
        const payload = req.body;

        if (!payload._id) {
            return new BadRequestResponse('ID NOT FOUND', null).send(res);
        }

        const story = await ChapterRepo.update(payload);

        return new SuccessResponse('SUCCESS', story).send(res);
    } catch (error) {
        return new BadRequestResponse('ERROR', error).send(res);
    }
};

const changeOrder = async (req, res) => {
    try {
        const { storyId, orderA, orderB } = req.body;

        if (!storyId || !orderA || !orderB) {
            return new BadRequestResponse('Không đủ dữ liệu!', null).send(res);
        }

        const chapterA = await ChapterRepo.selectOne({
            storyId,
            order: orderA,
        });
        const chapterB = await ChapterRepo.selectOne({
            storyId,
            order: orderB,
        });

        if (!chapterA || !chapterB) {
            return new BadRequestResponse(
                'Vị trí chương không hợp lệ',
                null
            ).send(res);
        }

        await ChapterRepo.update({ _id: chapterA._id, order: orderB });
        await ChapterRepo.update({ _id: chapterB._id, order: orderA });

        return new SuccessResponse('SUCCESS', null).send(res);
    } catch (error) {
        console.log(error);
        return new BadRequestResponse('ERROR', error).send(res);
    }
};

const deleteChapter = async (req, res) => {
    try {
        const { ids } = req.body;

        await ChapterRepo.deleteBatch(ids);

        return new SuccessResponse('SUCCESS', ids).send(res);
    } catch (error) {
        return new BadRequestResponse('ERROR', error).send(res);
    }
};

module.exports = {
    getNewChapters,
    getChaptersByStory,
    getChapterOfStory,
    createChapter,
    editChapter,
    changeOrder,
    deleteChapter,
};
