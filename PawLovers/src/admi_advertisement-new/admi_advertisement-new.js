// 管理者の広告新規登録画面
import React from 'react';  // React用
import { useNavigate } from 'react-router-dom'; // ページ遷移用
import styles from './admi_advertisement-new.module.css'; // CSSモジュール

const AdmiAdvertisementNewPage = () => {
    const navigate = useNavigate(); // ページ遷移用

    const handleRegister = () => { //「新規登録」ボタン押下 
        navigate('/admi_advertisement'); // 広告管理画面に移動
    };

    const handleReturn = () => { //「戻る」ボタン押下 
        navigate('/admi_advertisement'); // 広告管理画面に移動
    };

    return (
        <div className={styles.body}>
            <input
                className={styles.title}
                type="text"
                placeholder="会社名を入力※"
            />

            <div className={styles.main}>
                <div className={styles.file}>
                    <input
                        className={styles.photo}
                        type="file"
                    />
                </div>

                <div className={styles.information}>

                    <div className={styles.formGroup}>
                        <label className={styles.name}>担当者名<span>※</span></label>
                        <input className={styles.item}
                            type="text"
                            name="name"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.email}>メールアドレス<span>※</span></label>
                        <input className={styles.item}
                            type="email"
                            name="email"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.url}>URL</label>
                        <input
                            className={styles.item}
                            type="text"
                            name="URL"
                        />
                    </div>

                    <div className={styles.push}>
                        <button // 「登録」ボタン
                            className={styles.registerButton}
                            type="button"
                            onClick={handleRegister}
                        >
                            登録
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

        </div>
    );
};

export default AdmiAdvertisementNewPage;