import React from 'react';
import { formatRelativeDate } from '../../helpers/day';

const Author = ({ author, time }) => {
    if (author.id === undefined) return '';
    const {dateRelative} = formatRelativeDate(time, false)
    return (
        <div className="ass1-section__head">
            <a href="bai-viet-chi-tiet.html" className="ass1-section__avatar ass1-avatar"><img src={author.avatar} alt="" /></a>
            <div>
                <a href="bai-viet-chi-tiet.html" className="ass1-section__name">{author.name}</a>
                <span className="ass1-section__passed">{dateRelative}</span>
            </div>
        </div>
    );
};

export default Author;