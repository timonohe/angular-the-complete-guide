import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { LoggingService } from './logging.service';

@Component({
  selector: 'course-project-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService, 
    private loggingService: LoggingService,
    @Inject(PLATFORM_ID) private platformId
  ) { }

  ngOnInit(): void {
    if (this.platformId === isPlatformBrowser(this.platformId)) {
      this.authService.autoLogin();
    }
    
    this.loggingService.printLog('Hello from AppComponent ngOnInit');
  }
}
