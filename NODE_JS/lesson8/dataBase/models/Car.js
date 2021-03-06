const { Schema, model } = require('mongoose');

const { dataBaseTablesEnum: { CAR } } = require('../../constant');

const carSchema = new Schema({
    model: { type: String },
    price: { type: Number },
    photos: [{ type: String }],
    docs: [{ type: String }]
});

module.exports = model(CAR, carSchema);
