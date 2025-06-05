import { Component, OnDestroy } from '@angular/core';
import { User } from '../../../utils/models/types';
import { UsersService } from '../../../utils/services/users.service';
import { UserCardComponent } from "../user-card/user-card.component";

@Component({
  standalone: true,
  selector: 'app-about',
  imports: [UserCardComponent],
  templateUrl: './users.component.html',
  styles: ``
})
export class AboutComponent implements OnDestroy {
  users: User[] = [];
  loading = true;
  error = false;
  private intervalId: any;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.fetchUsers();
    this.intervalId = setInterval(() => {
      this.fetchUsers();
    }, 10000);
  }

  fetchUsers() {
    this.loading = true;
    this.users = [];
    this.usersService.getUsers().subscribe({
      next: (response) => {
        this.users = response.results;
        this.loading = false;
        this.error = false;
        console.log('Users fetched successfully:', this.users);
      },
      error: (err) => {
        console.error('Error fetching users:', err);
        this.error = true;
        this.loading = false;
      }
    });
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
