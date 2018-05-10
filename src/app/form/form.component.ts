import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  errors = {
    notATraingle: 'The Sides provided does NOT make up a Triangle!',
    notAPositiveNumber: 'Could not determine Triangle Type. Please enter only Positive Numbers',
    errorMessage: '',
    noErrorsFound: true
  };
  triangleType = '';

  constructor() { }

  // TODO: REMOVE THIS
  log(x) {
    console.log(x);
  }
  /**
   * Method to  validate the sides
   * @param side1 number
   * @param side2 number
   * @param side3 number
   */
  private validate(side1, side2, side3) {
    // Sum of two lower sides must be less than side with longer length.
    if (side1 + side2 < side3) {
      this.errors.noErrorsFound = false;
      this.errors.errorMessage = this.errors.notATraingle;
    }
    // Calculate Triangles for only prositive numbers
    if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
      this.errors.noErrorsFound = false;
      this.errors.errorMessage =  this.errors.notAPositiveNumber;
    }

    return this.errors.noErrorsFound;
  }
  /**
   * Method to determine the Triangle Type
   * @param side1 number
   * @param side2 number
   * @param side3 number
   * @return String Triangle Type Name
   */
  getTriangleTypeBySides(side1, side2, side3) {
    if (this.validate(side1, side2, side3)) {
      // Process the inputs and print the Triangle type name if it is Equilateral, ISoceles or Scalene.
      if (side1 === side2 && side2 === side3) {
        this.triangleType = 'EQUILATERAL';
      } else if (side1 === side2 || side2 === side3) {
        this.triangleType = 'ISOSCELES';
      } else {
        this.triangleType = 'SCALENE';
      }
  }
}
