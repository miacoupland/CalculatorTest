import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable()
export class ModalService {
  private _bgColor$: Subject<string> = new BehaviorSubject<string>('');

  public setBgColor$(bgColor: string): void {
    this._bgColor$.next(bgColor);
  }

  public get bgColor$(): Observable<string> {
    return this._bgColor$.asObservable();
  }
}