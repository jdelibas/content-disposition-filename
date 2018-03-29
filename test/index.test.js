const test = require('ava')

test.beforeEach((t) => {
  t.context.cdf = require('./../src')
});

test('should pick out filename from inline content disposition', (t) => {
  // Arrange
  const expected = '_Don\'t Panic_.jpg'
  const input = 'inline; filename=_Don\'t Panic_.jpg'
  // Act
  const result = t.context.cdf(input)
  // Assert
  t.is(result, expected)
});


test('should pick out filename from attachment content disposition', (t) => {
  // Arrange
  const expected = '_Don\'t Panic_.jpg'
  const input = 'attachment; filename=_Don\'t Panic_.jpg'
  // Act
  const result = t.context.cdf(input)
  // Assert
  t.is(result, expected)
});