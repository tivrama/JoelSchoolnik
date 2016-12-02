var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var mongoose       = require('mongoose');
    

var db = require('./config/db.js');

var port = process.env.PORT || 8000; 

mongoose.connect(db.url, function (err, res) {
  if (err) {
    console.log ('ERROR connecting to: ' + db.url + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + db.url);
  }
});


app.use(bodyParser.json()); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(methodOverride('X-HTTP-Method-Override')); 
app.use(express.static(__dirname + '/public')); 

require('./app/routes')(app); // configure our routes

app.listen(port);                                    
console.log('Joels Proects Page running on port: ' + port);

           
exports = module.exports = app; 