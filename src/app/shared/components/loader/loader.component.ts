import { Component } from '@angular/core';

@Component({
  selector: 'shared-loader',
  templateUrl: './loader.component.html',
  styles: `
    .spinner-container{
      position: fixed;
      bottom: 16px;
      right: 16px;
      background-color: black;
      color: white;
      border-radius: 50px;
      padding: 8px 12px;
      display: flex;
      align-items: center;
      box-shadow: 0 3px 05px rgba(0,0,0,.2);
    }
    span{
      margin-left: 16px;
    }
  `

})
export class LoaderComponent {

}
