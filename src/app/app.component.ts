import {Component, OnInit} from '@angular/core';
import {AppService} from './app.service';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-pwa-app';

  joke: any;

  constructor(private data: AppService, private updates: SwUpdate) {
    updates.available.subscribe(event => {
      updates.activateUpdate().then(() => document.location.reload());
    });
  }

  ngOnInit() {
    this.data.gimmeJokes().subscribe(res => {
      console.log(res);
      this.joke = res;
    });
  }
}
