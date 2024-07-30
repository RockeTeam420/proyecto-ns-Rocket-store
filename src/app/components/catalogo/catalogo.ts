import { Component } from '@angular/core'
import { Router } from "@angular/router";
import { SegmentedBar, SegmentedBarItem, SelectedIndexChangedEventData } from "@nativescript/core/ui/segmented-bar";


@Component({
    styleUrls: ['./catalogo.css'],
  selector: 'catalogo',
  templateUrl: './catalogo.html',
})

export class CatalogoComponent {
    ver_item0: boolean = true;
    ver_item1: boolean = false;
    ver_item2: boolean = false;
    ver_item3: boolean = false;

    mySegmentedBarItems: Array<SegmentedBarItem> = [];
    items = ['Hombre', 'Mujer', 'Niño', 'Niña']

    public constructor(private router: Router) {
    // Use the component constructor to inject providers.
        for (let i = 0; i < 4; i++) {
            const item = new SegmentedBarItem();
            item.title = this.items[i];
            this.mySegmentedBarItems.push(item);
        }
    }

    public onSelectedIndexChange(args: SelectedIndexChangedEventData) {
        const segmentedBar = args.object as SegmentedBar;

        console.log('SegmentedBar index changed to:', segmentedBar.selectedIndex)
        this.ver_item0 = false;
        this.ver_item1 = false;
        this.ver_item2 = false;
        this.ver_item3 = false;
        if (segmentedBar.selectedIndex == 0){
            this.ver_item0 = true;
        }
        else if (segmentedBar.selectedIndex == 1){
            this.ver_item1 = true;
        }
        else if (segmentedBar.selectedIndex == 2){
            this.ver_item2 = true;
        }
        else if (segmentedBar.selectedIndex == 3){
            this.ver_item3 = true;
        }
        else{
            console.log("Ninguno")
        }

    }
    
    public onTap(){
        this.router.navigate(["home"]);
      }
}
