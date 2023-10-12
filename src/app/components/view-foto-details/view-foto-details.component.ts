import { Component, OnInit } from '@angular/core';
import { Fotos } from '../../Core/domain/fotos';
import { ActivatedRoute, Router } from '@angular/router';
import { FotosService } from 'src/app/services/fotos.service';

@Component({
  selector: 'app-view-foto-details',
  templateUrl: './view-foto-details.component.html',
  styleUrls: ['./view-foto-details.component.css']
})
  
export class ViewFotoDetailsComponent {

  foto: Fotos;

  constructor(
    
    private route: ActivatedRoute,  //Indica la ruta actual
    private router: Router,   //Permite ir a otra ruta :D
    private fotosService:FotosService,
  ) { }

  ngOnInit(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.fotosService.getImage(Number(id)).subscribe((foto: Fotos) => {
      this.foto = foto;
    })
  }

}
