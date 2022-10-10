import { HomePageComponent } from './../pages/home-page/home-page.component';
import { DetailPageComponent } from './../pages/detail-page/detail-page.component';
import { RecipePageComponent } from './../pages/recipe-page/recipe-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: ':recipeId',
        children: [
            {
                path: "edit",
                component: RecipePageComponent
            },
            {
                path: "details",
                component: DetailPageComponent
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
