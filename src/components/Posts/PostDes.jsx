import React from 'react';
import { Link } from 'react-router-dom';

const PostDes = ({ post }) => {
    const { id, content, image } = post
    return (
        <div className="ass1-section__content">
            <p >{content}</p>
            <div className="ass1-section__image">
                <Link to={`post/` + id}>
                    <img src={image} alt="" />
                </Link>
            </div>
        </div>
    );
};

export default PostDes;