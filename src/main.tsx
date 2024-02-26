import ReactDOM from 'react-dom/client'
import App from './App';
import "./index.css"
import ReduxProvider from './utills/ReduxProvider';

// Use createRoot instead of ReactDOM.render
ReactDOM.createRoot(document.getElementById('root')!).render(
  <ReduxProvider>
    <App />
  </ReduxProvider>
);
