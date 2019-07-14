import { Component, OnInit } from '@angular/core';
import {RecipesService} from './recipes.service';

import {Recipe} from './recipe.model';
import { RecipeDetailPage } from './recipe-detail/recipe-detail.page';
import { NavigationEnd,Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[];

  constructor(private recipesServices: RecipesService, private router: Router) { }

  ngOnInit() {

    this.router.events.subscribe(
      (event) => {
          if (event instanceof NavigationEnd) {
            this.recipes = this.recipesServices.getAllRecipes();
          }
    });

    this.recipes = this.recipesServices.getAllRecipes();
    console.log(this.recipes);
  }

}
