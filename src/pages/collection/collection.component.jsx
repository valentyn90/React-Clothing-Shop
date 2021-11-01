import React, { useContext, Suspense } from 'react';
import Spinner from '../../components/spinner/spinner.component';
import CollectionItem from '../../components/collection-item/collection-item.component';
import CollectionsContext from '../../contexts/collections/collections.context';

import './collection.styles.scss';

const CollectionPage = ({ match, params }) => {
  const collections = useContext(CollectionsContext);
  const collection = collections[match.params.collectionId];
  const { title, items } = collection;
  return (
    <div className='collection-page'>
      <Suspense fallback={<Spinner />}>
        <h2 className='title'>{title}</h2>
        <div className='items'>
          {items.map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default CollectionPage;
