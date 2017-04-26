const Result = function(options){
  this.date = options.date,
  this.league = options.league
  this.homeTeam = options.homeTeam,
  this.homeGoals = options.homeGoals,
  this.awayGoals = options.awayGoals,
  this.awayTeam = options.awayTeam
};

module.exports = Result;