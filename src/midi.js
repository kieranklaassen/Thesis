const midi = require("midi");

const Thesis = require("../dist/thesis.cjs.js");

const thesis = new Thesis();

thesis.setCenterNote(67);

// Set up a new output.
const output = new midi.Output();

// // Count the available output ports.
output.getPortCount();

// // Get the name of a specified output port.
output.getPortName(0);

// // Open the first available output port.
output.openVirtualPort("Thesis");

// Send a MIDI message.
// output.sendMessage([176, 22, 1]);

// Set up a new input.
const input = new midi.Input();

// Count the available input ports.
input.getPortCount();

// Get the name of a specified input port.
input.getPortName(0);

input.openVirtualPort("Thesis");

// Configure a callback.
input.on("message", (deltaTime, message) => {
  // The message is an array of numbers corresponding to the MIDI bytes:
  //   [status, data1, data2]
  // https://www.cs.cf.ac.uk/Dave/Multimedia/node158.html has some helpful
  // information interpreting the messages.
  console.log(`m: ${message} d: ${deltaTime}`);
  output.sendMessage(message);
  mirrorMessage = [message[0], thesis.mirrorNoteOut(message[1]), message[2]];
  middleMessage = [message[0], thesis.middleNoteOut(message[1]), message[2]];
  output.sendMessage(mirrorMessage);
  output.sendMessage(middleMessage);

  console.log(`mirrorMessage: ${mirrorMessage} d: ${deltaTime}`);
  console.log(`middleMessage: ${middleMessage} d: ${deltaTime}`);
});

// Open the first available input port.
// input.openPort(1);
