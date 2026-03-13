import { Component, Input ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
 @Output("OnClicks")
  OnClick: EventEmitter<void> = new EventEmitter();

@Input()
 caixinha: string = ""

// clicked = () =>{
//     this.oninput.emit();
//   }
}
