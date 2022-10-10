import { IRecipe } from './../models/recipe.interface';
import { Injectable } from '@angular/core';
import { v4 } from 'uuid'; 


@Injectable({
    providedIn: 'root'
})
export class RecipeService {
    
    private recipes: IRecipe[] = [
        {
            id: v4(),
            createAt: new Date(),
            description: "Dummy Description 1",
            favorite: false,
            ingredient: [],
            title: "Dummy Recipe 1"
        },
        {
            id: v4(),
            createAt: new Date(),
            description: "Dummy Description 2",
            favorite: false,
            ingredient: [],
            title: "Dummy Recipe 2"
        }
    ];
    constructor() { }
}
