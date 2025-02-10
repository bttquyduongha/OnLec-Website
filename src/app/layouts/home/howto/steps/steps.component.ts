import {
  Component,
  Input,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { StepsContent } from './steps-content'; // Interface
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-steps',
  imports: [CommonModule],
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss', '../howto.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class StepsComponent implements AfterViewInit, OnDestroy {
  @Input() stepsContent!: StepsContent; // Input dữ liệu steps
  activeStep: number = 1; // Bước mặc định

  @ViewChild('swiperContainer', { static: false }) swiperContainer!: ElementRef; // Truy cập Swiper qua ViewChild

  swiper: any; // Để quản lý instance Swiper

  // Lắng nghe sự kiện khi nhấn vào indicator
  setActiveStep(step: number): void {
    // Cập nhật bước hiện tại
    this.activeStep = step;
    if (this.swiper) {
      // Điều hướng đến slide tương ứng
      this.swiper.slideTo(step - 1); // Điều hướng Swiper (index bắt đầu từ 0)
    }
  }

  // Lắng nghe slide thay đổi
  onSlideChange(): void {
    if (this.swiper) {
      this.activeStep = this.swiper.realIndex + 1; // Swiper index bắt đầu từ 0
    }
  }

  // Hàm được gọi sau khi view đã được render và Swiper đã khởi tạo
  ngAfterViewInit(): void {
    // Truy cập phần tử Swiper thông qua ViewChild
    const swiperElement = this.swiperContainer.nativeElement;
    this.swiper = swiperElement.swiper;

    if (this.swiper) {
      this.swiper.on('slideChange', this.onSlideChange.bind(this));
    }
  }

  ngOnDestroy(): void {
    if (this.swiper) {
      this.swiper.off('slideChange', this.onSlideChange.bind(this));
    }
  }
}
