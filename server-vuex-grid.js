var express = require('express')
var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)
var path = require('path')

var playerCount = 0

app.use('/static', express.static(path.join(__dirname, '/static')))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'))
})

var broadcastPlayerCount = function() {
  io.emit('player-count', { count: playerCount })
}

io.on('connection', function(socket) {
  playerCount++
  console.log('A player connected: ' + socket.id)
  broadcastPlayerCount()

  socket.on('client-event', function(message) {
    console.log(message)
  })

  socket.on('disconnect', function() {
    console.log('Player disconnected: ', socket.id)
    playerCount--
    broadcastPlayerCount()
  })
})

http.listen(3902, function() {
  console.log('spying on 3902')
})
