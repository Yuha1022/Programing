// 管理者の違法ユーザ管理画面
import React, { useState } from 'react';  // React、モーダル用
import { useNavigate } from 'react-router-dom'; // ページ遷移用
import styles from './admi_illegal.module.css'; // CSSモジュール

const AdmiIllegalPage = () => {
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

  const handleUser = () => { //「企業名」ボタン押下 
    navigate('/admi_illegal-detail'); // 広告詳細に移動
  };

  return (
    <div className={styles.body}>
      <div className={styles.title}>違反ユーザ管理</div>

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

            <div className={styles.explanation}>
              <p className={styles.account}>ユーザ名</p>
              <p className={styles.report}>通報数</p>
            </div>

            <div className={styles.user}>

              <div className={styles.item}>
                <button // 「違法ユーザ」ボタン
                  className={styles.userButton}
                  type="button"
                  onClick={handleUser}
                >
                  あ
                </button>
                <div className={styles.number}>1</div>
              </div>

              <div className={styles.item}>
                <button // 「違法ユーザ」ボタン
                  className={styles.userButton}
                  type="button"
                  onClick={handleUser}
                >
                  い
                </button>
                <div className={styles.number}>2</div>
              </div>

              <div className={styles.item}>
                <button // 「違法ユーザ」ボタン
                  className={styles.userButton}
                  type="button"
                  onClick={handleUser}
                >
                  う
                </button>
                <div className={styles.number}>3</div>
              </div>

              <div className={styles.item}>
                <button // 「違法ユーザ」ボタン
                  className={styles.userButton}
                  type="button"
                  onClick={handleUser}
                >
                  え
                </button>
                <div className={styles.number}>4</div>
              </div>

              <div className={styles.item}>
                <button // 「違法ユーザ」ボタン
                  className={styles.userButton}
                  type="button"
                  onClick={handleUser}
                >
                  お
                </button>
                <div className={styles.number}>5</div>
              </div>

              <div className={styles.item}>
                <button // 「違法ユーザ」ボタン
                  className={styles.userButton}
                  type="button"
                  onClick={handleUser}
                >
                  か
                </button>
                <div className={styles.number}>6</div>
              </div>

              <div className={styles.item}>
                <button // 「違法ユーザ」ボタン
                  className={styles.userButton}
                  type="button"
                  onClick={handleUser}
                >
                  き
                </button>
                <div className={styles.number}>7</div>
              </div>

              <div className={styles.item}>
                <button // 「違法ユーザ」ボタン
                  className={styles.userButton}
                  type="button"
                  onClick={handleUser}
                >
                  く
                </button>
                <div className={styles.number}>8</div>
              </div>

              <div className={styles.item}>
                <button // 「違法ユーザ」ボタン
                  className={styles.userButton}
                  type="button"
                  onClick={handleUser}
                >
                  けあああああああああああああああああ
                </button>
                <div className={styles.number}>9</div>

              </div>

            </div>

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

    </div>
  );
};

export default AdmiIllegalPage;