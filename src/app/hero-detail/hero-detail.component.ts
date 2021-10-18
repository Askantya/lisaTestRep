import { Component, OnInit, Input } from '@angular/core';
import { Pipe } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})

export class HeroDetailComponent implements OnInit {
  @Input() public hero!: Hero;

  constructor(private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location) { }

  public ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    const id = param?+param:0;
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  public goBack(): void {
    this.location.back();
  }

  public save(): void {
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
  }
}
