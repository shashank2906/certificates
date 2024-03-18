import React, { useState } from 'react';
import './App.css';

import accentureImage from './Images/accenture.jpg';
import metaImage from './Images/meta.jpg';

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
    title: 'Certificate 2',
    info: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    title: 'Certificate 2',
    info: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    title: 'Certificate 2',
    info: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 6,
    title: 'Certificate 2',
    info: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 7,
    title: 'Certificate 2',
    info: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: 'https://via.placeholder.com/150',
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
