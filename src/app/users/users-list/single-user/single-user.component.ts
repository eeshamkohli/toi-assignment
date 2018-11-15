import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  @Input() user:any;
  @Output() userSelected = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.userSelected.emit();
  }

}
