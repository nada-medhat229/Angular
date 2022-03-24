import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpeakersService } from 'src/app/services/speakers.service';
import { Speakers } from 'src/app/_models/speakers';

@Component({
  selector: 'app-details-speaker',
  templateUrl: './details-speaker.component.html',
  styleUrls: ['./details-speaker.component.css']
})
export class DetailsSpeakerComponent implements OnInit,OnChanges {
 speakerId:number=0;
speaker:Speakers|null=null;
  constructor(public speakerservice:SpeakersService,public activeRoute:ActivatedRoute) { }
  ngOnChanges(changes: SimpleChanges): void {
//     if(!changes['speakerId'].isFirstChange())
// this.speakerservice.getSpeakersById(this.speakerId).subscribe(
//   a=>console.log(this.speaker=a)
// )
}

  ngOnInit(): void {
    this.activeRoute.params.subscribe(a=>{
      this.speakerservice.getSpeakersById(a['id']).subscribe(
          a=>this.speaker=a,
        );
    })
  }

}
