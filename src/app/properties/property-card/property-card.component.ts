import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";


@Component({
    selector:'app-property-card',
    templateUrl:'property-card.component.html',
    styleUrl:'property-card.component.css',
    standalone:true,
    imports: [RouterOutlet],
})


export class PropertyCardComponet {
    property : any = {
        "Id" : 1,
        "Name": "Birla House",
        "Type" : "House",
        "Price": 12000 
    }
}