import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslatePipe } from '../../i18n/translate.pipe';

export interface StaticPageCopy {
  eyebrow: string;
  title: string;
  blocks: string[];
}

/** Соответствие маршрута и ключей i18n */
export const STATIC_PAGE_COPY: Record<string, StaticPageCopy> = {
  about: {
    eyebrow: 'page.about.eyebrow',
    title: 'page.about.title',
    blocks: ['page.about.p1', 'page.about.p2', 'page.about.p3', 'page.about.p4']
  },
  careers: {
    eyebrow: 'page.careers.eyebrow',
    title: 'page.careers.title',
    blocks: ['page.careers.p1', 'page.careers.p2', 'page.careers.p3']
  },
  press: {
    eyebrow: 'page.press.eyebrow',
    title: 'page.press.title',
    blocks: ['page.press.p1', 'page.press.p2', 'page.press.p3']
  },
  cookies: {
    eyebrow: 'legal.cookies.eyebrow',
    title: 'legal.cookies.title',
    blocks: ['legal.cookies.p1', 'legal.cookies.p2', 'legal.cookies.p3', 'legal.cookies.p4', 'legal.cookies.p5']
  },
  privacy: {
    eyebrow: 'legal.privacy.eyebrow',
    title: 'legal.privacy.title',
    blocks: ['legal.privacy.p1', 'legal.privacy.p2', 'legal.privacy.p3', 'legal.privacy.p4', 'legal.privacy.p5']
  },
  terms: {
    eyebrow: 'legal.terms.eyebrow',
    title: 'legal.terms.title',
    blocks: ['legal.terms.p1', 'legal.terms.p2', 'legal.terms.p3', 'legal.terms.p4', 'legal.terms.p5']
  }
};

@Component({
  selector: 'app-content-page',
  imports: [TranslatePipe],
  templateUrl: './content-page.component.html',
  styleUrl: './content-page.component.scss'
})
export class ContentPageComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  readonly page = signal<StaticPageCopy | null>(null);

  ngOnInit(): void {
    const id = this.route.snapshot.data['contentId'] as string;
    const copy = STATIC_PAGE_COPY[id];
    this.page.set(copy ?? null);
  }
}
