import React, { useEffect, useState } from 'react';
import { useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { asyGetListCategory } from '../../store/post/actions';
import Category from './Category';
import SearchForm from './SearchForm';

const Header = () => {
    
    const [show, setShow] = useState(false);
    const handleTogge = () => {
        setShow(show ? false : true)
    }
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyGetListCategory());
    }, []);


    return (
        <header>
            <div className="ass1-header">
                <div className="container">
                    <Link to="/" className="ass1-logo">
                        TCL Meme
                    </Link>
                    <nav>
                        <ul className="ass1-header__menu">
                            <li>
                                <button onClick={handleTogge} className='btn'>Danh mục</button>
                                <Category show={show} />
                            </li>
                            <Link to="/" className="ass1-logo">
                                Hot
                            </Link>
                        </ul>
                    </nav>
                    <SearchForm />
                    <Link to="/profile/upload" className='ass1-header__btn-upload ass1-btn'><i className="icon-Upvote" /> Upload</Link>
                    <Link to="/auth/login" className='ass1-header__btn-upload ass1-btn'><i className="icon-Upvote" />  Login</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;