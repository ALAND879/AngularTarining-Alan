import { Component } from '@angular/core';
import { FotosService } from '../../services/fotos.service';
import { Fotos } from '../../Core/domain/fotos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent {

  fotos: Fotos[];

  constructor(private fotosService: FotosService,
    private router: Router,
  ) {
    this.getImages();
  }

  getImages() {
    this.fotosService.getImages().subscribe
    ((data)=>{
      this.fotos = data;
    });
  }

  gotoDetails(id:number) {
    this.router.navigate(['fotos/', id])
  }

}
