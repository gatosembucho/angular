import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  count = 0;
  texto = ""

  foiClicado = () =>{
    this.count++;
  }

  foiEscrito = ()=>{
    this.texto=""
  }


}
