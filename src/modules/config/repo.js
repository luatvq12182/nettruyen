const ConfigModel = require('./model');

const selectOne = () => {
    return ConfigModel.findOne({});
};

const insert = async (data) => {
    const config = new ConfigModel(data);

    await config.save();

    return config;
};

const update = async (data) => {
    return ConfigModel.findByIdAndUpdate(data._id, data, {
        returnDocument: 'after',
    });
};

module.exports = {
    selectOne,
    insert,
    update,
};
