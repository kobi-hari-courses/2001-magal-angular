import { HeaderComponent } from './../../components/header/header.component';
import { Component, OnInit, ContentChild, AfterContentInit, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit, AfterContentInit, AfterViewInit {
  isShowing: boolean = true;
  bg: string = 'white';

  @ContentChild(HeaderComponent)
  header: HeaderComponent;

  @ViewChild('toggleButton')
  button: ElementRef;

  constructor(private renderer: Renderer2) {}

  toggle() {
    this.isShowing = !this.isShowing;
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    if (this.header) {
      this.header.setTitle('This is a toggle header');
    }
  }

  ngAfterViewInit(): void {
    if (this.button) {
      this.renderer.listen(this.button.nativeElement, 'click', () => this.toggle());
    }
  }

}
