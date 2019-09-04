import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  testando = "Valor vindo do component que retorna um valor";
  urlimg: string = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80';
  
  constructor() {

   }

   getRunApp(){
     return "Método que retorna um valor";
   }

  ngOnInit() {
  }

}
