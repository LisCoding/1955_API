var mongoose = require('mongoose');
var Person = mongoose.model('Person');

module.exports = {
  index: function(request, response) {
    Person.find({}, function (err, people) {
      if(err){
        console.log(err);
      }else {
        response.json(people)
      }
    })
  },
  create_new: function (req, res){
    console.log("POST DATA ", req.body);
    var person = new Person({name: req.params.name});
    // Try to save that new name to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
    person.save(function(err) {
      // if there is an error console.log that something went wrong!
      if(err) {
        console.log('something went wrong', err);
        res.send('<h1>We could not add this name</h1>')
      } else { // else console.log that we did well and then redirect to the root route
        console.log('successfully added a user!');
        //redirect the user back to the root route.
        res.send('<h1>successfully add a new name</h1>')
      }
    })
  },
  show_person: function(req, res) {
    Person.find({name: req.params.name}, function (err, person) {
      if(err){
        console.log(err);
      }
      else {
          res.json(person)
      }
    })
  },
  delete: function(req, res) {
    Person.remove({name: req.params.name}, function (err,person) {
      if(err){
        console.log(err);
      }else {
        res.send('<h1>successfully remove name</h1>')
      }
    })
  },
}
