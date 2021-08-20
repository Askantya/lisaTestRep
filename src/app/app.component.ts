import { Component, OnInit } from '@angular/core';

// УБРАТЬ, ИСПОЛЬЗОВАТЬ ВМЕСТО НЕГО ИНТЕРФЕЙС ЕБАНАРОТ
class StringTable {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  name: string;
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  description: string;

  constructor(name: string, description: string) {
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
  // НЕЙМИНГ ЕБАНАРОТ
  public firstCell = '';
  public secondCell = '';

  // ИНТЕРФЕЙС ЕБАНАРОТ
  public arrayOfTable = [
    // ПУСТОЙ МАССИВ ДОЛЖЕН БЫТЬ ЕБАНАРОТ

    {
      name: '',
      description: '',
    },
  ];

  public ngOnInit(): void {
    if (true) {
    }
  }

  // НЕЙМИНГ ЕБАНАРОТ
  public addStringToTable(firstСell: string, secondCell: string): void {
    // УБРАТЬ ИФ ЕБАНАРОТ
    if (this.arrayOfTable[0].name === '' && this.arrayOfTable[0].description === '') {
      this.arrayOfTable[0].name = firstСell;
      this.arrayOfTable[0].description = secondCell;
      // ПОЧИСТИ ПОЛЯ ЕБАНАРОТ

      // НЕОБЯЗАТЕЛЬНОЕ ПОЛЯ ЕБАНАРОТ
    } else this.arrayOfTable.push(new StringTable(firstСell, secondCell));
  }
}
