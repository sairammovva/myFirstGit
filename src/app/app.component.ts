import { AfterViewInit, Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor() { }
  text1 = 'this is text of box 1';
  text2 = 'this is text of box 2';
  text3 = 'this is text of box 3';
  text4 = 'this is text of box 4';
  text5 = 'this is text of box 5';
  source1 = "https://rukminim1.flixcart.com/image/150/150/k7285u80/t-shirt/6/e/x/m-maw19cn104b-metronaut-original-imafpdz6n2p89zqg.jpeg?q=70"
  source2 = "https://rukminim1.flixcart.com/image/150/150/k5lcvbk0pkrrdj/headphone/dynamic/z/j/h/jbl-c150siublk-original-imafeyby52kxehz2.jpeg?q=70"
  source3 = "https://rukminim1.flixcart.com/image/150/150/kcnp8y80/speaker/home-theatre/l/s/n/a3390h11-soundcore-original-imaftqbpyfrurxnv.jpeg?q=70"
  source4 = "https://rukminim1.flixcart.com/image/150/150/kbs9k7k0/headphone/c/g/t/earbuds-s-redmi-original-imaftfwfhdygcb2s.jpeg?q=70"
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

