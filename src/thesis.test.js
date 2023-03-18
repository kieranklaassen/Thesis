import Thesis from "./thesis";
import { Midi } from "tonal";

test("Thesis generates a melody", () => {
  const thesis = new Thesis("D4", "C major");

  // Generate a random 10-note melody
  const melody = [64, 65, 69, 71, 62, 59, 71];

  let transformedMelody = {
    center: [],
    mirror: [],
    middle: [],
    mirrorMiddle: [],
  };

  // Play the melody using the Thesis class
  melody.forEach((note) => {
    thesis.play(note);

    transformedMelody.center.push(thesis.centerNoteOut());
    transformedMelody.mirror.push(thesis.mirrorNoteOut());
    transformedMelody.middle.push(thesis.middleNoteOut());
    transformedMelody.mirrorMiddle.push(thesis.mirrorMiddleNoteOut());
  });

  // Check if the transformed melody has the correct length and notes
  expect(transformedMelody.center.length).toBe(7);
  expect(transformedMelody.center).toStrictEqual([62, 62, 62, 62, 62, 62, 62]);
  expect(transformedMelody.mirror).toStrictEqual([50, 50, 50, 50, 50, 50, 50]);
  expect(transformedMelody.middle).toStrictEqual([50, 50, 50, 50, 50, 50, 50]);
  expect(transformedMelody.mirrorMiddle).toStrictEqual([50, 50, 50, 50, 50, 50, 50]);

  // Check if the transformed notes are valid MIDI notes
  transformedMelody.forEach((transformedNote) => {
    expect(Midi.isMidi(transformedNote.center)).toBe(true);
    expect(Midi.isMidi(transformedNote.mirror)).toBe(true);
    expect(Midi.isMidi(transformedNote.middle)).toBe(true);
    expect(Midi.isMidi(transformedNote.mirrorMiddle)).toBe(true);
  });
});
