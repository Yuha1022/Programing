// 管理者の広告詳細画面
import React, { useState } from 'react';  // React、モーダル用
import { useNavigate } from 'react-router-dom'; // ページ遷移用
import styles from './admi_advertisement-detail.module.css'; // CSSモジュール

const AdmiAdvertisementDetailPage = () => {
    const navigate = useNavigate(); // ページ遷移用

    const [isModalVisible, setIsModalVisible] = useState(false); // モーダルの表示状態

    const handleRegister = () => { //「新規登録」ボタン押下 
        navigate('/admi_advertisement'); // 広告管理画面に移動
    };

    const handleErase = () => { //「消去」ボタン押下 
        setIsModalVisible(true); // モーダルを表示
    };

    const handleReturn = () => { //「戻る」ボタン押下 
        navigate('/admi_advertisement'); // 広告管理画面に移動
    };

    const handleOk = () => { // モーダルの「はい」ボタン押下
        navigate('/admi_advertisement'); // 広告管理画面に移動
    };

    const handleNo = () => { // モーダルの「いいえ」ボタン押下
        setIsModalVisible(false); // モーダルを非表示
    };

    return (
        <div className={styles.body}>
            <div className={styles.title}>あ</div>

            <div className={styles.main}>
                <div className={styles.file}>
                    <input
                        className={styles.photo}
                        type="file"
                    />
                </div>

                <div className={styles.information}>

                    <div className={styles.formGroup}>
                        <div className={styles. label}>担当者名<span>※</span></div>
                        <div className={styles.item}>はすざき</div>
                    </div>

                    <div className={styles.formGroup}>
                        <div className={styles.label}>メールアドレス<span>※</span></div>
                        <div className={styles.item}>@</div>
                    </div>

                    <div className={styles.formGroup}>
                        <div className={styles.label}>URL</div>
                        <div className={styles.item}>http://</div>
                    </div>

                    <div className={styles.push}>
                        <button // 「登録」ボタン
                            className={styles.registerButton}
                            type="button"
                            onClick={handleRegister}
                        >
                            登録
                        </button>

                        <button // 「消去」ボタン
                            className={styles.eraseButton}
                            type="button"
                            onClick={handleErase}
                        >
                            消去
                        </button>

                        <button // 「戻る」ボタン
                            className={styles.returnButton}
                            type="button"
                            onClick={handleReturn}
                        >
                            戻る
                        </button>

                    </div>

                </div>

            </div>

            {/* モーダル */}
            {isModalVisible && ( //isModalVisibleがTrueのとき表示
                <div className={styles.modal}>
                    <div className={styles.content}>
                        <p className={styles.comment}>この広告を消去しますか？</p>
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

export default AdmiAdvertisementDetailPage;