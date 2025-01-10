import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdmiLoginPage from './admi_login/admi_login';  // ログインページ

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<AdmiLoginPage/>} /> {/* 初期表示でログインページ */}
          <Route path="/login" element={<AdmiLoginPage/>} /> {/* ログインページ */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
