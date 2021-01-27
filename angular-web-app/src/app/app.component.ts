import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RestService } from './rest.service';
import { Result } from './Result';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private rs : RestService){}

  result: any;
  sentence = '';
  prediction = '';
  confidence = '';

  sentHidden = true;
  predHidden = true;
  confHidden = true;

  determineSentiment(myInput: string) {
    this.sentHidden = true;
    this.prediction = '';
    this.confidence = '';
    this.sentence = myInput;

    this.rs.getResponse(this.sentence)
    .subscribe(data => {
      console.log("Data " + JSON.stringify(data));
      data = JSON.parse(JSON.stringify(data));
      console.log("PRediction: "+ data.prediction + " Proba " + data.proba);
      this.prediction = data.prediction;
      this.confidence = data.proba;
      this.sentHidden = false;
    })
  }

}
