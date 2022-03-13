const fs = require('fs');
const AttachmentRepo = require('./repo');
const {
    InternalErrorResponse,
    SuccessResponse,
} = require('../../server/response');
const UPLOAD_PATH = require('./constant');

const getAttachments = async (req, res) => {
    try {
        const { page, limit } = req.query;

        const attachments = await AttachmentRepo.select({
            condition: {},
            // select: '_id name slug',
            page,
            limit,
        });

        const count = await AttachmentRepo.count();

        const payload = {
            page: Number(page),
            limit: Number(limit),
            total: count,
            data: attachments,
        };

        return new SuccessResponse('SUCCESS', payload).send(res);
    } catch (error) {
        return new BadRequestResponse('ERROR', error).send(res);
    }
};

const uploadAttachments = async (req, res) => {
    try {
        const imgs = [];

        req.files.forEach((file) => {
            imgs.push({
                filename: file.filename,
                size: file.size,
                type: file.mimetype,
            });
        });

        await AttachmentRepo.insertMany(imgs);

        return new SuccessResponse().send(res);
    } catch (error) {
        return new InternalErrorResponse().send(res);
    }
};

const deleteAttachments = async (req, res) => {
    try {
        const { ids } = req.body;

        const attachments = await AttachmentRepo.select({
            condition: { _id: ids },
        });

        attachments.forEach((item) => {
            const link = UPLOAD_PATH + '/' + item.filename;

            fs.unlink(link, (err) => {
                console.log(err);
            });
        });

        await AttachmentRepo.deleteBatch(ids);

        return new SuccessResponse('SUCCESS', null).send(res);
    } catch (error) {
        console.log(error);

        return new InternalErrorResponse().send(res);
    }
};

module.exports = {
    getAttachments,
    uploadAttachments,
    deleteAttachments,
};
