import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/data';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  id: string | null = "0";
  imageCover: string ='';
  title: string ='Titulo';
  description: string = '';

  constructor(private router:ActivatedRoute) {}
  
  ngOnInit(): void {
    this.router.paramMap.subscribe( value => this.id = value.get('id'))
    this.setValuesComponent(this.id)

  }

  setValuesComponent(id: string | null) {
    const result = dataFake.filter( article => article.id === id )[0];

    this.id = result.id;
    this.imageCover = result.image;
    this.description = result.description;
    this.title = result.title;
    
  }
}
