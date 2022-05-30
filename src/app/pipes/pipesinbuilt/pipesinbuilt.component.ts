import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-pipesinbuilt',
  templateUrl: './pipesinbuilt.component.html',
  styleUrls: ['./pipesinbuilt.component.scss']
})
export class PipesinbuiltComponent implements OnInit {
  // name: string = 'radhika';
  // msg = "pipes inbuitt methods";
  // jsonpath = {
  //   firstname: "Radhika", lastname: "Chowdary",
  // };
  // date = Date();
  // percentage = 0.75;
  // currenyConvert = 1.78;
  // currencyCountry = 9.34;
  numberDisplay = 45.123456;
   y: any;
  square : any
  constructor() {
   this.square = (x: any)=>{
     console.log(x)
   }
   console.log(this. square(5))
 const y =(a:any,b: any)=>{
  console.log(y(3,4))
 }
   
  }
  ngOnInit(): void {
  }

}
