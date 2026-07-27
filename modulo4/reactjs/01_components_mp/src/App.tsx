// src/App.tsx

import WelcomeBanner_mp from './components/WelcomeBanner_mp.tsx'
import EmotionCard_mp from './components/EmotionCard_mp.tsx'
import TechniqueList_mp from './components/TechniqueList_mp.tsx'
import AnxietyMeter_mp from './01_usestate_mp/AnxietyMeter_mp.tsx'
import MoodLogCounter_mp from './01_usestate_mp/MoodLogCounter_mp.tsx'
import GratitudeJournal_mp from './01_usestate_mp/GratitudeJournal_mp.tsx'
import MoodCheckInForm_mp from './01_usestate_mp/MoodCheckInForm_mp.tsx'
import DocumentTitle_mp from './02_useEffect_mp/DocumentTitle_mp.tsx'
import FetchTherapist_mp from './02_useEffect_mp/FetchTherapist_mp.tsx'
import FetchDirectory_mp from './02_useEffect_mp/FetchDirectory_mp.tsx'
import EmotionSearchForm_mp from './03_useRef_mp/EmotionSearchForm_mp.tsx'
import MoodNotesEditor_mp from './03_useRef_mp/MoodNotesEditor_mp.tsx'

const PASO: number = 41

const techniques = [
  { nombre: 'Respiración Cuadrada', dificultad: 'Fácil', tiempoMinutos: 5 },
  { nombre: 'Relajación Muscular Progresiva', dificultad: 'Media', tiempoMinutos: 15 },
  { nombre: 'Meditación Guiada', dificultad: 'Media', tiempoMinutos: 10 },
]

export default function App() {
  const content =
    PASO === 1 ? <WelcomeBanner_mp /> :
    PASO === 11 ? <EmotionCard_mp emocion="Ansiedad" detallesTrigger="Reunión importante" critica={true} /> : 
    PASO === 12 ? <TechniqueList_mp techniques={techniques} title="Técnicas de Relajación Sugeridas" /> :
    
    // HOOK useState
    PASO === 20 ? <AnxietyMeter_mp initialValue={50} step={10} label="Nivel de Estrés" /> :
    PASO === 21 ? <MoodLogCounter_mp /> :
    PASO === 22 ? <MoodCheckInForm_mp /> :
    PASO === 23 ? <GratitudeJournal_mp /> :
    
    //Hook useEffect
    PASO === 30 ? <DocumentTitle_mp /> :
    PASO === 31 ? <FetchTherapist_mp /> :
    PASO === 32 ? <FetchDirectory_mp /> :

    //Hook useRef
    PASO === 40 ? <EmotionSearchForm_mp /> :
    PASO === 41 ? <MoodNotesEditor_mp /> :

    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 540, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {content}
    </main>
  )
}

