import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { EditSkillsComponent } from './components/hard-s/edit-skills.component';
import { NewSkillsComponent } from './components/hard-s/new-skills.component';


const routes: Routes = [
  { path:'', component: HomeComponent},
  { path:'login', component: LoginComponent},
  { path:'nuevaexp', component: NewExperienciaComponent},
  { path:'editexp/:id', component: EditExperienciaComponent},
  { path:'nuevaedu', component: NeweducacionComponent },
  { path:'editedu/:id', component: EditeducacionComponent },
  { path:'newskill', component: NewSkillsComponent },
  { path:'editskill/:id', component: EditSkillsComponent },
] 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
