import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  @Input() list: string;

  constructor() {
    this.list = 'Super hero list';
  }

  ngOnInit() {
  }

}
