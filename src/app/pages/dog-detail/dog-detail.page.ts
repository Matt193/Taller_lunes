import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  standalone:false,
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.page.html',
  styleUrls: ['./dog-detail.page.scss'],
})
export class DogDetailPage implements OnInit {
  dog: any;

  constructor(private route: ActivatedRoute, private httpService: HttpService, private router: Router) {}

  ngOnInit() {
    const dogId = this.route.snapshot.paramMap.get('id');
    if (dogId) {
      this.getDogDetail(dogId);
    }
  }

  getDogDetail(id: string) {
    this.httpService.get(`breeds/${id}`).subscribe({
      next: (data) => {
        this.dog = data;
      },
      error: (err) => console.error('Error al obtener detalles del perro', err)
    });
  }

  goBack() {
    this.router.navigate(['/dog-list']);
  }
}
