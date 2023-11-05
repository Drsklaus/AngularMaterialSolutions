import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { LocalDate } from '@js-joda/core';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnChanges {

  // testDate: any;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes:', changes);
  }

  dateChange(type: string, event: MatDatepickerInputEvent<LocalDate>) {
    console.log(event);
  }

}
