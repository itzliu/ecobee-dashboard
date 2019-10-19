import { Component, OnInit, Input } from '@angular/core';
import { ThermostatService } from 'src/app/thermostat.service';
import { RemoteSensor } from 'app'

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css']
})
export class SensorComponent implements OnInit {

  @Input() public sensor: RemoteSensor;

  constructor(private _ThermostatService: ThermostatService) { }

  ngOnInit() {
  }

  getTemperature(sensor: RemoteSensor) {
    let capabilities = sensor.capability
    for (let i = 0; i < capabilities.length; i++) {
      let capability = capabilities[i]
      if (capability.type === 'temperature') {
        return this._ThermostatService.ecobeeTempToDegrees(Number(capability.value))
      }
    }
    return false
  }

  getOccupancy(sensor: RemoteSensor) {
    let capabilities = sensor.capability
    for (let i = 0; i < capabilities.length; i++) {
      return capabilities[i].type === 'occupancy' && capabilities[i].value == 'true'
    }
  }

  getHumidity(sensor: RemoteSensor) {
    let capabilities = sensor.capability
    for (let i = 0; i < capabilities.length; i++) {
      let capability = capabilities[i]
      if (capability.type === 'humidity') {
        return capability.value
      }
    }
    return false
  }

}
