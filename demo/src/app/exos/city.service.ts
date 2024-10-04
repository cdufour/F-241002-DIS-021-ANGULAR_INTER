import { Injectable } from '@angular/core';
import { City } from './city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  cities: City[] = [
    { name: "Turin", country: "Italie", image: "turin.jpg"},
    { name: "Paris", country: "France", image: "paris.jpg"},
    { name: "Rio", country: "Brésil", image: "rio.jpg"},
  ];

  constructor() { }

  getCities(): City[] {
    return this.cities;
  }
}
