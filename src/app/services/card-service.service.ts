import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cards } from '../models/Cards';


@Injectable({
  providedIn: 'root'
})
export class CardServiceService {

  private _cardsURL:string = 'https://cristian-card-number-example.herokuapp.com/api/cards';

  constructor(private _http:HttpClient) { }

  getCards() {
    return this._http.get(`${this._cardsURL}`);
  }

  getCard(id:number) {
    return this._http.get(`${this._cardsURL}/${id}`);
  }

  deleteCard(id:number) {
    return this._http.delete(`${this._cardsURL}/${id}`);
  }

  saveCard(cards:Cards) {
    return this._http.post(`${this._cardsURL}`, cards);
  }

  updateCard(id:number, cards:Cards) {
    return this._http.put(`${this._cardsURL}/${id}`, cards);
  }

}
