import { Injectable } from '@angular/core';

@Injectable()
export class NavBarService {
  visible: boolean;

  constructor() { this.visible = true; }

  toggle() {
    this.visible = !this.visible;
  }

  hide() {
    this.visible = false;
  }

  show() {
    this.visible = true;
  }
}
