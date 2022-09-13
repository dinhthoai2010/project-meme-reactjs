import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserId } from '../../helpers';
import { asyFetchMe } from '../../store/author/action';
import { asyGetListCategory, asyListPostByUser } from '../../store/post/actions';
import Category from './Category';
import SearchForm from './SearchForm';

const Header = () => {
    const user = useSelector(state => state.User.user)
    const [show, setShow] = useState(false);
    const handleTogge = () => {
        setShow(show ? false : true)
    }
    const dispatch = useDispatch();

    const params = {
        userid: 2,
    }
    useEffect(() => {
        dispatch(asyGetListCategory());
        dispatch(asyFetchMe());
        dispatch(asyListPostByUser(params));

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
                        </ul>
                    </nav>
                    <SearchForm />
                    <Link to="/profile/upload" className='ass1-header__btn-upload ass1-btn'><i className="icon-Upvote" /> Upload</Link>
                    {!user ?
                        <Link to="/auth/login" className='ass1-header__btn-upload ass1-btn'><i className="icon-Upvote" />  Login</Link> :
                        <Link to="/profile/" className="d-flex user-header">
                            <div className='img-user-header'>
                                <img src={user.avatar} />
                            </div>
                            <div>
                                <span>{user.email}</span>
                            </div>
                        </Link>
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;