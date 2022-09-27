import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { interval, toArray,take, from, of } from 'rxjs';

@Component({
  selector: 'app-toarray',
  templateUrl: './toarray.component.html',
  styleUrls: ['./toarray.component.scss']
})
export class ToarrayComponent implements OnInit {
 users =[
  {name:'James', age:37, skill:'html,Java'},
  {name:'Harry', age:27, skill:'Javascript,redux'},
  {name:'Alien', age:47, skill:'css,Less'},
  {name:'Liara', age:22, skill:'html5,Java'},
  {name:'Jerry', age:18, skill:'liferay'},
 ]
  constructor() { }

  ngOnInit(): void {
    //Take operators number write how much data emitts to the interval basically total length defined
    interval(1000).pipe(take(6),toArray()).subscribe(res => {
      console.log(res);
    });

    //Ex-02
    from(this.users).pipe(toArray()).subscribe(res =>{
      console.log(res);
    });
    //Ex-03
    of('kamala','radha','shyama').pipe(toArray()).subscribe(res => console.log(res));
  }

}
