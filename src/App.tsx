import React from 'react';
import DownloadApkButton from './DownloadApkButton';
import './App.css';

const App: React.FC = () => {
  const apkUrl = 'https://expo.dev/accounts/felipeaamodio/projects/QSInclusao/builds/57d5e529-7057-4a25-9dab-2734bf9b2527';

  return (
    <div className="app-container">
      <p className="message">Seja bem-vindo ao QS Inclusão! Clique no botão abaixo para baixar nosso aplicativo no Android.</p>
      <DownloadApkButton apkUrl={apkUrl} />
    </div>
  );
};

export default App;
