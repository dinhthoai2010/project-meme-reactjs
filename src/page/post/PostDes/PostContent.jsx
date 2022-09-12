import React from 'react';

const PostContent = ({post}) => {
    return (
        <div className="ass1-section__content">
            <p dangerouslySetInnerHTML={{__html:post.content}} ></p>
            <div className="ass1-section__image">
                <a href="/"><img src={post.image} alt="" /></a>
            </div>
        </div>
    );
};

export default PostContent;