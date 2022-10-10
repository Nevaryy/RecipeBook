import { IRecipe } from './../models/recipe.interface';
import { Injectable } from '@angular/core';
import { v4 } from 'uuid'; 
import { BehaviorSubject } from 'rxjs';


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

    public recipes$ = new BehaviorSubject<IRecipe[]>(this.recipes);
    
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
        this.recipes.push({ ...recipe, id: v4() });
        this.recipes$.next(this.recipes);
    }
    
    public remove(recipe: IRecipe): void
    {
        this.recipes = this.recipes.filter((_recipe) => _recipe.id != recipe.id);
        this.recipes$.next(this.recipes);
    }
    
    public update(recipe: IRecipe): void
    {
        let index = this.recipes.findIndex((_recipe) => _recipe.id == recipe.id);
        if (index != -1)
        {
            this.recipes[index] = recipe;
        }
        this.recipes$.next(this.recipes);
    }

    public toggleFavourite(recipe: IRecipe): void
    {
        this.update({ ...recipe, favourite: !recipe.favourite });
    }
}
