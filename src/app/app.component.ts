import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public ngOnInit(): void {
    const num = 3;
    const a = 4;
    const b = 5;
    const ch = (Math.pow(num, 2) + Math.pow(a, 3) - Math.sqrt(b));
    console.log(+ ch.toFixed(2));
  }

  public onCloseClick(): void {

  }


}
