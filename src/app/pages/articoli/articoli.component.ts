import { Component, Input, OnInit } from '@angular/core';

import { ArticoliService } from 'src/services/data/articoli.service';
import { IArticoli, IIva } from 'src/app/models/Articoli';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, map, of } from 'rxjs';

@Component({
  selector: 'app-articoli',
  templateUrl: './articoli.component.html',
  styleUrls: ['./articoli.component.css']
})
export class ArticoliComponent implements OnInit {



  articoli$: IArticoli[]  = []
  ivaList: IIva[]  = []
  errore : string = "";

  pagina : number = 1;
  righe : number = 10;

  filter$: Observable<string | null> = of("");
  filter: string | null = "";
  codArt: string | null = "";

  filterType: number = 0;

  constructor(private articoliService: ArticoliService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    // this.filter$ = this.route.queryParamMap.pipe(
    //   map((params: ParamMap) => params.get('filter')),
    // );

    // this.filter$.subscribe(param => (this.filter = param));

    // if (this.filter) {
    //   this.getArticoli(this.filter);
    // }

  }

  refresh = () => {
    if (this.filter) {
      this.getArticoli(this.filter);
    }
  }


  getIva() {
    // Chiama il metodo del servizio che restituisce le aliquote IVA
    this.articoliService.getIva()
      .subscribe(
        (data) => {
          // I dati restituiti sono assegnati all'array
          this.ivaList = data;
        } 
      );
  
    // Restituisce l'array popolato
    return this.ivaList;
  
  }

  getArticoli = (filter : string) => {

    this.articoli$ = [];

    if (this.filterType === 0) {
      this.articoliService.getArticoliByCode(filter).subscribe({
        next: this.handleResponse.bind(this),
        error: this.handleError.bind(this)
      });
    }
    else if (this.filterType === 1)
    {
      this.articoliService.getArticoliByDesc(filter).subscribe({
        next: this.handleResponse.bind(this),
        error: this.handleError.bind(this)
      });
    }
    else if (this.filterType === 2)
    {
      this.articoliService.getArticoliByEan(filter).subscribe({
        next: this.handleResponse.bind(this),
        error: this.handleError.bind(this)
      });
    }
  }

  handleResponse(response : any) {

    if (this.filterType === 0 || this.filterType === 2)
    {
      let newArray : IArticoli[] = [...this.articoli$, response];
      this.articoli$ = newArray;
    }
    else
    {
      this.articoli$ = response;
    }

    this.filterType = 0;
  }

  handleError(error: any) {
    if (this.filter && this.filterType === 0) {
      this.filterType = 1;
      this.getArticoli(this.filter);
      console.log("primo");
    }
    else if (this.filter && this.filterType === 1) {
      this.filterType = 2;
      this.getArticoli(this.filter);
      console.log("secondo")

    }
    else {
      console.log(error);
      this.errore = error.error.messaggio;
      
      this.filterType = 0;
    }

  }


  deleteArticle = (CodArt : string) => {
    console.log(`eliminazione articolo ${CodArt}`)
    this.articoliService.eliminaArticolo(CodArt)
    .subscribe({
      next: (res) => {
        alert("fatto")
      },
      error: (err) => { 
        // gestire errore 
      }
    });

  }

 
  Modifica = (CodArt: string) => {
    console.log(`Modifica articolo ${CodArt}`);
    this.router.navigate(['getstart',CodArt]);
  }

  VaiSu = () => {
    this.router.navigate(['getstart'])
  }

}