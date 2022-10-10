import { Component, OnInit } from '@angular/core';
import { IRecipe } from 'src/models/recipe.interface';
import { RecipeService } from 'src/services/recipe.service';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
    
    public recipes: IRecipe[] = this.recipeService.getAll();
    
    constructor(
        public recipeService: RecipeService
        ) { }
}

    