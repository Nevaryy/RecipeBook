import { DetailComponent } from './../components/detail/detail.component';
import { RecipeComponent } from './../components/recipe/recipe.component';
import { HomeComponent } from './../components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
