import { IRecipe } from './../../models/recipe.interface';
import { RecipeService } from './../../services/recipe.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    public recipes: IRecipe[] = this.recipeService.getAll();
    
    constructor(
        public recipeService: RecipeService
    ) { }
}
