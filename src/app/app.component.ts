import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public ngOnInit(): void {
    const substringResult = this.searchOfSubstring('ELizaveta', 'liza');
    console.log(substringResult);
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

  private stringSum(strFirst: string, strSecond: string): string {
    const stringResult = strFirst + ' ' + this.stringTransform(strSecond);
    return stringResult;
  }

  private delStringSpaces(stringWithSpaces: string): string {
    const stringWithoutSpaces = stringWithSpaces.split(' ').join('');
    return stringWithoutSpaces;
  }

  private findIndexOfSymbol(stringExample: string, symbol: string): number {
    const numberOfSymbol = stringExample.indexOf(symbol, 0);
    return numberOfSymbol;
  }

  private returnSubstring(wholeString: string): string {
    const substring = wholeString.slice(0, 2);
    return substring;
  }

  private searchOfSubstring(stringTry: string, substringTry: string): boolean {
    const stringTryLower = stringTry.toLowerCase();
    const substringTryLower = substringTry.toLowerCase();
    const substringResult = stringTryLower.includes(substringTryLower);
    return substringResult;
  }
}
