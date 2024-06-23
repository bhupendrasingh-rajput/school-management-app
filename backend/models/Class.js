const mongoose = require('mongoose');

const classSchema = mongoose.Schema({
    className: {
        type: String,
        required: true,
        unique: true,
        enum: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII']
    },
    year: { type: Number, required: true },
    studentFees: { type: Number, required: true },
}, {
    timestamps: true,
});

const Class = mongoose.model('Class', classSchema);

module.exports = Class;
