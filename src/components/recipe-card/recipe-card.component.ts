import { IRecipe } from './../../models/recipe.interface';
import { RecipeService } from './../../services/recipe.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-recipe-card',
    templateUrl: './recipe-card.component.html',
    styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {
    @Input() recipeId: string = "";
    
    public recipe: IRecipe | null = null;
    
    constructor(
        public recipeService: RecipeService
    ) { }
        
        ngOnInit(): void {
            this.recipe = this.recipeService.get(this.recipeId);
        }
    }
    