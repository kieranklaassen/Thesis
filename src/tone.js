import * as Tone from "tone";
import { Note, Scale, Midi } from "tonal";

Tone.Transport.stop();

// set up Synth with long hall reverb
const synth = new Tone.Synth().toDestination(0.5);
const reverb = new Tone.Reverb(40).toDestination();
synth.connect(reverb);
const filter = new Tone.Filter(400, "lowpass").toDestination();
reverb.connect(filter);

// set a tonal scale
const notes = ["C4", "D4", "E4", "F4", "G4", "A4", "B4"];
// shuffle the notes
notes.sort(() => Math.random() - 0.5);

const synthPart = new Tone.Sequence(
  (time, note) => {
    console.log("triggering note", note);
    synth.triggerAttackRelease(note, "1n", time);
  },
  notes,
  "1n"
);

// play the sequence
synthPart.start(0);

Tone.Transport.start();
