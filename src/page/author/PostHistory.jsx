import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Profile from '../../components/author/Profile';
import Posts from '../../components/Posts';
import { getToken } from '../../helpers';

const PostHistory = () => {
    // const posts = useSelector(state => state.Post.listPost)
    const history = useHistory()
    useEffect(() => {
        const token = getToken()
        if(token==null)  history.push('/auth/login');
      }, []);

    const postById = useSelector(state => state.Post.listPostUser)
    
    return (
        <main>
            <div className="container">
                <Profile countPost={postById.length}/>
                <div className="ass1-section__wrap  ass1-section__isotope-init ass1-section__isotope-init1">
                    {postById.length && postById.map(post =>
                            <Posts key={post.id} post={post} />
                        )}
                </div>
            </div>
        </main>
    );
};

export default PostHistory;