import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'partial-refund-calculator';
  expression: string = '';
  solution: number | null = null;
  number_of_months: number | null = null;
  sales_price: number | null = null;

  clear(): void {
    this.expression = '';
  }

  calculate(): void {
    try {
      const salesPrice: number = this.sales_price !== null ? parseFloat(this.sales_price.toString()) : 0;
      const numberOfMonths: number = this.number_of_months !== null ? parseFloat(this.number_of_months.toString()) : 0;

      this.solution = salesPrice - (salesPrice / 24) * numberOfMonths;
    } catch (error) {
      this.solution = null;
    }
  }
}
