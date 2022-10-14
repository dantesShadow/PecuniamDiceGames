import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {
  @Input() nbFaces : number = 6;
  faceCourante : number;

  constructor() { 
    this.faceCourante = 6;
  }

  ngOnInit(): void {
  }

  roll(): void {
    this.faceCourante = Math.floor(Math.random() * this.nbFaces) + 1;
  }

}
