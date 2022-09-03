const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;

// init obj
const Course = new Schema({

    // fields of obj
    name: { type: String, minLength: 1, maxLength: 255 },
    description: { type: String, minLength: 1, maxLength: 400 },
    image: { type: String },
    slug: { type: String, slug: 'name', unique: true },
    videoId: { type: String, required: true },
}, {
    timestamps: true, // create time
});

// slug (get slug theo name)
mongoose.plugin(slug);

// detele soft
Course.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt: true, // time delete
});

module.exports = mongoose.model('Course', Course);