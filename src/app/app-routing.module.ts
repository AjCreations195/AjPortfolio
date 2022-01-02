import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubModule } from './sub/sub.module';
const routes: Routes = [
  {
    path: 'sub', loadChildren: () =>
      import('./sub/sub.module').then(x => x.SubModule)
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
