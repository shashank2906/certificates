import React, { useState } from 'react';
import './App.css';

import accentureImage from './Images/accenture.jpg';
import metaImage from './Images/meta.jpg';
import one from './Images/1.jpg'
import two from './Images/2.jpg'
import three from './Images/3.jpg'
import four from './Images/4.jpg'
import five from './Images/5.jpg'
import six from './Images/6.jpg'

const certificatesData = [
  {
    id: 1,
    title: 'Accenture Developer Program',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: accentureImage,
  },
  {
    id: 2,
    title: 'Meta Version Control',
    info: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: metaImage,
  },
  {
    id: 3,
    title: 'AWS Solutions Architect Virtual Program',
    info: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: one
  },
  {
    id: 4,
    title: 'Engineering Vitual Program (Goldman Sachs',
    info: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: two
  },
  {
    id: 5,
    title: 'Engineering Vitual Program (Goldman Sachs',
    info: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: three
  },
  {
    id: 6,
    title: 'Engineering Vitual Program (Goldman Sachs',
    info: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: four
  },
  {
    id: 7,
    title: 'Engineering Vitual Program (Goldman Sachs',
    info: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: five
  },
  {
    id: 7,
    title: 'Engineering Vitual Program (Goldman Sachs',
    info: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: six
  },
];

function CertificateCard({ certificate, onCardClick, onDownload }) {
  const handleDownload = (e) => {
    e.stopPropagation(); // Prevent card click when download button is clicked
    onDownload(certificate.imageUrl);
  };

  return (
    <div className='certificate-card' onClick={() => onCardClick(certificate)}>
      <div
        className='certificate-image'
        style={{
          backgroundImage: `url(${certificate.imageUrl})`,
          marginBottom: '6px',
        }}
      ></div>
      <h3 className='heading'>{certificate.title}</h3>
      <div className="button-container">
        <button className='view-button'>View</button>
        <button className='view-button' onClick={handleDownload}>Download</button>
      </div>
    </div>
  );
}

function CertificateModal({ certificate, onClose, onDownload }) {
  const handleDownload = () => {
    onDownload(certificate.imageUrl);
  };

  return (
    <div className='certificate-modal'>
      <div className='certificate-content'>
        <img src={certificate.imageUrl} alt={certificate.title} />
        <hr className="divider-line" /> {/* Divider line */}
        <p>{certificate.info}</p>
        <div className="button-container">
        <button className='view-button' onClick={onClose} >Close</button>
        <button className='view-button' onClick={handleDownload}>Download</button>
      </div>
        {/* <button onClick={onClose}>Close</button>
        <button onClick={handleDownload}>Download</button> */}
      </div>
    </div>
  );
}

function App() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleCardClick = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const handleCloseModal = () => {
    setSelectedCertificate(null);
  };

  const handleDownload = (imageUrl) => {
    // Create a temporary anchor element
    const anchor = document.createElement('a');
    anchor.href = imageUrl;
    anchor.download = 'certificate.jpg';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  return (
    <div className='app'>
      <nav class='navbar'>
        <a href='https://twitter.com/2906_shashank' target='_blank'>
          <i class='fa-brands fa-twitter'></i>
        </a>
        <a href='https://www.linkedin.com/in/shashank2906/' target='_blank'>
          <i class='fab fa-linkedin'></i>
        </a>
        <a href='https://github.com/shashank2906/' target='_blank'>
          <i class='fab fa-github'></i>
        </a>
        <a href='#' target='_blank'>
          <i class='fa-solid fa-address-card'></i>
        </a>
        <a href='#' target='_blank'>
          <i class='fa-solid fa-book-open'></i>
        </a>
      </nav>

      <div className='certificates-container'>
        {certificatesData.map((certificate) => (
          <CertificateCard
            key={certificate.id}
            certificate={certificate}
            onCardClick={handleCardClick}
            onDownload={handleDownload}
          />
        ))}
      </div>
      {selectedCertificate && (
        <CertificateModal
          certificate={selectedCertificate}
          onClose={handleCloseModal}
          onDownload={handleDownload}
        />
      )}
    </div>
  );
}

export default App;
