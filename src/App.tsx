import { useEffect, useState } from 'react'
import { courses } from './content'
import TopBar from './components/TopBar'
import Home from './components/Home'
import CourseView from './components/CourseView'
import LessonRunner from './components/LessonRunner'

type View = { name: 'home' } | { name: 'course'; courseId: string } | { name: 'lesson'; courseId: string; lessonIndex: number }

function parseHash(): View {
  const h = window.location.hash.replace(/^#\/?/, '')
  const [kind, id, idx] = h.split('/')
  const course = courses.find((c) => c.id === id)
  if (kind === 'course' && course) return { name: 'course', courseId: course.id }
  if (kind === 'lesson' && course) {
    const i = Math.max(0, Math.min(course.lessons.length - 1, parseInt(idx || '0', 10) || 0))
    return { name: 'lesson', courseId: course.id, lessonIndex: i }
  }
  return { name: 'home' }
}

function toHash(v: View): string {
  if (v.name === 'course') return `#/course/${v.courseId}`
  if (v.name === 'lesson') return `#/lesson/${v.courseId}/${v.lessonIndex}`
  return '#/'
}

export default function App() {
  const [view, setViewState] = useState<View>(parseHash)

  const setView = (v: View) => {
    window.location.hash = toHash(v)
    setViewState(v)
  }

  useEffect(() => {
    const onHash = () => setViewState(parseHash())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [view])

  const course = view.name !== 'home' ? courses.find((c) => c.id === view.courseId) : undefined

  return (
    <div className="min-h-dvh">
      {view.name !== 'lesson' && <TopBar />}

      {view.name === 'home' && <Home onOpenCourse={(courseId) => setView({ name: 'course', courseId })} />}

      {view.name === 'course' && course && (
        <CourseView
          course={course}
          onBack={() => setView({ name: 'home' })}
          onStartLesson={(lessonIndex) => setView({ name: 'lesson', courseId: course.id, lessonIndex })}
        />
      )}

      {view.name === 'lesson' && course && (
        <LessonRunner
          key={`${course.id}-${view.lessonIndex}`}
          course={course}
          lessonIndex={view.lessonIndex}
          onExit={() => setView({ name: 'course', courseId: course.id })}
          onDone={() => setView({ name: 'course', courseId: course.id })}
        />
      )}
    </div>
  )
}
