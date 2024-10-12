import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "temperature-converter",
  templateUrl: "./temperatureConverter.component.html",
  styleUrls: ["./temperatureConverter.component.scss"],
  standalone:true,
  imports:[FormsModule, CommonModule]
})
export class TemperatureConverter implements OnInit {
  c: string = "";
  f: string = "";

  constructor() {}

  ngOnInit() {}

  onChange(value: string, type: "c" | "f") {
    if (value === "") {
      this.c = "";
      this.f = "";
      return;
    }
  
    const temperature = parseFloat(value);
    if (isNaN(temperature)) {
      return;
    }
  
    if (type === "c") {
      this.f = ((temperature * 9) / 5 + 32).toFixed(1);
    } else {
      this.c = (((temperature - 32) * 5) / 9).toFixed(1);
    }
  }
  
}

