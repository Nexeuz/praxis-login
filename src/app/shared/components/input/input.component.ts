import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'input[praxis-input]',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
