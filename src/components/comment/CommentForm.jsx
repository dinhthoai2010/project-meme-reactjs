import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { asyAddComment } from '../../store/comment/action';
import { useDispatch } from 'react-redux';

const CommentForm = () => {
    const params  = useParams();
    const dispatch = useDispatch()

    const [comment, setComment] = useState({
        postid: params.id,
        comment: ''
    })
    const handleSubmit = (ele) => {
        ele.preventDefault()
        dispatch(asyAddComment(comment))
    }
    return (
        <div className="ass1-add-comment">
            <form  onSubmit={handleSubmit}>
                <input type="text" value={comment.comment} onChange={(ele) => setComment({ ...comment, comment: ele.target.value })} className="form-control ttg-border-none" placeholder="Thêm một bình luận" />
                <div className="ass1-add-comment__content">
                    <button type='submit' className='btn'>Gửi comment</button>
                    <a href="/" className="ass1-add-comment__btn-save ass1-btn-icon"><span>180</span><i className="icon-Submit_Tick" /></a>
                </div>
            </form>

        </div>
    );
};

export default CommentForm;