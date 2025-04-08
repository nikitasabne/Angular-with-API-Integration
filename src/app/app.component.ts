import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { SessionService } from '../Service/session.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  sessionTimeLeft: number = 0;

  constructor(private router: Router, private sessionService: SessionService) {}

  ngOnInit(): void {
    this.sessionService.timeLeft$.subscribe((time) => {
      this.sessionTimeLeft = time;
    });

    // optional: check if token exists on load
    const token = localStorage.getItem('token');
    if (token) {
      this.sessionService.startSessionTimer();
    }
  }

  logout() {
    localStorage.removeItem('token');
    alert('Logged out successfully');
    this.router.navigate(['/user-page']);
  }
}
