import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'app-panelcards',
  templateUrl: './panelcards.component.html',
  styleUrls: ['./panelcards.component.scss']
})
export class PanelcardsComponent implements OnInit {

  public cards : Card[];

  constructor() {

    this.cards = [
      new Card('../assets/img/img1.jpg' , 'title card' , 'description card , Pellentesque vitae interdum dolor. Pellentesque tristique rhoncus ipsum vitae commodo. Proin aliquam iaculis magna, sit amet maximus leo molestie '),
      new Card('../assets/img/img2.jpg' , 'title card' , 'description card , Pellentesque vitae interdum dolor. Pellentesque tristique rhoncus ipsum vitae commodo. Proin aliquam iaculis magna, sit amet maximus leo molestie '),
      new Card('../assets/img/img3.jpg' , 'title card' , 'description card , Pellentesque vitae interdum dolor. Pellentesque tristique rhoncus ipsum vitae commodo. Proin aliquam iaculis magna, sit amet maximus leo molestie '),
      new Card('../assets/img/img4.jpg' , 'title card' , 'description card , Pellentesque vitae interdum dolor. Pellentesque tristique rhoncus ipsum vitae commodo. Proin aliquam iaculis magna, sit amet maximus leo molestie '),
      new Card('../assets/img/img5.jpg' , 'title card' , 'description card , Pellentesque vitae interdum dolor. Pellentesque tristique rhoncus ipsum vitae commodo. Proin aliquam iaculis magna, sit amet maximus leo molestie '),
      new Card('../assets/img/img6.jpg' , 'title card' , 'description card , Pellentesque vitae interdum dolor. Pellentesque tristique rhoncus ipsum vitae commodo. Proin aliquam iaculis magna, sit amet maximus leo molestie '),
      new Card('../assets/img/img7.jpg' , 'title card' , 'description card , Pellentesque vitae interdum dolor. Pellentesque tristique rhoncus ipsum vitae commodo. Proin aliquam iaculis magna, sit amet maximus leo molestie '),
      new Card('../assets/img/img2.jpg' , 'title card' , 'description card , Pellentesque vitae interdum dolor. Pellentesque tristique rhoncus ipsum vitae commodo. Proin aliquam iaculis magna, sit amet maximus leo molestie '),
      new Card('../assets/img/img3.jpg' , 'title card' , 'description card , Pellentesque vitae interdum dolor. Pellentesque tristique rhoncus ipsum vitae commodo. Proin aliquam iaculis magna, sit amet maximus leo molestie '),
      new Card('../assets/img/img4.jpg' , 'title card' , 'description card , Pellentesque vitae interdum dolor. Pellentesque tristique rhoncus ipsum vitae commodo. Proin aliquam iaculis magna, sit amet maximus leo molestie '),
      new Card('../assets/img/img5.jpg' , 'title card' , 'description card , Pellentesque vitae interdum dolor. Pellentesque tristique rhoncus ipsum vitae commodo. Proin aliquam iaculis magna, sit amet maximus leo molestie '),
      new Card('../assets/img/img6.jpg' , 'title card' , 'description card , Pellentesque vitae interdum dolor. Pellentesque tristique rhoncus ipsum vitae commodo. Proin aliquam iaculis magna, sit amet maximus leo molestie '),
      new Card('../assets/img/img1.jpg' , 'title card' , 'description card , Pellentesque vitae interdum dolor. Pellentesque tristique rhoncus ipsum vitae commodo. Proin aliquam iaculis magna, sit amet maximus leo molestie '),
      new Card('../assets/img/img2.jpg' , 'title card' , 'description card , Pellentesque vitae interdum dolor. Pellentesque tristique rhoncus ipsum vitae commodo. Proin aliquam iaculis magna, sit amet maximus leo molestie ')
    ];

  }

  ngOnInit() {
  }

}
