import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App.tsx'
import { Provider } from 'react-redux'
import store, { persistor } from './app/providers/store/store.ts'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
)
