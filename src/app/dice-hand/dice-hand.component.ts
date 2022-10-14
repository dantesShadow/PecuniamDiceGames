import { Component, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { DiceComponent } from '../dice/dice.component';

@Component({
  selector: 'app-dice-hand',
  templateUrl: './dice-hand.component.html',
  styleUrls: ['./dice-hand.component.css']
})
export class DiceHandComponent implements OnInit {
  @Input() nbDice : number = 6;

  dices : Array<DiceComponent> = [];

  @ViewChildren(DiceComponent) dicesComponent: QueryList<DiceComponent>;

  constructor() {
    let index: number = 0;
    while(index < this.nbDice){
      this.dices.push(new DiceComponent);
      index++;
    }
  }

  ngOnInit(): void {
  }

  rollDices() : void {
    this.dicesComponent.toArray().forEach((dice) => {
      dice.roll();
    });
  }

}
