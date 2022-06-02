function test(label, body) {
  if (!body) return `Failed ${label}`;
}

test('convert Latin text to uppercase', () => {
  return 'hello'.toUpperCase === 'HELLO';
});

test('convert Greek text to uppercase', () => {
  return 'Χαίρετε'.toUpperCase === 'ΧΑΊΡΕΤΕ';
});

test("don't convert case-less characters", () => {
  return 'سلام'.toUpperCase === 'سلام';
});
