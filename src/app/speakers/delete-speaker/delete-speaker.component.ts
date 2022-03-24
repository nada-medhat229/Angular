import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpeakersService } from 'src/app/services/speakers.service';
import { Speakers } from 'src/app/_models/speakers';

@Component({
  selector: 'app-delete-speaker',
  templateUrl: './delete-speaker.component.html',
  styleUrls: ['./delete-speaker.component.css']
})
export class DeleteSpeakerComponent implements OnInit,OnChanges {
  // @Input()
   speakerId:number=0;
  speaker:Speakers|null=null;
    constructor(public speakerservice:SpeakersService,public activateRoute:ActivatedRoute) { }
    ngOnChanges(changes: SimpleChanges): void {
      // if(!changes['speakerId'].isFirstChange())
      // this.speakerservice.deleteSpeaker(this.speakerId).subscribe(
      //   a=>console.log(a))
      }

    ngOnInit(): void {
      this.activateRoute.params.subscribe(a=>{
        this.speakerservice.deleteSpeaker(a['id']).subscribe(
            a=>console.log(a))

      })
    }

  }
