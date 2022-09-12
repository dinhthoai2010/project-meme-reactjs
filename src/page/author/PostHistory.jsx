import React from 'react';
import { useSelector } from 'react-redux';
import Profile from '../../components/author/Profile';

const PostHistory = () => {
    const posts = useSelector(state => state.Post.listPost)
    return (
        <main>
            <div className="container">
                <Profile />
                <div className="ass1-section__wrap row ass1-section__isotope-init">
                    <div className="ass1-section__item col-lg-6">
                    </div>
qqqq
                </div>
            </div>
        </main>
    );
};

export default PostHistory;