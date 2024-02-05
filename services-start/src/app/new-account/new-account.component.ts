import { Component } from '@angular/core';
import { LoggingServiceTo } from '../logging.servers';
import { AccountService } from '../account.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingServiceTo],
})
export class NewAccountComponent {
  constructor(
    private loggingService: LoggingServiceTo,
    private accountService: AccountService
  ) {
    accountService.updateServer.subscribe((status: string) =>
      alert('New status: ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}
