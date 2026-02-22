import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.html',
})
export class HomePage {
 slides = [
    { image: 'https://picsum.photos/400/300?random=1', title: 'Slide 1', description: 'Descripción 1' },
    { image: 'https://picsum.photos/400/300?random=2', title: 'Slide 2', description: 'Descripción 2' },
    { image: 'https://picsum.photos/400/300?random=3', title: 'Slide 3', description: 'Descripción 3' },
    { image: 'https://picsum.photos/400/300?random=4', title: 'Slide 4', description: 'Descripción 4' }
  ];

  currentIndex = 0;
  depth = 400;

  constructor() {
    this.updateDepth();
  }

  @HostListener('window:resize')
  updateDepth() {
    const width = window.innerWidth;

    if (width < 640) {
      this.depth = 220;   // móvil
    } else if (width < 1024) {
      this.depth = 320;   // tablet
    } else {
      this.depth = 450;   // desktop
    }
  }

  get angle() {
    return 360 / this.slides.length;
  }

  get currentRotation() {
    return -(this.currentIndex * this.angle);
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }
}
