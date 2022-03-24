import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSpeakerComponent } from './list-speaker/list-speaker.component';
import { AddSpeakerComponent } from './add-speaker/add-speaker.component';
import { DetailsSpeakerComponent } from './details-speaker/details-speaker.component';
import { EditSpeakerComponent } from './edit-speaker/edit-speaker.component';
import { FormsModule } from '@angular/forms';
import { DeleteSpeakerComponent } from './delete-speaker/delete-speaker.component';
import { RouterModule, Routes } from '@angular/router';
const routes:Routes=[
{path:"",component:ListSpeakerComponent,children:[
  {path:"details/:id",component:DetailsSpeakerComponent},
  {path:"edit/:id",component:EditSpeakerComponent},
  {path:"delete/:id",component:DeleteSpeakerComponent},
]},
{path:"add",component:AddSpeakerComponent},
]
@NgModule({
  declarations: [
    ListSpeakerComponent,
    AddSpeakerComponent,
    DetailsSpeakerComponent,
    EditSpeakerComponent,
    DeleteSpeakerComponent
  ],
  imports: [
    CommonModule,FormsModule,RouterModule.forChild(routes)
  ],
  exports:[
    ListSpeakerComponent,
    AddSpeakerComponent,
    DetailsSpeakerComponent,
    EditSpeakerComponent
  ]
})
export class SpeakersModule { }
