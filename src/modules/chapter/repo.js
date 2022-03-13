const ChapterModel = require('./model');

const count = (storyId) => {
    return ChapterModel.count({ storyId });
};

const select = ({
    condition,
    select,
    page = 1,
    limit = 10,
    sort = { order: 1 },
}) => {
    return ChapterModel.find(condition, select)
        .skip(limit * (page - 1))
        .limit(limit)
        .sort(sort);
};

const selectOne = (condition, select) => {
    return ChapterModel.findOne(condition, select);
};

const insert = async (data) => {
    const chapter = new ChapterModel(data);

    await chapter.save();

    return chapter;
};

const update = async (data) => {
    return ChapterModel.findByIdAndUpdate(data._id, data, {
        returnDocument: 'after',
    });
};

const deleteOne = async (_id) => {
    return ChapterModel.findByIdAndDelete(_id);
};

const deleteBatch = async (ids) => {
    return ChapterModel.deleteMany({ _id: ids });
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
