import React from 'react';
import FavoriteBook from '../Home/FavoriteBook';
import BestSeller from '../Home/BestSeller';
import OtherBooks from '../Home/OtherBooks';
import PromoBanner from '../Home/PromoBanner';
import Review from '../Home/Review';

export const ThankYouPage = () => {
  return (
    <div>
      <div style={{ textAlign: 'center', padding: '50px 0', backgroundColor: '#f8f8f8' }}>
        <h1 style={{ fontSize: '3rem', color: '#333', marginBottom: '20px' }}>Thank You for Shopping Here!</h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>Your satisfaction is our top priority. We look forward to serving you again!</p>
      </div>
      <BestSeller />
      <FavoriteBook />
      <PromoBanner />
      <OtherBooks />
      <Review />
    </div>
  );
};
