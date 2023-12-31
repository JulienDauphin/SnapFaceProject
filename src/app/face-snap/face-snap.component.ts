import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap-model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit{
@Input() faceSnap!: FaceSnap;
  buttonText! : string;

  constructor(private faceSnapsService: FaceSnapsService) {}

    ngOnInit() {
      this.buttonText = "J'adore";
    }

    onSnap() {
      if (this.buttonText === "J'adore") {
        this.faceSnap.snaps++;
        this.buttonText = "Burk";
      } else {
        this.faceSnap.snaps--;
        this.buttonText = "J'adore"
      }
    }
    

    
}

