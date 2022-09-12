import React, { useState } from 'react';
import { asyAddComment } from '../../store/comment/action';

const CommentForm = () => {

    const [comment, setComment] = useState({
        idPost: 434,
        content: ''
    })
    const handleSubmit = (ele) => {
        console.log(comment)
        asyAddComment(comment)
    }
    return (
        <div className="ass1-add-comment">
            <form action="#">
                <input type="text" value={comment.content} onChange={(ele) => setComment({ ...comment, content: ele.target.value })} className="form-control ttg-border-none" placeholder="Thêm một bình luận" />
            </form>
            <div className="ass1-add-comment__content">
                <button className='btn' onClick={handleSubmit}>Gửi comment</button>
                <a href="/" className="ass1-add-comment__btn-save ass1-btn-icon"><span>180</span><i className="icon-Submit_Tick" /></a>
            </div>
        </div>
    );
};

export default CommentForm;