import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public ngOnInit(): void {
    this.starStrings(3);
    this.eachSymbolOfString('ABCD')
    this.fiftyEvenNumber();
    this.deleteSymbol('askantya', 'a');
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

  private eachSymbolOfString(stringExample: string): void {
    for(let i=0; i<stringExample.length; i++){
      console.log(stringExample[i]);
    }
  }

  private fiftyEvenNumber(): void{
    for(let i=1; i<=50; i++){
      if(i%2==0) console.log(i);
    }
  }

  private deleteSymbol(wholeString: string, delSymbol:string): void {
    let delSymbolString = wholeString;
    for(let i=0; i<delSymbolString.length; i++){
    let a = delSymbolString[i];
      if(a == delSymbol){
        delSymbolString = delSymbolString.replace(delSymbolString[i], '');
        i--;
      }
    }
    console.log(delSymbolString);
  }
}
