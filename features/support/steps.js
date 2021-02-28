const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert').strict;

// eslint-disable-next-line func-names
Given('a variable set to {int}', function (number) {
  this.setTo(number);
});

// eslint-disable-next-line func-names
When('I increment the variable by {int}', function (number) {
  this.incrementBy(number);
});

// eslint-disable-next-line func-names
Then('the variable should contain {int}', function (number) {
  assert.equal(this.variable, number);
});
