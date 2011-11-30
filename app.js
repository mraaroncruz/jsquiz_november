(function() {
  var Roman, app, express, flickr, flickrOptions, getURL, routes, _;

  express = require('express');

  routes = require('./routes');

  _ = require('underscore')._;

  Roman = require('./build/roman');

  app = module.exports = express.createServer();

  flickr = require('flickr-reflection');

  flickrOptions = {
    key: process.env.KEY,
    secret: process.env.SECRET,
    apis: ['photos']
  };

  app.configure(function() {
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(require('stylus').middleware({
      src: __dirname + '/public'
    }));
    app.use(app.router);
    return app.use(express.static(__dirname + '/public'));
  });

  app.configure('development', function() {
    return app.use(express.errorHandler({
      dumpExceptions: true,
      showStack: true
    }));
  });

  app.configure('production', function() {
    return app.use(express.errorHandler());
  });

  app.get('/', function(req, res) {
    return res.render('index.jade', {
      title: "Roman.js"
    });
  });

  getURL = function(obj) {
    console.log(JSON.stringify(obj));
    return "http://farm" + obj['farm'] + ".staticflickr.com/" + obj['server'] + "/" + obj['id'] + "_" + obj['secret'] + ".jpg";
  };

  app.get('/images/:letter', function(req, res) {
    var letter, obj;
    letter = req.params.letter;
    obj = {};
    return flickr.connect(flickrOptions, function(err, api) {
      return api.photos.search({
        tags: "the letter " + letter
      }, function(err, data) {
        var photos;
        photos = _.map(data.photos.photo, function(photo) {
          return {
            url: getURL(photo)
          };
        });
        return res.send(JSON.stringify(photos));
      });
    });
  });

  app.listen(3000);

  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);

}).call(this);
