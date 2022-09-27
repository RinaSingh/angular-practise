import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-oforfrom',
  templateUrl: './oforfrom.component.html',
  styleUrls: ['./oforfrom.component.scss']
})
export class OforfromComponent implements OnInit {
  arr:any;
  objElem:any;
  constructor(private _designUtility:DesignUtilityService) { }

  ngOnInit(): void {
    of('Jhon','James','Herry').subscribe(res => {
      console.log(res);
      this._designUtility.print(res,'ofOperator');
    });
    of({'a':'Ram','b':'Geeta','c':'Sita'}).subscribe(res => {
      this.objElem = res;
      console.log(this.objElem);
    });
    of([1,2,3,4]).subscribe(res => {
      this.arr = res;
      console.log(this.arr);
      this.arr.forEach((item:any) => 
      this._designUtility.print(item,'arrElem'))
      
    });
    // From Operator
    from(['Rajesh','Sekhar','Suman']).subscribe(res => this._designUtility.print(res,'fromOpe'));
    from("I love India").subscribe(res => this._designUtility.print(res,'fromTwo'));

    const data = new Promise((resolve,reject) =>{
      setTimeout(()=>resolve("Data Successful fetch..."), 3000);
      
    });
    from(data).subscribe(res => {
      this._designUtility.print(res,'promiseElem')
    });
    
  }

}
