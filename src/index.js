import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register the service worker
serviceWorkerRegistration.register({
  onSuccess: () => {
    console.log('PWA Service Worker registered successfully for offline use.');
  },
  onUpdate: (registration) => {
    console.log('New version available. Refresh to update.');
    // Optional: You can trigger a Swal.fire here to ask the user to reload
  }
});