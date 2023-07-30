const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = Schema({
    timestamps: { type: Number },
    name: { type: String, required: true },
})

const saveDataModel = mongoose.model('data', dataSchema);
module.exports = saveDataModel;