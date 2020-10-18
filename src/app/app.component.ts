import { Component } from '@angular/core';
import arrayWords from '../utils/words';
import countryNames from '../utils/country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';

  words = '';
  limit = 10;

  handleSlideChange(newLimit: number){

    this.limit = newLimit;
  }

  generate(){
    this.words = arrayWords.slice(0, this.limit).join(' ');
  }

  country = '';
  rdNumber = 1;

  getRdInteger(min:number, max:number){

    this.rdNumber = Math.floor(Math.random() * (max-min)) + min;
    this.country = countryNames[this.rdNumber];

  }







}
