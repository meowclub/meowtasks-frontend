import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from '../../components/loading/loading.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [RouterModule, LoadingComponent, ButtonComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit {
  public token: string|null = '';
  public loading: boolean = true

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    
    setTimeout(() => {
      this.loading = false;
    }, 100);
  }
}
