import { Component } from '@angular/core';
import {} from 'googlemaps';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.scss'],
})
export class SubmissionsComponent {
  @ViewChild('map') mapElement: any;
  map: any = google.maps.Map;

  ngOnInit(): void {
    const mapProperties = {
      center: new google.maps.LatLng(41.8781, -87.6298),
      zoom: 11,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    setTimeout(() => {
      this.map = new google.maps.Map(
        this.mapElement.nativeElement,
        mapProperties
      );
      this.createMarker();
    }, 500);
  }

  createMarker() {
    // list of hardcoded positions markers
    var myLatLngList = {
      myLatLng: [
        {
          lat: 41.8781,
          lng: -87.6298,
        },
        {
          lat: 41.7581,
          lng: -87.6328,
        },
        {
          lat: 41.9581,
          lng: -87.6698,
        },
        {
          lat: 41.8581,
          lng: -87.7398,
        },
      ],
    };

    //iterate latLng and add markers
    for (const data of myLatLngList.myLatLng) {
      var marker = new google.maps.Marker({
        position: data,
        map: this.map,
        // icon: '<mat-icon> insert_drive_file</mat-icon>',
        title: 'markers',
      });
    }
  }
}
