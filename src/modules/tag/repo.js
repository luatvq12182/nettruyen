const TagModel = require('./model');

const count = () => {
    return TagModel.count({});
};

const select = ({
    condition,
    select,
    page = 1,
    limit = 10,
    sort = { updatedAt: -1 },
}) => {
    return TagModel.find(condition, select)
        .skip(limit * (page - 1))
        .limit(limit)
        .sort(sort);
};

const selectOne = (condition, select) => {
    return TagModel.findOne(condition, select);
};

const insert = async (data) => {
    const category = new TagModel(data);

    await category.save();

    return category;
};

const update = async (data) => {
    return TagModel.findByIdAndUpdate(data._id, data, {
        returnDocument: 'after',
    });
};

const deleteOne = async (_id) => {
    return TagModel.findByIdAndDelete(_id);
};

const deleteBatch = async (ids) => {
    return TagModel.deleteMany({ _id: ids });
};

module.exports = {
    count,
    select,
    selectOne,
    insert,
    update,
    deleteOne,
    deleteBatch,
};
