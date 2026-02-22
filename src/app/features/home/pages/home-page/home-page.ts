import { Component, HostListener } from '@angular/core';
import { SlideComponent } from "@features/home/components/slide-component/slide-component";

@Component({
  selector: 'app-home-page',
  imports: [SlideComponent],
  templateUrl: './home-page.html',
})
export class HomePage {
 slides = [
    { image: 'https://res.cloudinary.com/dsvkbe0mc/image/upload/v1770865944/kartax/e4yn3hccdu681wgyxxlf.webp', title: 'Slide 1', description: 'Descripción 1' },
    { image: 'https://res.cloudinary.com/dsvkbe0mc/image/upload/v1770865439/kartax/kywuqlmxecopg7l03qof.webp', title: 'Slide 2', description: 'Descripción 2' },
    { image: 'https://res.cloudinary.com/dsvkbe0mc/image/upload/v1770865894/kartax/jbt4ypvu6yrt05n4klyp.webp', title: 'Slide 3', description: 'Descripción 3' },
    { image: 'https://res.cloudinary.com/dsvkbe0mc/image/upload/v1771212326/kartax/ysar7t9chocccdv6yxax.webp', title: 'Slide 4', description: 'Descripción 4' }
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
