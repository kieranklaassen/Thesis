import { Note, Scale, Midi } from "tonal";

class Thesis {
  constructor() {
    this.scale = Scale.get("C major");
    this.centerNote = Note.midi("D3"); // 50
    this.activeNote = null;
  }

  play(midiNote) {
    // Check if midiNote is in scale

    if (this.notes.includes(Midi.midiToNoteName(midiNote, { pitchClass: true }))) {
      this.activeNote = midiNote;
    } else {
      // Out of range, do we get another? up or down?
      console.log(`MIDI note ${number} is not part of scale`);
    }
  }

  // returns the center note ⛰️
  centerNoteOut() {
    return this.centerNote;
  }

  // returns the mirror note 🌊
  mirrorNoteOut() {
    // Take the interval between the center note and the active note
    const interval = Note.interval(this.centerNote, this.activeNote);

    // Invert the interval on the center note
    const invertedInterval = Note.interval(this.centerNote, interval);

    // Make sure it's in the scale
    const invertedNote = Note.transpose(this.centerNote, invertedInterval);

    // Return the midi number
    return invertedNote;
  }

  // returns the middle note 🌌
  middleNoteOut() {
    // Take the interval between the active note and the center note
    const interval = Note.interval(this.centerNote, this.activeNote);
    // Half the interval
    const halfInterval = Note.interval(interval, "P5");
    // Add te half interval to the center note
    const middleNote = Note.transpose(this.centerNote, halfInterval);
    // Make sure it's in the scale
    const middleNoteInScale = Note.transpose(this.centerNote, middleNote);
    // Return the midi number
    return middleNoteInScale;
  }

  // returns mirror middle note 🌌
  mirrorMiddleNoteOut() {
    // Take the interval between the active note and the center note
    const interval = Note.interval(this.centerNote, this.activeNote);
    // Half the interval
    const halfInterval = Note.interval(interval, "P5");
    // Invert the half interval on the center note
    const invertedHalfInterval = Note.interval(this.centerNote, halfInterval);
    // Add te half interval to the center note
    const middleNote = Note.transpose(this.centerNote, invertedHalfInterval);
    // Make sure it's in the scale
    const middleNoteInScale = Note.transpose(this.centerNote, middleNote);
    // Return the midi number
    return middleNoteInScale;
  }
}

export default Thesis;
