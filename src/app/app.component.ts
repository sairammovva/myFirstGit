import { AfterViewInit, Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor() { }
  message = 'Nothing pretty new message'
  arr = [1,2,3,4,5,6,7,8,9,10]
  data;
  name = "sairam"

  ngOnInit(){
    console.log("hi");
  }
  recieveMessage($message){
    this.message = $message;
  }
  ngAfterViewInit() {

  }
};

