import { Component } from '@angular/core';

@Component({
  //selector: '[app-root]',//as an attribute
  //selector: '.app-root',//as an class
  selector: 'app-root', //as an element 
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
  h1{
    color : blue;
  }
  `]
})
export class AppComponent {
  title = 'app';
}
