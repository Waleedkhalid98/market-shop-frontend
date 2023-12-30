import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  onRiceviDati(value : string){
    console.log(value)
  }


  Persone=[
    {nome : "mario"},
    {nome : "ross"},
    {nome : "paolo"},
    {nome : "maria"},
  ]

  click(){
   
    this.Persone=[
      {nome : "fra"},
      {nome : "dd"},
      {nome : "paolaao"},
      {nome : "marsssaia"},
    ]
    alert(this.Persone[0].nome)

  }
}
