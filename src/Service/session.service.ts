import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, interval, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private timerSubscription: Subscription | null = null;
  private _timeLeft = new BehaviorSubject<number>(0);
  public timeLeft$ = this._timeLeft.asObservable();

  startSessionTimer() {
    const token = localStorage.getItem('token');
    if (!token) return;

    const decoded: any = jwtDecode(token);
    const exp = decoded.exp * 1000;
    const now = Date.now();
    let timeLeft = Math.floor((exp - now) / 1000);

    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }

    this._timeLeft.next(timeLeft);

    this.timerSubscription = interval(1000).subscribe(() => {
      timeLeft--;
      this._timeLeft.next(timeLeft);

      if (timeLeft <= 0) {
        this.stopTimer();
        localStorage.removeItem('token');
        window.alert('Session expired. Logging out...');
        window.location.href = '/user-page';
      }
    });
  }

  stopTimer() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
      this.timerSubscription = null;
    }
    this._timeLeft.next(0);
  }
}
