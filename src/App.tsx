import { HashRouter, NavLink, Route, Routes, useParams } from 'react-router-dom'
import { ThemePicker } from './components/ThemePicker'
import { ConsolidationPage } from './pages/ConsolidationPage'
import { GrammarPage } from './pages/GrammarPage'
import { HomePage } from './pages/HomePage'
import { LessonPage, NotFoundInline } from './pages/LessonPage'
import { LevelTestPage } from './pages/LevelTestPage'
import { ProgressPage } from './pages/ProgressPage'
import { ReviewPage } from './pages/ReviewPage'
import { ProgressProvider } from './state/ProgressContext'

// A chave reinicia o estado da página ao navegar de uma unidade para outra.
function LessonRoute() {
  const { unitId } = useParams()
  return <LessonPage key={unitId} />
}

function TestRoute() {
  const { levelId } = useParams()
  return <LevelTestPage key={levelId} />
}

function ConsolidationRoute() {
  const { id } = useParams()
  return <ConsolidationPage key={id} />
}

export default function App() {
  return (
    <ProgressProvider>
      <HashRouter>
        <header className="topbar">
          <NavLink to="/" className="brand">
            le<span>RN</span>
          </NavLink>
          <nav>
            <NavLink to="/" end>
              Trilha
            </NavLink>
            <NavLink to="/review">Revisão</NavLink>
            <NavLink to="/grammar">Gramática</NavLink>
            <NavLink to="/progress">Progresso</NavLink>
          </nav>
          <ThemePicker />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/lesson/:unitId" element={<LessonRoute />} />
            <Route path="/test/:levelId" element={<TestRoute />} />
            <Route path="/consolidation/:id" element={<ConsolidationRoute />} />
            <Route path="/review" element={<ReviewPage />} />
            <Route path="/grammar" element={<GrammarPage />} />
            <Route path="/progress" element={<ProgressPage />} />
            <Route path="*" element={<NotFoundInline />} />
          </Routes>
        </main>
      </HashRouter>
    </ProgressProvider>
  )
}
