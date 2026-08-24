export type Lang = 'de' | 'en'

export interface L {
  de: string
  en: string
}

export type Question =
  | { t: 'mc'; q: L; o: L[]; a: number; x: L }
  | { t: 'tf'; q: L; a: boolean; x: L }
  | { t: 'blank'; before: L; after: L; o: L[]; a: number; x: L }
  | { t: 'match'; q: L; pairs: { l: L; r: L }[] }

export interface Lesson {
  id: string
  title: L
  sub: L
  questions: Question[]
}

export interface Course {
  id: string
  title: L
  sub: L
  icon: string
  color: string
  colorDark: string
  lessons: Lesson[]
}
