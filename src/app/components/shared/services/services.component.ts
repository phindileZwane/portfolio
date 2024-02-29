import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
 //This are our Icons
 miniCards:any[] = [
  {label: 'Web development', description:'asdfvcswerfvdcccccfvgdccdfvg.', icon: 'view_in_ar'},
  {label: 'Sales', description: 'zsredtfyuhijokhbgfcxdcvfjk.', icon: 'trending_up'},
  {label: 'Technical', description: 'zsdxfcghjikljhngxfvghuj', icon: 'troubleshoot'},
  {label: 'Customer Support', description: 'aazsdjilkhbgtdcfghyj', icon: 'support_agent'},

]

title = 'ng2-charts-demo';

// Doughnut
formatSubtitle = (percent: number) : string => {
  if(percent >= 100){
    return "Congratulations!"
  }else if(percent >= 50){
    return "Half"
  }else if(percent > 0){
    return "Just began"
  }else {
    return "Not started"
  }
}


}
