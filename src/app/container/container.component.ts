import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ContainerServiceService } from '../container-service.service';
import { Container } from './container';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  public conteiners: Container[] = new Array();

  constructor(public containerService: ContainerServiceService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getContainers();
  }

  public getContainers(): void {
    this.containerService.getContainers().subscribe((response: Container[]) => {
      response.sort(function(a, b) {
        var CA = a.cliente.toUpperCase();
        var CB = b.cliente.toUpperCase();  
        if (CA < CB) {
          return -1;
        }
        if (CA > CB) {
          return 1;
        }
        return 0
      }) 
      this.conteiners = response;
      console.log(response);      
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    })
  }

}
