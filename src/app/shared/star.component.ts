import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
    cropWidth: number;
    @Input() rating!: number;
    @Output() ratingCliked: EventEmitter<string> = new EventEmitter();

    constructor(){
        this.rating = 0;
        this.cropWidth = 75;
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.cropWidth = this.rating * 75/5;
    }

    onClick(): void {
        console.log(`Product with rating ${this.rating} was clicked!`);
        this.ratingCliked.emit(`Product with rating ${this.rating} was clicked!`)
    }
}