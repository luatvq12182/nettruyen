const CategoryModel = require('./model');

const count = () => {
    return CategoryModel.count({});
};

const select = ({
    condition,
    select,
    page = 1,
    limit = 10,
    sort = { updatedAt: -1 },
}) => {
    return CategoryModel.find(condition, select)
        .skip(limit * (page - 1))
        .limit(limit)
        .sort(sort);
};

const selectOne = (condition, select) => {
    return CategoryModel.findOne(condition, select);
};

const insert = async (data) => {
    const category = new CategoryModel(data);

    await category.save();

    return category;
};

const update = async (data) => {
    return CategoryModel.findByIdAndUpdate(data._id, data, {
        returnDocument: 'after',
    });
};

const deleteOne = async (_id) => {
    return CategoryModel.findByIdAndDelete(_id);
};

const deleteBatch = async (ids) => {
    return CategoryModel.deleteMany({ _id: ids });
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
