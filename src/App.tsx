import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/store';
import RoutesPage from 'utils/RoutesPage';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RoutesPage />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
