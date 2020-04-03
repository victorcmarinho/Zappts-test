import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.sass'],
  animations: [
    trigger('sliderInOut', [
      state('in', style({ transform: 'translateX(-0)', maxWidth: '705px', width: '100%', height: 'auto' })),
      state('out', style({ opacity: 0 })),

      transition('in => out', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s', style({height: 0, width: 0}))
      ]),
      transition('out => in', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s')
      ])
    ])
  ]
})
export class SlidersComponent implements OnInit {

  imagesList = [
    './assets/slider.png',
    './assets/slider.png',
    './assets/slider.png',
    './assets/slider.png'
  ];

  indexSelected = 0;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => this.indexSelected = this.indexSelected + 1 % this.imagesList.length, 3000);
  }

}
