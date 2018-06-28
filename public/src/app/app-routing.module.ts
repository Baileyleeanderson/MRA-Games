import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LeveloneComponent } from './levelone/levelone.component';
import { HomeComponent } from './home/home.component';
import { DecipherComponent } from './decipher/decipher.component';
import { MemoryComponent } from './memory/memory.component';

const routes: Routes = [
  { path: 'rockpaperscissors', component: LeveloneComponent},
  { path: 'decipher', component: DecipherComponent},
  { path: 'memory', component: MemoryComponent},
  { path: '', component: HomeComponent},
  // { path: 'edit/:id', component: EditComponent},
  // { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', component:  PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
