import React, { Suspense } from 'react';
import Spinner from '../../components/spinner/spinner.component';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = () => (
  <div className='sign-in-and-sign-up'>
    <Suspense fallback={<Spinner />}>
      <SignIn />
      <SignUp />
    </Suspense>
  </div>
);

export default SignInAndSignUpPage;
