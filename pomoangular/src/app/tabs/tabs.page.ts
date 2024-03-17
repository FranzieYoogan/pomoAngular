import { Component, EnvironmentInjector, OnInit, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage implements OnInit {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({ triangle, ellipse, square });
  }
  ngOnInit(): void {
    const pomoTitle:any = document.getElementById('pomoTitle')
    const pomoIconStyle:any = document.getElementById('pomoIconStyle')

    const aboutTitle:any = document.getElementById('aboutTitle')
    const aboutIconStyle:any = document.getElementById('aboutIconStyle')


    if(window.location.href == "http://localhost:4200/tabs/pomo") {
      pomoTitle.style.color = '#800080'
      pomoIconStyle.src = '/assets/img/pomoIcons/timer2.png'
    }

    if(window.location.href != "http://localhost:4200/tabs/pomo") {
      pomoTitle.style.color = 'gray'
      pomoIconStyle.src = '/assets/img/pomoIcons/timer.png'
    }

    if(window.location.href == "http://localhost:4200/tabs/about") {
      aboutTitle.style.color = '#800080'
      aboutIconStyle.src = '/assets/img/aboutIcons/about2.png'
    }

    if(window.location.href != "http://localhost:4200/tabs/about") {
      aboutTitle.style.color = 'gray'
      aboutIconStyle.src = '/assets/img/aboutIcons/about.png'
    }

 
  }

  pomoEvent() {

    window.location.href = 'http://localhost:4200/tabs/pomo'

  }

  aboutEvent() {

    window.location.href = 'http://localhost:4200/tabs/about'

  }



}
