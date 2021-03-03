const { Schema, model } = require('mongoose');

const { dataBaseTablesEnum: { USER } } = require('../../constant');

const userSchema = new Schema({
    age: { type: Number, default: 18 },
    cars: [{ type: Schema.Types.ObjectId }],
    email: { type: String, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true }
}, { toObject: { virtuals: true }, toJSON: { virtuals: true } });

userSchema.virtual('userCars', {
    ref: 'Car',
    localField: 'cars',
    foreignField: '_id'
});

userSchema
    .pre('find', function() {
        this.populate('userCars');
    })
    .pre('findOne', function() {
        this.populate('userCars');
    });

module.exports = model(USER, userSchema);
