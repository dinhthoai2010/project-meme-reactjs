import React from 'react';
import Author from './Author';
import CommentDes from './CommentDes';
import PostDes from './PostDes';

const Posts = () => {
    return (
        <div className="ass1-section__item">
            <div className="ass1-section">
                <Author />
                <PostDes />
                <CommentDes />
            </div>
        </div>
    );
};

export default Posts;