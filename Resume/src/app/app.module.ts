import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ObjectiveComponent } from './objective/objective.component';
import { SkillComponent } from './skill/skill.component';
import { UserService } from './user.service';


const routes:Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home'
  },
  {
   
    path:'home',
    component:HomeComponent
  },
  {
    path:'objective',
    component:ObjectiveComponent
  },
  {
    path:'skill',
    component:SkillComponent
  },
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ObjectiveComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})

export class AppModule { }
