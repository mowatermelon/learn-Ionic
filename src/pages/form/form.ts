import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-form',
  templateUrl: 'form.html'
})
export class FormPage {

  constructor(public navCtrl: NavController) {
    this.musicAlertOpts = {
      title: '今天吃什么好呢',
      subTitle: '民以食为天，一定要好好想'
    };
    this.sysAlertOpts = {
      submitText:'Okay',
      cancelText:'quit'
    };
  }

  //用户日期框的设置
  public event = {
    month: '1994-01-21',
    timeStarts: '07:00',
    timeEnds: '1990-02-20'
  }

  //用于range的设置
  brightness: number = 20;
  contrast: number = 0;
  warmth: number = 1300;
  structure: any = { lower: 33, upper: 60 };
  text: number = 0;

  //用于select的设置
  eating: string = "amaze";
  music: string;
  month: string = "12";
  year: number = 1994;

  musicAlertOpts: { title: string, subTitle: string };

  sysAlertOpts: { submitText: string, cancelText: string };

  stpSelect() {
    // debugger;
    console.log('STP selected');
  }

  //slide相关设置
  slides = [
    {
      title: "Welcome to the Docs!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "assets/img/ica-slidebox-img-1.png",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/img/ica-slidebox-img-3.png",
    }
  ];
}
