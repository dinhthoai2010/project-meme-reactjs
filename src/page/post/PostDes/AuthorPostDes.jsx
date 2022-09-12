import React from 'react';
import { formatRelativeDate } from '../../../helpers/day';

const AuthorPostDes = ({ user, date = null }) => {
    if (user.id === undefined) return null;

    const { dateRelative } = formatRelativeDate(date, false)


    return (
        <div className="ass1-section__head">
            <a href="/" className="ass1-section__avatar ass1-avatar">
                <img src="images/avatar-02.png" alt="" />
            </a>
            <div>
                <a href="/" className="ass1-section__name">{user.name}</a>
                {date && <span className="ass1-section__passed">{dateRelative}</span>}
            </div>
            <a href="/" className="ass1-section__link ass1-btn-icon"><i className="icon-Link" /></a>
        </div>
    );
};

export default AuthorPostDes;