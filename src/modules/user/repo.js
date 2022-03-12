const UserModel = require('./model');

const selectOne = (query) => {
    return UserModel.findOne(query);
};

const insertOne = async (data) => {
    const user = new UserModel(data);

    await user.save();

    return user;
};

module.exports = {
    selectOne,
    insertOne,
};
