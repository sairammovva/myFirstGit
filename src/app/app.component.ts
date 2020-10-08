import { AfterViewInit, Component, OnInit} from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  constructor(private _dataService: DataService) {}
    greetCandidate(){
      this._dataService.sendMessage('Good Morning');
    }
    askCandidate(){
      this._dataService.sendMessage('Tell me about youself.');
    }


  /*constructor(private dat: DataService) {
    this.dat.printToConsole('got the data');
   }
  text1 = 'this is text of box 1';
  text2 = 'this is text of box 2';
  text3 = 'this is text of box 3';
  text4 = 'this is text of box 4';
  text5 = 'this is text of box 5';*/
    /*
  message = 'Nothing pretty new message'
  arr = [1,2,3,4,5,6,7,8,9,10]
  data;
  name = "sairam"
*/
  ngOnInit(){
    //console.log("hi");
  }
  /*
  recieveMessage($message){
    this.message = $message;
  }
  */
  ngAfterViewInit() {

  }


}

