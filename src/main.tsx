import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import '@/assets/styles/index.scss'
import App from '@/App'

import { HelmetProvider } from 'react-helmet-async';
import { initI18n } from '@/services/localization/index.localization.service';

(async () => {
  await initI18n('en');

  createRoot(document.getElementById('root')!).render(
      <HelmetProvider>
          <App />
      </HelmetProvider>
  );
})();