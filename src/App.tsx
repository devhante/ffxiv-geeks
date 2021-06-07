import './App.css';
import React, { useState } from 'react';
import Header from 'components/Header';
import Content from 'components/Content';

function App() {
  const [page, setPage] = useState<string>('Main');
  return (
    <div className="App">
      <Header setPage={setPage} />
      <Content page={page} />
    </div>
  );
}

export default App;
