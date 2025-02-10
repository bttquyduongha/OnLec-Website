import { Component, OnInit } from '@angular/core';
import { HowtoService } from '../../../core/services/home/howto/howto.service';  // Import HowtoService
import { StepsContent } from './steps/steps-content';  // Import StepsContent interface
import { StepsComponent } from './steps/steps.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-howto',
  imports: [CommonModule, StepsComponent],
  templateUrl: './howto.component.html',
  styleUrls: ['./howto.component.scss', '../home.component.scss']
})
export class HowtoComponent implements OnInit {
  stepsContent: StepsContent | undefined;  // Initialize stepsContent

  constructor(private howtoService: HowtoService) {}

  ngOnInit(): void {
    // Fetch steps data when the component initializes
    this.loadSteps();
  }

  async loadSteps(): Promise<void> {
    try {
      const steps = await this.howtoService.getAllSteps();  // Get all steps data
      if (steps.length > 0) {
        this.stepsContent = steps[0];  // Assuming you want to use the first set of steps
      }
    } catch (error) {
      console.error('Error fetching steps data:', error);
    }
  }
}
