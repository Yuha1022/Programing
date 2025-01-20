// 管理者の違法ユーザ詳細画面
import React, { useState } from 'react';  // React、モーダル用
import { useNavigate } from 'react-router-dom'; // ページ遷移用
import styles from './admi_illegal-detail.module.css'; // CSSモジュール

const AdmiIllegalDetailPage = () => {
    const navigate = useNavigate(); // ページ遷移用

    const [isModalVisible, setIsModalVisible] = useState(false); // モーダル(消去)の表示状態

    const [isModalVisible2, setIsModalVisible2] = useState(false); // モーダル(除外)の表示状態

    const handleErase = () => { //「消去」ボタン押下 
        setIsModalVisible(true); // モーダルを表示
    };

    const handleOut = () => { //「一部から除外」ボタン押下 
        setIsModalVisible2(true); // モーダルを表示
    };

    const handleReturn = () => { //「戻る」ボタン押下 
        navigate('/admi_illegal'); // 違法ユーザ管理画面に移動
    };

    const handleOk = () => { // モーダル(消去)の「はい」ボタン押下
        navigate('/admi_illegal'); // 違法ユーザ管理画面に移動
    };

    const handleNo = () => { // モーダル(消去)の「いいえ」ボタン押下
        setIsModalVisible(false); // モーダルを非表示
    };

    const handleOk2 = () => { // モーダル(除外)の「はい」ボタン押下
        navigate('/admi_illegal'); // 違法ユーザ管理画面に移動
    };

    const handleNo2 = () => { // モーダル(除外)の「いいえ」ボタン押下
        setIsModalVisible2(false); // モーダルを非表示
    };

    return (
        <div className={styles.body}>
            <div className={styles.title}>あ</div>

            <div className={styles.main}>
                <div className={styles.item}>
                    <p className={styles.label}>連絡先</p>
                    <div className={styles.input}>@</div>
                </div>

                <div className={styles.item}>
                    <p className={styles.label}>通報数</p>
                    <div className={styles.input}>123456789</div>
                </div>

                <div className={styles.push}>
                    <button // 「消去」ボタン
                        className={styles.eraseButton}
                        type="button"
                        onClick={handleErase}
                    >
                        消去
                    </button>

                    <button // 「一部から除外」ボタン
                        className={styles.outButton}
                        type="button"
                        onClick={handleOut}
                    >
                        一覧から除外
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

            {/* モーダル */}
            {isModalVisible && ( //isModalVisibleがTrueのとき表示
                <div className={styles.modal}>
                    <div className={styles.content}>
                        <p className={styles.comment}>このユーザを消去しますか？</p>
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

            {/* モーダル */}
            {isModalVisible2 && ( //isModalVisible2がTrueのとき表示
                <div className={styles.modal}>
                    <div className={styles.content}>
                        <p className={styles.comment}>このユーザを一覧から除外しますか？</p>
                        <div className={styles.buttons}>
                            <button
                                className={styles.okButton}
                                type="button"
                                onClick={handleOk2}
                            >
                                はい
                            </button>
                            <button
                                className={styles.noButton}
                                type="button"
                                onClick={handleNo2}>
                                いいえ
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdmiIllegalDetailPage;