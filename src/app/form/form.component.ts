import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  errors = {
    test: 'de test',
    errorMessage: '',
    noErrorsFound: true
  };
  triangleType = '';

  constructor() { }

  log(x) {
    console.log(x);
  }
  /**
   * Method to  validate the sides
   * @param side1 positive number
   * @param side2 positive number
   * @param side3 positive number
   */
  private validate(side1, side2, side3) {
    this.errors.errorMessage = '';
    if (side1 + side2 < side3) {
      this.errors.errorMessage = 'The Sides provided does NOT make up a Triangle!';
      this.errors.noErrorsFound = false;
      return this.errors.noErrorsFound;
    }
    console.log(side1, side2, side3);
    return this.errors.noErrorsFound;
  }
  
  calculate(side1, side2, side3) {
    if (this.validate(side1, side2, side3)) {
      console.log('check what type is');
      
    }
    
  }

  ngOnInit() {
  }

}
