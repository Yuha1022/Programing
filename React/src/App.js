import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdmiLoginPage from './admi_login/admi_login'; // ログインページ
import AdmiTopPage from './admi_top/admi_top'; // トップページ
import AdmiAdvertisementPage from './admi_advertisement/admi_advertisement'; // 広告管理画面
import AdmiAdvertisementDetailPage from './admi_advertisement-detail/admi_advertisement-detail'; // 広告詳細画面
import AdmiIllegalPage from './admi_illegal/admi_illegal'; // 違法ユーザ画面

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<AdmiAdvertisementDetailPage/>} /> {/* 初期表示でログインページ */}
          <Route path="/admi_login" element={<AdmiLoginPage/>} /> {/* ログインページ */}
          <Route path="/admi_top" element={<AdmiTopPage/>} /> {/* ログインページ */}
          <Route path="/admi_advertisement" element={<AdmiAdvertisementPage/>} /> {/* 広告管理画面 */}
          <Route path="/admi_advertisement-detail" element={<AdmiAdvertisementDetailPage/>} /> {/* 広告詳細画面 */}
          <Route path="/admi_illegal" element={<AdmiIllegalPage/>} /> {/* 違法ユーザ管理画面 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
