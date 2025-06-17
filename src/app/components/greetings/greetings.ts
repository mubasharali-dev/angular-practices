import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-greetings',
  standalone: true,
  templateUrl: './greetings.html',
  styleUrls: ['./greetings.scss'],
})
export class Greetings {
  @Input() message!: string;
}
