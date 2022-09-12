import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getToken } from '../../helpers';
import Posts from '../Posts';

const SideBar = () => {
    const token = getToken();
    const postById = useSelector(state => state.Post.listPostUser)
    if(postById.length === 0 ) return null

    return (
        <div className="col-lg-4">
            <aside className="ass1-aside">
                <div className="ass1-content-head__t">
                    <div>Bài viết gần đây của bạn.</div>
                    <Link to="/profile/history"> xem thêm</Link>
                </div>
                {!token && <div>Vui lòng đăng nhập để xem nội dung này
                    <Link to="login">Đăng nhập</Link>
                </div>}

                {postById && postById.map(post => <Posts post={post} key={post.id} author = {false} />)}

            </aside>
        </div>
    );
};

export default SideBar;