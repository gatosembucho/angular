import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-buton',
  templateUrl: './buton.component.html',
  styleUrls: ['./buton.component.css']
})
export class ButonComponent {
  isClicked: boolean = false;
  @Output("OnClick")
  OnClick: EventEmitter<void> = new EventEmitter();

  @Input()
  label: string = ""
  // onClick = () =>{
  //   console.log("clicado")
  //   this.isClicked = !this.isClicked;
  // }
  // clicked = () =>{
  //   console.log("clicado")
  // }
  clicked = () =>{
    this.OnClick.emit();
  }
}
