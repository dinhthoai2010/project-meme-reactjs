import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { asySearchPost } from '../../store/post/actions';
import InputSearch from '../shared/InputSearch';
import { Link, useHistory } from 'react-router-dom';
import { getQueryStr } from '../../helpers';

const SearchForm = () => {
    const [keySearch, setKeySearch] = useState('');
    const history = useHistory()
    const [listPost, setListPost] = useState([])
    // const listPostSearch = useSelector(state => state.Post.postSearch)
    const dispatch = useDispatch()
    const handleChangeSearch = (e) => {
        setKeySearch(e.target.value);

        if (keySearch.length > 3) {
            dispatch(asySearchPost(keySearch)).then(item => {
                setListPost(item)
            })
        }
    }

    const handleSubmit = (eve) => {
        eve.preventDefault()
        const queryStrURI = encodeURIComponent(keySearch)
        dispatch(asySearchPost(queryStrURI, true))
        history.push('/search/?q=' + queryStrURI)
    }



    return (
        <div className="ass1-header__search">
            <form action="#" onSubmit={handleSubmit}>
                <InputSearch onChange={handleChangeSearch} keySearch={keySearch} />
                {listPost.length > 0 && <div className='list-search'  >
                    <ul>
                        {listPost.length > 0 && listPost.map(post => <li key={post.id}><Link to={`/post/${post.id}`}>{post.content}</Link></li>)}
                    </ul>
                </div>}
            </form>
        </div>
    );
};

export default SearchForm;
