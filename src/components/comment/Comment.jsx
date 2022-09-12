import React from 'react';
import { formatRelativeDate } from '../../helpers/day';

const Comment = ({comment}) => {
    const {dateRelative} = formatRelativeDate(comment.date, false)
    return (
        <div className="ass1-comments__section">
            <a href="/" className="ass1-comments__avatar ass1-avatar"><img src={comment.user.avatar} alt="" /></a>
            <div className="ass1-comments__Item">
                <a href="/" className="ass1-comments__name">{comment.user.name}</a>
                <span className="ass1-comments__passed"> {dateRelative} </span>
                <a href="/" className="ass1-comments__btn-reply ass1-btn-icon"><i className="icon-Reply">Trả lời</i></a>
                <p dangerouslySetInnerHTML={{__html:comment.comment}} ></p>
                <div className="ass1-comments__info">
                    <a href="/" className="ass1-comments__btn-upvote ass1-btn-icon"><i className="icon-Upvote" /><span>901</span></a>
                    <a href="/" className="ass1-comments__btn-down ass1-btn-icon"><i className="icon-Downvote" /><span>36</span></a>
                </div>
            </div>
        </div>
    );
};

export default Comment;