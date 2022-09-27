import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomComponent implements OnInit, OnDestroy {
  public techStatus!:any;
  sub2 !:Subscription;
  names:any;
  constructor(private _designUtility: DesignUtilityService) { }

  ngOnInit(): void {
     const customObs = new Observable(observer =>{
      setTimeout(()=> observer.next('Angular'),1000);
      setTimeout(() => observer.next('Html,Css'),2000);
      setTimeout(()=>{
          observer.next('Javascript');
          //observer.error(new Error('limit exceeded'));
        },3000);
       setTimeout(()=>{
        observer.next('Jquery');
        observer.complete();
      },4000);
       
      });

      customObs.subscribe(res => {
        this._designUtility.print(res,'conatinerone');
      },
      (error) => {
        this.techStatus = 'error';
      },
      () => {
        this.techStatus = 'completed';
      }
      );

      //Ex-2 (custom interval observable)
      const arr =['Angular','Typescript', 'Css','Javascript','Typescript','less','scss']
      const cusObs2 = new Observable(observer => {
        let count = 0
        setInterval(()=>{
           observer.next(arr[count]);
          
          // if( count >= 3){
          //   observer.error(new Error('Data exceeded'));
          // }
          if(count >=4){
            observer.complete();
            this.sub2.unsubscribe();
          }
          count++;
        },2000); 
       
      });

      this.sub2 = cusObs2.subscribe(res => 
        this._designUtility.print(res,'container2'),
        (error) => this.techStatus = 'error',
        () =>this.techStatus = 'completed'
      );


      //Ex-3
      const userNames =['Herry','Robert','James','Rina','Caption'];
      const cusObs3 = new Observable(observer => {
        let count = 0
        setInterval(()=>{
           observer.next(userNames[count]);
          
          // if( count >= 2){
          //   observer.error(new Error('Data exceeded'));
          // }
          if(count >=3){
            observer.complete();
            this.sub2.unsubscribe();
          }
          count++;
        },1000); 
       
      });
      cusObs3.subscribe(res => 
        this.names =res,
        (error) => this.techStatus = 'error',
        () =>this.techStatus = 'completed'
      );
  }
  ngOnDestroy(): void {
   
  }
}

