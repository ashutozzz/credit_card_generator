import React, { useState } from 'react';

function Form({ onSubmit }) {
  const [cardDetails, setCardDetails] = useState({
    name: '',
    number: '',
    expiry: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prevCardDetails) => ({
      ...prevCardDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(cardDetails);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={cardDetails.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="number">Card Number:</label>
      <input
        type="text"
        id="number"
        name="number"
        value={cardDetails.number}
        onChange={handleChange}
        required
      />

      <label htmlFor="expiry">Expiry Date:</label>
      <input
        type="text"
        id="expiry"
        name="expiry"
        value={cardDetails.expiry}
        onChange={handleChange}
        required
      />

      <label htmlFor="cvv">CVV:</label>
      <input
        type="text"
        id="cvv"
        name="cvv"
        value={cardDetails.cvv}
        onChange={handleChange}
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
