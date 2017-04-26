class Fixture{
  constructor(options){
    this.date = options.date;
    this.homeTeam = options.homeTeam;
    this.awayTeam = options.awayTeam;
    this.time = options.time;
    this.unixTime = this.generateUnixTime();
  }


   getLongString(){
    let longDate = this.date 
    + ' ' + this.time;
    return(longDate);
  }

  getParseableTimeObject(){
    const array = this.getLongString().split(' ');
    array.splice(0, 1);
    array[0] = array[0].split('').reverse();
    array[0].splice(0,2);
    array[0] = array[0].reverse().join('');

    return array.join('-');
  }

  generateUnixTime(){
  let string = this.getParseableTimeObject();
  return Date.parse(string)/1000;
  }
}

module.exports = Fixture;