// AnnouncementBar.jsx
import React from 'react';

export default function AnnouncementBar() {
  return (
    <div
      id="announcement-bar"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 101,
        background: '#a8f0d8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        padding: '10px 16px',
        fontSize: '13px',
        fontWeight: 500,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        color: '#1a1a1a',
        textAlign: 'center',
      }}
    >
      <span style={{ color: 'red', fontSize: '10px' }}>●</span>
      Where are your customers actually searching?{' '}
      <a href="#" style={{ fontWeight: 700, color: '#1a1a1a', textDecoration: 'underline' }}>
        Download the report
      </a>
    </div>
  );
}