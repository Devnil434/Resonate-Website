import React from 'react';
import './DownloadApp.css';
import appStoreBtn from '../../assets/Button.png'; 
import playStoreBtn from '../../assets/Button-1.png'; 

const DownloadApp = () => {
  return (
    <section className="download-app-section">
      <div className="download-app-card">
        <h2>Get the Resonate Mobile app.</h2>
        <div className="store-buttons">
          <button type="button" className="store-btn" aria-label="Download on App Store">
            <img src={appStoreBtn} alt="Download on App Store" />
          </button>
          <button type="button" className="store-btn" aria-label="Get it on Google Play">
            <img src={playStoreBtn} alt="Get it on Google Play" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
