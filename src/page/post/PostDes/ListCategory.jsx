import React from 'react';
import { Link } from 'react-router-dom';

const ListCategory = ({categories}) => {
    if(categories === undefined) return null

    console.log(categories)
    return (
        <div className='d-flex category-des'>
            <strong>Danh muc : </strong>
            {categories.map((cat,key) => <Link key={key} to={`/category/${cat.id}`} className="btn">{cat.content}</Link>)}
        </div>
    );
};

export default ListCategory;