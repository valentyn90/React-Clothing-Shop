import React, { useState } from 'react';
import CustomButton from '../custom-button/custom-button.component';

const ContactForm = ({ handleChange, label, ...otherProps }) => {
  const [status, setStatus] = useState('Submit');
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('SENDING...');
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch('http://localhost:5001/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(details),
    });
    setStatus('Submit');
    let result = await response.json();
    alert(result.status);
    e.target.reset();
  };

  return (
    <div className='wrapper'>
      <h2 className='title'>Drop us a line!</h2>

      <form onSubmit={handleSubmit}>
        <div className='group'>
          <div>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              id='name'
              className='form-input'
              required
              style={{ marginTop: '0' }}
            />
          </div>
          <div>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              className='form-input'
              required
              style={{ marginTop: '0' }}
            />
          </div>
          <div>
            <label htmlFor='message'>Message:</label>
            <textarea
              id='message'
              className='form-input'
              required
              style={{ marginTop: '0' }}
            />
          </div>
          <div className='button'>
            <CustomButton type='submit'>{status}</CustomButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
