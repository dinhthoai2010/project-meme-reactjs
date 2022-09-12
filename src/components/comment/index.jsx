import React from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';
import CommentHeader from './CommentHeader';
import { useSelector } from 'react-redux';

const CommentPost = () => {

    const comment = useSelector(state => state.Comment.listComment)
    if(comment.length===0) return null;


    return (
        <div>
            <CommentForm />
            <div className="ass1-comments">
                <CommentHeader comment ={comment}/>
                {comment.map((item,key) => <Comment key={key} comment={item} />)}
            </div>
        </div>
    );
};

export default CommentPost;