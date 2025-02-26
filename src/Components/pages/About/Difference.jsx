import React from 'react';
import SkytehName from './SkytehName';

const Difference = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>The <SkytehName/> Difference</h2>
      <p style={styles.text}>
        At <SkytehName/>, we don't just write code; we craft solutions. We’re not just building software; we’re building partnerships. Our commitment to quality, client-centric approach, and dedication to innovation set us apart.
      </p>
      <p style={styles.text}>
        When you choose <SkytehName/>, you're not just getting a software provider; you're gaining a trusted partner dedicated to your success. Your software is critical to your business, and we treat every project with the care it deserves.
      </p>
      <p style={styles.text}>
        Choose <SkytehName/> and experience the difference.
      </p>
    </div>
  );
};

// Clean Inline Styles
const styles = {
  container: {
    backgroundColor: '#fff',
    padding: '50px 30px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    maxWidth: '900px',
    margin: '60px auto',
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    color: '#333',
    lineHeight: '1.6',
    textAlign: 'center',
  },
  heading: {
    fontSize: '3rem',
    color: '#149af3',
    marginBottom: '20px',
    fontWeight: '600',
  },
  text: {
    fontSize: '1.3rem',
    color: '#666',
    marginBottom: '18px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  brand: {
    color: '#149af3',
    fontWeight: '600',
  },
};

export default Difference;
