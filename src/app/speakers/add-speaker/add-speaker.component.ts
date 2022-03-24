import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpeakersService } from 'src/app/services/speakers.service';
import { Speakers } from 'src/app/_models/speakers';

@Component({
  selector: 'app-add-speaker',
  templateUrl: './add-speaker.component.html',
  styleUrls: ['./add-speaker.component.css']
})
export class AddSpeakerComponent implements OnInit {
newspeaker:Speakers=new Speakers(0,"","","","","","")
  constructor(public speakerservice:SpeakersService,public router:Router) { }

  ngOnInit(): void {
  }
add(){
this.speakerservice.addSpeaker(this.newspeaker).subscribe(
  {next:a=> {
    console.log(a);
  this.router.navigate(['/speaker'])
}}
)
}
}
