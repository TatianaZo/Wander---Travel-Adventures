import { Component, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { I18nService } from './i18n/i18n.service';
import { TranslatePipe } from './i18n/translate.pipe';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive, RouterOutlet, TranslatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly i18n = inject(I18nService);
  private readonly router = inject(Router);

  menuOpen = false;
  readonly isLightBackground = signal(false);

  readonly navLinks: { labelKey: string; path: string }[] = [
    { labelKey: 'nav.destinations', path: '/destinations' },
    { labelKey: 'nav.experiences', path: '/experiences' },
    { labelKey: 'nav.yourStories', path: '/stories' },
    { labelKey: 'nav.rates', path: '/rates' }
  ];

  constructor() {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => {
        this.applyHeaderForRoute(this.router.url);
        this.closeMenu();
      });

    queueMicrotask(() => {
      if (typeof window === 'undefined') {
        return;
      }
      this.applyHeaderForRoute(this.router.url);
    });
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (!this.isHomeRoute()) {
      return;
    }
    this.updateHeaderContrastFromScroll();
  }

  private isHomeRoute(): boolean {
    const path = this.router.url.split('?')[0];
    return path === '/' || path === '';
  }

  private applyHeaderForRoute(url: string): void {
    const path = url.split('?')[0];
    if (path === '/' || path === '') {
      this.updateHeaderContrastFromScroll();
    } else {
      this.isLightBackground.set(true);
    }
  }

  private updateHeaderContrastFromScroll(): void {
    if (typeof window === 'undefined') {
      return;
    }
    this.isLightBackground.set(window.scrollY > window.innerHeight * 0.72);
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
