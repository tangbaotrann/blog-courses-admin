const mongoose = require('mongoose');

// connection to mongoDB
async function connect() {

    try {
        await mongoose.connect('mongodb://localhost:27017/f8_demo_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connection successfully.');
    } catch (err) {
        console.log('Connection fail!');
    }

}

module.exports = { connect };