import { IRecipe } from './../../models/recipe.interface';
import { RecipeService } from './../../services/recipe.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';

@Component({
    selector: 'app-recipe-page',
    templateUrl: './recipe-page.component.html',
    styleUrls: ['./recipe-page.component.css']
})
export class RecipePageComponent implements OnInit {
    public isEdit: boolean = false;
    public recipe: IRecipe | null = null;

    public ingredients: FormArray = new FormArray<FormControl>([
        new FormControl<string>('', Validators.required)
    ]);
    
    public formGroup: FormGroup = new FormGroup({
        title: new FormControl("", Validators.required),
        description: new FormControl("", Validators.required),
        ingredient: this.ingredients
    });
        
    constructor(
        private activatedRoute: ActivatedRoute,
        private recipeService: RecipeService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.activatedRoute.paramMap
            .pipe(take(1))
            .subscribe(
                (paramMap) =>
                {
                    let recipe = this.recipeService.get(paramMap.get("recipeId") ?? "");
                    if (recipe)
                    {
                        this.isEdit = true;
                        this.recipe = recipe;
                        this.writeToFormGroup(recipe);
                    }
                    // this.recipe = {
                    //     title: "",
                    //     createAt: new Date(),
                    //     description: "",
                    //     favourite: false,
                    //     ingredient: []
                    // };
                }
            );
    }
    
    public addIngedrient(value = "") {
        this.ingredients.push(new FormControl(value, Validators.required));
    }

    public removeIngredient(index: number): void
    {
        if (this.ingredients.controls.length > 1)
        {
            this.ingredients.removeAt(index);
        }
    }

    public onSubmit(event: Event)
    {
        event.preventDefault();
        
        if (this.formGroup.valid)
        {
            if (this.isEdit)
            {
                this.recipeService.update({ ...this.recipe, ...this.formGroup.value });
            }
            else
            {
                this.recipeService.add({ ...this.recipe, ...this.formGroup.value, createAt: new Date() });
            }

            this.router.navigateByUrl("/");
        }
    }

    private writeToFormGroup(recipe: IRecipe): void
    {
        Object.entries(recipe).forEach(
            (entry) =>
            {
                let control = this.formGroup.controls[entry[0]];
                if (control)
                {
                    if (entry[0] == "ingredient")
                    {
                        for (let index = 0; index < recipe.ingredient.length; index++) {                            
                            let ingredient = recipe?.ingredient[index];
                            let ingredientControl = this.ingredients.controls[index];

                            if (this.ingredients.length < recipe.ingredient.length)
                            {
                                this.addIngedrient(ingredient);
                            }
                            ingredientControl.setValue(ingredient);
                        }
                    }
    
                    else
                    {
                        let value: string = "" + entry[1];
                        control.patchValue(value);
                    }
                }
            }
        )
    }
}
