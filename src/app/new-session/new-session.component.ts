import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-session',
  templateUrl: './new-session.component.html',
  styleUrls: ['./new-session.component.scss'],
})
export class NewSessionComponent implements OnInit {
  //Permet de faire une redirection grâce au routeur//
  constructor(private router: Router) {}
  ngOnInit(): void {}
  onContinue() {
    this.router.navigateByUrl('newtype');
  }
}
