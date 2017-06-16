import {Injectable} from '@angular/core';

@Injectable()
export class ImageService {
  visibleImages =[];

  getImages(){
    return this.visibleImages = IMAGES.slice(0);
  }

  getImage(id:number){
    return IMAGES.slice(0).find(image => image.id == id);
  }
}

const IMAGES = [
  {"id":1,"category": "boats", "caption":"view from boat","url":"assets/img/boat_01.jpg"},
  {"id":2,"category": "boats", "caption":"Sailing the coast","url":"assets/img/boat_02.jpg"},
  {"id":3,"category": "boats", "caption":"Sunset Pier","url":"assets/img/boat_03.jpg"},
  {"id":4,"category": "boats", "caption":"Sunday Afternoon","url":"assets/img/boat_04.jpg"},
  {"id":5,"category": "boats", "caption":"Sunset at the docks","url":"assets/img/boat_05.jpg"},
  {"id":6,"category": "camping", "caption":"Camping trip","url":"assets/img/camping_01.jpg"},
  {"id":7,"category": "camping", "caption":"Kim and Jessie","url":"assets/img/camping_02.jpg"},
  {"id":8,"category": "camping", "caption":"View from the top","url":"assets/img/camping_03.jpg"},
  {"id":9,"category": "camping", "caption":"On the trail","url":"assets/img/camping_04.jpg"},
  {"id":10,"category": "camping", "caption":"Our camping spot","url":"assets/img/camping_05.jpg"},
  {"id":11,"category": "camping", "caption":"Rv Life","url":"assets/img/camping_06.jpg"},
  {"id":12,"category": "camping", "caption":"Hiking trip 2017","url":"assets/img/camping_07.jpg"},
  {"id":13,"category": "library", "caption":"Big library","url":"assets/img/library_01.jpg"},
  {"id":14,"category": "library", "caption":"Stacks","url":"assets/img/library_02.jpg"},
  {"id":15,"category": "library", "caption":"Saturday Afternoon","url":"assets/img/library_03.jpg"},
  {"id":16,"category": "library", "caption":"Local library","url":"assets/img/library_04.jpg"},
  {"id":17,"category": "library", "caption":"Nice library","url":"assets/img/library_05.jpg"}
]
