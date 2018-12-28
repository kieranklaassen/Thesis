class Thesis {
  constructor() {
    this.scalestart = 24; // 24 = C1
    this.scale = [0,2,4,5,7,9,11]; // Major

    this.keyboard = [];
    for (let i = this.scalestart; i < 12; i++) {
      this.keyboard = [...this.keyboard, ...this.scale.map(note => note + i * 12)];
    }

    this.noteIndex = null;
    this.centerNoteIndex = null;
  }

  setCenterNote(number) {
    if (this.keyboard.includes(number)) {
      this.noteIndex = this.keyboard.indexOf(number);
    } else {
      // Out of range, do we get another? up or down?
      console.log(`MIDI note ${number} is not part of scale`);
    }
  }

  noteIn(number) {
    if (this.keyboard.includes(number)) {
      this.noteIndex = this.keyboard.indexOf(number);
    } else {
      // Out of range, do we get another? up or down?
      console.log(`MIDI note ${number} is not part of scale`);
    }
  }

  mirrorNoteOut() {
    return 4;
  }

  centerNoteOut() {
    return 4;
  }
}

export default Thesis;
