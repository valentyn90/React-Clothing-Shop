import React, { lazy, Suspense } from 'react';
import Spinner from '../../components/spinner/spinner.component';
import Directory from '../../components/directory/directory.component';
import { HomepageContainer } from './homepage.styles';

const HomePage = () => {
  return (
    <HomepageContainer>
      <Suspense fallback={<Spinner />}>
        <Directory />
      </Suspense>
    </HomepageContainer>
  );
};
export default HomePage;
