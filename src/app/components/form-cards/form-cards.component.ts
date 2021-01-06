import { Component, OnInit } from '@angular/core';
import { Cards } from '../../models/Cards';
import { Router, ActivatedRoute } from '@angular/router';
import { CardServiceService } from '../../services/card-service.service';

@Component({
  selector: 'app-form-cards',
  templateUrl: './form-cards.component.html',
  styleUrls: ['./form-cards.component.scss']
})
export class FormCardsComponent implements OnInit {

  edit:boolean = false;
  cards:Cards = {
    idCard: 0,
    firstName: '',
    lastName: '',
    colorT: 1,
    typeT: 1,
    cvTarget: 0,
    numTargeta: '',
    dateExp: ''
  }
  cards1:any;

  constructor(private _activatedRoute:ActivatedRoute, private _cardsService:CardServiceService, private _router:Router) { }

  ngOnInit(): void {
    const params = this._activatedRoute.snapshot.params;
    this.AddOrUpdateCards(params.id);
  }

  AddOrUpdateCards(id:number) {
    if(id) {
      this._cardsService.getCard(id).subscribe(
        resp => {
          console.log(resp);
          this.cards1 = resp;
          this.cards.idCard = this.cards1.idcard;
          this.cards.firstName = this.cards1.firstname;
          this.cards.lastName = this.cards1.lastname;
          this.cards.colorT = this.cards1.colort;
          this.cards.typeT = this.cards1.typet;
          this.cards.dateExp = this.cards1.dateexp;
          this.cards.numTargeta = this.cards1.numtargeta;
          this.cards.cvTarget = this.cards1.cvtarget;
          console.log(this.cards.idCard);
          this.edit = true;
        },
        err => console.error(err)
      );
    }
  }

  saveNewCard() {
    delete this.cards.idCard;
    delete this.cards.cvTarget;
    delete this.cards.numTargeta;

    if(this.cards.firstName === '' || this.cards.lastName === '' || this.cards.typeT < 1 || this.cards.typeT > 2 || this.cards.colorT < 1 || this.cards.colorT > 3 || this.cards.dateExp === '') {
      console.error('Unable to Add Cards');
    } else {
      this._cardsService.saveCard(this.cards).subscribe(
        resp => {
          this._router.navigate(['/cards']);
        },
        err => console.error(err)
      )
    }
  }

  updateCard() {
    delete this.cards.cvTarget;
    delete this.cards.numTargeta;

    if(this.cards.firstName === '' || this.cards.lastName === '' || this.cards.typeT < 1 || this.cards.typeT > 2 || this.cards.colorT < 1 || this.cards.colorT > 3 || this.cards.dateExp === '') {
      console.error('Unable to Update Cards');
    } else {
      this._cardsService.updateCard(this.cards1.idcard, this.cards).subscribe(
        resp => {
          this._router.navigate(['/cards']);
        },
        err => console.error(err)
      );
    }
  }
}
