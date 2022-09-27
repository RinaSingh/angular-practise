import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {
  intervalTask !:Subscription;
  myIntervalData:any;
  constructor(private _designUtility:DesignUtilityService) { }

  ngOnInit(): void {
    this.intervalTask = timer(2000,1000).subscribe((res)=> {
      this.myIntervalData = "Video" + res;
      this._designUtility.print(this.myIntervalData, 'intervalone');
      this._designUtility.print(this.myIntervalData, 'intervaltwo');
      this._designUtility.print(this.myIntervalData, 'intervalthree');
      if(res >= 7) this.intervalTask.unsubscribe();
    })
  }
}
