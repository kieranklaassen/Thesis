import { Note, Scale, Midi, Interval } from "tonal";

class Thesis {
  constructor(centerNote = "C4", scale = "C major") {
    this.scale = Scale.get(scale);
    this.notes = this.scale.notes;
    this.centerNote = Note.midi(centerNote); // 50
    this.activeNote = null;
  }

  play(midiNote) {
    // Check if midiNote is in scale
    const noteName = Midi.midiToNoteName(midiNote, { pitchClass: true });

    if (this.notes.includes(noteName)) {
      this.activeNote = midiNote;
    } else {
      // Find the closest note in scale and set it as the active note
      const closestNoteInScale = this._findClosestNoteInScale(noteName);
      this.activeNote = Note.midi(closestNoteInScale);
    }
  }

  centerNoteOut() {
    return this.centerNote;
  }

  mirrorNoteOut() {
    // Take the interval between the center note and the active note
    const interval = Interval.distance(this.centerNote, this.activeNote);

    // Invert the interval on the center note
    const invertedInterval = Interval.distance(this.centerNote, interval);

    // Make sure it's in the scale
    const invertedNoteInScale = this._findClosestNoteInScale(invertedInterval);

    // Return the midi number
    return Note.midi(invertedNoteInScale);
  }

  middleNoteOut() {
    // Take the interval between the active note and the center note
    const interval = Interval.distance(this.centerNote, this.activeNote);
    // Half the interval
    const halfInterval = Interval.distance(interval, "P5");
    // Add the half interval to the center note
    const middleNote = Note.transpose(this.centerNote, halfInterval);
    // Make sure it's in the scale
    const middleNoteInScale = this._findClosestNoteInScale(middleNote);

    // Return the midi number
    return Note.midi(middleNoteInScale);
  }

  mirrorMiddleNoteOut() {
    // Take the interval between the active note and the center note
    const interval = Interval.distance(this.centerNote, this.activeNote);
    // Half the interval
    const halfInterval = Interval.distance(interval, "P5");
    // Invert the half interval on the center note
    const invertedHalfInterval = Interval.distance(this.centerNote, halfInterval);
    // Add the half interval to the center note
    const middleNote = Note.transpose(this.centerNote, invertedHalfInterval);
    // Make sure it's in the scale
    const middleNoteInScale = this._findClosestNoteInScale(middleNote);

    // Return the midi number
    return Note.midi(middleNoteInScale);
  }

  _findClosestNoteInScale(note, roundMode = "nearest") {
    const noteName = Note.simplify(note);
    if (this.notes.includes(noteName)) {
      return noteName;
    }

    const up = Note.simplify(Note.transpose(note, "1m"));
    const down = Note.simplify(Note.transpose(note, "-1m"));

    if (roundMode === "ceil") {
      return this.notes.includes(up) ? up : down;
    } else if (roundMode === "floor") {
      return this.notes.includes(down) ? down : up;
    } else {
      // Default to 'nearest'
      const upDistance = Note.midi(up) - Note.midi(noteName);
      const downDistance = Note.midi(noteName) - Note.midi(down);

      return upDistance <= downDistance ? up : down;
    }
  }
}

export default Thesis;
