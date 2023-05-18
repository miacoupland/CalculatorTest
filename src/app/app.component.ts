import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ModalComponent } from './presentation/modal/modal.component';
import { ModalService } from './presentation/modal/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'CalculatorTestNg';
  @ViewChild('modal', { static: false, read: ViewContainerRef })
  target!: ViewContainerRef;
  public colour: string = '';
  private componentRef!: ComponentRef<ModalComponent>;
  private opened: boolean;

  constructor(
    private modal: ModalService,
    private resolver: ComponentFactoryResolver
  ) {
    this.opened = false;
  }

  /**
   * In future, i'd not use deprecated code, but it's the simplest way I know of
   * under constraints
   *
   * Opens modal component using component factory
   */
  openModal() {
    if (!this.opened) {
      let modalComponent =
        this.resolver.resolveComponentFactory(ModalComponent);
      this.componentRef = this.target.createComponent(modalComponent);
      this.opened = true;
    }
  }

  /**
   * Destroys the modal component
   */
  closeModal() {
    this.componentRef.destroy();
    this.opened = false;
  }

  /**
   * Set background colour of modal component using modal service
   */
  public setColour(): void {
    this.modal.setBgColor$(this.colour);
  }
}
