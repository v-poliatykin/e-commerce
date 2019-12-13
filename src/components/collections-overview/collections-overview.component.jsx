import React from 'react';
import { useSelector } from 'react-redux';
import { selectCollections } from '../../redux/shop/shop.selectors';
import './collections-overview.styles.scss';

import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionsOverview = () => {
    const collections = useSelector(selectCollections);

    return (
        <div className='collections-overview'>
            {collections.map(({id, ...otherProps}) => (
                <CollectionPreview key={id} {...otherProps} />
            ))};
        </div>
    )
}

export default CollectionsOverview;