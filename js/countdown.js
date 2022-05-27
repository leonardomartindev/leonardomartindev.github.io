class Countdown{
  constructor(futureDate) {
    this.futureDate = futureDate;
  }
  get _actualDate(){
    return new Date();
  }
  get _futureDate(){
    return new Date(this.futureDate)
  }
}