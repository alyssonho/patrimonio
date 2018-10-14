import { Component, OnInit } from '@angular/core';

import { ItemService } from 'src/app/item.service';

@Component({
  selector: 'app-item-cadastro',
  templateUrl: './item-cadastro.component.html',
  styleUrls: ['./item-cadastro.component.css']
})
export class ItemCadastroComponent implements OnInit {

  itens=[

  ];
  
  
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.Consultar();
  }
  Consultar(){
    this.itemService.listar().subscribe(dados => this.itens = dados);
  }
}


