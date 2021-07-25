import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public ngOnInit(): void {
    this.starStrings(3);
  }

  private starStrings(starNum: number): void {
    let star = '';
    for(let i=1; i<=starNum; i++){
      for(let p=1; p<=i; p++){
        star += '*';
      }
      console.log(star);
      star = '';
    }
  }
}
