import { Component, OnInit, Input } from '@angular/core';
import { APIService } from '../../../../api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {

  @Input() public thermostat;

  public key;
  public identifier;

  public temperatureOptions = [20,20.5,21,21.5,22,22.5,23,23.5,24];

  constructor(private _APIService: APIService,
                private _router: Router,
                private _route: ActivatedRoute) { }

  ngOnInit() {
    this.key = (this._route.snapshot.paramMap.get('key'));
    this.identifier = (this._route.snapshot.paramMap.get('identifier'));
  }

  setTemperature(temperature){
      this._APIService.setTemperature(this.key, this.identifier, temperature)
  }

}
