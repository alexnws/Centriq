import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewSessionComponent } from './new-session/new-session.component';
import { ModalComponent } from './modal/modal.component';
const routes: Routes = [
  //Les différentes routes pour passer d'une page à une autre instantanément//
  { path: 'create', component: NewSessionComponent },
  { path: 'newtype', component: ModalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
