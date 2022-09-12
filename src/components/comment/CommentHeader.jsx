import React from 'react';

const CommentHeader = ({comment}) => {
    return (
        <div className="ass1-comments__head">
            <div className="ass1-comments__title">{comment.length} Bình luận</div>
            <div className="ass1-comments__options">
                <span>Sắp xếp theo:</span>
                <a href="/" className="ass1-comments__btn-upvote ass1-btn-icon"><i className="icon-Upvote" /></a>
                <a href="/" className="ass1-comments__btn-down ass1-btn-icon"><i className="icon-Downvote" /></a>
                <a href="/" className="ass1-comments__btn-expand ass1-btn-icon"><i className="icon-Expand_all" /></a>
            </div>
        </div>
    );
};

export default CommentHeader;