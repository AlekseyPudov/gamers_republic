import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useTheme } from '@emotion/react';

function App() {
  const theme = useTheme()
  console.log(theme)
  return (
    <div className="App">
      THEME
    </div>
  );
}

export default App;
