import { Component } from '@angular/core';
import { Md5 } from 'ts-md5/';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'resume';

  Md5 = Md5;
}
