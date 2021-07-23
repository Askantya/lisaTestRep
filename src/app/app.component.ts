import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public variable1 = '';
  private variable2 = 123;
  public selectedAnimal = '';

  public ngOnInit(): void {
    const a = 123;
    const b = 3;
    console.log(a + b);
  }

  public onCloseClick(): void {
    this.variable1 += '1';
  }

  public onAnimalClick(selectedAnimal: string): void{
    this.selectedAnimal = selectedAnimal;
  }
}
