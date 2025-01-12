import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdmiLoginPage from './admi_login/admi_login'; // ログインページ
import AdmiTopPage from './admi_top/admi_top'; // トップページ
import AdmiAdvertisementPage from './admi_advertisement/admi_advertisement'; // 広告管理画面
import AdmiAdvertisementDetailPage from './admi_advertisement-detail/admi_advertisement-detail'; // 広告詳細画面
import AdmiAdvertisementNewPage from './admi_advertisement-new/admi_advertisement-new'; // 広告新規登録画面
import AdmiIllegalPage from './admi_illegal/admi_illegal'; // 違法ユーザ画面
import AdmiIllegalDetailPage from './admi_illegal-detail/admi_illegal-detail'; // 違法ユーザ画面

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<AdmiAdvertisementNewPage/>} /> {/* 初期表示でログインページ */}
          <Route path="/admi_login" element={<AdmiLoginPage/>} /> {/* ログインページ */}
          <Route path="/admi_top" element={<AdmiTopPage/>} /> {/* ログインページ */}
          <Route path="/admi_advertisement" element={<AdmiAdvertisementPage/>} /> {/* 広告管理画面 */}
          <Route path="/admi_advertisement-detail" element={<AdmiAdvertisementDetailPage/>} /> {/* 広告詳細画面 */}
          <Route path="/admi_advertisement-new" element={<AdmiAdvertisementNewPage/>} /> {/* 広告新規登録画面 */}
          <Route path="/admi_illegal" element={<AdmiIllegalPage/>} /> {/* 違法ユーザ管理画面 */}
          <Route path="/admi_illegal-detail" element={<AdmiIllegalDetailPage/>} /> {/* 違法ユーザ詳細画面 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
