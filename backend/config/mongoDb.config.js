const mongoose = require('mongoose');

const connectToDatabase = async () => {
    await mongoose.connect('mongodb://localhost:27017/SchoolManagementApp')
        .then(() => {
            console.log('Database Connected Successfully!');
        }).catch((err) => {
            console.log('Error in Database Connection!\n', err);
        })
}

module.exports = connectToDatabase;