// require mongoose
var mongoose = require('mongoose');
//create schema
var PersonSchema = new mongoose.Schema({
name: { type: String, required: true, minlength: 2},
});
// register the schema as a model
// We are setting this Schema in our Models as 'Rabbit'
 var Person = mongoose.model('Person', PersonSchema);
