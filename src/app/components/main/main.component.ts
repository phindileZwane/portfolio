import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  showDuplicate: boolean = false
  menuItems: any[] = [
    { label: 'Home', id:'home', route: '/main/home' },
    { label: 'About',id:'about', route: '/main/about' },
    { label: 'Services',id:'services', route: '/main/services' },
    { label: 'Projects',id:'project', route: '/main/project' },
    { label: 'Contacts',id:'contact', route: '/main/contact' },
    { label: 'Views',id:'views', route: '/main/views' },
  ]

  constructor(private router: Router) {
    this.listenToRouteChanges()
  }

  listenToRouteChanges(): void {
    this.router.events.subscribe((event: any) => {
      if(event instanceof NavigationEnd) {
        this.menuItems.forEach((item: any, indx: number) => {
          if(item.route === event.url) {
            this.showDuplicate = true
          }
        })
      }
    })
  }

  scrollTo(id: any){
const element = document.getElementById(id)
element?.scrollIntoView({behavior: 'smooth'})
  }
}
