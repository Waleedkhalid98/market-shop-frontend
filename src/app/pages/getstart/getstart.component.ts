import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IArticoli, ICat, IIva } from 'src/app/models/Articoli';
import { ArticoliService } from 'src/services/data/articoli.service';

@Component({
  selector: 'app-getstart',
  templateUrl: './getstart.component.html',
  styleUrls: ['./getstart.component.scss']
})
export class GetstartComponent implements OnInit {
  title : string = "Modifica Articoli";

  CodArt: string = '';
  Iva: IIva[] = [];
  Cat: ICat[] = [];
  Ean: string = '';
  

  articolo: IArticoli  = {
    codArt: '',
    descrizione: '',
    um: '',
    codStat: '',
    pzCart: 0,
    pesoNetto: 0,
    prezzo: 0,
    idStatoArt: '1',
    desStatoArt: '',
    dataCreazione: new Date(),
    imageUrl: '',
    iva: {idIva: 0, descrizione: '', aliquota:0},
    famAssort: {id : -1, descrizione: ''},
    barcode: [] 
  };
  


  constructor(private route: ActivatedRoute, private articoliService: ArticoliService) { }

  ngOnInit(): void {

    this.CodArt =  this.route.snapshot.params['codart'];
    console.log("Selezionato articolo " + this.CodArt);

    this.articoliService.getArticoliByCode(this.CodArt).subscribe({
      next: this.handleResponse.bind(this),
      error: this.handleError.bind(this)
    });

    this.articoliService.getIva().subscribe(
      response => {
        this.Iva = response;
        console.log(response);
      }
    )

    this.articoliService.getCat().subscribe(
      response => {
        this.Cat = response;
        console.log(response);
      }
    )

  }

  handleResponse(response : any) {
    this.articolo = response;

    this.Ean = (this.articolo.barcode) ? this.articolo.barcode[0].barcode : "";

    console.log(this.articolo);
  }

  handleError(error: any) {
    console.log(error);
  }


  salva = () => {
    console.log(this.articolo )

    this.articoliService.updArticolo(this.articolo).subscribe(
      response => {
        console.log(response)
      }
    )
  }

}
