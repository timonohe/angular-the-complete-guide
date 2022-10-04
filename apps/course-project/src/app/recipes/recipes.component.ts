import { Component } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'course-project-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [ RecipeService ]
})
export class RecipesComponent {
}
