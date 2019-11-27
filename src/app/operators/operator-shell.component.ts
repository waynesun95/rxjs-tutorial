import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-operator-shell',
  templateUrl: './operator-shell.component.html',
  styleUrls: ['./operator-shell.component.scss']
})
export class OperatorShellComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
