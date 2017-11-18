var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    content: {type: String, required:true},
    /*
    Types: To access all the types mongoose knows
    We can't just use object id it will work for string
    ref is to define connection between two models
    e.g. ref:User will define connection between message and user
    We need to provide ref value in the User with ref: 'Message'
     */
    user: {type: Schema.Types.ObjectId, ref:'User'}
});

module.exports = mongoose.model('Message', schema);

