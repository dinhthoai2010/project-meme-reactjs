import React from 'react';
import { Link } from 'react-router-dom';
import { formatRelativeDate } from '../../helpers/day';

const Author = ({ author, time }) => {
    if (author.id === undefined) return '';
    const {dateRelative} = formatRelativeDate(time, false)
    return (
        <div className="ass1-section__head">
            <Link to="/profile/" className="ass1-section__avatar ass1-avatar"><img src={author.avatar} alt="" /></Link>
            <div>
                <Link to="/profile/" className="ass1-section__name">{author.name}</Link>
                <span className="ass1-section__passed">{dateRelative}</span>
            </div>
        </div>
    );
};

export default Author;