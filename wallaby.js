module.exports = function (wallaby) {
  return {
    env: {
      type: 'node'
    },
    files: [
      {pattern: 'src/**/*.ts'},
      {pattern: 'test/**/*.fixture.ts', instrument: false}
    ],
    tests: [
      {pattern: 'test/**/*.spec.ts'}
    ],
    testFramework: 'mocha',
    setup: function () {
      wallaby.testFramework.ui('bdd')
    }
  }
}
