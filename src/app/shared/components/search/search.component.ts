import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search',
  templateUrl: './search.component.html',
  styles: ``
})
export class SearchComponent {

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  emitValue(term: string):void{
    this.onValue.emit(term);
  }

}
