module.exports = function (wallaby) {
  return {
    env: {
      type: 'node'
    },
    files: [
      {pattern: 'src/**/*.ts'},
      {pattern: 'test/**/*Fixture.ts', instrument: false}
    ],
    tests: [
      {pattern: 'test/**/*Spec.ts'}
    ],
    testFramework: 'mocha',
    setup: function () {
      wallaby.testFramework.ui('bdd')
    }
  }
}
