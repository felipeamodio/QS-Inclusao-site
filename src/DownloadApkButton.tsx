import React from 'react';

const DownloadApkButton: React.FC<{ apkUrl: string }> = ({ apkUrl }) => {
  return (
    <a href={apkUrl} download>
      <button>Download APK</button>
    </a>
  );
};

export default DownloadApkButton;
