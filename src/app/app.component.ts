import { Component } from '@angular/core';
import { Md5 } from 'ts-md5/';
import { Skill } from './models/skill';
import { Skills } from './skills';
import { Experiences } from './experiences';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  Md5 = Md5;

  skills = Skills;
  experiences = Experiences;
}
