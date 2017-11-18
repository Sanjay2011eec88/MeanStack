var mongoose  = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
   firstName: {type:String, required:true},
   lastName: {type: String, required:true},
   password: {type: String, required: true},
    //unique will not work so we are using mongoose-unique-validator plugin
   email: {type:String, required:true, unique: true},
   messages:[{type:Schema.Types.ObjectId, ref: 'Message'}]
});

//Validating that email is unique using mongooseUniqueValidator
schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User',schema);