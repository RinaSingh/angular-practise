import { Component, OnInit } from '@angular/core';
import { from, map } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(private _designUtilty:DesignUtilityService) { }

  ngOnInit(): void {
    const arrObj = from([
      {name:'Harry',skills:'HTML,CSS'},
      {name:'Helifer',skills:'Angular'},
      {name:'Jenny',skills:'Jquery,CSS'},
      {name:'Jmaes',skills:'Javascript'}
    ])

    arrObj.pipe(
      map(data => data.name)
    ).subscribe(res => {
      this._designUtilty.print(res,'userName');
    })
      
  }

}
