import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DemoService } from '../services/demo.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {

  salary:number=0;
  finalsalary:number=0;

  calculatesalary(){

    this.finalsalary=this.salary*12;

  }

    constructor(private demoService: DemoService) {}

  ngOnInit() {
    this.demoService.fetchData();
  }

}
