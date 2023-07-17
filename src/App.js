import React, { useState } from 'react';
import './App.css';
import Form from './form.jsx';
import Logo from './card-logo.svg';
document.body.style = 'background: #D9D9D9;';  

function App() {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvc, setCVC] = useState('');
  const [showCardDetails, setShowCardDetails] = useState(false);

  const handleFormSubmit = () => {
    setShowCardDetails(true);
  };

  return (
    <>
      <div className="container">
        <div className="front">
          <img className="logo" src={Logo} alt="Card Logo" />
          {showCardDetails ? (
            <>
              <div className="numOutput">{cardNumber}</div>
              <div className="nameOutput">{cardHolderName}</div>
              <div className="expOutput">
                <div className="mm">{expiryMonth}</div>
                <div>/</div>
                <div className="yy">{expiryYear}</div>
              </div>
            </>
          ) : ("" )}
        </div>

        <div className="back">
          {showCardDetails ? (
            <div className="cvcOutput">{cvc}</div>
          ) : ("")}
        </div>
        
      </div>

      <div className="container2">
        <Form
          setCardNumber={setCardNumber}
          setCardHolderName={setCardHolderName}
          setExpiryMonth={setExpiryMonth}
          setExpiryYear={setExpiryYear}
          setCVC={setCVC}
          onFormSubmit={handleFormSubmit}
        />
      </div>
    </>
  );
}

export default App;
