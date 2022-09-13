import React from 'react';
import { useSelector } from 'react-redux';
import Profile from '../../components/author/Profile';
import Posts from '../../components/Posts';

const PostHistory = () => {
    // const posts = useSelector(state => state.Post.listPost)
    const postById = useSelector(state => state.Post.listPostUser)
    if (postById.length === 0) return null
    return (
        <main>
            <div className="container">
                <Profile countPost={postById.length}/>
                <div className="ass1-section__wrap  ass1-section__isotope-init ass1-section__isotope-init1">
                    {postById && postById.map(post =>
                            <Posts key={post.id} post={post} />
                        )}
                </div>
            </div>
        </main>
    );
};

export default PostHistory;