import moment from "moment";

export default class Calender {
  constructor(date = null) {
    this.moment = date ? date : moment();
    this.month = this.moment.format("MMMM");
    this.currentCalenderMonth = this.buildArray();
    this.currentDay = this.moment.date();
    this.squareMonth = this.buildSquareMonth();
    this.monthCounter = 0;
  }

  changeMonth(num) {
    console.log("here");
    this.moment = this.moment.add(num, "month");
    this.month = this.moment.format("MMMM");
    this.currentCalenderMonth = this.buildArray();
    this.currentDay = this.moment.date();
    this.squareMonth = this.buildSquareMonth();
    this.monthCounter = 0;
    return this;
  }

  private;

  buildSquareMonth() {
    let monthStartDayOfWeek = this.moment.startOf("Month").weekday();
    let monthEndDayOfWeek = this.moment.endOf("Month").weekday();
    let lengthOfMonth = this.moment.daysInMonth();
    let testSquareMonth = [];
    let testLastMonthLength = this.moment
      .clone()
      .add(-1, "month")
      .daysInMonth();

    for (let i = monthStartDayOfWeek; i > 0; i--) {
      let date = testLastMonthLength - i + 1;
      testSquareMonth.push(this.dayFormat(date, -1));
    }

    for (let i = 1; i <= lengthOfMonth; i++) {
      testSquareMonth.push(this.dayFormat(i));
    }

    if (monthEndDayOfWeek !== 6) {
      let c = 1;
      let end = monthEndDayOfWeek;

      for (let v = end; v < 6; v++) {
        testSquareMonth.push(this.dayFormat(c, +1));
        c += 1;
      }
    }

    return testSquareMonth;
  }

  dayFormat(date, month = 0) {
    let obj = {};
    obj.date = date;
    if (month === 0) {
      obj.month = this.moment.clone().format("MMMM");
      obj.current = true;
    } else {
      obj.month = this.moment.clone().add(month, "month").format("MMMM");
      obj.current = false;
    }
    return obj;
  }

  monthStartDayOfWeek() {
    this.moment.startOf("M").weekday();
  }

  monthEndDayOfWeek() {
    this.moment.endOf("M").weekday();
  }

  buildArray() {
    let arr = [];
    for (let i = 1; i <= this.moment.daysInMonth(); i++) {
      arr.push({ date: i });
    }
    return arr;
  }
}
