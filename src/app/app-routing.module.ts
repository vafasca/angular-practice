import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "", redirectTo: '/items', pathMatch: 'full'//por default
  },
  {
    path: 'items',
    loadChildren: () =>
      import('./listas/listas.module').then((m) => m.ListasModule),
  },
  {
    path: "**", redirectTo: '/items', pathMatch: 'full' //cuando metes cualqueir webada
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
