import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


import { Storage } from '@ionic/storage';

const storage = new Storage();
storage.create();



import ReactDOM from 'react-dom';

import { ProfileProvider } from './context/ProfileContext';

ReactDOM.render(
  <ProfileProvider>
    <App />
  </ProfileProvider>,
  document.getElementById('root')
);
