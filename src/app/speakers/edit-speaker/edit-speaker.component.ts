import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpeakersService } from 'src/app/services/speakers.service';
import { Speakers } from 'src/app/_models/speakers';

@Component({
  selector: 'app-edit-speaker',
  templateUrl: './edit-speaker.component.html',
  styleUrls: ['./edit-speaker.component.css']
})
export class EditSpeakerComponent implements OnInit,OnChanges {
// @Input()
speakerId=0;
speaker:Speakers=new Speakers(0,"","","","","","")
  constructor(public speakerservice:SpeakersService,public activeRoute:ActivatedRoute) { }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log( this.speakerId);

    // if(!changes['speakerId'].isFirstChange())
    // this.speakerservice.getSpeakersById(this.speakerId).subscribe(
    //   a=>console.log(this.speaker=a)
    //   )
  }

save(){
  this.speakerservice.updateSpeaker(this.speaker).subscribe(
    a=>console.log(a)
  )
}
  ngOnInit(): void {
    this.activeRoute.params.subscribe(a=>{
      this.speakerservice.getSpeakersById(a['id']).subscribe(
          D=>this.speaker=D,
        );
  })
  }
}
