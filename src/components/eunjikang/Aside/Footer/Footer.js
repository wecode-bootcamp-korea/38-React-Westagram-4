import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <ul className="footer_list">
      {footerList.map(li => (
        <li key={li.id}>{li.text}</li>
      ))}
    </ul>
  );
};

export default Footer;

export const footerList = [
  { id: 1, text: 'About' },
  { id: 2, text: 'Help' },
  { id: 3, text: 'Press' },
  { id: 4, text: 'API' },
  { id: 5, text: 'Jobs' },
  { id: 6, text: 'Privacy' },
  { id: 7, text: 'Terms' },
  { id: 8, text: 'Locations' },
  { id: 9, text: 'Top Accoounts' },
  { id: 10, text: 'Hashtags' },
  { id: 11, text: 'Language' },
];
