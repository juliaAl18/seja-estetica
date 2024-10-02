import { Component } from '@angular/core';

@Component({
  selector: 'app-antes-depois',
  templateUrl: './antes-depois.component.html',
  styleUrls: ['./antes-depois.component.scss']
})
export class AntesDepoisComponent {

  isPaused = false;

  items = [
    { beforeImg: 'https://static.wixstatic.com/media/9a9997_9f710a1ac2b44a108b722930c3649f2d~mv2.png/v1/fill/w_451,h_451,al_c,q_85,enc_auto/9a9997_9f710a1ac2b44a108b722930c3649f2d~mv2.png', afterImg: 'https://static.wixstatic.com/media/9a9997_9f710a1ac2b44a108b722930c3649f2d~mv2.png/v1/fill/w_451,h_451,al_c,q_85,enc_auto/9a9997_9f710a1ac2b44a108b722930c3649f2d~mv2.png' },
    { beforeImg: 'https://static.wixstatic.com/media/9a9997_8e8f3e63182c48918503ac1bf40bf581~mv2.png/v1/fill/w_541,h_541,al_c,lg_1,q_85/9a9997_8e8f3e63182c48918503ac1bf40bf581~mv2.png', afterImg: 'https://static.wixstatic.com/media/9a9997_8e8f3e63182c48918503ac1bf40bf581~mv2.png/v1/fill/w_541,h_541,al_c,lg_1,q_85/9a9997_8e8f3e63182c48918503ac1bf40bf581~mv2.png' },
    { beforeImg: 'https://static.wixstatic.com/media/9a9997_50d82f93674a4776b420b1995c1a9c70~mv2.png/v1/fill/w_451,h_451,al_c,q_85,enc_auto/9a9997_50d82f93674a4776b420b1995c1a9c70~mv2.png', afterImg: 'https://static.wixstatic.com/media/9a9997_50d82f93674a4776b420b1995c1a9c70~mv2.png/v1/fill/w_451,h_451,al_c,q_85,enc_auto/9a9997_50d82f93674a4776b420b1995c1a9c70~mv2.png' }
  ];

  pauseCarousel() {
    this.isPaused = true;
  }

  resumeCarousel() {
    this.isPaused = false;
  }

  currentSlide = 0;
  autoSlideInterval: any;

  ngOnInit(): void {
    this.startCarousel();
  }

  ngOnDestroy(): void {
    clearInterval(this.autoSlideInterval);
  }

  startCarousel(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.items.length;
    const carousel = document.querySelector('.carousel') as HTMLElement;
    carousel.style.transform = `translateX(-${this.currentSlide * 100}%)`;
  }

}
