import { Component } from '@angular/core';

interface StringTable {
  name: string;
  description?: string;
}

@Component ({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  public firstValue = '';
  public secondValue = '';
  public arrayOfTable: StringTable[] = [];
  public checkButton = true;

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
