import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  // public countSub:BehaviorSubject<number>=new BehaviorSubject(0);

  constructor() { }

  private textSubject = new BehaviorSubject<string>('');
  text$ = this.textSubject.asObservable();

  setText(text: string) {
    this.textSubject.next(text);
  }






}
