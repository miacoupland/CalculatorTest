import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SimpleCalculatorComponent } from './presentation/simple-calculator/simple-calculator.component';
import { CalculatorRepository } from './persistence/calculator.repository';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './presentation/modal/modal.component';
import { ModalService } from './presentation/modal/modal.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SimpleCalculatorComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CalculatorRepository,
    ModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
