import React, { useEffect } from 'react';
import CommentPost from '../../components/comment';
import SideBar from '../../components/SideBar';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { aysGetPost } from '../../store/post/actions';
import AuthorPostDes from './PostDes/AuthorPostDes';
import PostContent from './PostDes/PostContent';
import ListStart from './PostDes/ListStart';
import ListStartDes from './PostDes/ListStartDes';
import ListCategory from './PostDes/ListCategory';
import { asyAddComment } from '../../store/comment/action';

const PostDes = () => {
    const post = useSelector(state => state.Post.PostDes)
    const dispatch = useDispatch();
    const params = useParams()
    useEffect(() => {
        dispatch(aysGetPost(params.id))
        // dispatch(asyAddComment())
    }, []);

    if (post.post === undefined) return null;


    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="ass1-section__list">
                            <div className="ass1-section">
                                <AuthorPostDes date={post.post.date} user = {post.user}/>
                                <PostContent  post={post.post}/>
                                <ListStart post={post.post}/>
                                <ListStartDes />
                                <ListCategory categories={post.categories}/>
                            </div>
                            <CommentPost />
                        </div>
                    </div>
                    <SideBar />
                </div>
            </div>
        </main>
    );
};

export default PostDes;