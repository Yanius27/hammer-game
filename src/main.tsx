import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import './styles/global.css';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Контейнер root не найден! Убедитесь что в HTML есть элемент с id="root"');
}

const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
