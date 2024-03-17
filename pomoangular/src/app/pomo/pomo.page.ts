import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderPage } from '../header/header.page';

@Component({
  selector: 'app-pomo',
  templateUrl: './pomo.page.html',
  styleUrls: ['./pomo.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,HeaderPage]
})
export class PomoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  startEvent() {

    let min:any = document.getElementById('min')
    let sec:any = document.getElementById('sec')

    if(min.value >= 0 && min.value <= 15 && sec.innerHTML >1) {

      sec.innerHTML--

      if(sec.innerHTML == 1) {

        min.value--
  
        sec.innerHTML = 10
  
      }

      
    if(min.value == -1) {

      min.value = '0' +0
      sec.innerHTML ='0' + 0

    }

setInterval(this.startEvent,1000)
    
    }
   




  }

}
