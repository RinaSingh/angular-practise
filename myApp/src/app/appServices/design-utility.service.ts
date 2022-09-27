import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }
  print(val:any,listContainer:any){
    let el = document.createElement("li");
    el.innerText = val;
    document.getElementById(listContainer)?.appendChild(el);
  }
}
