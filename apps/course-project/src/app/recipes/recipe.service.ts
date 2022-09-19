import { Recipe } from "./recipe.model";

export class RecipeService {
  private recipes: Recipe[] = [
    {
      name: 'A Test Recipe',
      description: 'This is simply a test',
      imagePath: 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
    },
    {
      name: 'Another Test Recipe',
      description: 'This is simply a test',
      imagePath: 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
    }
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
