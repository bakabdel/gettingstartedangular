import {
  Component,
  OnChanges,
  Output,
  Input,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "pm-star",
  templateUrl: "./star.component.html",
  styleUrls: ["./star.component.css"]
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  @Output() clikedStar: EventEmitter<string> = new EventEmitter<string>();
  starWidth: number;
  ngOnChanges(): void {
    this.starWidth = (this.rating * 75) / 5;
  }
  onClickStar() {
    this.clikedStar.emit(`the product has ${this.rating} stars `);
  }
}
