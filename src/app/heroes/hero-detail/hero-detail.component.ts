import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { HeroService  } from '../../core/hero.service';
import { Hero } from '../../model/hero';

@Component({
  selector: 'my-hero-detail',
  template:
  `
      <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
          <div>
              <label>name: </label>
              <input [(ngModel)]="hero.name" placeholder="name">
          </div>
          <button (click)="goBack()">Back</button>
          <button (click)="save()">Save</button>
      </div>
  `,
})


export class HeroDetailComponent implements OnInit {
    @Input()
    hero: Hero;
    
    constructor(
            private heroService: HeroService,
            private route: ActivatedRoute,
            private location: Location
          ) {};
    
    ngOnInit(): void {
        this.route.params
          .switchMap((params: Params) => this.heroService.getAsyncHero(+params['id']))
          .subscribe(hero => this.hero = hero);
      };
      
    goBack(): void {
        this.location.back();
      };

    save(): void {
        this.heroService.update(this.hero)
          .then(() => this.goBack());
  }
}

