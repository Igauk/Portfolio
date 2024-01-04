import { Component } from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IanGaukPortfolio';

  constructor(private viewportScroller: ViewportScroller) {
    this.viewportScroller.setOffset([0, 128]); // Or else scroll to overshoots
  }

  scrollTo(section: string): void {
    this.viewportScroller.scrollToAnchor(section);
  }
}
