import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-practice'
  ng='Angular';
  result=''

  upCase(st:string): void {
    this.result = "This is the app component. I recieved a string '" + st + "' from the hello component" + " and I capitalize it here " + st.toUpperCase()
  }
}
