import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class ProjectComponent implements OnInit {

  // miniCards:any[] = [
  //   {img: '../../../../assets/images/wheather.png', title: 'wheatherApp'},
  //   {img: '../../../../assets/images/main-free-headline-catch-shop-dark.jpg',title: 'wheatherApp'},
  //   {img:'../../../../assets/images/instagram_2111463.png',title: 'wheatherApp' },
  //   {img:'../../../../assets/images/second-wheather.png',title: 'wheatherApp' },
  //   {img:'../../../../assets/images/Which-is-the-best-all-in-one-school-management-system-in-India.webp',title: 'wheatherApp' },
  //   {img:'../../../../assets/images/Discover_Dark_Mode.png',title: 'wheatherApp' }
  
  // ]

  constructor(){}

  ngOnInit() {
  }

  flip: string = 'inactive';

  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }

}
