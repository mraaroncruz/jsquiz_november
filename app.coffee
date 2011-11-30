express = require 'express'
routes  = require './routes'
Roman   = require './build/roman'
app = module.exports = express.createServer()

# Configuration
app.configure ->
  app.set('views', __dirname + '/views')
  app.set('view engine', 'jade')
  app.use(express.bodyParser())
  app.use(express.methodOverride())
  app.use(require('stylus').middleware( src: __dirname + '/public' ))
  app.use(app.router)
  app.use(express.static(__dirname + '/public'))

app.configure 'development', ->
  app.use(express.errorHandler( dumpExceptions: true, showStack: true ))

app.configure 'production', ->
  app.use(express.errorHandler())

# Routes

app.get '/', (req, res) ->
  res.render 'index.jade', title: "Roman.js"

app.get '/images', (req, res) ->
  res.send "images baby"
  # request images
  # return json collections for IVXDCLM

app.listen(3000)

console.log "Express server listening on port %d in %s mode", app.address().port, app.settings.env
