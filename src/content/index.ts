import type { Course } from './types'
import { power48 } from './power48'
import { war33 } from './war33'
import { seduction } from './seduction'
import { fiftyLaw } from './fiftyLaw'
import { mastery } from './mastery'
import { humanNature } from './humanNature'
import { synthesis } from './synthesis'

export const courses: Course[] = [
  power48,
  war33,
  seduction,
  fiftyLaw,
  mastery,
  humanNature,
  synthesis,
]

export const totalLessons = courses.reduce((n, c) => n + c.lessons.length, 0)
export const totalQuestions = courses.reduce(
  (n, c) => n + c.lessons.reduce((m, l) => m + l.questions.length, 0),
  0,
)

export type { Course, Lesson, Question, L, Lang } from './types'
