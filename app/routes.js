var Projects = require('./models/projects.js');

module.exports = function(app) {

  app.get('/api/projects', function(req, res) {
    // console.log('INSIDE GET!!!');
    Projects.find(function(err, projects) {
      if (err) {
        res.send(err);
      }
      res.json(projects);
    });
  });

  app.get('*', function(req, res) {
    res.sendfile('./index.html'); 
  });

};
