import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { MainComponent } from './main/main.component';
import { MainSobreNosotrosComponent } from './sobre-nosotros/main-sobre-nosotros/main-sobre-nosotros.component';


const routes: Routes =[
  { path: '', component: MainComponent },
  { path: 'sobre-nosotros', component: MainSobreNosotrosComponent },
  { path: '**', component: MainComponent },
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
