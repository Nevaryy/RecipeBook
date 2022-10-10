import { DetailComponent } from '../pages/detail/detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { RecipeComponent } from '../pages/recipe/recipe.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: ':recipeId',
        children: [
            {
                path: "edit",
                component: RecipeComponent
            },
            {
                path: "details",
                component: DetailComponent
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
