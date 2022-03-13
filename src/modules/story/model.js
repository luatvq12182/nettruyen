const { model, Schema } = require('mongoose');

const schema = new Schema({
    name: {
        type: String,
        maxlength: 255,
        minlength: 1,
        required: true,
        trim: true,
        index: {
            unique: true,
        },
    },
    slug: {
        type: String,
        maxlength: 255,
        minlength: 1,
        required: true,
        index: {
            unique: true,
        },
    },
    attachmentId: {
        type: Schema.Types.ObjectId,
        ref: 'Attachment',
    },
    categories: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Category',
        },
    ],
    author: {
        type: String,
        maxlength: 255
    },
    progress: {
        type: Number,
        default: 0
    },
    status: {
        type: Number,
        default: 0
    },
    intro: {
        type: String,
        maxlength: 5000
    },
    views: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

module.exports = model('Story', schema);