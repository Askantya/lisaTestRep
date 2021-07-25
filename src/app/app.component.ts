import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public ngOnInit(): void {
    const stringResult = this.stringSum('black', 'yellow')
    console.log(stringResult);    
  }


  public onCloseClick(): void {

  }

  private countMathExpression(a: number, b: number, c: number): number {
    const result = Math.pow(a, 2) + Math.pow(b, 3) - Math.sqrt(c);
    return +result.toFixed(2);
  }

  private countStringLength(stringName: string): number {
    const stringLength = stringName.length;
    return stringLength;
  }

  private stringTransform(stringSmall: string): string {
    const stringLarge = stringSmall.toUpperCase();
    return stringLarge;
  }

  private stringSum(strFirst: string, strSecond: string): string{
    const stringResult = strFirst + ' ' + this.stringTransform(strSecond);
    return stringResult;
  }
}
