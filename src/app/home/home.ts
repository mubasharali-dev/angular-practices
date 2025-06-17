import { Component } from '@angular/core';
import { Greetings } from '../components/greetings/greetings';
import { Counter } from '../components/counter/counter';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Greetings, Counter],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home {
  message = 'Greeting is working';
  eventUpHandler(event: KeyboardEvent) {
    console.log(`User pressed the key ${event.key} key`);
  }
}
