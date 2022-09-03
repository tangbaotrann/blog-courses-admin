// Handle lib hbs --> render view
module.exports = {

    // Handle multiple obj: map()
    mutipleMongooseToObject: function(mongoose) {
        return mongoose.map(mongoose => mongoose.toObject());
    },
    // Handle obj
    mongooseToObject: function(mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },

}