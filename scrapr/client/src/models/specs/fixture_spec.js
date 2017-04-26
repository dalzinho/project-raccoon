const assert = require('assert');
const Fixture = require('../Fixture');

describe('fixture', () => {
  var fixture;

  beforeEach(() => {
    fixture = new Fixture({
      date: 'Monday 24th April 2017',

      time: '18:45'
    });

    fixture2 = new Fixture({
      date: 'Monday 24th April 2017',

      time: '18:45'
    })
  });

  it('has a stringy date and time', () => {
    assert.equal('Monday 24th April 2017', fixture.date);
    assert.equal('18:45', fixture.time);
  });

  it('joins date and time into a string', () => {
    assert.equal('Monday 24th April 2017 18:45', fixture.getLongString());
  });

  it('breaks date and time into parseable elements', () => {
    assert.equal(fixture.getParseableTimeObject(), '24-April-2017-18:45');
  });

  it('generates unix time from elements', () => {
    assert.equal(fixture.generateUnixTime(), 1493055900);
  });

  it('sets a unixTime element when instatiated', () => {
    assert.equal(fixture2.unixTime, 1493055900);
  });
})