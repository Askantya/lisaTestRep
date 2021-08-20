import { Component, OnInit } from '@angular/core';

class StringTable {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  name: string;
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  description: string;

  constructor(name: string, description: string){
    this.name = name;
    this.description = description;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {

  public firstCell = '';
  public secondCell = '';

  public arrayOfTable = [
    {
      name:'',
      description: ''
    }
  ];

  public ngOnInit(): void {
    if(true){}
  }

  public addStringToTable(firstСell: string, secondCell: string): void {
    if ( (this.arrayOfTable[0].name === '') && (this.arrayOfTable[0].description === '') ) {
      this.arrayOfTable[0].name = firstСell;
      this.arrayOfTable[0].description = secondCell;
    } else this.arrayOfTable.push(new StringTable(firstСell, secondCell));
  }
}
