import { useState } from 'react'
import { AppHeader } from './layout/AppHeader'
import { CurrentGiveAways } from './components/CurrentGiveAways'
import { PlatformSelection } from './components/PlatformSelection'

function App() {
  return (
    <>
      <AppHeader />
      <PlatformSelection />
      <CurrentGiveAways />
    </>
  )
}

export default App
