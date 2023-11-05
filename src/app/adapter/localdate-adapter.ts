import { WeekDay } from "@angular/common";
import { DateAdapter } from "@angular/material/core";
import { DateTimeFormatter, LocalDate } from "@js-joda/core";

export class LocalDateAdapter extends DateAdapter<LocalDate> {
  
    getYear(date: LocalDate): number {
// console.log('function getYear');
        return date.year();
    }
    getMonth(date: LocalDate): number {
// console.log('function getMonth');        
      return date.monthValue() - 1;
    }
    getDate(date: LocalDate): number {
// console.log('function getDate');
      return date.dayOfMonth();
    }
    getDayOfWeek(date: LocalDate): number {
    //   console.log('function getDayOfWeek');
      return date.dayOfWeek().ordinal();
    }
    getMonthNames(style: 'long' | 'short' | 'narrow'): string[] {
      //throw new Error('Method not implemented.');
    //   console.log('function getMonthNAmes');
      return ['Jan', 'Feb', 'Mrt', 'Apr', 'Mei', 'Jun', 'Jul' ,'Aug', 'Sep', 'Okt', 'Nov', 'Dec'];
    }
    getDateNames(): string[] {
        // console.log('function getDateNames');
        return this.range(1, 31);
    }
    getDayOfWeekNames(style: 'long' | 'short' | 'narrow'): string[] {
        // console.log('function geDayOfweekNAmes');
        return ['Maa', 'Din', 'Woe', 'Don', 'Vrij', 'Zat', 'Zon'];
    }
    getYearName(date: LocalDate): string {
        // console.log('function getNAme');
      return date.year().toString();
    }
    getFirstDayOfWeek(): number {
        // console.log('function getFirstDayOfWeek');
        return WeekDay.Monday;
    }
    getNumDaysInMonth(date: LocalDate): number {
        // console.log('function getNumDAysInMonth');
        return date.month().length(date.isLeapYear());
    }
    clone(date: LocalDate): LocalDate {
        // console.log('function clone');
        return LocalDate.from(date);
    }
    createDate(year: number, month: number, date: number): LocalDate {
        // console.log('function createDate');
        return LocalDate.of(year, month + 1, date);
    }
    today(): LocalDate {
        // console.log('function today');
        return LocalDate.now();
    }
    addCalendarYears(date: LocalDate, years: number): LocalDate {
        // console.log('function addCalendarYears');
        return date.plusYears(years);
    }
    addCalendarMonths(date: LocalDate, months: number): LocalDate {
        // console.log('function addCalendarMonths');
        return date.plusMonths(months);
    }
    addCalendarDays(date: LocalDate, days: number): LocalDate {
        // console.log('function addCalendarDays');
        return date.plusDays(days);
    }
    toIso8601(date: LocalDate): string {
        // console.log('function toIso8601');
        return date.format(DateTimeFormatter.ISO_LOCAL_DATE);
    }
    isDateInstance(obj: any): boolean {
        // console.log('function isDateInstance');
        return obj instanceof LocalDate;
    }
    isValid(date: LocalDate): boolean {
        // console.log('function isValid');
        return true;
    }
    invalid(): LocalDate {
        // console.log('function invalid');
        return LocalDate.MIN;
    }
  
    parse(value: any): LocalDate | null {
        // console.log('function parse');
        return value ? LocalDate.parse(value) : null;
    }
  
    format(date: LocalDate, displayFormat: any): string {
//   console.log('function format, displayFormat = ', displayFormat);    
      return date?.format(DateTimeFormatter.ofPattern('dd-MM-yyyy'));
    //   return '12-01-1968';
    }
  
    private range(start: number, end: number): string[] {
        let res = [];
        for (let i = start; i <= end; i++) {
            res.push(i.toString());
        }
        return res;
    }

  }
  