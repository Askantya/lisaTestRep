import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public rows: any;

  public ngOnInit(): void {
    // this.rows = this.buildArray(5010);
  }

  public array(n: number): number[] {
    return Array(n).fill(0);
  }

  private buildArray(length: number): Array<Array<number>> {
    let a = 1;

    return this.array(length).map((e, index) => {
      a += Math.random() >= 0.5 ? 1 : -1;
      a = a <= 0 ? 1 : a;
      return this.array(a || 1);
    });
  }


}
