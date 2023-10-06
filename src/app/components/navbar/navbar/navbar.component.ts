import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  //1 Data binding - Interpolación
  tittle: string = 'Programa con angular';

  //2 Data binding - Property binding
  isHidden: boolean = true;

  //3 Data binding - Even binding
  counter: number = 0;
  incrementCounter() {
    this.counter += 1;
  }

  nombres: any[] =
  ['Brenda',
   'Samuel',
   'Jafet',
   'Alejandro',
   'Alan'];

  islog: boolean = false;
  styles = {
    button: this.islog ? 'show' : 'hidden',
  }
}
