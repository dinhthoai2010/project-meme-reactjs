import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { asyHandleLogout } from '../../store/author/action';

const Profile = ({ countPost }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state => state.User.user)

    if (!user) return null;


    const handleLogout = () => {
        dispatch(asyHandleLogout()).then(rs => {
            if (rs.status === 200) {
                history.push('/');
            }
        })
    }
    return (
        <div className="ass1-head-user">
            <div className="ass1-head-user__content">
                <div className="ass1-head-user__image"><a href="/"><img src={user.avatar} alt="" /></a></div>
                <div className="ass1-head-user__info">
                    <div className="ass1-head-user__info-head">
                        <div className="ass1-head-user__name">
                            <span>{user.name}</span>
                            <i><img src="fonts/emotion/svg/Verified.svg" alt="" /></i>
                        </div>
                        <div className="w-100" />
                        <Link to="#" className="ass1-head-user__btn-follow ass1-btn">Theo dõi</Link>
                        <Link to="/profile/chang-pass" className="ass1-head-user__btn-follow ass1-btn">Đổi mật khẩu</Link>
                        <Link to="/profile/me" className="ass1-head-user__btn-follow ass1-btn">Profile</Link>
                        <button className="ass1-btn" onClick={handleLogout}><i class="fa fa-sign-in" aria-hidden="true"></i></button>
                    </div>
                    <div className="ass1-head-user__info-statistic">
                        <div className="ass1-btn-icon"><i className="icon-Post" /><span>Bài viết: {countPost}</span></div>
                        <div className="ass1-btn-icon"><i className="icon-Followers" /><span>Theo dõi: {user.profileViews}</span></div>
                        <div className="ass1-btn-icon"><i className="icon-Following" /><span>Đang theo dõi: {user.yourViewed}</span></div>
                        {/* <div class="ass1-btn-icon"><i class="icon-Upvote"></i><span>Up Vote: 999999</span></div> */}
                    </div>
                    <p>{user.des}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;