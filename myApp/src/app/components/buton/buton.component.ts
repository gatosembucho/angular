import { Component } from '@angular/core';

@Component({
  selector: 'app-buton',
  templateUrl: './buton.component.html',
  styleUrls: ['./buton.component.css']
})
export class ButonComponent {
  foiClicado = false;

  onClick = () =>{
    console.log("clicado");
  }
}
