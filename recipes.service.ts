import { Injectable } from '@angular/core';

import {Recipe} from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Macarroni',
      imageUrl: 'https://cf-images.us-east-1.prod.boltdns.net/v1/static/1033249144001/454b47e7-6908-48ae-a16e-360679a48690/32d8b057-1ed5-4730-803c-bdbfa7c5492b/1280x720/match/image.jpg',
      ingredients:['Cheese', 'Pasta','Tomatoe']
    },
    {
      id: 'r2',
      title: 'cannelloni',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgTidoU_-gQlh_htA4LYZM8HnkwUQfv6ocNSEiqy2DaRaWGMmO',
      ingredients: ['Cheese', 'Pasta', 'Meat', 'Tomatoe']
    }
  ];


  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
      return {
        ...this.recipes.find( recipe => {
        return recipe.id===recipeId;
        }
      )};
  }

  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter(recipe => {
      return recipeId!==recipe.id;
    })
  }
}
