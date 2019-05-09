import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'fibSeq';
  form: FormGroup;
  fibText = [];

  ngOnInit() {
    this.form = new FormGroup({
      iterations: new FormControl(null)
    });
  }

  fibSeq(a, b, iterations) {
    iterations -= 1;
    this.fibText.push(Number(a).toLocaleString('en-GB') + ' | '  + Number(b).toLocaleString('en-GB'));
    a += b;
    while ( iterations > 0) {
      return this.fibSeq(b, a, iterations);
    }
  }

  onSubmit() {
    this.fibText = [];
    if ( this.form.value.iterations > 0 && this.form.value.iterations < 47 ) {
      this.fibSeq(0, 1, this.form.value.iterations);
    } else {
      this.fibText.push('Please enter a number 1-46');
    }
  }
}
