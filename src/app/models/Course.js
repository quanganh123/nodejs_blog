const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Coures = new Schema({
    name: {type: String, required: true},
    description: {type: String},
    image: {type: String, required: true},
    idVideo: {type: String},
    lever: {type: String},
    slug: { type: String, slug: 'name' , unique: true},
},{
    timestamps: true,
});

module.exports = mongoose.model('Coures', Coures);