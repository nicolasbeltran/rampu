import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ScrollToConfigOptions, ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { DummyApiService } from '../services/dummy-api.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {

  usuarios: any;
  usuarioPerfil: any;

  constructor(private router: Router, private scrollToService: ScrollToService, private dummyApiService: DummyApiService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const config: ScrollToConfigOptions = {
          target: event.urlAfterRedirects.replace('/', '#')
        };
        setTimeout(() => {
          this.scrollToService.scrollTo(config);
        }, 100);
      }
    });
  }

  ngOnInit(): void {
  }

  clickNuestrosServicios(){
    this.dummyApiService.getUsers().subscribe(
      res => {
        this.usuarios = res.data;
      }
    )
  }

  damePerfilUsuario(user){
    this.dummyApiService.getUserProfile(user.id).subscribe(
      res => {
        this.usuarioPerfil = res;
      }
    )
  }

}
