import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Howl, Howler} from 'howler';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  public sound = new Howl({
    src: ['https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3']
  });

  constructor(private activatedRoute: ActivatedRoute) { }

  public play(){
    console.log("play")
    this.sound.play();
  }

  public pause(){
    console.log("pause")
    this.sound.pause();
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}

/*
https://howlerjs.com/
https://github.com/goldfire/howler.js#quick-start
https://www.npmjs.com/package/howler,
https://stackblitz.com/edit/howler-player?file=helpers%2FHowlerPlayer.ts
https://file-examples.com/index.php/sample-audio-files/sample-mp3-download/
*/