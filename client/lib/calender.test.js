import Calender from "./calender";
import moment from "moment";

const testMonth = moment().month();
const testLength = moment().daysInMonth();
const testDay = moment().date();
const startDayOfWeek = moment().startOf("M").weekday();

let cal;

beforeAll(() => {
  cal = new Calender();
});

describe("Calender", () => {
  test("can create a new calender", () => {
    expect(cal).toBeInstanceOf(Calender);
    expect(cal.month).toBe(testMonth);
  });

  test("currentDay should return the current day", () => {
    expect(cal.currentDay).toBe(testDay);
  });

  test("month should have x num of days", () => {
    let curMonth = cal.currentCalenderMonth;
    expect(curMonth).toBeInstanceOf(Array);
    expect(curMonth.length).toBe(testLength);
  });

  test("calenderSquareMonth should return a the month formatted for square", () => {
    let squareMonth = cal.squareMonth;
    expect(squareMonth).toBeInstanceOf(Array);
    expect(squareMonth.length).toBe(35);
  });

  test("month day should have a date", () => {
    let curMonth = cal.currentCalenderMonth;
    curMonth.forEach((day, index) => {
      expect(day.date).toBe(index + 1);
    });
  });

  test("can change the month", () => {
    let cur = cal.changeMonth(-1);
    console.log(cur);
  });
});
