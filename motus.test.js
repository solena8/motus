const { getRandomWord, words} = require('./script');

test('gets a 5 letter word', () => {
  const word = getRandomWord(words);
  expect(word.length).toBe(5);
});

test('gets a string', () => {
    const word = getRandomWord(words);
    expect(typeof word).toBe('string');
  });


  test('is a word from the words array', () => {
    const word = getRandomWord(words);
  expect(words).toContain(word);
});
