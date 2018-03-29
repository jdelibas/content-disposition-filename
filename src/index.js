module.exports = (input) => {
  if (!input || typeof(input) !== 'string' || input.trim() === '') {
    return null
  }
  const matches = input.match(/.(?:filename=)(.*)/)
  if (!matches || matches.length < 2) {
    return null
  }
  return matches[1]
}
