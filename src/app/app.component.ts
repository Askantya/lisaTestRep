import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  public array = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

  public field = 'asd';

  public ngOnInit(): void {
    if (true) {

    }
  }

  public onClickButton(): void {
    console.log('Button clicked');
  }
}
