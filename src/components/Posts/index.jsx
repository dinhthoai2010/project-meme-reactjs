import React from 'react';
import Author from './Author';
import CommentCount from './CommentCount';
import PostDes from './PostDes';

const Posts = ({post, author = true}) => {

    if(post.id===undefined) return;

    return (
        <div className="ass1-section__item">
            <div className="ass1-section">
               {author && <Author author = {post.author} time = {post.time}/>} 
                <PostDes  post={post}/>
                <CommentCount count={post.count}/>
            </div>
        </div>
    );
};

export default Posts;