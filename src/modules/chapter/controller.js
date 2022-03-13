const ChapterRepo = require('./repo');
const {
    BadRequestResponse,
    SuccessResponse,
} = require('../../server/response');

const getChaptersByStory = async (req, res) => {
    try {
        const { storyId, page, limit } = req.body;

        const chapters = await ChapterRepo.select({
            condition: { storyId },
            select: '_id name order',
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

        const select = isFull ? '' : 'name content';

        const chapter = await ChapterRepo.selectOne({
            storyId, order
        }, select);
        
        return new SuccessResponse('SUCCESS', chapter).send(res);
    } catch (error) {
        return new BadRequestResponse('ERROR', error).send(res);
    }
};

const createChapter = async (req, res) => {
    try {
        const payload = req.body;

        const chapter = await ChapterRepo.insert(payload);

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
    getChaptersByStory,
    getChapterOfStory,
    createChapter,
    editChapter,
    deleteChapter
}