import { Component, OnInit } from '@angular/core';
import  Data from 'src/assets/Data.json'
@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.scss']
})
export class JsonComponent implements OnInit {

  constructor() { 
   
  }
  ngOnInit(): void {
    console.log(Data);
  }

}
