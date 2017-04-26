var assert = require('assert');
var Table = require('../Table');
var Team = require('../Team');

describe('table', function(){

  var table;
  var team;

  beforeEach(function(){
    table = new Table();
    
    team1 = new Team({
      p: 5,
      pts: 15,
      gd: 10,
      ol: 0,
      od: 0,
      // ppg is 3
      // gdpg is 2
      // poss is 66
    });

    team2 = new Team({
      p: 6,
      pts: 5,
      gd: -1,
      ol: 1,
      od: 5
      // ppg is 0.833
      // gdpg is -0.167
      // possible is 53
    });

  });

  it('instantiates empty', function(){
    assert.equal(table.teams.length, 0);
  });

  it('can add teams', function(){
    table.addTeam(team1);
    assert.equal(table.teams.length, 1);
  });

  it('can calculate average ppg', function(){
    table.addTeam(team1);
    table.addTeam(team2);
    table.setAveragePPG();
    assert.equal(table.avPPG, 1.915);
  });

  it('can calculate average gdpg', function(){
    table.addTeam(team1);
    table.addTeam(team2);
    table.setAverageGDPG();
    assert.equal(table.avGDPG, 0.915);
  });

  it('can calculate average possible', function(){
    table.addTeam(team1);
    table.addTeam(team2);
    table.setAveragePoss();
    assert.equal(table.avPoss, 59.5);
  });

  it('automatically sets averages when team is added', function(){
    table.addTeam(team1);
    assert.equal(table.avPPG, 3);
    assert.equal(table.avGDPG, 2);
    assert.equal(table.avPoss, 66);
    table.addTeam(team2);
    assert.equal(table.avPPG, 1.915);
    assert.equal(table.avGDPG, 0.915);
    assert.equal(table.avPoss, 59.5);
  });

  it('can get stdev of ppg', function(){
    table.addTeam(team1);
    table.addTeam(team2);
    table.setSdPPG();
    assert.equal(table.sdPPG, 1.085);
  });

  it('can get stdev of gdpg', function(){
    table.addTeam(team1);
    table.addTeam(team2);
    table.setSdGDPG();
    assert.equal(table.sdGDPG, 1.085);
  });

  it('can get stdev of possible', function(){
    table.addTeam(team1);
    table.addTeam(team2);
    table.setSdPoss();
    assert.equal(table.sdPoss, 6.5);
  });

  it('automatically sets SDs when team is added', function(){
    table.addTeam(team1);
    assert.equal(table.sdPPG, 0);
    assert.equal(table.sdGDPG, 0);
    assert.equal(table.sdPoss, 0);
    table.addTeam(team2);
    assert.equal(table.sdPPG, 1.085);
    assert.equal(table.sdGDPG, 1.085);
    assert.equal(table.sdPoss, 6.5);
  });

  it('can set the score variable of held teams', function(){
    table.addTeam(team1);
    table.addTeam(team2);
    table.setScores();
    assert.equal(table.teams[0].score, 593);
    assert.equal(table.teams[1].score, 406);
  });


})