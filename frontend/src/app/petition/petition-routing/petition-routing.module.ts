import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CreatePetitionComponent} from '../create-petition/create-petition.component';
import { ViewPetitionComponent} from '../view-petition/view-petition.component';
import { ViewByIDPetitionComponent} from '../view-by-id-petition/view-by-id-petition.component';
import { UpdatePetitionComponent} from '../update-petition/update-petition.component';


const routes: Routes = [
  {path: 'list', component: ViewPetitionComponent},
  {path: 'create', component: CreatePetitionComponent},
  {path: 'update/:id', component: UpdatePetitionComponent},
  {path: 'details/:id', component: ViewByIDPetitionComponent}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class PetitionRoutingModule { }
