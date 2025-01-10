// 管理者の広告管理画面
import React, { useState } from 'react';
import './admi_advertisement.module.css';

const AdManagementPage = () => {
  const [ads, setAds] = useState([
    { id: 1, title: 'Ad 1', status: 'Active' },
    { id: 2, title: 'Ad 2', status: 'Inactive' },
  ]);

  const toggleStatus = (id) => {
    setAds((prevAds) =>
      prevAds.map((ad) =>
        ad.id === id ? { ...ad, status: ad.status === 'Active' ? 'Inactive' : 'Active' } : ad
      )
    );
  };

  return (
    <div className="ad-management-page">
      <h1>Advertisement Management</h1>
      <ul className="ad-list">
        {ads.map((ad) => (
          <li key={ad.id} className="ad-item">
            <span className="ad-title">{ad.title}</span>
            <span className={`ad-status ${ad.status.toLowerCase()}`}>{ad.status}</span>
            <button className="toggle-button" onClick={() => toggleStatus(ad.id)}>
              Toggle Status
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdManagementPage;