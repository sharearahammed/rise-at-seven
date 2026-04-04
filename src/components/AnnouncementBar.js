import React from 'react';

const styles = {
  bar: {
    background: '#B2F6E3',
    textAlign: 'center',
    padding: '6px 0px',
    fontSize: '11px',
    fontWeight: '700',
    cursor: 'pointer',
    userSelect: 'none',
    margin:"10px",
    borderRadius:"50px",
    color:"#111212"
  },
};

export default function AnnouncementBar() {
  return (
    <div style={styles.bar}>
      <span style={{ marginRight: '6px' }}>🔴</span>
      Where are your customers actually searching? Download the report
    </div>
  );
}
