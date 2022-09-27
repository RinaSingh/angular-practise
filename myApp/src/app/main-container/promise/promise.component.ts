import { createMayBeForwardRefExpression } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  
  myData:any;
  dell = {
    brand:"Dell",
    hardDrive:"2 TB",
    color:"White"
  }
  hp = {
    brand:"Hp",
    hardDrive:"1 TB",
    color:"Silver"
  }
  noAvail = {
    brand:"no brand is available",
    status:"No Laptop"
  }
  dellLaptop(){
    return false;
  }
  hpLaptop(){
    return true;
  }
  promise:any;
  constructor() { }
  ngOnInit(): void {
    let buyProduct = new Promise<any>((resolve,reject)=>{
      if(this.dellLaptop()){
        setTimeout(()=>{resolve(this.dell)},3000)//resolve("dell is purchased")}
        
      }else if(this.hpLaptop()){
        setTimeout(()=>resolve(this.hp),3000)
        
      }else{
        setTimeout(()=>reject(this.noAvail),3000)
        
      }
    })
    buyProduct.then(res => {console.log("my then code =>", res); this.myData = res.brand})
    .catch(res => {console.log("my catch code =>",res); this.myData = res.status});

    
    
  }
   
 
}
