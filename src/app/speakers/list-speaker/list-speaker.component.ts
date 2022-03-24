import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpeakersService } from 'src/app/services/speakers.service';
import { Speakers } from 'src/app/_models/speakers';

@Component({
  selector: 'app-list-speaker',
  templateUrl: './list-speaker.component.html',
  styleUrls: ['./list-speaker.component.css']
})
export class ListSpeakerComponent implements OnInit,OnDestroy {

  constructor(public speakerservice:SpeakersService) { }
  ngOnDestroy(): void {
    this.subscript?.unsubscribe();
  }
speaker:Speakers[]=[];
subscript:Subscription|null=null;
  ngOnInit(): void {
    this.speakerservice.getAllSpeakers().subscribe(a=>this.speaker=a)
  }
detailsId=0;
editId=0;
deleteId=0;


}
