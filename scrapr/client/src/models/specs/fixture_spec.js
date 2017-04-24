const assert = require('assert');
const Fixture = require('../Fixture');

describe('fixture', () => {
  let fixture;

  beforeEach(() => {
    fixture = new Fixture({
      date: 'Monday 24th April 2017',
      time: '18:45'
    })
  });

  it('has a stringy date and time', () => {
    assert.equal('Monday 24th April 2017', fixture.date);
  });

  it('joins date and time into a string');

  it('breaks date and time into parseable elements');

  it('generates unix time from elements');

  it('sets a unixTime element when instatiated');
})