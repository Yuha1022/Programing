// 管理者用ログイン画面
import React, { useState } from 'react'; // React、エラーメッセージ用
import { useNavigate } from 'react-router-dom'; // ページ遷移用
import styles from './admi_login.module.css'; // CSSモジュール
import pawloversImg from './admi_pawlovers-side.jpg'; // PawLovers画像

const AdmiLoginPage = () => {
  const navigate = useNavigate(); // ページ遷移用

  const [email, setEmail] = useState(''); // メールアドレス状態
  const [password, setPassword] = useState(''); // パスワード状態
  const [errorMessage, setErrorMessage] = useState(''); // エラーメッセージ状態

  const handleLogin = () => { // 「ログイン」ボタン押下
    if (!email) { // メールアドレスが空の場合
      setErrorMessage('※メールアドレスを入力してください。'); // エラーメッセージ表示
      return;
    } else if (!password) { // パスワードが空の場合
      setErrorMessage('※パスワードを入力してください。'); // エラーメッセージ表示
      return;
    } /*else if (email === 'admin@example.com' && password === 'password123') { // 仮のパスワード(成功例)
      navigate('/admi_top'); // トップページに移動
    }*/ else { // 失敗の場合
      navigate('/admi_top'); // トップページに移動
      //setErrorMessage('※メールアドレスまたはパスワードが間違っています。'); // エラーメッセージ表示
    }
  };

  return (
    <div className={styles.body}>
      <img
        src={pawloversImg} // PawLovers画像
        alt="pawloversImg" // 代替テキスト
        className={styles.pawloversImg}
      />

      <form className={styles.login}> {/* ログインフォーム */}

        <div className={styles.formGroup}> {/* メールアドレス入力欄 */}
          <label htmlFor="email">メールアドレス</label>
          <input
            id="email"
            type="email"
            placeholder="メールアドレスを入力してください"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className={styles.formGroup}> {/* パスワード入力欄 */}
          <label htmlFor="password">パスワード</label>
          <input
            id="password"
            type="password"
            placeholder="パスワードを入力してください"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <p className={styles.errorMessage}>{errorMessage}</p> {/* エラーメッセージを表示 */}

        <button // 「ログイン」ボタン
          className={styles.loginButton}
          type="button"
          onClick={handleLogin}
        >
          ログイン
        </button>

      </form>

    </div>

  );
};

export default AdmiLoginPage;