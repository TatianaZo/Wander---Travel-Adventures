export type TripFormatKey = 'horse' | 'car' | 'individual' | 'group';
export type TripDurationKey = 'weekend' | 'week' | 'two_weeks';

export interface ActiveTrip {
  id: string;
  titleKey: string;
  teaserKey: string;
  format: TripFormatKey;
  duration: TripDurationKey;
  difficultyMin: number;
  difficultyMax: number;
  image: string;
}

export interface DestinationCard {
  id: string;
  titleKey: string;
  detailsKey: string;
  durationKey: string;
  difficultyMin: number;
  difficultyMax: number;
  image: string;
}

export const DESTINATIONS: DestinationCard[] = [
  {
    id: 'horse',
    titleKey: 'dest.cat.horse.title',
    detailsKey: 'dest.cat.horse.details',
    durationKey: 'dest.cat.horse.duration',
    difficultyMin: 2,
    difficultyMax: 4,
    image: 'assets/trip-chatgpt-2.png'
  },
  {
    id: 'car',
    titleKey: 'dest.cat.car.title',
    detailsKey: 'dest.cat.car.details',
    durationKey: 'dest.cat.car.duration',
    difficultyMin: 1,
    difficultyMax: 3,
    image: 'assets/trip-car.png'
  },
  {
    id: 'individual',
    titleKey: 'dest.cat.individual.title',
    detailsKey: 'dest.cat.individual.details',
    durationKey: 'dest.cat.individual.duration',
    difficultyMin: 1,
    difficultyMax: 5,
    image: 'assets/trip-proposal.png'
  },
  {
    id: 'group',
    titleKey: 'dest.cat.group.title',
    detailsKey: 'dest.cat.group.details',
    durationKey: 'dest.cat.group.duration',
    difficultyMin: 2,
    difficultyMax: 5,
    image: 'assets/trip-river.png'
  },
  {
    id: 'weekend',
    titleKey: 'dest.cat.weekend.title',
    detailsKey: 'dest.cat.weekend.details',
    durationKey: 'dest.cat.weekend.duration',
    difficultyMin: 1,
    difficultyMax: 3,
    image: 'assets/trip-camp.png'
  },
  {
    id: 'week',
    titleKey: 'dest.cat.week.title',
    detailsKey: 'dest.cat.week.details',
    durationKey: 'dest.cat.week.duration',
    difficultyMin: 2,
    difficultyMax: 4,
    image: 'assets/trip-chatgpt-1.png'
  },
  {
    id: 'fortnight',
    titleKey: 'dest.cat.fortnight.title',
    detailsKey: 'dest.cat.fortnight.details',
    durationKey: 'dest.cat.fortnight.duration',
    difficultyMin: 3,
    difficultyMax: 5,
    image: 'assets/trip-stars.png'
  }
];

export const SERVICE_PILLARS: { key: string; icon: string; image: string }[] = [
  { key: 'gear', icon: '🎒', image: 'assets/trip-camp.png' },
  { key: 'food', icon: '🥘', image: 'assets/trip-chatgpt-1.png' },
  { key: 'safety', icon: '🧭', image: 'assets/trip-river.png' }
];

export const ACTIVE_TRIPS: ActiveTrip[] = [
  {
    id: 't1',
    titleKey: 'trip.t1.title',
    teaserKey: 'trip.t1.teaser',
    format: 'horse',
    duration: 'week',
    difficultyMin: 2,
    difficultyMax: 4,
    image: 'assets/trip-chatgpt-2.png'
  },
  {
    id: 't2',
    titleKey: 'trip.t2.title',
    teaserKey: 'trip.t2.teaser',
    format: 'car',
    duration: 'weekend',
    difficultyMin: 1,
    difficultyMax: 3,
    image: 'assets/trip-car.png'
  },
  {
    id: 't3',
    titleKey: 'trip.t3.title',
    teaserKey: 'trip.t3.teaser',
    format: 'individual',
    duration: 'week',
    difficultyMin: 1,
    difficultyMax: 5,
    image: 'assets/trip-proposal.png'
  },
  {
    id: 't4',
    titleKey: 'trip.t4.title',
    teaserKey: 'trip.t4.teaser',
    format: 'group',
    duration: 'weekend',
    difficultyMin: 3,
    difficultyMax: 4,
    image: 'assets/trip-river.png'
  },
  {
    id: 't5',
    titleKey: 'trip.t5.title',
    teaserKey: 'trip.t5.teaser',
    format: 'group',
    duration: 'weekend',
    difficultyMin: 1,
    difficultyMax: 3,
    image: 'assets/trip-camp.png'
  },
  {
    id: 't6',
    titleKey: 'trip.t6.title',
    teaserKey: 'trip.t6.teaser',
    format: 'group',
    duration: 'two_weeks',
    difficultyMin: 4,
    difficultyMax: 5,
    image: 'assets/trip-stars.png'
  },
  {
    id: 't7',
    titleKey: 'trip.t7.title',
    teaserKey: 'trip.t7.teaser',
    format: 'group',
    duration: 'week',
    difficultyMin: 3,
    difficultyMax: 5,
    image: 'assets/trip-chatgpt-3.png'
  },
  {
    id: 't8',
    titleKey: 'trip.t8.title',
    teaserKey: 'trip.t8.teaser',
    format: 'car',
    duration: 'week',
    difficultyMin: 2,
    difficultyMax: 4,
    image: 'assets/trip-chatgpt-1.png'
  },
  {
    id: 't9',
    titleKey: 'trip.t9.title',
    teaserKey: 'trip.t9.teaser',
    format: 'horse',
    duration: 'weekend',
    difficultyMin: 2,
    difficultyMax: 3,
    image: 'assets/trip-chatgpt-2.png'
  }
];

export const PACKAGE_DEFS: { id: string; featured: boolean }[] = [
  { id: 'explorer', featured: false },
  { id: 'voyager', featured: true },
  { id: 'odyssey', featured: false }
];

export const TESTIMONIAL_IDS = ['c1', 'c2', 'c3', 'c4'] as const;

export type TestimonialId = (typeof TESTIMONIAL_IDS)[number];

/** Картинка слева на /stories - по номеру отзыва (слайды и авто-смена). */
export const STORY_SLIDE_IMAGES: Record<TestimonialId, string> = {
  c1: 'assets/trip-chatgpt-3.png',
  c2: 'assets/trip-camp.png',
  c3: 'assets/trip-river.png',
  c4: 'assets/trip-chatgpt-2.png'
};

export const PERK_INDEXES = [1, 2, 3] as const;
