const ConfigRepo = require('./repo');
const AttachmentRepo = require('../attachment/repo');
const {
    BadRequestResponse,
    SuccessResponse,
} = require('../../server/response');

const getConfig = async (_req, res) => {
    try {
        const config = await ConfigRepo.selectOne();

        if (config && config.logo) {
            const attachment = await AttachmentRepo.selectOneById(config.logo);

            if (attachment) {
                return new SuccessResponse(
                    'SUCCESS',
                    Object.assign(config.toObject(), {
                        attachment: {
                            _id: attachment._id,
                            filename: attachment.filename,
                        },
                    })
                ).send(res);
            }
        }

        return new SuccessResponse('SUCCESS', config).send(res);
    } catch (error) {
        console.log(error)

        return new BadRequestResponse('ERROR', error).send(res);
    }
};

const createConfig = async (req, res) => {
    try {
        const payload = req.body;

        const config = await ConfigRepo.insert(payload);

        return new SuccessResponse('SUCCESS', config).send(res);
    } catch (error) {
        return new BadRequestResponse('ERROR', error).send(res);
    }
};

const editConfig = async (req, res) => {
    try {
        const payload = req.body;

        if (!payload._id) {
            return new BadRequestResponse('ID NOT FOUND', null).send(res);
        }

        const config = await ConfigRepo.update(payload);

        return new SuccessResponse('SUCCESS', config).send(res);
    } catch (error) {
        return new BadRequestResponse('ERROR', error).send(res);
    }
};

module.exports = {
    getConfig,
    createConfig,
    editConfig
}