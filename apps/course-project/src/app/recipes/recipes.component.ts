import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'course-project-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent {
  selectedRecipe: Recipe;
}
