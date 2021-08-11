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
    this.shiftingArrayElements(4);
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

  private shiftingArrayElements(countOfElements: number): void {
    const arrayElements = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
    const arrayOneElements = [];
    for (let i = 0; i < arrayElements.length; i++){
      for (let j = 0; j < arrayElements[i].length; j++){
        arrayOneElements.push(arrayElements[i][j]);
      }
    }
    const indexOfElements = 9 - countOfElements;
    const sliceArray = arrayOneElements.slice(indexOfElements, 9);
    arrayOneElements.splice(indexOfElements, countOfElements);
    const concatArray = sliceArray.concat(arrayOneElements);
    const array1 = concatArray.slice(0, 3);
    const array2 = concatArray.slice(3, 6);
    const array3 = concatArray.slice(6, 9);
    const arrayUnification = new Array(array1, array2, array3);
    console.log(arrayUnification);
  }
}
