import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Posts from '../../components/Posts';
import { getQueryStr } from '../../helpers';
import { asySearchPost } from '../../store/post/actions';

const ListPost = () => {

    const posts = useSelector(state => state.Post.postSearch)
    const dispatch = useDispatch();
    const searchText = getQueryStr('q')

    useEffect(() => {
        if (searchText)
            dispatch(asySearchPost(searchText,true))
    }, [searchText]);

    if (posts.length === 0) return null;

    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="ass1-section__list">
                            <h3>Danh sach bai viuet</h3>
                            {posts.map(post => <Posts key={post.id} post={post} />)}
                        </div>
                    </div>
                </div>
            </div>
        </main >
    );
};

export default ListPost;