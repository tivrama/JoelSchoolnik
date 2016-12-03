var Project = require('./models/projects.js');

module.exports = function(app) {

  app.get('/api/projects', function(req, res) {
    // console.log('INSIDE GET!!!');
    Project.find(function(err, projects) {
      if (err) {
        res.send(err);
      }
      res.json(projects);
    });
  });

  app.post('/api/projects', function(req, res) {
    console.log('INPUT INSIDE SERVER POST!!: ', req.body);
    var projectEntry = new Project({
        name: req.body.name,
        description: req.body.description,
        details: req.body.details,
        url: req.body.url,
        priority: req.body.priority
    });
    projectEntry.save(function(err, resp) {
        if (err) {
            res.send(err);
            console.log(err);
            console.log('Fail saving to server');
        } else {
           res.send({message:'the project has been saved'}); 
            console.log('Success saving to server');
        }
    });
  });

  app.get('*', function(req, res) {
    res.sendfile('../index.html'); 
  });

};
