import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdmiLoginPage from './admi_login/admi_login'; // ログインページ
import AdmiTopPage from './admi_top/admi_top'; // トップページ
import AdManagementPage from './admi_advertisement/admi_advertisement'; // 広告管理画面

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<AdManagementPage/>} /> {/* 初期表示でログインページ */}
          <Route path="/admi_login" element={<AdmiLoginPage/>} /> {/* ログインページ */}
          <Route path="/admi_top" element={<AdmiTopPage/>} /> {/* ログインページ */}
          <Route path="/admi_top" element={<AdManagementPage/>} /> {/* 広告管理画面 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
