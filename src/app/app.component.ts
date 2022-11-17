import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import "amazon-connect-streams";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'pnc-chatbot';

  constructor(){

  }
  
  // ngOnInit(){
  //   console.log('Initialize')
  //   amazon_connect('authenticate', function(callback) {
  //     window.fetch('/token').then(res => {
  //       res.json().then(data => {
  //         callback(data.data);
  //       });
  //     });
  //   }); 
  // }
}
// function amazon_connect(arg0: string, arg1: (callback: any) => void) {
//   throw new Error('Function not implemented.');
// }

