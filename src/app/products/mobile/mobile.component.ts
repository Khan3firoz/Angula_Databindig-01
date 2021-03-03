import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
  title = 'Mobile';
  name = 'Vivo';
  type = 'android';
  fullName = "Atts";
  add() {
 alert("Hello!")
  }
  myEvent(levt:any) {
    console.log(levt)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
