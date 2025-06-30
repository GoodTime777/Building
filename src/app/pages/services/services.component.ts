import { Component,  ContentChild,ViewChild,ElementRef } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-services',
  imports: [MatTabsModule,MatIconModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  // @ContentChild("headerFloor", {static:false})
  // headerF: ElementRef|undefined;



//   fOne(event:Event){
// console.log('click1')
//   }
  fTwo():void{
 // this.clickTest=true;
   console.log('click2')
  }


}
/////////////////////////////////////////
//display=true
//hide(){
// this.display=false
// }

//show(){
// this.display=true
// }

// toogle(){
//   this.display= !this.display
// }











/////////////////////////////////////
// const tabs = document.querySelectorAll(".tab");
// const cards = document.querySelectorAll(".card__container-content");//card-item

// tabs.forEach((tab) => {
//   tab.addEventListener("click", (e) => {
//     const tabAttribute = e.target.getAttribute("data-tab");

//     tabs.forEach((item) => {
//       item.classList.remove("active");
//     });

//     tab.classList.add("active");

//     cards.forEach((card) => {
//       const cardAttribute = card.getAttribute("data-card");

//       cardAttribute === tabAttribute
//         ? card.classList.add("active-card")
//         : card.classList.remove("active-card");
//     });
//   });
// });
