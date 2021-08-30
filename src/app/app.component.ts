import { Component, OnInit } from '@angular/core';

interface StringTable {
  name: string;
  description?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public firstValue = '';
  public secondValue = '';
  public arrayOfTable: StringTable[] = [];
  public checkButton = true;

  public ngOnInit(): void {
    if (true) {
    }
  }

  public addStringToTable(firstValue: string, secondValue?: string): void {
    const newRow: StringTable = {
      name: firstValue,
      description: secondValue
    };
    this.arrayOfTable.push(newRow);
  }

  public checkboxClick(): void{
    this.checkButton = !this.checkButton;
  }

}
