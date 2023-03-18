// Write jest tests for the thesis model

const Thesis = require("../src/thesis");

describe("Thesis", () => {
  let thesis;

  beforeEach(() => {
    thesis = new Thesis();
  });

  test("should be an instance of Thesis", () => {
    expect(thesis).toBeInstanceOf(Thesis);
  });

  test("should have a scale", () => {
    expect(thesis.scale).toEqual("C major");
  });

  test("should have a center note", () => {
    expect(thesis.centerNote).toEqual("C4");
  });

  test("should have a range", () => {
    expect(thesis.range).toEqual(2);
  });

  test("should have a set of notes", () => {
    expect(thesis.notes).toEqual(["C", "D", "E", "F", "G", "A", "B"]);
  });

  test("should have an active note", () => {
    expect(thesis.activeNote).toEqual("C4");
  });

  test("should be able to change the scale", () => {
    thesis.scale = "D major";
    expect(thesis.scale).toEqual("D major");
  });

  test("should be able to change the center note", () => {
    thesis.centerNote = "D4";
    expect(thesis.centerNote).toEqual("D4");
  });

  test("should be able to change the range", () => {
    thesis.range = 3;
    expect(thesis.range).toEqual(3);
  });

  test("should be able to change the active note", () => {
    thesis.activeNote = "D4";
    expect(thesis.activeNote).toEqual("D4");
  });

  test("should be able to change the scale", () => {
    thesis.scale = "D major";
    expect(thesis.scale).toEqual("D major");
  });

  test("should be able to change the center note", () => {
    thesis.centerNote = "D4";
    expect(thesis.centerNote).toEqual("D4");
  });

  test("should be able to change the range", () => {
    thesis.range = 3;
    expect(thesis.range).toEqual(3);
  });

  test("should be able to change the active note", () => {
    thesis.activeNote = "D4";
    expect(thesis.activeNote).toEqual("D4");
  });
});
