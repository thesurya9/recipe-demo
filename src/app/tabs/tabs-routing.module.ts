import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TabsPage } from './tabs.page'

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../pages/home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'search-recipe',
        loadChildren: () =>
          import('../pages/search-recipe/search-recipe.module').then(
            (m) => m.SearchRecipePageModule,
          ),
      },
      {
        path: 'recipe-list',
        loadChildren: () =>
          import('../pages/recipe-list/recipe-list.module').then(
            (m) => m.RecipeListPageModule,
          ),
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
