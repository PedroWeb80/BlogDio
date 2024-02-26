import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
  @Input()
  title: string = '';
  @Input()
  image: string = '';
  @Input()
  text: string = '';
  @Input()
  id = '1';
}
