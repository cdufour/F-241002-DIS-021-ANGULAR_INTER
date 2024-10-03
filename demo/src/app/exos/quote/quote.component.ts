import { Component } from '@angular/core';
import { Quote } from './quote.interface';


const ANIMATION_SPEED = 1000;

@Component({
  selector: 'exo-quote',
  standalone: false,
  templateUrl: './quote.component.html',
  styles: ``
})
export class QuoteComponent {
  // quotes: string[] = [
  //   "La femme est l'avenir de l'homme", 
  //   "The world is yours", 
  //   "Ad astra per aspera",
  // ];

  quotes: Quote[] = [
    {text: "La femme est l'avenir de l'homme", author: "Aragon"},
    {text: "The world is yours", author: "Montana"},
    {text: "Ad astra per aspera", author: "Inconnu"}
  ];
  quoteIndex: number = 0;
  selectedQuote: Quote = this.quotes[this.quoteIndex];

  constructor() {
    console.log("*** constructor time ***");
    this.runAnimationRandom();
  }
  
  runAnimation() {
    setInterval(() => {
      this.quoteIndex++;
      if (this.quoteIndex >= this.quotes.length) {
        this.quoteIndex = 0;
      }
      this.selectedQuote = this.quotes[this.quoteIndex];
    }, ANIMATION_SPEED)
  }

  runAnimationRandom() {
    setInterval(() => {
      let randomIndex = this.randInt(this.quotes.length);
      this.selectedQuote = this.quotes[randomIndex];
    }, ANIMATION_SPEED)
  }

  randInt(max: number): number {
    return Math.floor(Math.random() * max)
  }

}
