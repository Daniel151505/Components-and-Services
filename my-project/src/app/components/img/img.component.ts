import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  img: string = '';

  @Input()
  set changeImg(newImg: string) {
    this.img = newImg;
    console.log('changes just img =>', this.img)
  }

  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/default.png';
  // counter = 0;
  // counterFn: number | undefined;

  constructor() {
    // before render
    // No async -- once time
    console.log('constructor', 'imgValue =>', this.img);
    this.img = 'asas'
  }

  ngOnChanges(changes: SimpleChanges) {
    // before -- duranting render
    // changes inputs -- times
    console.log('ngOnChanges', 'imgValue =>', this.img);
    console.log('changes', changes)
  }

  ngOnInit(): void {
    // before render
    // async - fetch -- once time
    console.log('ngOnInit', 'imgValue =>', this.img);
    // this.counterFn = window.setInterval(() => {
    //   this.counter += 1;
    //   console.log('run counter');
    // }, 1000);
  }

  ngAfterViewInit(): void {
    // after render
    // handler children
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    // delete -- once time
    console.log('ngOnDestroy');
    // window.clearInterval(this.counterFn)
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('Hijo')
    this.loaded.emit(this.img);
  }

}
