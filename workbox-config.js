module.exports = {
  globDirectory: 'dist/',
  globPatterns: [
    '**/*.{png,js,html,json,svg}'
  ],
  swDest: 'dist/sw.js',
  ignoreURLParametersMatching: [
    /^utm_/,
    /^fbclid$/
  ]
}
