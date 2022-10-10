import { IRecipe } from './../models/recipe.interface';
import { Injectable } from '@angular/core';
import { v4 } from 'uuid'; 


@Injectable({
    providedIn: 'root'
})
export class RecipeService {
    
    private recipes: IRecipe[] = [
        {
            id: "1",
            createAt: new Date(),
            description: "Dummy Description 1",
            favourite: false,
            ingredient: [
                "Tomatoe",
                "Salat",
            ],
            title: "Dummy Recipe 1"
        },
        {
            id: "2",
            createAt: new Date(),
            description: "Dummy Description 2",
            favourite: true,
            ingredient: [
                "Beef"
            ],
            title: "Dummy Recipe 2"
        }
    ];
    
    constructor() { }
    
    public getAll(): IRecipe[]
    {
        return this.recipes;
    }
    
    public get(recipeId: string): IRecipe | null
    {
        return this.recipes.find((recipe) => recipe.id == recipeId) ?? null;
    }
    
    public add(recipe: IRecipe): void
    {
        this.recipes.push(recipe);
    }
    
    public remove(recipeId: string): void
    {
        this.recipes = this.recipes.filter((recipe) => recipe.id != recipeId);
    }
    
    public update(recipe: IRecipe): void
    {
        let index = this.recipes.findIndex((_recipe) => _recipe.id == recipe.id);
        if (index != -1)
        {
            this.recipes[index] = recipe;
        }
    }

    public toggleFavourite(recipe: IRecipe): void
    {
        // let recipeToToggle = this.recipes.find((_recipe) => _recipe.id == recipeId);
        // if (recipeToToggle)
        // {
        //     this.update({ ...recipeToToggle, favourite: !recipeToToggle.favourite });
        // }
        this.update({ ...recipe, favourite: !recipe.favourite });
    }
}
