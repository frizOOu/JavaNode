var mongoose = require('mongoose')

var restaurantsSchema = mongoose.Schema({
      address : Object,
      borough : String, 
      cuisine : String,
      grades : Array,
      name : String,
      restaurant_id : String
});

var model = mongoose.model('restaurants', restaurantsSchema);

module.exports = model;