import React, { lazy, Suspense } from 'react';
import Spinner from '../../components/spinner/spinner.component';

import './contact-form.styles.scss';
import ContactForm from '../../components/contact-form/contact-form.component';

const ContactPage = () => {
  return (
    <div className='position'>
      <Suspense fallback={<Spinner />}>
        <ContactForm />
      </Suspense>
    </div>
  );
};

export default ContactPage;
