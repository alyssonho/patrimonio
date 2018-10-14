import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  MsgFooter = 'Todos os direitos reservados a AR Software.';
  constructor() { }

  ngOnInit() {
  }

}
