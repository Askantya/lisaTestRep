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
    this.simpleNumber(90);
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

  private simpleNumber(numberOfSimple: number): void {
    for(let i=2; i<=numberOfSimple; i++){
      let trueFalse = true;
      for(let p=2; p<=(i/p); p++) {
        if((i%p)==0) trueFalse=false;
      }
      if(trueFalse==true) console.log(i);
      
    }
  }
}
