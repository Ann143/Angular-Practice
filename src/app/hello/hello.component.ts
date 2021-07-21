import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector:"hello",
    template:`<h3 (click)="onClick.emit('Neo')">This is the hello component. I recieved a string '{{myFriend}}' from the app component. CLick me to se the effect</h3>`
})
export class HelloComponent {
    @Input() myFriend: string;
    @Output() onClick = new EventEmitter();
}