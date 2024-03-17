import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HeaderPage implements OnInit {

  constructor() { }

  ngOnInit() {
    const titleHeader:any = document.getElementById('titleHeader')
    const pomoImg:any = document.getElementById('pomoImg')

    if(window.location.href == 'http://localhost:4200/tabs/pomo') {
      titleHeader.innerHTML  ='POMODORO'
      titleHeader.style.color = 'purple'
      pomoImg.src = '/assets/img/pomoIcons/timer2.png'
    }



  }

  changeLocation() {

    if(window.location.href == 'http://localhost:4200/tabs/pomo') {

      window.location.href = 'http://localhost:4200/tabs/pomo'

    }

  }

}
