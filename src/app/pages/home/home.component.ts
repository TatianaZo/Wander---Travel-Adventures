import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../i18n/i18n.service';
import { TranslatePipe } from '../../i18n/translate.pipe';
import { ACTIVE_TRIPS, type ActiveTrip, type TripDurationKey, type TripFormatKey } from '../../trip-data';

/** Карточки на главной: разнообразие форматов без дубля подборки. */
const SPOTLIGHT_IDS = ['t1', 't2', 't5', 't7'] as const;

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, RouterLink, TranslatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private readonly i18n = inject(I18nService);
  readonly heroSparkleSlots = Array.from({ length: 15 }, (_, i) => i);
  readonly hikesVisible = signal(false);

  filterFormat: 'all' | TripFormatKey = 'all';
  filterDuration: 'all' | TripDurationKey = 'all';
  filterDifficulty: 'all' | '1' | '2' | '3' | '4' | '5' = 'all';

  readonly activeTrips = ACTIVE_TRIPS;
  readonly spotlightTrips: ActiveTrip[] = SPOTLIGHT_IDS.map((id) => ACTIVE_TRIPS.find((t) => t.id === id)).filter(
    (t): t is ActiveTrip => t != null
  );

  get filteredActiveTrips(): ActiveTrip[] {
    return this.activeTrips.filter((t) => {
      if (this.filterFormat !== 'all' && t.format !== this.filterFormat) {
        return false;
      }
      if (this.filterDuration !== 'all' && t.duration !== this.filterDuration) {
        return false;
      }
      if (this.filterDifficulty !== 'all') {
        const d = Number(this.filterDifficulty);
        if (d < t.difficultyMin || d > t.difficultyMax) {
          return false;
        }
      }
      return true;
    });
  }

  pickTrip(): void {
    this.hikesVisible.set(true);
    queueMicrotask(() => {
      document.getElementById('active-hikes')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }

  tripMetaLine(trip: ActiveTrip): string {
    const fmt = this.i18n.t(`trip.fmt.${trip.format}`);
    const dur = this.i18n.t(`trip.dur.${trip.duration}`);
    return `${fmt} · ${dur} · ${this.i18n.tDifficulty(trip.difficultyMin, trip.difficultyMax)}`;
  }
}
