var people = require('../controllers/people.js');

module.exports = function(app) {
  //**** 2. create routes ********
  // serve up the full collection of people born in 1955
  app.get('/', function(req,res) {
    people.index(req,res)
  });

  //Add a person to the dataBase
  app.get('/new/:name', function(req,res) {
      people.create_new(req,res)
  });

  // delete name from the database
  app.get('/remove/:name', function(req,res) {
      people.delete(req,res)
  });

  // bring up the document of that particular person.
  app.get('/:name', function(req,res) {
    people.show_person(req, res)
  });

}
