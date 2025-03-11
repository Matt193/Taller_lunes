import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';

@Component({
  standalone:false,
  selector: 'app-dog-list',
  templateUrl: './dog-list.page.html',
  styleUrls: ['./dog-list.page.scss'],
})
export class DogListPage implements OnInit {
  dogBreeds: any[] = [];
  filteredDogs: any[] = [];
  searchText: string = '';

  constructor(private httpService: HttpService, private router: Router) {}

  ngOnInit() {
    this.getDogBreeds();
  }

  getDogBreeds() {
    this.httpService.get('breeds').subscribe({
      next: (data) => {
        console.log("Datos de la API:", data);
        this.dogBreeds = data;
        this.filteredDogs = data;
      },
      error: (err) => console.error('Error al obtener las razas', err)
    });
  }

  goToDetail(dog: any) {
    this.router.navigate(['/dog-detail', dog.id]);
  }

  filterDogs() {
    this.filteredDogs = this.dogBreeds.filter(dog =>
      dog.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

}
