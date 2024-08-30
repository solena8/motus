const { words } = require("./words.js");
const { normalizeWord } = require("./scriptAlgo.js");

describe("normalizeWord", () => {
  it("should normalize a string with accents and convert to uppercase", () => {
    expect(normalizeWord("élève")).toBe("ELEVE");
  });
});
