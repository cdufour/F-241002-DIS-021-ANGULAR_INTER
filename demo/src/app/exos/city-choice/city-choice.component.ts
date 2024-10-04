import { Component, Inject, OnInit } from '@angular/core';
import { CityService } from '../city.service';
import { City } from '../city';

@Component({
  selector: 'exos-city-choice',
  templateUrl: './city-choice.component.html',
  styleUrl: './city-choice.component.css'
})
export class CityChoiceComponent implements OnInit {

  cities: City[] = [];
  selectedCity: City | undefined = undefined;
  today: number = Date.now();

  constructor(@Inject(CityService) private cityService: CityService) {}

  ngOnInit(): void {
      this.cities = this.cityService.getCities();
  }

  onChange(event: any) {
    let selectedCity = event.target.value;
    console.log(selectedCity);
    this.selectedCity = this.cities.find(city => city.name === selectedCity);
  }

}
