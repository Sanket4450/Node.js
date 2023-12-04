const EventEmitter = require('events'); // EventEmitter is a class
const emitter = new EventEmitter(); // Now, emitter is an object

// register a listener
emitter.on('messageLogged', function() {
    console.log('Listener Called');
});

// raise an event
emitter.emit('messageLogged');

// we have to register listeners before raising an event