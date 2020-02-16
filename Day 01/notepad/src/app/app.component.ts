import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors: string[] = ['red', 'blue', 'green', 'magenta', 'black', 'brown'];
  fonts: string[] = ['Arial', 'Times New Roman', 'Tahoma', 'Segoe UI', 'David', 'Consolas'];
  sizes: string[] = ['10px', '16px', '28px', '42px', '80px'];

  selectedColor: string = this.colors[0]; 
  selectedFont: string = this.fonts[0];
  selectedSize: string = this.sizes[0];

  setColor(value: string) {
    this.selectedColor = value;
  }

  setFont(value: string) {
    this.selectedFont = value;
  }

  setSize(value: string) {
    this.selectedSize = value;
  }
}
