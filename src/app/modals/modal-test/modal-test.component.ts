import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-modal-test',
  templateUrl: './modal-test.component.html',
  styleUrls: ['./modal-test.component.scss']
})
export class ModalTestComponent implements OnChanges {
  @Input() testingData: any;

  age: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['testingData'].firstChange) return;
    const data = changes['testingData'].currentValue;

    console.log(data);
    this.age = data.age;
  }
}
