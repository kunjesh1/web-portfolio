import { Component, OnInit, ViewChild } from '@angular/core';
import Typewriter from 't-writer.js'

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  @ViewChild('tw', { static: true }) typewriterElement;
  @ViewChild('tw1', { static: true }) typewriterElement1;

  constructor() { }

  ngOnInit() {

    const target = this.typewriterElement.nativeElement;
    const target1 = this.typewriterElement1.nativeElement;

    const writer = new Typewriter(target, {
      typeColor: 'white'
    });

    const writer1 = new Typewriter(target1, {
      typeColor: 'white',
      loop: true
    });

    writer
      .type('Kunjesh')
      .rest(500)
      .then(writer.start.bind(writer))
      .start();


    writer1
      .type("ANGULAR")
      .rest(500)
      .clear()
      .changeTypeColor('white')
      .type("EXPRESS.JS")
      .rest(500)
      .clear()
      .changeTypeColor('white')
      .type("NODE.JS")
      .rest(500)
      .clear()
      .changeTypeColor('white')
      .type("PYTHON")
      .rest(500)
      .clear()
      .then(writer1.start.bind(writer1))
      .start();

  }



}
