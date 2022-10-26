import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'course-project-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent {
  constructor(private slService: ShoppingListService) { }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient: Ingredient = {
      name: value.name,
      amount: value.amount
    };
    this.slService.addIngredient(newIngredient);
  }
}
