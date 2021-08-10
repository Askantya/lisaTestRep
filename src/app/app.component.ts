/* eslint-disable @typescript-eslint/prefer-for-of */
import { keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public ngOnInit(): void {
    const newMatrixArray = this.matrixArray(4, 5);
  }

  private matrixArray(firstNumber: number, secondNumber: number): void {
    const array1 = new Array(secondNumber).fill(0).map( () => new Array(firstNumber).fill(0));
    let k = 1;
    for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array1[i].length; j++) {
        array1[i][j] = k;
        k++;
      }
    }
    console.log(array1);
  };
}
