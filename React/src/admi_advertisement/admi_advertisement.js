// 管理者の広告管理画面
import React, { useState } from 'react';  // React、モーダル用
import { useNavigate } from 'react-router-dom'; // ページ遷移用
import styles from './admi_advertisement.module.css'; // CSSモジュール

const AdmiAdvertisementPage = () => {
  const navigate = useNavigate(); // ページ遷移用

  const [isModalVisible, setIsModalVisible] = useState(false); // モーダルの表示状態

  const handleAdvertisement = () => { // 「広告管理」ボタン押下
    navigate('/admi_advertisement'); // 広告管理画面に移動
  };

  const handleIllegal = () => { // 「違法ユーザ管理」ボタン押下
    navigate('/admi_illegal'); // 違法ユーザ管理に移動
  };

  const handleLogout = () => { // 「ログアウト」ボタン押下
    setIsModalVisible(true); // モーダルを表示
  };

  const handleOk = () => { // モーダルの「はい」ボタン押下
    navigate('/admi_login'); // トップページに移動
  };

  const handleNo = () => { // モーダルの「いいえ」ボタン押下
    setIsModalVisible(false); // モーダルを非表示
  };

  const handleCompany = () => { //「企業名」ボタン押下 
    navigate('/admi_advertisement-detail'); // 広告詳細に移動
  };

  const handleRegister = () => { //「新規登録」ボタン押下 
    navigate('/admi_advertisement-new'); // 新規会員登録画面に移動
  };

  return (
    <div className={styles.body}>
      <div className={styles.title}>広告管理</div>

      <div className={styles.main}>

        <div className={styles.menu}>
          <button // 「広告管理」ボタン
            className={styles.advertisementButton}
            type="button"
            onClick={handleAdvertisement}
          >
            広告管理
          </button>

          <button // 「違法ユーザ管理」ボタン
            className={styles.illegalButton}
            type="button"
            onClick={handleIllegal}
          >
            違法ユーザ管理
          </button>

          <button // 「違法ユーザ管理」ボタン
            className={styles.logoutButton}
            type="button"
            onClick={handleLogout}
          >
            ログアウト
          </button>
        </div>

        <div className={styles.right}>
          <div className={styles.white}>
            <p className={styles.name}>企業名</p>
            <div className={styles.company}>
              <button // 「企業」ボタン
                className={styles.companyButton}
                type="button"
                onClick={handleCompany}
              >
                あ
              </button>

              <button // 「企業」ボタン
                className={styles.companyButton}
                type="button"
                onClick={handleCompany}
              >
                い
              </button>

              <button // 「企業」ボタン
                className={styles.companyButton}
                type="button"
                onClick={handleCompany}
              >
                う
              </button>

              <button // 「企業」ボタン
                className={styles.companyButton}
                type="button"
                onClick={handleCompany}
              >
                え
              </button>

              <button // 「企業」ボタン
                className={styles.companyButton}
                type="button"
                onClick={handleCompany}
              >
                お
              </button>

              <button // 「企業」ボタン
                className={styles.companyButton}
                type="button"
                onClick={handleCompany}
              >
                かきく
              </button>

              <button // 「企業」ボタン
                className={styles.companyButton}
                type="button"
                onClick={handleCompany}
              >
                き
              </button>

              <button // 「企業」ボタン
                className={styles.companyButton}
                type="button"
                onClick={handleCompany}
              >
                くあああああああああああああああああああああああああああああああああああああああああああああああ
              </button>
            </div>
          </div>

          <button
          type="button" //「新規登録」ボタン
          onClick={handleRegister}
          className={styles.registerButton}
        >
          新規会員登録
        </button>
        </div>

      </div>

      {/* モーダル */}
      {isModalVisible && ( //isModalVisibleがTrueのとき表示
        <div className={styles.modal}>
          <div className={styles.content}>
            <p className={styles.logout}>ログアウトしますか？</p>
            <div className={styles.buttons}>
              <button
                className={styles.okButton}
                type="button"
                onClick={handleOk}
              >
                はい
              </button>
              <button
                className={styles.noButton}
                type="button"
                onClick={handleNo}>
                いいえ
              </button>
            </div>
          </div>
        </div>
      )}


    </div>
  );
};

export default AdmiAdvertisementPage;