const StoryModel = require('./model');

const count = (condition) => {
    return StoryModel.count(condition);
};

const select = ({
    condition,
    select,
    page = 1,
    limit = 10,
    sort = { updatedAt: -1 },
}) => {
    return StoryModel.find(condition, select)
        .skip(limit * (page - 1))
        .limit(limit)
        .sort(sort);
};

const selectOne = (condition) => {
    return StoryModel.findOne(condition)
};

const insert = async (data) => {
    const story = new StoryModel(data);

    await story.save();

    return story;
};

const update = async (data) => {
    return StoryModel.findByIdAndUpdate(data._id, data, {
        returnDocument: 'after',
    });
};

const deleteOne = async (_id) => {
    return StoryModel.findByIdAndDelete(_id);
};

const deleteBatch = async (ids) => {
    return StoryModel.deleteMany({ _id: ids });
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