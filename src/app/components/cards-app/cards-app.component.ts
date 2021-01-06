import { Component, OnInit } from '@angular/core';
import { CardServiceService } from '../../services/card-service.service';

@Component({
  selector: 'app-cards-app',
  templateUrl: './cards-app.component.html',
  styleUrls: ['./cards-app.component.scss']
})
export class CardsAppComponent implements OnInit {

  public cards :any = [];
  public classCard:string = '';
  public typeImg:string = '';
  private cardsObject:any;

  constructor(private _cardServices:CardServiceService) { }

  ngOnInit(): void {
    this.getCards1();
  }

  getCards1() {
    this._cardServices.getCards().subscribe(
      resp=> {
        this.cardsObject = resp;
        this.cards = this.cardsObject.cards;
      },
      err => console.error(err)
    )
  }

  cards1(typeCard:number):string {
    if(typeCard === 1) {
      this.classCard = 'cards1';
    } else if(typeCard === 2) {
      this.classCard = 'cards2';
    }
    return this.classCard;
  }

  typeTarget(typeT:number):string {
    if(typeT === 1) {
      this.typeImg = 'assets/visa_targeta_credito.jpg';
    } else if(typeT === 2) {
      this.typeImg = 'assets/MasterCard.jpg';
    } else {
      this.typeImg = '';
    }
    return this.typeImg;
  }

  deleteTarget(idTarget:number) {
    this._cardServices.deleteCard(idTarget).subscribe(
      resp => {
        this.getCards1();
      },
      err => console.error(err)
    );
  }

}
