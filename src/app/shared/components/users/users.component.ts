import { Component, effect, inject, OnDestroy, signal } from '@angular/core';
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
  private intervalId: any;

  // public usersService = inject(UsersService);

  refresh = signal<boolean>(false);

  constructor(public usersService: UsersService) {
    // effect(()=>{
    //   console.log("refresh signal changed:", this.refresh()); 
    // })
  }

  ngOnInit() {
    // this.usersService.getUsers(); 
    this.intervalId = setInterval(() => {
      this.usersService.getUsers();
    }, 10000);
  }

  // toggleRefresh() {
  //   this.refresh.set(!this.refresh());
  // }


  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
