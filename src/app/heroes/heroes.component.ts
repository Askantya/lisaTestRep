import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Pipe } from '@angular/core';

@Component ({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit{
  public hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }

  public ngOnInit(): void {

  }
}
