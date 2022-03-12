const { model, Schema } = require('mongoose');
const bcrypt = require('bcryptjs');

const schema = new Schema(
    {
        username: {
            type: String,
            minlength: 3,
            maxlength: 50,
            required: true,
            index: {
                unique: true,
            },
        },
        password: {
            type: String,
            minlength: 5,
            maxlength: 100,
            required: true,
        },
        isRoot: {
            type: Boolean,
        },
    },
    {
        timestamps: true,
    }
);

schema.pre('save', function (next) {
    const user = this;

    if (!user.isModified('password')) return next();

    bcrypt.genSalt(12, (err, salt) => {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) return next(err);

            user.password = hash;

            next();
        });
    });
});

schema.methods.comparePassword = function (password, callback) {
    bcrypt.compare(password, this.password, (err, isMatch) => {
        if (err) return callback(err);
        callback(null, isMatch);
    });
};

module.exports = model('User', schema);
