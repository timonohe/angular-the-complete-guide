import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-project-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: [];

  constructor() {}

  ngOnInit(): void {}
}
