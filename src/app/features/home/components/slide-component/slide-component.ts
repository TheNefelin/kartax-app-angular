import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-slide-component',
  imports: [
    CommonModule,
  ],
  templateUrl: './slide-component.html',
})
export class SlideComponent {
  slides = [
    { image: 'https://res.cloudinary.com/dsvkbe0mc/image/upload/v1770865944/kartax/e4yn3hccdu681wgyxxlf.webp', title: 'Cliente 1', description: 'Descripción 1' },
    { image: 'https://res.cloudinary.com/dsvkbe0mc/image/upload/v1770865439/kartax/kywuqlmxecopg7l03qof.webp', title: 'Cliente 2', description: 'Descripción 2' },
    { image: 'https://res.cloudinary.com/dsvkbe0mc/image/upload/v1770865894/kartax/jbt4ypvu6yrt05n4klyp.webp', title: 'Cliente 3', description: 'Descripción 3' },
    { image: 'https://res.cloudinary.com/dsvkbe0mc/image/upload/v1771212326/kartax/ysar7t9chocccdv6yxax.webp', title: 'Cliente 4', description: 'Descripción 4' }
  ];

  currentIndex = 0;
  depth = 400;

  // Drag
  isDragging = false;
  startX = 0;
  dragOffset = 0;

  // Autoplay
  autoPlayInterval: any;
  autoPlayDelay = 3000;

  ngOnInit() {
    this.updateDepth();
    this.startAutoPlay();
  }

  ngOnDestroy() {
    clearInterval(this.autoPlayInterval);
  }

  @HostListener('window:resize')
  updateDepth() {
    const width = window.innerWidth;

    if (width < 640) this.depth = 220;
    else if (width < 1024) this.depth = 320;
    else this.depth = 450;
  }

  get angle() {
    return 360 / this.slides.length;
  }

  get transformStyle() {
    const baseRotation = -(this.currentIndex * this.angle);
    return `rotateY(${baseRotation + this.dragOffset}deg)`;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  // SWIPE

  onPointerDown(event: PointerEvent) {
    this.isDragging = true;
    this.startX = event.clientX;
    this.dragOffset = 0;
    this.pauseAutoPlay();
  }

  onPointerMove(event: PointerEvent) {
    if (!this.isDragging) return;

    const delta = event.clientX - this.startX;
    this.dragOffset = delta * 0.50;
  }

  onPointerUp() {
    if (!this.isDragging) return;

    if (this.dragOffset > 40) this.prev();
    if (this.dragOffset < -40) this.next();

    this.dragOffset = 0;
    this.isDragging = false;
    this.resumeAutoPlay();
  }

  // AUTOPLAY

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.next();
    }, this.autoPlayDelay);
  }

  pauseAutoPlay() {
    clearInterval(this.autoPlayInterval);
  }

  resumeAutoPlay() {
    clearInterval(this.autoPlayInterval);
    this.startAutoPlay();
  }
}
