import React, { useState } from 'react'; // React、エラーメッセージ用
import { useNavigate } from 'react-router-dom'; // ページ遷移用
import './admi_login.module.css'; // CSSファイル
import pawloversImg from './admi_pawlovers-side.jpg'; // PawLovers画像

const AdminLoginPage = () => {
  const navigate = useNavigate(); // ページ遷移用
  const [email, setEmail] = useState(''); // メールアドレス状態
  const [password, setPassword] = useState(''); // パスワード状態
  const [errorMessage, setErrorMessage] = useState(''); // エラーメッセージ状態

  const handleLogin = () => { // 「ログイン」ボタン押下
    if (!email) { // メールアドレスが空の場合
      setErrorMessage('※メールアドレスを入力してください。');
      return;
    }
    if (!password) { // パスワードが空の場合
      setErrorMessage('※パスワードを入力してください。');
      return;
    }
    if (email === 'admin@example.com' && password === 'password123') { // 仮のパスワード(成功例)
      navigate('/top'); // トップページに移動
    } else { // 失敗の場合
      setErrorMessage('※メールアドレスまたはパスワードが間違っています。'); 
    }
  };

  const handleRegister = () => { //「新規会員登録」ボタン押下
    navigate('/terms'); // 新規会員登録ページに移動
  };

  return (
    <div className="body">
      <img
        src={pawloversImg} // PawLovers画像
        alt="pawloversImg" // 代替テキスト
        id="pawlovers-img"
      />

      <form className="login">

        <div className="form-group">
          <label htmlFor="email">メールアドレス</label>
          <input // メールアドレス入力欄
            type="email"
            id="email"
            placeholder="メールアドレスを入力してください"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">パスワード</label>
          <input // パスワード入力欄
            type="password"
            id="password"
            placeholder="パスワードを入力してください"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <p id="error-message">{errorMessage}</p> 

        <button // 「ログイン」ボタン
          type="button"
          onClick={handleLogin}
        >
          ログイン
        </button>

        <p id="new">・・・・・・・・・・・・・・・・・初めての方はこちら・・・・・・・・・・・・・・・・・・</p>

        <button //「新規会員登録」ボタン
          type="button"
          onClick={handleRegister}
        >
          新規会員登録
        </button>

      </form>

    </div>

  );
};

export default AdminLoginPage;
