import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search',
  templateUrl: './search.component.html',
  styles: ``
})
export class SearchComponent implements OnInit, OnDestroy {

  private debouncer: Subject<string> = new Subject<string>;
  private debouncerSuscription?: Subscription;

  @Input()
  public initialValue: string = '';

  @Input()
  public placeholder: string = '';

  @Output()
  public onDebounce = new EventEmitter<string>();

  @Output()
  public onValue = new EventEmitter<string>();

  ngOnInit():void{
    this.debouncerSuscription = this.debouncer
      .pipe( debounceTime(300) )
      .subscribe( value => this.onDebounce.emit(value) )
  }

  ngOnDestroy():void{
    this.debouncerSuscription?.unsubscribe();
  }

  emitValue(term: string):void{
    this.onValue.emit(term);
  }

  onKeyPress( searchTerm: string){
    this.debouncer.next(searchTerm);
  }

}
