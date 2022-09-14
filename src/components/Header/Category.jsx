import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Category = ({ show, onClickMenu }) => {
    const category = useSelector(state => state.Post.listCategory)
    if (category.length === 0) return null;
    const length = category.length;
    const column = 5;
    const row = length / column;
    const menu = () => {
        let item = [];
        let k = 0;
        for (let i = 0; i < column; i++) {
            item[i] = []
            for (let j = 0; j < row && k<length; j++) {
                item[i][j] = category[k]
                k++;
            }
        }
        return item;
    }

    return (
        <div className="ass1-header__nav" style={show ? { display: 'block' } : { display: 'none' }}>
            <div className="container">
                {
                    menu().map((item, key) => {
                        return (
                            <ul key={key}>
                                {item.map(itemMenu => <li onClick={onClickMenu} key={itemMenu.id}><Link  to={`/category/${itemMenu.id}`}>{itemMenu.text}</Link></li>)}
                            </ul>
                        )
                    })
                }
            </div>
            <div className="ass1-header__menu-transition" />
        </div>
    );
};

export default Category;