// 管理者用トップ画面
import React from 'react'; // React、モーダル用
import { useNavigate } from 'react-router-dom'; // ページ遷移用
import styles from './admi_top.module.css'; // CSSモジュール

const AdmiTopPage = () => {
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

  return (
    <div className={styles.body}>
      <div className={styles.title}>トップページ</div>

      <div className={styles.white}>

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

export default AdmiTopPage;