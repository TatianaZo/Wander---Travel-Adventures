import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../i18n/i18n.service';
import { TranslatePipe } from '../../i18n/translate.pipe';
import { STORY_SLIDE_IMAGES, TESTIMONIAL_IDS, type TestimonialId } from '../../trip-data';

@Component({
  selector: 'app-stories',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './stories.component.html',
  styleUrl: './stories.component.scss'
})
export class StoriesComponent implements OnInit, OnDestroy {
  readonly i18n = inject(I18nService);
  readonly testimonialIds = TESTIMONIAL_IDS;
  readonly slideImages = STORY_SLIDE_IMAGES;
  testimonialIndex = 0;

  /**
   * Длительность кроссфейда (мс) - совпадает с transition в stories.component.scss.
   * Интервал = кроссфейд + пауза на чтение, чтобы картинка и текст менялись синхронно.
   */
  readonly crossfadeMs = 850;
  private readonly pauseMs = 2900;
  private readonly autoMs = this.crossfadeMs + this.pauseMs;
  private timerId: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    this.startAutoAdvance();
  }

  ngOnDestroy(): void {
    this.clearAutoAdvance();
  }

  private startAutoAdvance(): void {
    this.clearAutoAdvance();
    this.timerId = setInterval(() => {
      this.bumpForward();
    }, this.autoMs);
  }

  private clearAutoAdvance(): void {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  private bumpForward(): void {
    this.testimonialIndex = (this.testimonialIndex + 1) % this.testimonialIds.length;
  }

  nextTestimonial(): void {
    this.bumpForward();
    this.startAutoAdvance();
  }

  prevTestimonial(): void {
    this.testimonialIndex =
      (this.testimonialIndex - 1 + this.testimonialIds.length) % this.testimonialIds.length;
    this.startAutoAdvance();
  }

  goTestimonial(i: number): void {
    this.testimonialIndex = i;
    this.startAutoAdvance();
  }

  carouselDotLabel(i: number): string {
    return `${this.i18n.t('stories.carouselGoto')} ${i + 1}`;
  }

  activeStoryId(): TestimonialId {
    return this.testimonialIds[this.testimonialIndex];
  }
}
