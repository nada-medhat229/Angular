import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Speakers } from '../_models/speakers';

@Injectable({
  providedIn: 'root'
})
export class SpeakersService {
getAllSpeakers(){
  return this.http.get<Speakers[]>(this.baseUrl);
}
getSpeakersById(_id:number){
  return this.http.get<Speakers>(this.baseUrl+_id);
}
addSpeaker(speaker:Speakers){
  return this.http.post<Speakers>(this.baseUrl, speaker);
}
updateSpeaker(speaker:Speakers){
  return this.http.put<Speakers>(this.baseUrl , speaker);
}
deleteSpeaker(_id:number){
  return this.http.delete<Speakers>(this.baseUrl + _id );
}
constructor(public http:HttpClient, @Inject('baseUrl') public baseUrl:string) {
  this.baseUrl+="speaker/"
}
}
