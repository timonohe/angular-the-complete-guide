import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'course-project-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor() {
    this.recipes = [
      {
        name: 'A Test Recipe',
        description: 'This is simply a test',
        imagePath: 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
      }
    ]
  }

  ngOnInit(): void {}
}
