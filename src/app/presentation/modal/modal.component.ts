import {
  Component,
  AfterViewInit,
} from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements AfterViewInit {
  public bgStyle: string = "";
  
  constructor(private modal: ModalService) { }

  ngAfterViewInit() {
    this.modal.bgColor$.subscribe((col) => {
      this.bgStyle = col;
    })
  }
}
