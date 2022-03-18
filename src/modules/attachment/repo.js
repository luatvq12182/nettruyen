const AttachmentModel = require('./model');

const count = () => {
    return AttachmentModel.count({});
};

const select = ({
    condition,
    select,
    page = 1,
    limit = 20,
    sort = { updatedAt: -1 },
}) => {
    return AttachmentModel.find(condition, select)
        .skip(limit * (page - 1))
        .limit(limit)
        .sort(sort);
};

const selectOneById = (id) => {
    return AttachmentModel.findById(id);
};

const insertMany = (data) => {
    return AttachmentModel.insertMany(data);
};

const deleteBatch = async (ids) => {
    return AttachmentModel.deleteMany({ _id: ids });
};

module.exports = {
    count,
    select,
    selectOneById,
    insertMany,
    deleteBatch,
};
