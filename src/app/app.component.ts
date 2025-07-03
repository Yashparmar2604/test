
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives/directives.component';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DemoComponent,FormsModule,DirectivesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test';

  name: string = '';
  tempname:string='Yash';

  changename(){
    this.name=this.tempname;
  }
}


