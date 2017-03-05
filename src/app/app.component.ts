import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  initValue: number;
  rate: number;

  calc(): number {
    if (isNaN(this.initValue) || isNaN(this.rate)) {
      return null;
    }
    let answer : number = this.initValue;
    for (let i = 0; i < 10; i++) {
      answer = answer * (1 + this.rate / 100);
    }
    return Math.floor(answer);
  }

  calcArray(): number[] {
    if (isNaN(this.initValue) || isNaN(this.rate)) {
      return null;
    }
    let answer : number = this.initValue;
    let ret : number[] = [answer];
    for (let i = 0; i < 10; i++) {
      answer = answer * (1 + this.rate / 100);
      ret.push(Math.floor(answer));
    }
    return ret;
  }
}
