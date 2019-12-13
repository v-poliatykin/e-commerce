import React from 'react';
import { useSelector } from 'react-redux';

import './category.styles.scss';

const CategoryPage = ({match}) => {
    const categorySelector = match.params.categoryId;
    
    return (
        <div className='category-page'>
            category
        </div>
    )
}

export default CategoryPage;