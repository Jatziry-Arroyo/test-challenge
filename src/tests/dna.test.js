const isValidDNA = require('.dna/isValidDNA');

test('it string of DNA is true', () => {
  expect(isValidDNA("CTAG")).toBe(true);
});

test('it string of DNA with invalid characters is false', () => {
  expect(isValidDNA("CTXG")).toBe(false);
});

test('it string of DNA with lowerCase is false', () => {
  expect(isValidDNA("ctag")).toBe(false);
});

test('it string of DNA with undefined is false', () => {
  expect(isValidDNA("")).toBe(false);
});
