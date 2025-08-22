import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/appRoutes'
import { ThemeProvider } from './context/themeProvider'
import { LanguageProvider } from './context/languageProvider'

const App = () => {
  return (
    <Suspense fallback={<div>Loading translations...</div>}>
      
      <LanguageProvider>
        <ThemeProvider defaultTheme="dark">
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </ThemeProvider>
      </LanguageProvider>
    </Suspense>
  )
}

export default App
