const mongoose = require('mongoose');

const connectToDatabase = async () => {
    await mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log('Database Connected Successfully!');
        }).catch((err) => {
            console.log('Error in Database Connection!\n', err);
        })
}

module.exports = connectToDatabase;