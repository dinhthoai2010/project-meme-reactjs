import React from 'react';
import CommentItem from './CommentItem';
import CommentForm from './CommentForm';
import CommentHeader from './CommentHeader';

const CommentPost = () => {
    return (
        <div>
            <CommentForm />
            <div className="ass1-comments">
                <CommentHeader />
                {/*comment*/}
                <CommentItem >
                    <CommentItem />
                </CommentItem>
                {/*comment*/}
                <div className="ass1-comments__section">
                    <a href="/" className="ass1-comments__avatar ass1-avatar"><img src="images/avatar-11.png" alt="" /></a>
                    <div className="ass1-comments__content">
                        <a href="/" className="ass1-comments__name">Monster </a>
                        <span className="ass1-comments__passed">3 giờ trước</span>
                        <a href="/" className="ass1-comments__btn-reply ass1-btn-icon"><i className="icon-Reply">Trả
                            lời</i></a>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolores
                            officiis, ducimus veritatis voluptatibus alias quos, magnam sed non quo hic
                            mollitia perferendis nostrum? Commodi reprehenderit nesciunt saepe, libero et.
                        </p>
                        <div className="ass1-comments__info">
                            <a href="/" className="ass1-comments__btn-upvote ass1-btn-icon"><i className="icon-Upvote" /><span>901</span></a>
                            <a href="/" className="ass1-comments__btn-down ass1-btn-icon"><i className="icon-Downvote" /><span>36</span></a>
                            <a href="/" className="ass1-comments__btn-flag ass1-btn-icon"><i className="icon-Flag" /></a>
                        </div>
                        {/*comment*/}
                        <CommentItem />
                        <CommentItem />

                    </div>
                </div>
                {/*comment*/}
                <div className="ass1-comments__section">
                    <a href="/" className="ass1-comments__avatar ass1-avatar"><img src="images/avatar-14.png" alt="" /></a>
                    <div className="ass1-comments__content">
                        <a href="/" className="ass1-comments__name">Minh Minh</a>
                        <span className="ass1-comments__passed">2 giờ trước</span>
                        <p>Do not cook on the colorful fire!!! It is copper and will kill you if you use for
                            cooking!!!</p>
                        <div className="ass1-comments__info">
                            <a href="/" className="ass1-comments__btn-upvote ass1-btn-icon"><i className="icon-Upvote" /><span>543</span></a>
                            <a href="/" className="ass1-comments__btn-down ass1-btn-icon"><i className="icon-Downvote" /><span>21</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommentPost;